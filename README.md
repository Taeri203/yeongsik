# 우영식.kr

대구 달서구 제4선거구 우영식 후보 홈페이지입니다.  
Next.js 기반 정적 사이트에 유권자 제보 접수 API를 붙여 운영합니다.

운영 주소:

- Production: https://우영식.kr
- Vercel 기본 주소: https://yeongsik.vercel.app
- GitHub: https://github.com/Taeri203/yeongsik

## 연결된 서비스

이 프로젝트는 여러 서비스를 함께 사용합니다.

| 용도 | 서비스 | 확인 위치 |
| --- | --- | --- |
| 코드 저장소 | GitHub | `Taeri203/yeongsik` |
| 배포/호스팅 | Vercel | 프로젝트 `yeongsik` |
| 도메인/DNS | 가비아 | `우영식.kr` DNS 관리 |
| 제보 저장 DB | Supabase | Table Editor > `voice_submissions` |
| 제보 이메일 알림 | Resend | Logs / Domains |

## 기술 스택

- Next.js 16
- React 19
- Tailwind CSS 4
- Supabase
- Resend
- Vercel

## 로컬 개발

```powershell
npm install
npm run dev
```

로컬 주소:

```text
http://localhost:3010
```

빌드 확인:

```powershell
npx tsc --noEmit
npm run build
```

참고: 현재 `npm run lint`는 ESLint 9용 `eslint.config.*` 파일이 없어 실행되지 않습니다. 타입 체크와 빌드로 배포 가능 여부를 확인합니다.

## 배포 방법

`main` 브랜치에 push하면 Vercel이 자동 배포합니다.

```powershell
git add .
git commit -m "변경 내용"
git push
```

배포 상태는 Vercel 프로젝트의 `Deployments` 탭에서 확인합니다.  
상태가 `Ready`이면 운영 사이트에 반영된 것입니다.

## 환경변수

Vercel Project Settings > Environment Variables에 등록합니다.

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-secret-key
RESEND_API_KEY=re_your_resend_api_key
VOICE_NOTIFICATION_TO=ceo@insuai.kr
VOICE_NOTIFICATION_FROM=우영식.kr <noreply@xn--wv4bl1d8o.kr>
```

주의:

- `SUPABASE_URL`에는 `/rest/v1`을 붙이지 않습니다.
- `SUPABASE_SERVICE_ROLE_KEY`는 Supabase의 Secret key입니다. `sb_secret_...` 형태입니다.
- `SUPABASE_SERVICE_ROLE_KEY`와 `RESEND_API_KEY`는 절대 GitHub에 커밋하지 않습니다.
- 환경변수 변경 후에는 Vercel에서 Redeploy 해야 반영됩니다.

## 유권자의 소리 처리 흐름

`/voice` 폼 제출 시 다음 순서로 동작합니다.

1. 브라우저에서 `/api/voice`로 제출
2. Supabase `voice_submissions` 테이블에 저장
3. Resend로 `VOICE_NOTIFICATION_TO`에 이메일 알림 전송
4. 화면에 `제보가 접수되었습니다` 표시

저장 위치:

```text
Supabase > Table Editor > voice_submissions
```

이메일 로그:

```text
Resend > Logs
```

Vercel API 로그:

```text
Vercel > Logs > /api/voice
```

## Supabase 테이블

최초 생성 SQL은 `SUPABASE_SETUP.md`를 참고합니다.

현재 테이블 이름:

```text
voice_submissions
```

주요 컬럼:

- `name`
- `phone`
- `email`
- `residence`
- `age`
- `category`
- `location`
- `title`
- `content`
- `reply_requested`
- `status`
- `created_at`

답변 희망 여부:

- 답변 희망: `reply_requested = true`
- 답변 불필요: `reply_requested = false`

## Resend 도메인

한글 도메인 `우영식.kr`은 DNS/이메일 시스템에서 퓨니코드로 다룹니다.

```text
우영식.kr = xn--wv4bl1d8o.kr
```

Resend 발신 주소 예:

```text
우영식.kr <noreply@xn--wv4bl1d8o.kr>
```

Resend 인증을 위해 가비아 DNS에 Resend가 안내한 `TXT`, `MX`, `DKIM`, `DMARC` 레코드를 등록했습니다.

## Vercel 도메인

Vercel에는 한글 도메인을 퓨니코드로 등록합니다.

```text
xn--wv4bl1d8o.kr
```

가비아 DNS의 Vercel 연결 레코드:

```text
A   @   216.198.79.1
```

## 운영 체크리스트

사이트 수정 후:

1. `npx tsc --noEmit`
2. `npm run build`
3. `git add .`
4. `git commit -m "변경 내용"`
5. `git push`
6. Vercel `Deployments`에서 `Ready` 확인

제보 기능 확인:

1. https://우영식.kr/voice 접속
2. 테스트 제보 제출
3. Supabase `voice_submissions` 저장 확인
4. Resend 또는 수신 메일함에서 알림 확인

## 자주 생기는 문제

### 제보 저장 실패

확인할 것:

- `SUPABASE_URL`이 `https://xxxxx.supabase.co` 형태인지
- `/rest/v1`이 붙어 있지 않은지
- `SUPABASE_SERVICE_ROLE_KEY`가 `sb_secret_...`인지
- Supabase에 `voice_submissions` 테이블이 있는지
- 새 컬럼 추가 후 Vercel Redeploy를 했는지

### 메일이 안 옴

확인할 것:

- Resend 도메인이 `Verified` 상태인지
- `VOICE_NOTIFICATION_FROM`이 인증된 도메인의 주소인지
- `VOICE_NOTIFICATION_TO`가 정확한지
- Resend `Logs`에 에러가 있는지
- Vercel 환경변수 변경 후 Redeploy 했는지

### 도메인 연결 문제

확인할 것:

- Vercel에는 `xn--wv4bl1d8o.kr`로 등록했는지
- 가비아 DNS에 `A @ 216.198.79.1`이 있는지
- DNS 변경 후 충분히 기다렸는지