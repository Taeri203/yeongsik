import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

type VoicePayload = {
  name?: string;
  phone?: string;
  email?: string;
  residence?: string;
  age?: string;
  category?: string;
  location?: string;
  title?: string;
  content?: string;
  reply?: "yes" | "no";
};

const requiredFields: Array<keyof VoicePayload> = [
  "name",
  "phone",
  "residence",
  "age",
  "category",
  "title",
  "content",
];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidPayload(payload: VoicePayload) {
  return requiredFields.every((field) => clean(payload[field]).length > 0);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function createEmailHtml(payload: Required<VoicePayload>) {
  const replyLabel = payload.reply === "yes" ? "답변 희망" : "답변 불필요";
  const safePayload = {
    name: escapeHtml(payload.name),
    phone: escapeHtml(payload.phone),
    email: escapeHtml(payload.email),
    residence: escapeHtml(payload.residence),
    age: escapeHtml(payload.age),
    category: escapeHtml(payload.category),
    location: escapeHtml(payload.location),
    title: escapeHtml(payload.title),
    content: escapeHtml(payload.content),
  };

  return `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #101828;">
      <h2 style="margin: 0 0 16px; color: #082A5A;">새 유권자의 소리가 접수되었습니다</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">이름</th><td style="padding: 8px;">${safePayload.name}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">연락처</th><td style="padding: 8px;">${safePayload.phone}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">이메일</th><td style="padding: 8px;">${safePayload.email || "-"}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">거주지</th><td style="padding: 8px;">${safePayload.residence}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">연령대</th><td style="padding: 8px;">${safePayload.age}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">분야</th><td style="padding: 8px;">${safePayload.category}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">위치</th><td style="padding: 8px;">${safePayload.location || "-"}</td></tr>
          <tr><th align="left" style="padding: 8px; background: #EAF4FF;">답변</th><td style="padding: 8px;">${replyLabel}</td></tr>
        </tbody>
      </table>
      <h3 style="margin: 24px 0 8px; color: #082A5A;">${safePayload.title}</h3>
      <p style="white-space: pre-wrap; padding: 16px; background: #F8FAFC; border-radius: 12px;">${safePayload.content}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const rawPayload = (await request.json()) as VoicePayload;
    const payload: Required<VoicePayload> = {
      name: clean(rawPayload.name),
      phone: clean(rawPayload.phone),
      email: clean(rawPayload.email),
      residence: clean(rawPayload.residence),
      age: clean(rawPayload.age),
      category: clean(rawPayload.category),
      location: clean(rawPayload.location),
      title: clean(rawPayload.title),
      content: clean(rawPayload.content),
      reply: rawPayload.reply === "no" ? "no" : "yes",
    };

    if (!isValidPayload(payload)) {
      return NextResponse.json({ message: "필수 항목을 모두 입력해 주세요." }, { status: 400 });
    }

    const supabase = createClient(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase.from("voice_submissions").insert({
      name: payload.name,
      phone: payload.phone,
      email: payload.email || null,
      residence: payload.residence,
      age: payload.age,
      category: payload.category,
      location: payload.location || null,
      title: payload.title,
      content: payload.content,
      reply_requested: payload.reply === "yes",
    });

    if (error) {
      console.error("Supabase voice submission error", error);
      return NextResponse.json({ message: "제보 저장에 실패했습니다." }, { status: 500 });
    }

    const resend = new Resend(getEnv("RESEND_API_KEY"));
    const emailTo = getEnv("VOICE_NOTIFICATION_TO");
    const emailFrom = process.env.VOICE_NOTIFICATION_FROM || "우영식.kr <onboarding@resend.dev>";

    const { error: emailError } = await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: `[우영식.kr] 새 유권자의 소리: ${payload.title}`,
      html: createEmailHtml(payload),
    });

    if (emailError) {
      console.error("Voice notification email error", emailError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Voice API error", error);
    return NextResponse.json({ message: "제보 접수 중 오류가 발생했습니다." }, { status: 500 });
  }
}
