# X라이더 공식 안내 웹사이트

X라이더 4D 체험 어트랙션 공식 안내 웹사이트입니다.  
React + Vite + Tailwind CSS로 제작된 **완전 정적 사이트**입니다.

---

## 특징

- **완전 무료 운영** — 백엔드 서버, 데이터베이스, 유료 서비스 없음
- **모바일 최우선 디자인** — QR코드로 접속하는 고객 대상
- **영상 필터/검색** — 30개 영상을 테마, 스릴·무서움·어지러움 정도로 필터링
- **QR코드 자동 생성** — 배포 URL 기반으로 자동 생성 (별도 서비스 없음)
- **정적 빌드** — `dist/` 폴더만 있으면 어디서든 배포 가능

---

## 로컬에서 바로 보기 (인터넷 없이)

**`시작.bat`** 파일을 더블클릭하면 자동으로 브라우저가 열립니다.

> ⚠ React 앱은 보안 정책상 HTML 파일을 직접 열면 동작하지 않습니다.  
> `시작.bat`을 사용하면 내 컴퓨터에 임시 웹서버가 켜지면서 정상적으로 실행됩니다.

---

## 로컬 개발 (코드 수정 시)

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드 (dist/ 폴더 생성)
npm run build

# 빌드 결과 미리보기 (http://localhost:4173)
npm run preview
```

---

## 무료 배포 방법

### Cloudflare Pages (추천)

1. GitHub에 이 저장소를 push합니다.
2. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create application → Pages
3. GitHub 저장소 연결
4. 빌드 설정:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. **Save and Deploy** 클릭

→ `https://xrider.pages.dev` 형태의 URL이 자동 발급됩니다.

---

### Netlify

1. GitHub에 push 후 [netlify.com](https://netlify.com) 접속
2. **Add new site** → **Import an existing project** → GitHub 연결
3. 설정:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. **Deploy site** 클릭

→ `https://xrider.netlify.app` 형태의 URL이 자동 발급됩니다.

---

### Vercel

```bash
# Vercel CLI 사용 시
npm i -g vercel
vercel
```

또는 [vercel.com](https://vercel.com)에서 GitHub 저장소 Import 후 자동 배포.

---

### GitHub Pages

`vite.config.js`에서 `base` 옵션을 저장소 이름으로 설정합니다:

```js
// 저장소 이름이 'xrider-website'인 경우
export default defineConfig({
  base: '/xrider-website/',
  plugins: [react(), tailwindcss()],
})
```

```bash
npm run build
# dist/ 폴더를 gh-pages 브랜치에 push
```

---

## 커스텀 도메인 연결

각 플랫폼에서 커스텀 도메인을 무료로 연결할 수 있습니다.

예: `xrider.kr` → Cloudflare Pages에서 **Custom domains** → 도메인 추가

---

## 영상 데이터 수정 방법

`src/data/videos.js` 파일에서 모든 영상 정보를 관리합니다.

```js
{
  id: 1,                          // 영상 번호
  title: "드래곤의 전설",            // 영상 제목
  poster: "/images/posters/dragon_legend.jpg",  // 포스터 이미지 경로
  tagline: "거대한 드래곤과...",     // 한 줄 소개
  theme: "판타지",                  // 테마
  duration: "약 5분",              // 영상 길이
  thrill: "상",                    // 스릴 정도 (상/중/하)
  scary: "중",                     // 무서움 정도 (상/중/하)
  dizziness: "상",                 // 어지러움 정도 (상/중/하)
  kidsOk: false,                   // 어린이 추천 여부
  beginnerOk: false,               // 처음 이용자 추천 여부
  targetAudience: [...],           // 추천 카테고리 배열
  note: "주의사항",                 // 참고사항 (null 가능)
}
```

### 포스터 이미지 추가/교체

1. `public/images/posters/` 폴더에 이미지 파일 추가
2. `videos.js`에서 `poster` 경로를 `/images/posters/파일명.jpg` 으로 수정

---

## 프로젝트 구조

```
xrider-website/
├── public/
│   └── images/
│       ├── store/          # 매장 사진
│       └── posters/        # 영상 포스터
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx        # 히어로 슬라이드쇼
│   │   ├── About.jsx       # X라이더 소개
│   │   ├── HowToUse.jsx    # 이용 방법
│   │   ├── Pricing.jsx     # 요금 안내
│   │   ├── VideoList.jsx   # 영상 목록 + 필터
│   │   ├── VideoCard.jsx   # 영상 카드
│   │   ├── QRSection.jsx   # QR코드 섹션
│   │   ├── FAQ.jsx         # 자주 묻는 질문
│   │   └── Footer.jsx
│   ├── data/
│   │   └── videos.js       # 영상 데이터 (여기만 수정)
│   ├── App.jsx
│   └── index.css
└── README.md
```

---

## 기술 스택

- **React 19** + **Vite 6**
- **Tailwind CSS v4** (utility-first CSS)
- **qrcode.react** (QR코드 클라이언트 생성)
- 별도 백엔드/DB 없음 — 완전 정적 사이트
