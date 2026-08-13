# 사흘 쇼케이스 페이지 — 배포 안내

## 로컬에서 미리보기
```
npm install
npm run dev
```

## Vercel로 배포하기 (추천, 무료)
1. https://vercel.com 접속 후 GitHub 계정으로 가입
2. 이 폴더를 GitHub 새 저장소(repository)에 업로드
3. Vercel 대시보드 → "New Project" → 방금 만든 저장소 선택
4. Framework는 자동으로 "Vite"로 인식됨 → 그대로 "Deploy" 클릭
5. 1~2분 후 `프로젝트명.vercel.app` 주소로 바로 접속 가능

## 내 도메인 연결하기
1. 가비아/후이즈 등에서 원하는 도메인 구매 (예: saheul.co.kr)
2. Vercel 프로젝트 → Settings → Domains → 구매한 도메인 입력
3. 안내되는 네임서버(DNS) 값을 도메인 구매처 관리 페이지에 등록
4. 보통 몇 분~몇 시간 내 연결 완료
