import {
  Baby,
  BriefcaseBusiness,
  HeartHandshake,
  Home,
  Store,
} from "lucide-react";
import type { Generation } from "@/types";

export const generations: Generation[] = [
  {
    id: "parents",
    audience: "학부모·아이",
    title: "아이 키우기 불안하지 않은 진천·유천",
    message: "두 아이를 키우는 아빠의 마음으로 통학길부터 보겠습니다.",
    icon: Baby,
    pledges: [
      "초등학교별 통학안전 제보지도",
      "스쿨존 시야확보·방호울타리·노면표시 점검",
      "학부모 간담회 정례화",
      "어린이공원 시설 점검",
    ],
  },
  {
    id: "workers",
    audience: "직장인·출퇴근러",
    title: "출근길에 덜 막히는 동네",
    message: "매일 지나가는 정체 구간을 주민 제보와 현장 확인으로 보겠습니다.",
    icon: BriefcaseBusiness,
    pledges: [
      "출퇴근 교통불편 제보지도",
      "신호체계·차로 운영 개선 협의",
      "진천환승공영주차장 이용 개선 요구",
      "버스노선·정류장 민원 수집",
    ],
  },
  {
    id: "young",
    audience: "청년·신혼부부",
    title: "계속 살고 싶은 젊은 동네",
    message: "일, 주거, 안전, 문화가 가까운 생활권을 함께 만들겠습니다.",
    icon: Home,
    pledges: [
      "청년 창업·프리랜서 간담회",
      "상권 디지털 홍보 지원",
      "생활체육·문화공간 수요 조사",
      "1인가구 안전 민원 접수",
    ],
  },
  {
    id: "shops",
    audience: "소상공인·자영업자",
    title: "장사하기 좋은 골목",
    message: "상권의 주차, 보행, 홍보 문제를 현장에서 듣겠습니다.",
    icon: Store,
    pledges: [
      "월배신시장·진천역 상권 홍보",
      "상권 주변 단기주차 개선 요구",
      "골목상권 지도 페이지 제작",
      "정기 상인 간담회",
    ],
  },
  {
    id: "seniors",
    audience: "어르신",
    title: "걷기 편하고 이용하기 쉬운 동네",
    message: "복지관, 행정복지센터, 병원과 시장까지 가는 길을 살피겠습니다.",
    icon: HeartHandshake,
    pledges: [
      "경사로·보도턱·벤치 점검",
      "행정복지센터·복지관 주변 주차와 동선 개선",
      "디지털 민원 도움창구 제안",
      "어르신 일자리·건강 프로그램 의견 수렴",
    ],
  },
];
