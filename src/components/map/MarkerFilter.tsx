"use client";

import type { MarkerCategory } from "@/types";
import { markerCategories } from "@/data/mapMarkers";
import { cn } from "@/lib/utils";

type MarkerFilterProps = {
  selected: MarkerCategory;
  onChange: (category: MarkerCategory) => void;
};

export function MarkerFilter({ selected, onChange }: MarkerFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="공약지도 분야 필터">
      {markerCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-black transition",
            selected === category
              ? "border-[#004EA2] bg-[#004EA2] text-white shadow-lg shadow-blue-900/15"
              : "border-[#E5E7EB] bg-white text-[#082A5A] hover:bg-[#EAF4FF]",
          )}
          aria-pressed={selected === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
