import { ShieldCheck } from "lucide-react";

export function SafetyNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-[#E5E7EB] bg-white p-5 text-sm leading-7 text-[#667085] shadow-sm">
      <div className="mb-2 flex items-center gap-2 font-black text-[#082A5A]">
        <ShieldCheck size={18} className="text-[#004EA2]" aria-hidden />
        안내
      </div>
      {children}
    </div>
  );
}
