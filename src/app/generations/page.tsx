import type { Metadata } from "next";
import Image from "next/image";
import { GenerationCard } from "@/components/pledges/GenerationCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import { generations } from "@/data/generations";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "세대별 생활공약",
  description: "학부모, 직장인, 청년·신혼부부, 소상공인, 어르신을 위한 우영식 후보의 세대별 생활공약입니다.",
};

export default function GenerationsPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page grid justify-items-center gap-8 text-center md:grid-cols-[1fr_0.9fr] md:items-center md:justify-items-stretch md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">세대별 공약</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">세대별 생활공약</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#344054]">같은 동네라도 필요한 변화는 세대마다 다릅니다.</p>
          </div>
          <div className="family-photo-frame relative min-h-[430px] w-full overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <Image
              src={siteConfig.familyRollerImage}
              alt=""
              fill
              sizes="(max-width: 768px) 90vw, 440px"
              className="scale-110 object-cover opacity-45 blur-xl"
              aria-hidden
            />
            <Image
              src={siteConfig.familyRollerImage}
              alt="롤러장에서 아이와 함께한 우영식 후보 가족"
              fill
              sizes="(max-width: 768px) 90vw, 440px"
              className="p-3 object-contain drop-shadow-[0_18px_28px_rgba(8,42,90,0.18)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082A5A]/18 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-black text-[#082A5A]">
              두 아이를 키우는 아빠의 마음으로 통학길부터 보겠습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionTitle title="우리 가족, 우리 가게, 우리 부모님에게 필요한 변화" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {generations.map((generation) => (
              <GenerationCard key={generation.id} generation={generation} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
