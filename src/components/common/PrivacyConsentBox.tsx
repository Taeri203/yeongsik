export const privacyConsentText =
  "우영식 선거사무소는 유권자 민원 접수 및 답변을 위해 이름, 연락처, 이메일, 거주지, 민원내용을 수집합니다. 수집된 정보는 선거사무소 민원 확인 및 답변 목적으로만 사용되며, 선거 종료 후 또는 목적 달성 시 지체 없이 파기합니다. 동의를 거부할 수 있으나 이 경우 민원 접수가 제한될 수 있습니다.";

export function PrivacyConsentBox() {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm leading-7 text-[#667085]">
      {privacyConsentText}
    </div>
  );
}
