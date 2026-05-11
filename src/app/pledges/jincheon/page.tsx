import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { FactBadge } from "@/components/common/FactBadge";
import { CTASection } from "@/components/common/CTASection";
import { districts } from "@/data/districts";

export const metadata: Metadata = {
  title: "진천동 공약",
  description: "진천역, 진천환승공영주차장, 학교 앞, 월배신시장, 진천천 중심의 진천동 생활공약입니다.",
};

const district = districts.find((item) => item.slug === "jincheon")!;

export default function JincheonPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">동별 공약</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">{district.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">{district.subtitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FactBadge label="인구" value={district.population} />
            <FactBadge label="세대" value={district.households} tone="yellow" />
            <FactBadge label="면적" value={district.area} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <p className="max-w-4xl text-xl font-bold leading-9 text-[#344054]">{district.description}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {district.issues.map((issue) => (
              <article key={issue} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <CheckCircle2 className="text-[#004EA2]" size={24} aria-hidden />
                <h2 className="mt-4 text-xl font-black text-[#082A5A]">{issue}</h2>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-[2rem] bg-[#F8FAFC] p-6 md:p-8">
            <h2 className="text-3xl font-black text-[#082A5A]">세부 공약</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {district.pledges.map((pledge) => (
                <li key={pledge} className="flex gap-3 rounded-2xl bg-white p-4 font-bold text-[#344054]">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#004EA2]" aria-hidden />
                  {pledge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page">
          <CTASection title="진천동 불편을 알려주세요" description="현장 제보가 진천동 공약을 더 촘촘하게 만듭니다." buttonLabel="민원 남기기" href="/voice" tone="yellow" />
        </div>
      </section>
    </>
  );
}
