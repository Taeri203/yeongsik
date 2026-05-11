import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CTASection } from "@/components/common/CTASection";
import { PledgeCard } from "@/components/pledges/PledgeCard";
import { pledges, pledgeProcess } from "@/data/pledges";

export const metadata: Metadata = {
  title: "진천·유천 생활공약",
  description: "우영식 후보의 교통, 통학안전, 주차, 생활환경, 복지, 상권 생활공약을 확인하세요.",
};

export default function PledgesPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">생활공약</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">진천·유천 생활공약</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#344054]">거창한 말보다 매일의 불편을 줄이는 공약</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["출근길을 빠르게", "통학길을 안전하게", "산책길을 편안하게"].map((item) => (
              <span key={item} className="rounded-full bg-[#FFD84D] px-5 py-3 font-black text-[#082A5A]">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pledges.map((pledge) => (
            <PledgeCard key={pledge.id} pledge={pledge} />
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="실행 방식" title="공약은 말이 아니라 처리 과정입니다" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {pledgeProcess.map((step, index) => (
              <article key={step.title} className="rounded-[2rem] bg-white p-6 text-center shadow-sm">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#004EA2] text-lg font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-black text-[#082A5A]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#667085]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <CTASection
            title="지도에 없는 불편도 알려주세요"
            description="작은 제보가 쌓이면 다음 현장점검과 공약 보완의 기준이 됩니다."
            buttonLabel="유권자의 소리 남기기"
            href="/voice"
          />
        </div>
      </section>
    </>
  );
}
