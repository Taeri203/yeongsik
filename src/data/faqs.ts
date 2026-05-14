import type { FAQ } from "@/types";
import { donationInfo } from "@/data/donation";

export const donationFaqs: FAQ[] = [
  {
    question: "후원은 어디로 하나요?",
    answer:
      `${donationInfo.name} 계좌로 후원하실 수 있습니다. ${donationInfo.accountLabel}, 예금주 ${donationInfo.accountHolder}입니다.`,
  },
  {
    question: "영수증 발급은 어떻게 하나요?",
    answer: "우영식.kr 후원회 페이지의 정치후원금 영수증 발급 신청 폼에서 접수할 수 있습니다.",
  },
  {
    question: "세액공제는 어떻게 되나요?",
    answer: "10만 원 이하는 전액 세액공제, 10만 원 초과분은 관련 법령에 따른 세액공제 대상이 될 수 있습니다.",
  },
  {
    question: "누가 후원할 수 있나요?",
    answer: "개인은 최대 200만 원까지 후원할 수 있으며, 법인·단체·외국인 후원은 불가합니다. 세부 자격과 한도는 후원회 또는 선거관리위원회 안내를 확인해 주세요.",
  },
];
