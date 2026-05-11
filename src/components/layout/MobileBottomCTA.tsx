import Link from "next/link";
import { HeartHandshake, MapPinned, MessageSquareText, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const items = [
  { label: "민원 남기기", href: "/voice", icon: MessageSquareText },
  { label: "공약지도", href: "/map", icon: MapPinned },
  { label: "후원하기", href: "/donation", icon: HeartHandshake },
  { label: "전화하기", href: siteConfig.phoneHref, icon: Phone },
];

export function MobileBottomCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/94 px-2 pb-2 pt-2 shadow-[0_-12px_30px_rgba(8,42,90,0.12)] backdrop-blur-xl md:hidden" aria-label="모바일 빠른 이동">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-[11px] font-black text-[#082A5A] hover:bg-[#EAF4FF]"
              aria-label={item.label}
            >
              <Icon size={19} className="text-[#004EA2]" aria-hidden />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
