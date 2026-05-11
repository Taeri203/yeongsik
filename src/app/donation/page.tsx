import type { Metadata } from "next";
import { DonationInfo } from "@/components/donation/DonationInfo";
import { SafetyNotice } from "@/components/common/SafetyNotice";
import { donationFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "우영식 후원회",
  description: "우영식후원회(대구시의원선거) 후원계좌, 후원문의, 후원 안내와 FAQ를 확인하세요.",
};

const notices = [
  "후원금은 우영식후원회(대구시의원선거)를 통해 접수됩니다.",
  "정치자금영수증 발급을 위해 성명, 생년월일, 연락처 등 확인이 필요할 수 있습니다.",
  "법인 또는 단체 명의 후원 등 제한되는 사항이 있을 수 있습니다.",
  "자세한 사항은 후원회 또는 선거관리위원회 안내를 확인해 주세요.",
];

export default function DonationPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">후원회</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">우영식 후원회</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">진천·유천의 깨끗한 변화를 함께 만들어 주세요.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <DonationInfo />
          <p className="mt-8 rounded-[2rem] bg-[#F8FAFC] p-6 text-lg font-bold leading-8 text-[#344054]">
            깨끗한 변화는 깨끗한 후원에서 시작됩니다. 진천·유천의 생활정치를 함께 만들어 주세요.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <SafetyNotice>
            <ul className="grid gap-2">
              {notices.map((notice) => (
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
          <p className="text-2xl font-black">{siteConfig.donationBank} {siteConfig.donationAccount}</p>
          <p className="mt-2 text-blue-100">예금주: {siteConfig.donationAccountHolder}</p>
        </div>
      </section>
    </>
  );
}
