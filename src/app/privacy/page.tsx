import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "우영식.kr 유권자 민원 접수를 위한 개인정보 수집, 이용, 보유기간, 문의처 안내입니다.",
};

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: "이름, 연락처, 거주지, 연령대, 민원 분야, 위치, 민원 제목 및 내용을 수집할 수 있습니다.",
  },
  {
    title: "2. 수집 목적",
    body: "유권자 민원 접수, 민원 확인 및 답변, 공약지도 개선, 현장점검 일정 수립을 위해 개인정보를 이용합니다.",
  },
  {
    title: "3. 보유기간",
    body: "선거 종료 후 30일 이내 또는 목적 달성 시 지체 없이 파기합니다. 다만 법령상 보존이 필요한 경우 해당 기간 동안 보관할 수 있습니다.",
  },
  {
    title: "4. 제3자 제공",
    body: "개인정보는 원칙적으로 제3자에게 제공하지 않습니다. 민원 해결을 위해 관계기관 문의가 필요한 경우 개인식별정보를 제외하거나 별도 동의를 받은 뒤 진행합니다.",
  },
  {
    title: "5. 동의 거부권",
    body: "개인정보 수집 및 이용에 대한 동의를 거부할 수 있으나, 이 경우 민원 접수가 제한될 수 있습니다.",
  },
  {
    title: "6. 문의처",
    body: `전화: ${siteConfig.phone} / 이메일: ${siteConfig.email}`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">개인정보 안내</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">개인정보처리방침</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">
            유권자 민원 접수와 답변을 위한 개인정보 처리 기준을 안내드립니다.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-page max-w-4xl">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black text-[#082A5A]">{section.title}</h2>
                <p className="mt-3 leading-8 text-[#667085]">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
