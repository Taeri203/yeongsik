"use client";

import { useState } from "react";
import { Copy, Mail, ReceiptText } from "lucide-react";
import { donationInfo } from "@/data/donation";
import { siteConfig } from "@/data/site";

export function DonationCtaButtons() {
  const [copied, setCopied] = useState(false);

  async function copyAccount() {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(donationInfo.accountLabel);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = donationInfo.accountLabel;
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
    <div className="mt-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={copyAccount} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#004EA2] px-6 py-4 font-black text-white shadow-lg">
          <Copy size={18} aria-hidden />
          계좌번호 복사
        </button>
        <a href="#receipt-request" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD84D] px-6 py-4 font-black text-[#082A5A] shadow-lg">
          <ReceiptText size={18} aria-hidden />
          영수증 발급 신청
        </a>
        <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B9DBFF] bg-white px-6 py-4 font-black text-[#082A5A] shadow-sm">
          <Mail size={18} aria-hidden />
          이메일 문의
        </a>
      </div>
      {copied ? <p className="mt-3 rounded-2xl bg-white px-4 py-3 font-black text-[#004EA2] shadow-sm">계좌번호가 복사되었습니다.</p> : null}
    </div>
  );
}
