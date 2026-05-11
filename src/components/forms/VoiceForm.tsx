"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { PrivacyConsentBox } from "@/components/common/PrivacyConsentBox";

const residences = ["진천동", "유천동", "상인3동", "도원동", "기타"];
const ages = ["10대", "20대", "30대", "40대", "50대", "60대 이상", "응답하지 않음"];
const categories = ["교통", "통학안전", "주차", "생활환경", "복지", "상권", "청년", "어르신", "기타"];

export function VoiceForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/voice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          residence: formData.get("residence"),
          age: formData.get("age"),
          category: formData.get("category"),
          location: formData.get("location"),
          title: formData.get("title"),
          content: formData.get("content"),
          reply: formData.get("reply"),
        }),
      });

      if (!response.ok) {
        const result = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(result?.message || "제보 접수에 실패했습니다.");
      }

      setSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "제보 접수 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#004EA2] text-white">
          <CheckCircle2 size={34} aria-hidden />
        </div>
        <h2 className="mt-5 text-3xl font-black text-[#082A5A]">제보가 접수되었습니다</h2>
        <p className="mx-auto mt-3 max-w-xl leading-8 text-[#344054]">
          우영식 캠프가 확인 후 공약지도와 현장점검에 반영하겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full bg-[#004EA2] px-6 py-3 font-black text-white"
        >
          다른 민원 남기기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="이름" id="name">
          <input required id="name" name="name" className="form-input" placeholder="성함을 입력해 주세요" />
        </Field>
        <Field label="연락처" id="phone">
          <input required id="phone" name="phone" className="form-input" placeholder="010-0000-0000" />
        </Field>
      </div>
      <Field label="이메일 (선택)" id="email">
        <input
          id="email"
          name="email"
          type="email"
          className="form-input"
          placeholder="답변을 이메일로 받고 싶다면 입력해 주세요"
        />
      </Field>
      <div className="grid gap-5 md:grid-cols-3">
        <Field label="거주지" id="residence">
          <select required id="residence" name="residence" className="form-input">
            <option value="">선택</option>
            {residences.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="연령대" id="age">
          <select required id="age" name="age" className="form-input">
            <option value="">선택</option>
            {ages.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
        <Field label="민원 분야" id="category">
          <select required id="category" name="category" className="form-input">
            <option value="">선택</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="위치" id="location">
        <input id="location" name="location" className="form-input" placeholder="예: 진천역 2번 출구 앞, 유천동 ○○아파트 인근" />
      </Field>
      <Field label="제목" id="title">
        <input required id="title" name="title" className="form-input" placeholder="불편 내용을 한 줄로 적어주세요" />
      </Field>
      <Field label="내용" id="content">
        <textarea required id="content" name="content" rows={7} className="form-input resize-y" placeholder="언제, 어디서, 어떤 불편이 있는지 편하게 적어주세요." />
      </Field>
      <fieldset className="rounded-2xl border border-[#E5E7EB] p-4">
        <legend className="px-2 text-sm font-black text-[#082A5A]">답변 희망 여부</legend>
        <div className="mt-2 flex flex-wrap gap-4 text-sm font-bold text-[#344054]">
          <label className="flex items-center gap-2">
            <input type="radio" name="reply" value="yes" defaultChecked />
            답변 희망
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="reply" value="no" />
            답변 불필요
          </label>
        </div>
      </fieldset>
      <PrivacyConsentBox />
      <label className="flex items-start gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm font-bold text-[#344054]">
        <input required type="checkbox" className="mt-1" aria-label="개인정보 수집 동의" />
        개인정보 수집 및 이용에 동의합니다.
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-7 py-4 text-lg font-black text-white shadow-lg transition hover:bg-[#003F86] disabled:cursor-not-allowed disabled:opacity-60"
        aria-label="유권자의 소리 제출"
      >
        <Send size={19} aria-hidden />
        {isSubmitting ? "접수 중..." : "접수하기"}
      </button>
      {errorMessage ? (
        <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-black text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          padding: 0.95rem 1rem;
          color: #101828;
          outline: none;
        }
        :global(.form-input:focus) {
          border-color: #004ea2;
          box-shadow: 0 0 0 4px rgba(0, 78, 162, 0.12);
        }
      `}</style>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-[#082A5A]">
        {label}
      </label>
      {children}
    </div>
  );
}
