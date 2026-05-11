import { MapPin } from "lucide-react";
import type { MapMarker } from "@/types";

export function MapMarkerCard({
  marker,
  selected,
  onSelect,
}: {
  marker: MapMarker;
  selected?: boolean;
  onSelect?: (marker: MapMarker) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(marker)}
      className={`w-full rounded-3xl border p-5 text-left transition ${
        selected
          ? "border-[#004EA2] bg-[#EAF4FF] shadow-lg shadow-blue-900/10"
          : "border-[#E5E7EB] bg-white hover:border-[#B9DBFF]"
      }`}
      aria-pressed={selected}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#082A5A]">
        <MapPin size={14} className="text-[#004EA2]" aria-hidden />
        {marker.category}
      </span>
      <h3 className="mt-3 text-lg font-black text-[#082A5A]">{marker.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#667085]">{marker.description}</p>
    </button>
  );
}
