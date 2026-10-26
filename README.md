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

지원용 A4 PDF는 이메일과 프로필 사진을 넣지 않습니다. 파일은 `export/portfolio-ko.pdf`에 생기며 Git에는 올리지 않습니다.

```sh
npm run pdf
```

## 언어

| 경로 | 언어 |
|------|------|
| `/ko/` | 한국어 (기본) |
| `/ja/` | 日本語 |

헤더의 언어 링크로 전환합니다.
