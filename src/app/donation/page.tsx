import type { Metadata } from "next";
import Image from "next/image";
import { DonationCtaButtons } from "@/components/donation/DonationCtaButtons";
import { DonationInfo } from "@/components/donation/DonationInfo";
import { ReceiptRequestForm } from "@/components/donation/ReceiptRequestForm";
import { SafetyNotice } from "@/components/common/SafetyNotice";
import { donationGuideItems, donationInfo, receiptPrivacyItems } from "@/data/donation";
import { donationFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "우영식 후원회",
  description: "우영식후원회(대구시의원선거) 후원계좌, 후원문의, 후원 안내와 FAQ를 확인하세요.",
};

export default function DonationPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">후원회</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">우영식 후원회</h1>
            <p className="mt-5 max-w-3xl text-xl font-black leading-8 text-[#344054]">{donationInfo.subtitle}</p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[#667085]">{donationInfo.transparencyMessage}</p>
            <DonationCtaButtons />
          </div>
          <div className="rounded-[2rem] bg-white p-3 shadow-2xl">
            <Image
              src={donationInfo.image}
              alt={donationInfo.imageAlt}
              width={1080}
              height={1350}
              priority
              className="h-auto w-full rounded-[1.5rem]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-8">
          <DonationInfo />
          <ReceiptRequestForm />
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SafetyNotice>
            <h2 className="mb-3 text-xl font-black text-[#082A5A]">개인정보 및 민감정보 처리 안내</h2>
            <p className="mb-4 leading-7 text-[#344054]">
              입력하신 정보는 후원금 확인 및 정치후원금 영수증 발급을 위한 목적으로만 사용됩니다. 주민등록번호는 영수증 발급 및 세액공제 처리를 위해 필요한 경우에만 사용되며, 목적 달성 후 관련 법령에 따라 보관 또는 파기됩니다.
            </p>
            <ul className="grid gap-2">
              {receiptPrivacyItems.slice(2).map((notice) => (
                <li key={notice}>- {notice}</li>
              ))}
            </ul>
          </SafetyNotice>
          <div className="grid gap-4">
            {donationFaqs.map((faq) => (
              <details key={faq.question} className="rounded-3xl bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-black text-[#082A5A]">{faq.question}</summary>
                <p className="mt-3 leading-7 text-[#667085]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page rounded-[2rem] bg-[#082A5A] p-8 text-white">
          <p className="text-sm font-black tracking-[0.16em] text-[#FFD84D]">주민의 힘으로 뛰겠습니다</p>
          <p className="mt-3 text-2xl font-black">{donationInfo.accountLabel}</p>
          <p className="mt-2 text-blue-100">예금주: {donationInfo.accountHolder}</p>
          <ul className="mt-5 grid gap-2 text-sm leading-6 text-blue-50 md:grid-cols-2">
            {donationGuideItems.slice(0, 4).map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
