import type { Metadata } from "next";
import { CTASection } from "@/components/common/CTASection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { VisualMap } from "@/components/map/VisualMap";

export const metadata: Metadata = {
  title: "진천·유천 공약지도",
  description: "교통, 통학안전, 주차, 생활환경, 복지, 상권, 파라솔 의원실 후보지를 시각형 공약지도로 확인하세요.",
};

export default function MapPage() {
  return (
    <>
      <section className="campaign-gradient py-16">
        <div className="container-page">
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#004EA2]">공약지도</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-[#082A5A] md:text-6xl">진천·유천 공약지도</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">
            교통, 통학안전, 주차, 생활환경 — 우리 동네 불편을 지도에서 확인하세요.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <VisualMap />
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16">
        <div className="container-page">
          <SectionTitle
            eyebrow="주민 제보"
            title="지도에 없는 불편도 남겨주세요"
            description="주민 제보가 쌓이면 공약지도는 계속 업데이트됩니다."
            align="center"
          />
          <div className="mt-8">
            <CTASection title="새 민원 제보하기" description="교통, 통학, 주차, 생활환경 제보를 남겨주세요." buttonLabel="새 민원 제보하기" href="/voice" tone="blue" />
          </div>
        </div>
      </section>
    </>
  );
}
