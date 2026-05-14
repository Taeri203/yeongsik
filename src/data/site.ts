import type { NavItem } from "@/types";

export const siteConfig = {
  siteName: "우영식.kr",
  candidateName: "우영식",
  candidateHanja: "禹英植",
  candidateEnglishName: "Woo Young-sik",
  party: "더불어민주당",
  electionName: "2026 제9회 전국동시지방선거",
  office: "대구광역시의회의원 후보",
  constituency: "대구 달서구 제4선거구",
  focusArea: "진천동·유천동",
  slogan: "진천·유천의 하루를 바꾸는 사람",
  heroTitle: "또 같은 4년보다 젊은 변화의 4년",
  heroSubtitle: "출근길은 빠르게, 통학길은 안전하게, 산책길은 편안하게",
  phone: "010-3038-6893",
  phoneHref: "tel:01030386893",
  email: "ceo@insuai.kr",
  donationName: "우영식후원회(대구시의원선거)",
  donationBank: "iM뱅크",
  donationAccount: "505-10-267283-4",
  donationAccountHolder: "우영식후원회(대구시의원선거)",
  donationImage: "/images/donation/donation-banner.png",
  heroImage: "/images/candidate/candidate-hero-presenting-cutout.png",
  profileImage: "/images/candidate/candidate-profile-formal-cutout.png",
  familyRollerImage: "/images/family/family-roller-life.jpg",
  familyWarmImage: "/images/family/family-close-warm.jpg",
  enableRulingPartyLabel: false,
};

export const navItems: NavItem[] = [
  { label: "우영식 소개", href: "/about" },
  { label: "진천·유천 공약", href: "/pledges" },
  { label: "동별 공약", href: "/pledges/jincheon" },
  { label: "세대별 공약", href: "/generations" },
  { label: "공약지도", href: "/map" },
  { label: "파라솔 의원실", href: "/parasol" },
  { label: "유권자의 소리", href: "/voice" },
  { label: "후원회", href: "/donation" },
];

export const careers = [
  "AI기업 인슈아이(주) 대표",
  "현 더불어민주당 중앙당 부대변인",
  "전 더불어민주당 대구광역시당 청년위원장",
  "전 더불어민주당 대구광역시당 홍보소통위원장",
];

export const defaultSeo = {
  title: "우영식.kr | 진천·유천의 하루를 바꾸는 사람",
  description:
    "대구 달서구 제4선거구 우영식 후보의 진천동·유천동 생활공약, 공약지도, 파라솔 의원실, 유권자의 소리를 확인하세요.",
  ogDescription:
    "출근길은 빠르게, 통학길은 안전하게, 산책길은 편안하게. 우영식의 진천·유천 생활공약.",
};
