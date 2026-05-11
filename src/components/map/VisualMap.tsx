"use client";

import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { mapMarkers } from "@/data/mapMarkers";
import type { MapMarker, MarkerCategory } from "@/types";
import { MarkerFilter } from "@/components/map/MarkerFilter";
import { MapMarkerCard } from "@/components/map/MapMarkerCard";

export function VisualMap({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<MarkerCategory>("전체");
  const [selected, setSelected] = useState<MapMarker>(mapMarkers[0]);
  const visibleMarkers = useMemo(
    () => mapMarkers.filter((marker) => category === "전체" || marker.category === category),
    [category],
  );
  const markersToRender = preview ? mapMarkers.slice(0, 6) : visibleMarkers;

  return (
    <div className={`grid gap-6 ${preview ? "" : "lg:grid-cols-[1.1fr_0.9fr]"}`}>
      <div className="rounded-[2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-3 shadow-xl shadow-blue-900/10">
        <div className="map-grid relative h-[430px] overflow-hidden rounded-[1.5rem] bg-white">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
            <path d="M8 58 C22 52, 30 42, 45 45 S72 55, 92 32" className="road-line" fill="none" stroke="#004EA2" strokeWidth="4" />
            <path d="M20 82 C38 70, 44 55, 58 48 S78 44, 91 66" className="road-line" fill="none" stroke="#59A9FF" strokeWidth="3" />
            <path d="M30 12 C36 30, 48 35, 52 52 S54 75, 70 92" className="road-line" fill="none" stroke="#082A5A" strokeWidth="2.6" opacity="0.72" />
            <path d="M7 25 C24 20, 35 24, 47 31 S70 39, 91 17" fill="none" stroke="#FFD84D" strokeWidth="3" strokeDasharray="3 4" />
          </svg>
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#082A5A] shadow">
            진천동
          </div>
          <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#082A5A] shadow">
            유천동
          </div>
          {markersToRender.map((marker) => (
            <button
              key={marker.id}
              type="button"
              onClick={() => setSelected(marker)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              aria-label={`${marker.title} 상세 보기`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full border-4 border-white shadow-xl transition ${
                  selected.id === marker.id ? "scale-110 bg-[#004EA2] text-white" : "bg-[#FFD84D] text-[#082A5A]"
                }`}
              >
                <MapPin size={22} fill="currentColor" aria-hidden />
              </span>
            </button>
          ))}
          <div className="absolute bottom-4 left-4 max-w-[78%] rounded-3xl border border-white/70 bg-white/92 p-4 shadow-xl backdrop-blur">
            <p className="text-xs font-black text-[#004EA2]">{selected.category}</p>
            <p className="mt-1 font-black text-[#082A5A]">{selected.title}</p>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#667085]">{selected.description}</p>
          </div>
        </div>
      </div>

      {!preview ? (
        <div className="grid gap-5">
          <MarkerFilter selected={category} onChange={setCategory} />
          <div className="grid max-h-[590px] gap-3 overflow-y-auto pr-1">
            {visibleMarkers.map((marker) => (
              <MapMarkerCard
                key={marker.id}
                marker={marker}
                selected={selected.id === marker.id}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
