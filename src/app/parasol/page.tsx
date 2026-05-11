import type { Metadata } from "next";
import { Umbrella } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ParasolSchedule } from "@/components/parasol/ParasolSchedule";
import { parasolFlow, parasolPrinciples } from "@/data/parasol";

export const metadata: Metadata = {
  title: "파라솔 의원실",
  description: "선거 후에도 주민 곁에서 민원을 듣는 우영식 후보의 현장형 파라솔 의원실 운영 구상입니다.",
};

export default function ParasolPage() {
  return (
    <>
      <section className="bg-[#082A5A] py-16 text-white">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-[#FFD84D] px-4 py-2 text-sm font-black text-[#082A5A]">현장형 의원실</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">파라솔 의원실</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
              선거 때만 찾아오는 후보가 아니라, 선거 후에도 동네에 남겠습니다.
            </p>
            <p className="mt-6 rounded-3xl bg-white/10 p-6 text-xl font-black leading-8">
              의원실이 주민을 기다리는 곳이라면, 파라솔 의원실은 우영식이 주민에게 가는 방식입니다.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/10 p-8 text-center">
            <Umbrella className="mx-auto text-[#FFD84D]" size={180} strokeWidth={1.4} aria-hidden />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle eyebrow="운영 원칙" title="정해진 곳에서 듣고, 기록하고, 다시 알리겠습니다" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {parasolPrinciples.map((principle) => (
              <article key={principle.title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
                <h2 className="text-2xl font-black text-[#004EA2]">{principle.title}</h2>
                <p className="mt-3 leading-7 text-[#667085]">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EAF4FF] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="운영 후보지" title="진천·유천 생활권에서 직접 만나겠습니다" align="center" />
          <div className="mt-10">
            <ParasolSchedule />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle eyebrow="민원 처리 흐름" title="듣는 것에서 끝나지 않겠습니다" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {parasolFlow.map((step, index) => (
              <article key={step} className="rounded-[2rem] bg-[#F8FAFC] p-5 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#004EA2] font-black text-white">{index + 1}</span>
                <p className="mt-4 font-black text-[#082A5A]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
