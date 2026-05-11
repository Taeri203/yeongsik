type FactBadgeProps = {
  label: string;
  value: string;
  tone?: "blue" | "yellow" | "white";
};

const toneClass = {
  blue: "border-[#B9DBFF] bg-[#EAF4FF] text-[#082A5A]",
  yellow: "border-[#FFE88A] bg-[#FFF7D6] text-[#082A5A]",
  white: "border-white/60 bg-white/90 text-[#082A5A]",
};

export function FactBadge({ label, value, tone = "blue" }: FactBadgeProps) {
  return (
    <div
      className={`rounded-3xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${toneClass[tone]}`}
    >
      <p className="text-sm font-black text-[#344054]">{label}</p>
      <strong className="mt-2 block text-2xl font-black tracking-tight md:text-3xl">{value}</strong>
    </div>
  );
}
