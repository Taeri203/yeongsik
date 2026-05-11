import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type Pledge = {
  id: string;
  category: string;
  title: string;
  summary: string;
  tasks: string[];
  icon: LucideIcon;
  color: "blue" | "yellow" | "green" | "purple" | "orange" | "navy";
};

export type District = {
  slug: "jincheon" | "yucheon";
  name: string;
  title: string;
  subtitle: string;
  population: string;
  households: string;
  area: string;
  description: string;
  issues: string[];
  pledges: string[];
};

export type Generation = {
  id: string;
  audience: string;
  title: string;
  message: string;
  pledges: string[];
  icon: LucideIcon;
};

export type MarkerCategory =
  | "전체"
  | "교통"
  | "통학안전"
  | "주차"
  | "생활환경"
  | "복지"
  | "상권"
  | "파라솔";

export type MapMarker = {
  id: string;
  title: string;
  category: Exclude<MarkerCategory, "전체">;
  description: string;
  x: number;
  y: number;
};

export type ParasolSpot = {
  title: string;
  district: string;
  topics: string;
  schedule: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
