import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { receiptJobTypes } from "@/data/donation";

type ReceiptPayload = {
  donorName?: string;
  address?: string;
  identityNumber?: string;
  transferDate?: string;
  donationAmount?: number | string;
  jobType?: string;
  email?: string;
  privacyAgree?: boolean;
  sensitiveAgree?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const jobTypeSet = new Set<string>(receiptJobTypes);

function clean(value: unknown, maxLength = 2000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function maskIdentityNumber(value: string) {
  if (value.length <= 4) return "*".repeat(value.length);
  return `${value.slice(0, 4)}${"*".repeat(Math.max(value.length - 4, 0))}`;
}

function getMailConfig() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const receiptEmailTo = process.env.RECEIPT_EMAIL_TO;

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !receiptEmailTo || !Number.isFinite(smtpPort)) {
    return null;
  }

  return {
    smtpHost,
    smtpPort,
    smtpUser,
    smtpPass,
    smtpFrom,
    receiptEmailTo,
  };
}

function renderEmail(payload: Required<Omit<ReceiptPayload, "donationAmount">> & { donationAmount: number; submittedAt: string }) {
  const rows = [
    ["후원인 성함", payload.donorName],
    ["주소", payload.address],
    ["생년월일 또는 주민등록번호", payload.identityNumber],
    ["송금일", payload.transferDate],
    ["후원금액", `${payload.donationAmount.toLocaleString("ko-KR")}원`],
    ["직업분류", payload.jobType],
    ["이메일 주소", payload.email],
    ["신청일시", payload.submittedAt],
  ];

  return `
    <div style="font-family:Arial,'Apple SD Gothic Neo','Noto Sans KR',sans-serif;color:#101828;line-height:1.6">
      <h1 style="margin:0 0 20px;color:#082A5A">후원금 영수증 발급 신청</h1>
      <table style="width:100%;border-collapse:collapse">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="width:180px;text-align:left;background:#EAF4FF;border:1px solid #E5E7EB;padding:10px">${escapeHtml(label)}</th>
                  <td style="border:1px solid #E5E7EB;padding:10px">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  const rawPayload = (await request.json().catch(() => null)) as ReceiptPayload | null;

  if (!rawPayload) {
    return NextResponse.json({ success: false, message: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const payload = {
    donorName: clean(rawPayload.donorName, 120),
    address: clean(rawPayload.address, 500),
    identityNumber: clean(rawPayload.identityNumber, 40),
    transferDate: clean(rawPayload.transferDate, 40),
    donationAmount: Number(rawPayload.donationAmount),
    jobType: clean(rawPayload.jobType, 20),
    email: clean(rawPayload.email, 200),
    privacyAgree: rawPayload.privacyAgree === true,
    sensitiveAgree: rawPayload.sensitiveAgree === true,
  };

  if (!payload.donorName || !payload.address || !payload.identityNumber || !payload.transferDate || !payload.jobType || !payload.email) {
    return NextResponse.json({ success: false, message: "필수 항목을 모두 입력해 주세요." }, { status: 400 });
  }

  if (!emailPattern.test(payload.email)) {
    return NextResponse.json({ success: false, message: "이메일 형식을 확인해 주세요." }, { status: 400 });
  }

  if (!Number.isFinite(payload.donationAmount) || payload.donationAmount < 1) {
    return NextResponse.json({ success: false, message: "후원금액은 1원 이상 숫자로 입력해 주세요." }, { status: 400 });
  }

  if (!jobTypeSet.has(payload.jobType)) {
    return NextResponse.json({ success: false, message: "직업분류를 다시 선택해 주세요." }, { status: 400 });
  }

  if (!payload.privacyAgree || !payload.sensitiveAgree) {
    return NextResponse.json({ success: false, message: "개인정보 및 민감정보 동의가 필요합니다." }, { status: 400 });
  }

  const mailConfig = getMailConfig();
  if (!mailConfig) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[receipt] Missing SMTP configuration", {
        donorName: payload.donorName,
        identityNumber: maskIdentityNumber(payload.identityNumber),
        email: payload.email,
      });
    }
    return NextResponse.json({ success: false, message: "메일 발송 설정이 필요합니다." }, { status: 500 });
  }

  const submittedAt = new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "medium",
    timeZone: "Asia/Seoul",
  }).format(new Date());

  try {
    const transporter = nodemailer.createTransport({
      host: mailConfig.smtpHost,
      port: mailConfig.smtpPort,
      secure: mailConfig.smtpPort === 465,
      auth: {
        user: mailConfig.smtpUser,
        pass: mailConfig.smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailConfig.smtpFrom,
      to: mailConfig.receiptEmailTo,
      subject: `[우영식.kr] 후원금 영수증 발급 신청 - ${payload.donorName}`,
      html: renderEmail({ ...payload, submittedAt }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[receipt] Mail send failed", error instanceof Error ? error.message : "Unknown mail error");
    return NextResponse.json({ success: false, message: "신청 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }, { status: 500 });
  }
}
