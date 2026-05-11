import type { ParasolSpot } from "@/types";

export const parasolPrinciples = [
  { title: "정기성", description: "매주 또는 격주 정해진 시간" },
  { title: "공개성", description: "장소와 시간을 홈페이지에 공개" },
  { title: "기록성", description: "접수 민원을 분야별로 기록" },
  { title: "피드백", description: "처리 가능 여부와 진행상황 공유" },
];

export const parasolSpots: ParasolSpot[] = [
  {
    title: "진천역 앞 파라솔",
    district: "진천동",
    topics: "출퇴근 교통, 환승, 주차, 정류장 불편",
    schedule: "매주 ○요일 07:30~09:00 예정",
  },
  {
    title: "월배신시장 파라솔",
    district: "진천동",
    topics: "상권, 주차, 보행, 소상공인 민원",
    schedule: "격주 ○요일 16:00~18:00 예정",
  },
  {
    title: "유천동 생활권 파라솔",
    district: "유천동",
    topics: "대단지 생활민원, 통학안전, 산책로",
    schedule: "매주 ○요일 18:00~20:00 예정",
  },
  {
    title: "진천천 산책로 파라솔",
    district: "유천동",
    topics: "산책로, 조명, 벤치, 운동시설, 야간안전",
    schedule: "월 1회 주말 운영 예정",
  },
];

export const parasolFlow = [
  "듣기",
  "현장 확인",
  "담당 부서 확인",
  "시정질문·자료요구·예산검토·조례검토",
  "주민에게 진행상황 공유",
];
