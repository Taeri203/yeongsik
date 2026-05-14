"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { receiptJobTypes } from "@/data/donation";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getTodayInputValue() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function ReceiptRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [defaultTransferDate] = useState(getTodayInputValue);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const donationAmount = Number(formData.get("donationAmount"));
    const email = String(formData.get("email") || "").trim();
    const jobType = String(formData.get("jobType") || "");

    if (!emailPattern.test(email)) {
      setErrorMessage("이메일 형식을 확인해 주세요.");
      return;
    }

    if (!Number.isFinite(donationAmount) || donationAmount < 1) {
      setErrorMessage("후원금액은 1원 이상 숫자로 입력해 주세요.");
      return;
    }

    if (!receiptJobTypes.includes(jobType as (typeof receiptJobTypes)[number])) {
      setErrorMessage("직업분류를 다시 선택해 주세요.");
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/receipt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorName: formData.get("donorName"),
          address: formData.get("address"),
          identityNumber: formData.get("identityNumber"),
          transferDate: formData.get("transferDate"),
          donationAmount,
          jobType,
          email,
          privacyAgree: formData.get("privacyAgree") === "on",
          sensitiveAgree: formData.get("sensitiveAgree") === "on",
        }),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "신청 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }

      setSuccess(true);
      formElement.reset();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "신청 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="receipt-request" className="rounded-[2rem] border border-[#B9DBFF] bg-white p-5 shadow-xl md:p-8">
      <div className="max-w-3xl">
        <p className="text-sm font-black tracking-[0.16em] text-[#004EA2]">RECEIPT</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#082A5A] md:text-5xl">정치후원금 영수증 발급 신청</h2>
        <p className="mt-4 text-lg leading-8 text-[#344054]">
          후원금 영수증 발급을 위해 아래 정보를 입력해 주세요. 입력하신 정보는 후원금 확인 및 영수증 발급 목적으로만 사용됩니다.
        </p>
      </div>

      {success ? (
        <div className="mt-7 rounded-[2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-6 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-[#004EA2]" aria-hidden />
          <h3 className="mt-4 text-2xl font-black text-[#082A5A]">영수증 발급 신청이 접수되었습니다.</h3>
          <p className="mt-3 leading-7 text-[#344054]">입력하신 이메일로 확인 안내를 드리겠습니다.</p>
          <button type="button" onClick={() => setSuccess(false)} className="mt-5 rounded-full bg-[#004EA2] px-6 py-3 font-black text-white">
            추가 신청하기
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="후원인 성함" id="donorName" required>
              <input required id="donorName" name="donorName" className="form-input" placeholder="홍길동" />
            </Field>
            <Field label="이메일 주소" id="email" required help="영수증 발급 관련 안내를 받을 이메일 주소를 입력해 주세요.">
              <input required id="email" name="email" type="email" className="form-input" placeholder="example@email.com" />
            </Field>
          </div>

          <Field label="주소" id="address" required>
            <input required id="address" name="address" className="form-input" placeholder="대구광역시 달서구 ○○로 ○○" />
          </Field>

          <Field
            label="생년월일 또는 주민등록번호"
            id="identityNumber"
            required
            help="생년월일만 입력해도 신청은 가능하며, 주민등록번호 뒷자리까지 입력하시면 홈택스 자동연동 처리에 활용될 수 있습니다."
          >
            <input required id="identityNumber" name="identityNumber" className="form-input" placeholder="19810523 또는 810523-1234567" />
            <p className="mt-2 text-sm font-bold leading-6 text-[#B42318]">
              주민등록번호 입력은 민감정보 입력에 해당하므로 제출 전 반드시 확인해 주세요.
            </p>
          </Field>

          <div className="grid gap-5 md:grid-cols-3">
            <Field label="송금일" id="transferDate" required>
              <input required id="transferDate" name="transferDate" type="date" className="form-input" defaultValue={defaultTransferDate} />
            </Field>
            <Field label="후원금액" id="donationAmount" required>
              <div className="relative">
                <input required id="donationAmount" name="donationAmount" type="number" min={1} step={1} inputMode="numeric" className="form-input pr-12" placeholder="100000" />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-black text-[#667085]">원</span>
              </div>
            </Field>
            <Field label="직업분류" id="jobType" required>
              <select required id="jobType" name="jobType" className="form-input" defaultValue="">
                <option value="" disabled>
                  선택
                </option>
                {receiptJobTypes.map((jobType) => (
                  <option key={jobType} value={jobType}>
                    {jobType}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <label className="flex items-start gap-3 rounded-2xl bg-[#EAF4FF] p-4 text-sm font-bold leading-6 text-[#344054]">
            <input required type="checkbox" name="privacyAgree" className="mt-1" />
            후원금 영수증 발급을 위해 성명, 주소, 생년월일 또는 주민등록번호, 송금일, 후원금액, 직업분류, 이메일 주소를 수집·이용하는 데 동의합니다.
          </label>
          <label className="flex items-start gap-3 rounded-2xl bg-[#FFF7D6] p-4 text-sm font-bold leading-6 text-[#344054]">
            <input required type="checkbox" name="sensitiveAgree" className="mt-1" />
            주민등록번호 등 민감한 개인정보를 입력하는 경우, 해당 정보가 영수증 발급 및 세액공제 처리 목적으로 사용되는 것에 동의합니다.
          </label>

          {errorMessage ? (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-black text-red-700" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-7 py-4 text-lg font-black text-white shadow-lg transition hover:bg-[#003F86] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={19} aria-hidden />
            {isSubmitting ? "신청 접수 중..." : "영수증 발급 신청하기"}
          </button>
        </form>
      )}
    </section>
  );
}

function Field({ label, id, required = false, help, children }: { label: string; id: string; required?: boolean; help?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-[#082A5A]">
        {label}
        {required ? <span className="ml-1 text-[#E53935]">*</span> : null}
      </label>
      {children}
      {help ? <p className="mt-2 text-sm leading-6 text-[#667085]">{help}</p> : null}
    </div>
  );
}
