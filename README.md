# khc1104.github.io

한국어/일본어 모바일 개발자 포트폴리오. Astro 정적 사이트이며 GitHub Pages(`https://khc1104.github.io`)에 배포합니다.

## 로컬 실행

```sh
npm install
npm run dev
```

개발 서버는 `http://localhost:4321`입니다. `/`는 `/ko/`로 이동합니다. `/ja/`는 일본어 홈입니다.

```sh
npm run build
npm run preview
```

`build`는 `./dist/`에 HTML을 만듭니다. `preview`로 빌드 결과를 확인합니다.

## 언어

| 경로 | 언어 |
|------|------|
| `/ko/` | 한국어 (기본) |
| `/ja/` | 日本語 |
| `/ko/pdf/` | 한국어 PDF 내보내기 (A4 가로) |
| `/ja/pdf/` | 日本語 PDF出力 (A4横) |

헤더의 언어 링크로 전환합니다.

## PDF 내보내기

웹 브라우저에서 `/ko/pdf/`(또는 `/ja/pdf/`)를 열어 제출할 프로젝트를 **상세 · 요약 · 제외**로 고르고 `PDF로 저장`을 누르거나, CLI로 바로 PDF를 생성할 수 있습니다.

```sh
# 기본 구성 (iOS 지원용, portfolio.pdf)
npm run pdf

# SSAFY 리뷰용 (Veil 상세 포함)
npm run pdf -- --preset ssafy --out ssafy-portfolio.pdf

# 원하는 프로젝트만 직접 지정
npm run pdf -- --detail insulin-note,kanji-mate,veil --summary lol-stat,pet-mate --out custom.pdf
```
