import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { District } from "@/types";

export function DistrictCard({ district }: { district: District }) {
  return (
    <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <p className="text-sm font-black text-[#004EA2]">{district.name}</p>
      <h3 className="mt-2 text-3xl font-black text-[#082A5A]">{district.title}</h3>
      <p className="mt-3 leading-7 text-[#667085]">{district.description}</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-2xl bg-[#EAF4FF] p-3">
          <p className="text-xs font-bold text-[#667085]">인구</p>
          <p className="font-black text-[#082A5A]">{district.population}</p>
        </div>
        <div className="rounded-2xl bg-[#FFF7D6] p-3">
          <p className="text-xs font-bold text-[#667085]">세대</p>
          <p className="font-black text-[#082A5A]">{district.households}</p>
        </div>
        <div className="rounded-2xl bg-[#F8FAFC] p-3">
          <p className="text-xs font-bold text-[#667085]">면적</p>
          <p className="font-black text-[#082A5A]">{district.area}</p>
        </div>
      </div>
      <ul className="mt-5 grid gap-2">
        {district.issues.slice(0, 3).map((issue) => (
          <li key={issue} className="flex gap-2 text-sm text-[#344054]">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#004EA2]" aria-hidden />
            {issue}
          </li>
        ))}
      </ul>
      <Link
        href={`/pledges/${district.slug}`}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#004EA2] px-5 py-3 font-black text-white"
        aria-label={`${district.name} 공약 보기`}
      >
        자세히 보기
        <ArrowRight size={17} aria-hidden />
      </Link>
    </article>
  );
}
