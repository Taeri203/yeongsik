import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#082A5A] pb-24 pt-12 text-white md:pb-12">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-3xl font-black">{siteConfig.candidateName}</p>
          <p className="mt-2 text-blue-100">
            {siteConfig.party} {siteConfig.office}
          </p>
          <p className="mt-1 text-blue-100">
            {siteConfig.constituency} · {siteConfig.focusArea}
          </p>
        </div>
        <div className="grid gap-2 text-sm leading-7 text-blue-50">
          <p>연락처: {siteConfig.phone}</p>
          <p>이메일: {siteConfig.email}</p>
          <p>후원회: {siteConfig.donationName}</p>
          <Link href="/privacy" className="font-bold text-[#FFD84D]">
            개인정보처리방침
          </Link>
        </div>
      </div>
      <div className="container-page mt-8 border-t border-white/15 pt-6 text-xs leading-6 text-blue-100">
        <p>본 사이트의 공약 및 후보자 정보는 선거사무소 검수 후 업데이트될 수 있습니다.</p>
        <p>후원 안내는 {siteConfig.donationName}를 기준으로 제공합니다.</p>
      </div>
    </footer>
  );
}
