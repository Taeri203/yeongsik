import Link from "next/link";
import { Phone } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <div className="container-page flex h-18 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="우영식.kr 홈으로 이동">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#004EA2] text-lg font-black text-white shadow-lg shadow-blue-900/20">
            우
          </span>
          <span>
            <span className="block text-lg font-black tracking-tight text-[#082A5A]">{siteConfig.siteName}</span>
            <span className="block text-xs font-bold text-[#667085]">{siteConfig.constituency}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-[#082A5A] transition hover:bg-[#EAF4FF] hover:text-[#004EA2]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-[#FFD84D] px-4 py-2.5 text-sm font-black text-[#082A5A] shadow-sm md:inline-flex"
            aria-label={`전화하기 ${siteConfig.phone}`}
          >
            <Phone size={16} aria-hidden />
            전화하기
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
