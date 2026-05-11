import { Umbrella } from "lucide-react";
import { parasolSpots } from "@/data/parasol";

export function ParasolSchedule() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {parasolSpots.map((spot) => (
        <article key={spot.title} className="rounded-[2rem] border border-white/20 bg-white p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFD84D] text-[#082A5A]">
              <Umbrella size={24} aria-hidden />
            </span>
            <div>
              <p className="text-sm font-black text-[#004EA2]">{spot.district}</p>
              <h3 className="mt-1 text-2xl font-black text-[#082A5A]">{spot.title}</h3>
            </div>
          </div>
          <p className="mt-4 leading-7 text-[#667085]">{spot.topics}</p>
          <p className="mt-4 rounded-2xl bg-[#EAF4FF] px-4 py-3 font-black text-[#082A5A]">{spot.schedule}</p>
        </article>
      ))}
    </div>
  );
}
