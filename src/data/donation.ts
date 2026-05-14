import { siteConfig } from "@/data/site";

export const donationInfo = {
  name: siteConfig.donationName,
  bank: siteConfig.donationBank,
  account: siteConfig.donationAccount,
  accountHolder: siteConfig.donationAccountHolder,
  accountLabel: `${siteConfig.donationBank} ${siteConfig.donationAccount}`,
  image: siteConfig.donationImage,
  imageAlt: "우영식후원회 대구시의원선거 후원 안내 이미지",
  headline: "우영식의 후원인이 되어주세요",
  subtitle: "진천·유천·대곡의 젊은 변화, 주민의 힘으로 만들겠습니다.",
  closingMessage: "주민의 힘으로 뛰겠습니다",
  transparencyMessage: "소중한 후원은 우영식후원회(대구시의원선거)를 통해 투명하게 관리됩니다.",
};

export const donationGuideItems = [
  "개인 최대 200만 원",
  "법인·단체·외국인 후원 불가",
  "10만 원 이하 전액 세액공제",
  "10만 원 초과분은 관련 법령에 따른 세액공제",
  "자세한 사항은 후원회 또는 선거관리위원회 안내를 확인",
];

export const receiptJobTypes = ["회사원", "자영업", "정치인", "기타"] as const;

export const receiptPrivacyItems = [
  "입력하신 정보는 후원금 확인 및 정치후원금 영수증 발급을 위한 목적으로만 사용됩니다.",
  "주민등록번호는 영수증 발급 및 세액공제 처리를 위해 필요한 경우에만 사용되며, 목적 달성 후 관련 법령에 따라 보관 또는 파기됩니다.",
  "개인정보 보호를 위해 실제 운영 시 HTTPS 환경에서만 사용해 주세요.",
  "후원 자격, 세액공제, 영수증 발급 기준은 관련 법령 및 선거관리위원회 안내에 따라 달라질 수 있으므로, 세부 사항은 후원회 또는 선거관리위원회 안내를 확인해 주세요.",
];
