"use client";

import { useState } from "react";
import { Copy, Mail, Phone } from "lucide-react";
import { donationGuideItems, donationInfo } from "@/data/donation";
import { siteConfig } from "@/data/site";

export function DonationInfo() {
  const [copied, setCopied] = useState(false);

  async function copyAccount() {
    const account = donationInfo.accountLabel;
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
    <section className="grid gap-6 lg:grid-cols-[1fr_.92fr]" id="donation-account">
      <div className="rounded-[2rem] border border-[#B9DBFF] bg-white p-6 shadow-xl md:p-8">
        <p className="text-sm font-black tracking-[0.16em] text-[#004EA2]">DONATION ACCOUNT</p>
        <h2 className="mt-3 text-3xl font-black text-[#082A5A]">후원계좌</h2>
        <p className="mt-3 text-lg font-bold leading-8 text-[#344054]">{donationInfo.transparencyMessage}</p>
        <dl className="mt-7 grid gap-4">
          <Info label="후원회명" value={donationInfo.name} />
          <Info label="후원계좌" value={donationInfo.accountLabel} highlight />
          <Info label="예금주" value={donationInfo.accountHolder} />
          <Info label="후원문의" value={siteConfig.phone} />
          <Info label="이메일" value={siteConfig.email} />
        </dl>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={copyAccount}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-6 py-4 font-black text-white"
            aria-label="후원계좌 복사하기"
          >
            <Copy size={18} aria-hidden />
            계좌번호 복사
          </button>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#082A5A] px-6 py-4 font-black text-white"
            aria-label="후원회 전화 문의"
          >
            <Phone size={18} aria-hidden />
            전화 문의
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B9DBFF] bg-white px-6 py-4 font-black text-[#082A5A]"
            aria-label="후원회 이메일 문의"
          >
            <Mail size={18} aria-hidden />
            이메일 문의
          </a>
        </div>
        {copied ? <p className="mt-4 rounded-2xl bg-[#EAF4FF] px-4 py-3 font-black text-[#004EA2]">계좌번호가 복사되었습니다.</p> : null}
      </div>

      <div className="rounded-[2rem] bg-[#FFF7D6] p-6 shadow-sm md:p-8">
        <p className="text-sm font-black tracking-[0.16em] text-[#004EA2]">GUIDE</p>
        <h2 className="mt-3 text-3xl font-black text-[#082A5A]">후원 안내</h2>
        <ul className="mt-7 grid gap-3">
          {donationGuideItems.map((item) => (
            <li key={item} className="rounded-2xl bg-white/82 p-4 font-bold leading-7 text-[#344054]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Info({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] p-4">
      <dt className="text-sm font-bold text-[#667085]">{label}</dt>
      <dd className={`mt-1 break-keep font-black text-[#082A5A] ${highlight ? "text-2xl md:text-3xl" : "text-lg"}`}>{value}</dd>
    </div>
  );
}
