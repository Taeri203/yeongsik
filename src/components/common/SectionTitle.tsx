import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-[#B9DBFF] bg-[#EAF4FF] px-4 py-1.5 text-sm font-extrabold text-[#004EA2]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-tight text-[#082A5A] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#667085] md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
