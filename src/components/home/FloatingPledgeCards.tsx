import { BriefcaseBusiness, MapPinned, MessageSquareText, School, Trees, Umbrella } from "lucide-react";
import type { CSSProperties } from "react";

const cards = [
  { label: "출근길", icon: BriefcaseBusiness, className: "left-[2%] top-[31%] md:left-[3%] md:top-[34%]", rotate: "-5deg" },
  { label: "통학길", icon: School, className: "left-[21%] top-[24%] md:left-[18%] md:top-[27%]", rotate: "4deg" },
  { label: "산책길", icon: Trees, className: "left-[10%] top-[42%] md:left-[10%] md:top-[44%]", rotate: "2deg" },
  { label: "민원지도", icon: MapPinned, className: "left-[32%] top-[36%] md:left-[31%] md:top-[38%]", rotate: "-3deg" },
  { label: "파라솔 의원실", icon: Umbrella, className: "left-[17%] top-[53%] md:left-[18%] md:top-[55%]", rotate: "5deg" },
];

export function FloatingPledgeCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.label}
            className={`float-card absolute flex items-center gap-1.5 rounded-2xl border border-white/85 bg-white/94 px-3 py-2 text-[11px] font-black text-[#082A5A] shadow-xl shadow-blue-900/12 backdrop-blur sm:gap-2 sm:px-4 sm:py-3 sm:text-sm ${card.className}`}
            style={{ "--rotate": card.rotate } as CSSProperties}
          >
            <Icon size={17} className="text-[#004EA2]" aria-hidden />
            {card.label}
          </div>
        );
      })}
      <MessageSquareText className="absolute right-12 top-28 hidden text-[#FFD84D] drop-shadow-xl md:block" size={34} aria-hidden />
    </div>
  );
}
