import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { SafetyNotice } from "@/components/common/SafetyNotice";
import { VoiceForm } from "@/components/forms/VoiceForm";

export const metadata: Metadata = {
  title: "유권자의 소리",
  description: "진천동·유천동의 교통, 통학안전, 주차, 생활환경 등 동네 불편을 우영식 캠프에 남겨주세요.",
};

export default function VoicePage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">유권자의 소리</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">유권자의 소리</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">
            동네 불편을 남겨주세요. 작은 민원도 모이면 진천·유천을 바꾸는 공약이 됩니다.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-4 self-start">
            <SectionTitle title="동네에서 느낀 불편을 편하게 적어주세요" description="남겨주신 제보는 선거사무소 확인용 접수 시스템에 안전하게 저장됩니다." />
            <SafetyNotice>
              접수된 내용은 담당자가 확인한 뒤 공약지도와 현장점검에 반영합니다. 답변을 희망하신 경우 남겨주신 연락처로 확인 연락을 드릴 수 있습니다.
            </SafetyNotice>
          </div>
          <VoiceForm />
        </div>
      </section>
    </>
  );
}
