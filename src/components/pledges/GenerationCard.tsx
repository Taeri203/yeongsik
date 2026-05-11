import { CheckCircle2 } from "lucide-react";
import type { Generation } from "@/types";

export function GenerationCard({ generation }: { generation: Generation }) {
  const Icon = generation.icon;

  return (
    <article className="h-full rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#004EA2]">
        <Icon size={26} aria-hidden />
      </div>
      <p className="mt-5 text-sm font-black text-[#004EA2]">{generation.audience}</p>
      <h3 className="mt-2 text-2xl font-black leading-tight text-[#082A5A]">{generation.title}</h3>
      <p className="mt-3 leading-7 text-[#667085]">{generation.message}</p>
      <ul className="mt-5 grid gap-2">
        {generation.pledges.map((pledge) => (
          <li key={pledge} className="flex gap-2 text-sm leading-6 text-[#344054]">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#004EA2]" aria-hidden />
            {pledge}
          </li>
        ))}
      </ul>
    </article>
  );
}
