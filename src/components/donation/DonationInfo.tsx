"use client";

import Image from "next/image";
import { useState } from "react";
import { Copy, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function DonationInfo() {
  const [copied, setCopied] = useState(false);

  async function copyAccount() {
    const account = `${siteConfig.donationBank} ${siteConfig.donationAccount}`;
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(account);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = account;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section className="grid gap-8 rounded-[2rem] bg-[#EAF4FF] p-5 md:grid-cols-[0.88fr_1.12fr] md:p-8">
      <div className="relative min-h-[360px] overflow-hidden rounded-[1.6rem] bg-white">
        <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,#EAF4FF_0%,#FFFFFF_62%,#FFF7D6_100%)]" />
        <Image
          src={siteConfig.profileImage}
          alt="공식 프로필 사진의 우영식 후보"
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-contain object-bottom drop-shadow-[0_24px_32px_rgba(8,42,90,0.22)]"
        />
      </div>
      <div className="rounded-[1.6rem] bg-white p-6 shadow-xl">
        <p className="text-sm font-black text-[#004EA2]">후원회 정보</p>
        <h2 className="mt-2 text-3xl font-black text-[#082A5A]">{siteConfig.donationName}</h2>
        <dl className="mt-6 grid gap-4">
          <Info label="후원계좌" value={`${siteConfig.donationBank} ${siteConfig.donationAccount}`} />
          <Info label="예금주" value={siteConfig.donationAccountHolder} />
          <Info label="후원문의" value={siteConfig.phone} />
          <Info label="이메일" value={siteConfig.email} />
        </dl>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copyAccount}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-6 py-4 font-black text-white"
            aria-label="후원계좌 복사하기"
          >
            <Copy size={18} aria-hidden />
            계좌 복사하기
          </button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#082A5A] px-6 py-4 font-black text-white"
            aria-label="후원회 전화 문의"
          >
            <Phone size={18} aria-hidden />
            문의하기
          </a>
        </div>
        {copied ? <p className="mt-4 font-black text-[#004EA2]">계좌번호가 복사되었습니다</p> : null}
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] p-4">
      <dt className="text-sm font-bold text-[#667085]">{label}</dt>
      <dd className="mt-1 break-keep text-lg font-black text-[#082A5A]">{value}</dd>
    </div>
  );
}
