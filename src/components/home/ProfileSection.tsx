import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { careers, siteConfig } from "@/data/site";

export function ProfileSection() {
  return (
    <section className="rounded-[2rem] bg-[#FFF7D6] p-5 md:p-10">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div className="family-photo-frame relative min-h-[390px] overflow-hidden rounded-[1.7rem] bg-white shadow-xl">
          <Image
            src={siteConfig.familyWarmImage}
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="scale-110 object-cover opacity-45 blur-xl"
            aria-hidden
          />
          <Image
            src={siteConfig.familyWarmImage}
            alt="가족과 함께 따뜻하게 웃는 우영식 후보"
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="p-3 object-contain drop-shadow-[0_18px_28px_rgba(8,42,90,0.18)]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082A5A]/18 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 px-4 py-2 text-center text-sm font-black text-[#082A5A] shadow-sm">
            생활정치는 가족의 하루에서 시작됩니다
          </p>
        </div>
        <div>
          <p className="text-sm font-black text-[#004EA2]">두 아이 아빠 우영식</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#082A5A] md:text-5xl">
            아이를 키우는 부모의 마음으로 보겠습니다
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#344054]">
            아이를 키우는 부모의 마음으로, 통학길의 불안과 생활환경의 불편을 남의 일처럼 보지 않겠습니다.
          </p>
          <div className="mt-6 grid gap-3">
            {careers.slice(0, 3).map((career) => (
              <p
                key={career}
                className="flex gap-2 rounded-2xl bg-white/78 px-4 py-3 text-sm font-black text-[#082A5A] shadow-sm"
              >
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#004EA2]" aria-hidden />
                {career}
              </p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFD84D] px-6 py-4 font-black text-[#082A5A] shadow-lg shadow-yellow-900/10 transition hover:-translate-y-0.5"
            aria-label="우영식 소개 보기"
          >
            우영식 소개 보기
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
