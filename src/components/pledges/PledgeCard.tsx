import { CheckCircle2 } from "lucide-react";
import type { Pledge } from "@/types";

const colorClass: Record<Pledge["color"], string> = {
  blue: "bg-[#EAF4FF] text-[#004EA2] border-[#B9DBFF]",
  yellow: "bg-[#FFF7D6] text-[#082A5A] border-[#FFE88A]",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  purple: "bg-violet-50 text-violet-700 border-violet-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  navy: "bg-slate-100 text-[#082A5A] border-slate-200",
};

export function PledgeCard({ pledge, compact = false }: { pledge: Pledge; compact?: boolean }) {
  const Icon = pledge.icon;

  return (
    <article
      id={pledge.id}
      className="scroll-mt-24 group h-full rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-black ${colorClass[pledge.color]}`}>
          {pledge.category}
        </span>
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${colorClass[pledge.color]}`}>
          <Icon size={22} aria-hidden />
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight text-[#082A5A]">{pledge.title}</h3>
      <p className="mt-3 leading-7 text-[#667085]">{pledge.summary}</p>
      {!compact ? (
        <ul className="mt-5 grid gap-3">
          {pledge.tasks.map((task) => (
            <li key={task} className="flex gap-2 text-sm leading-6 text-[#344054]">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-[#004EA2]" aria-hidden />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
