import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  tone?: "blue" | "yellow" | "white";
};

export function CTASection({
  title,
  description,
  buttonLabel,
  href,
  tone = "blue",
}: CTASectionProps) {
  const isBlue = tone === "blue";
  const isYellow = tone === "yellow";

  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] p-8 shadow-xl md:p-12 ${
        isBlue
          ? "bg-[#004EA2] text-white shadow-blue-900/18"
          : isYellow
            ? "bg-[#FFF7D6] text-[#082A5A] shadow-yellow-900/10"
            : "bg-white text-[#082A5A] ring-1 ring-[#E5E7EB]"
      }`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/18 blur-2xl" />
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p
            className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-black ${
              isBlue ? "bg-white/15 text-white" : "bg-white text-[#004EA2]"
            }`}
          >
            지금 바로 연결
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
          <p className={`mt-3 text-lg leading-8 ${isBlue ? "text-blue-50" : "text-[#667085]"}`}>
            {description}
          </p>
        </div>
        <Link
          href={href}
          className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-black shadow-lg transition hover:-translate-y-0.5 ${
            isBlue
              ? "bg-white text-[#082A5A] hover:bg-[#FFF7D6]"
              : "bg-[#004EA2] text-white hover:bg-[#003F86]"
          }`}
          aria-label={buttonLabel}
        >
          {buttonLabel}
          <ArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
