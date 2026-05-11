import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquareText, Umbrella } from "lucide-react";
import { CTASection } from "@/components/common/CTASection";
import { FactBadge } from "@/components/common/FactBadge";
import { SectionTitle } from "@/components/common/SectionTitle";
import { HeroSection } from "@/components/home/HeroSection";
import { ProfileSection } from "@/components/home/ProfileSection";
import { VisualMap } from "@/components/map/VisualMap";
import { representativePledges } from "@/data/pledges";

const accountabilitySteps = [
  {
    title: "듣겠습니다",
    description: "지도와 유권자의 소리로 생활 불편을 빠짐없이 모으겠습니다.",
  },
  {
    title: "확인하겠습니다",
    description: "현장을 보고 담당 부서 자료와 주민 체감도를 함께 확인하겠습니다.",
  },
  {
    title: "공유하겠습니다",
    description: "처리 과정과 다음 행동을 다시 알려드리는 정치를 하겠습니다.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            <FactBadge label="진천동" value="49,930명" />
            <FactBadge label="유천동" value="33,100명" tone="yellow" />
            <FactBadge label="진천·유천" value="약 8만 생활권" />
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-[#344054]">
            8만 생활권의 문제는 책상 위 보고서만으로 해결되지 않습니다. 우영식은 지도 위 현장과 주민 제보를 함께 보겠습니다.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {accountabilitySteps.map((step, index) => (
              <article key={step.title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#004EA2] font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-black text-[#082A5A]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#667085]">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="대표 생활공약" title="출근길, 통학길, 산책길부터 바꾸겠습니다" align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {representativePledges.map((pledge) => (
              <article
                key={pledge.title}
                className="group rounded-[2rem] border border-[#E5E7EB] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#B9DBFF] hover:shadow-xl"
              >
                <h3 className="text-2xl font-black text-[#082A5A]">{pledge.title}</h3>
                <p className="mt-4 leading-7 text-[#667085]">{pledge.body}</p>
                <p className="mt-5 flex gap-2 rounded-2xl bg-[#EAF4FF] px-4 py-3 text-sm font-black leading-6 text-[#082A5A]">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#004EA2]" aria-hidden />
                  {pledge.proof}
                </p>
                <Link
                  href={pledge.href}
                  className="mt-5 inline-flex items-center gap-2 font-black text-[#004EA2] transition group-hover:gap-3"
                  aria-label={`${pledge.title} 상세 공약 보기`}
                >
                  상세 공약 보기
                  <ArrowRight size={17} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <ProfileSection />
        </div>
      </section>

      <section className="bg-[#082A5A] py-16 text-white">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-[#FFD84D] px-4 py-2 text-sm font-black text-[#082A5A]">
              진천·유천 한가운데
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">선거 후에도 여기 있겠습니다</h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              정해진 요일, 정해진 장소에서 주민을 만나는 현장형 의원실. 진천역 앞, 유천동 생활권, 학교 앞,
              상가 앞에서 민원을 듣겠습니다.
            </p>
            <Link
              href="/parasol"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F9EA4E] px-6 py-4 font-black text-[#082A5A]"
              aria-label="파라솔 의원실 보기"
            >
              파라솔 의원실 보기
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="relative rounded-[2rem] bg-white/10 p-8">
            <Umbrella className="mx-auto text-[#FFD84D]" size={150} strokeWidth={1.4} aria-hidden />
            <div className="mt-4 rounded-3xl bg-white p-5 text-[#082A5A] shadow-xl">
              <p className="font-black">불편은 책상에 없고, 동네에 있습니다</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">민원은 현장에서 듣고, 진행상황은 다시 공유하겠습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="시각형 공약지도"
              title="우리동네 공약지도"
              description="교통, 통학안전, 주차, 생활환경 민원을 지도 위에 모아 보겠습니다."
            />
            <Link href="/map" className="inline-flex items-center gap-2 rounded-full bg-[#004EA2] px-5 py-3 font-black text-white">
              공약지도 보기
              <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
          <VisualMap preview />
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <CTASection
            title="동네 불편을 남겨주세요"
            description="작은 민원도 모이면 공약이 되고, 공약은 예산과 제도로 바뀝니다."
            buttonLabel="민원 남기기"
            href="/voice"
            tone="blue"
          />
          <CTASection
            title="깨끗한 변화에 함께해 주세요"
            description="후원은 우영식후원회(대구시의원선거)를 통해 투명하게 안내됩니다."
            buttonLabel="후원회 안내"
            href="/donation"
            tone="yellow"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="container-page rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-[#082A5A]">작은 민원이 모이면 진천·유천을 바꾸는 공약이 됩니다</h2>
              <p className="mt-2 text-[#667085]">교통, 통학, 주차, 생활환경 제보를 기다립니다.</p>
            </div>
            <Link href="/voice" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-6 py-4 font-black text-white">
              <MessageSquareText size={18} aria-hidden />
              유권자의 소리
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
