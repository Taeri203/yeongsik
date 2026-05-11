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
            <SectionTitle title="동네에서 느낀 불편을 편하게 적어주세요" description="이 폼은 실제 서버로 전송되지 않는 정적 홈페이지용 접수 화면입니다." />
            <SafetyNotice>
              제출하면 화면에서 접수 완료 메시지만 표시됩니다. 실제 운영 시에는 선거사무소 검수 후 접수 방식이 업데이트될 수 있습니다.
            </SafetyNotice>
          </div>
          <VoiceForm />
        </div>
      </section>
    </>
  );
}
