import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { FloatingPledgeCards } from "@/components/home/FloatingPledgeCards";

const trustSignals = [
  "AI기업 대표",
  "중앙당 부대변인",
  "두 아이 아빠",
];

export function HeroSection() {
  return (
    <section className="campaign-gradient overflow-hidden">
      <div className="container-page grid min-h-[calc(100svh-72px)] items-center justify-items-center gap-8 py-8 md:grid-cols-[1.02fr_0.98fr] md:justify-items-stretch md:py-14">
        <div className="relative z-10 flex flex-col items-center pt-3 text-center md:items-start md:pt-0 md:text-left">
          <p className="inline-flex rounded-full border border-[#B9DBFF] bg-white/86 px-4 py-2 text-sm font-black text-[#004EA2] shadow-sm">
            대구 달서구 제4선거구 · 진천동·유천동
          </p>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#082A5A] sm:text-5xl md:text-7xl">
            진천·유천의 하루를 바꾸는 사람
          </h1>
          <p className="mt-3 text-[4.6rem] font-black leading-none tracking-[-0.08em] text-[#004EA2] sm:text-[6rem] md:text-[8rem]">
            우영식
          </p>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#344054] md:text-xl">
            출근길은 빠르게, 통학길은 안전하게, 산책길은 편안하게. 선거 때만 찾아오는 후보가 아니라,
            선거 후에도 동네에 남겠습니다.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#B9DBFF] bg-white/88 px-4 py-2 text-sm font-black text-[#082A5A] shadow-sm"
              >
                {signal}
              </span>
            ))}
          </div>
          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row md:justify-start">
            <Link
              href="/voice"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-7 py-4 font-black text-white shadow-xl shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-[#003F86]"
              aria-label="동네 불편 제보하기"
            >
              <MessageSquareText size={18} aria-hidden />
              동네 불편 제보하기
            </Link>
            <Link
              href="/pledges"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD84D] px-6 py-4 font-black text-[#082A5A] shadow-lg shadow-yellow-900/10 transition hover:-translate-y-0.5"
              aria-label="생활공약 보기"
            >
              생활공약 보기
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              href="/map"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B9DBFF] bg-white/90 px-6 py-4 font-black text-[#082A5A] shadow-lg transition hover:-translate-y-0.5 hover:bg-white"
              aria-label="공약지도 보기"
            >
              <MapPinned size={18} aria-hidden />
              공약지도 보기
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[470px] w-full max-w-[520px] md:h-[660px]">
          <div className="absolute inset-x-6 bottom-8 top-14 rounded-[42%_58%_50%_50%/42%_42%_58%_58%] bg-[#004EA2] shadow-2xl shadow-blue-900/20" />
          <div className="absolute inset-x-0 bottom-4 top-0 rounded-full bg-[radial-gradient(circle_at_50%_24%,#FFFFFF_0%,#EAF4FF_46%,rgba(255,216,77,0.5)_72%,transparent_73%)]" />
          <div className="absolute inset-x-8 bottom-7 h-24 rounded-full bg-[#082A5A]/18 blur-2xl" />
          <FloatingPledgeCards />
          <Image
            src={siteConfig.heroImage}
            alt="정장 차림으로 손을 펼쳐 설명하는 우영식 후보"
            fill
            priority
            sizes="(max-width: 768px) 92vw, 520px"
            className="z-10 object-contain object-bottom drop-shadow-[0_32px_45px_rgba(8,42,90,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}
