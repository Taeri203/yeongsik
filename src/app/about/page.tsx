import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { careers, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "우영식 소개",
  description: "두 아이 아빠, AI기업 인슈아이(주) 대표 우영식 후보의 소개와 주요 경력을 확인하세요.",
};

const values = [
  { title: "현장", description: "주민이 있는 곳으로 갑니다." },
  { title: "실행", description: "민원은 기록하고, 진행상황은 공유합니다." },
  { title: "소통", description: "듣는 데서 끝내지 않고 다시 확인합니다." },
  { title: "미래", description: "AI기업 대표의 문제해결 방식으로 행정을 바꾸겠습니다." },
];

export default function AboutPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">후보소개</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">우영식은 누구인가</h1>
            <p className="mt-5 text-lg leading-8 text-[#344054]">
              두 아이를 키우는 아빠, AI기업을 운영하며 문제를 해결해온 사람, 그리고 진천·유천의 생활 문제를
              끝까지 듣고 바꾸려는 후보 우영식입니다.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,#EAF4FF_0%,#FFFFFF_64%,#FFF7D6_100%)]" />
            <Image
              src={siteConfig.profileImage}
              alt="공식 프로필 사진의 우영식 후보"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 440px"
              className="object-contain object-bottom drop-shadow-[0_28px_34px_rgba(8,42,90,0.22)]"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] bg-[#082A5A] p-7 text-white shadow-xl">
            <p className="text-4xl font-black">{siteConfig.candidateName}</p>
            <p className="mt-1 text-blue-100">{siteConfig.candidateHanja} · {siteConfig.candidateEnglishName}</p>
            <div className="mt-6 grid gap-3 text-sm leading-6">
              {[siteConfig.party, siteConfig.office, siteConfig.constituency, "AI기업 인슈아이(주) 대표", "현 더불어민주당 중앙당 부대변인"].map((item) => (
                <p key={item} className="rounded-2xl bg-white/10 px-4 py-3 font-bold">{item}</p>
              ))}
            </div>
          </aside>
          <div>
            <SectionTitle title="정치는 멀리 있는 큰 말보다, 매일 걷는 길에서 시작됩니다." />
            <p className="mt-6 text-lg leading-9 text-[#344054]">
              진천·유천의 불편은 책상 위 보고서보다 골목, 학교 앞, 정류장, 산책로에 더 잘 보입니다.
              우영식은 주민 곁에서 듣고, 대구시의회에서 끝까지 묻고, 예산과 제도로 바꾸겠습니다.
            </p>
            <p className="mt-5 rounded-3xl bg-[#EAF4FF] p-6 text-lg font-bold leading-8 text-[#082A5A]">
              AI기업을 운영하며 문제를 구조화하고 해결하는 일을 해왔습니다. 이제 그 문제해결의 방식을
              진천·유천의 교통, 통학, 주차, 생활환경 문제에 쓰겠습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <SectionTitle eyebrow="주요 경력" title="현장에서 듣고, 구조적으로 풀겠습니다" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {careers.map((career) => (
              <div key={career} className="flex gap-3 rounded-3xl bg-white p-5 shadow-sm">
                <CheckCircle2 size={22} className="shrink-0 text-[#004EA2]" aria-hidden />
                <p className="font-black text-[#082A5A]">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8 rounded-[2rem] bg-[#FFF7D6] p-5 text-center md:grid-cols-[0.95fr_1.05fr] md:items-center md:p-10 md:text-left">
          <div className="family-photo-frame relative min-h-[430px] overflow-hidden rounded-[1.7rem] bg-white shadow-xl">
            <Image src={siteConfig.familyWarmImage} alt="" fill sizes="(max-width: 768px) 90vw, 460px" className="scale-110 object-cover opacity-45 blur-xl" aria-hidden />
            <Image src={siteConfig.familyWarmImage} alt="가족과 함께한 우영식 후보" fill sizes="(max-width: 768px) 90vw, 460px" className="p-3 object-contain drop-shadow-[0_18px_28px_rgba(8,42,90,0.18)]" />
          </div>
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#082A5A]">두 아이 아빠의 눈으로 보겠습니다</h2>
            <p className="mt-5 text-lg leading-8 text-[#344054]">
              아이 키우는 부모의 마음으로, 통학길의 불안과 생활환경의 불편을 남의 일처럼 보지 않겠습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page grid gap-5 md:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-[#004EA2]">{value.title}</h3>
              <p className="mt-3 leading-7 text-[#667085]">{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
