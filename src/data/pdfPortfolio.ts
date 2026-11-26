import type { Lang } from '../i18n/ui';

export type PdfProjectMode = 'detail' | 'summary' | 'off';

export interface PdfScreenItem {
  publicSrc?: string;
  assetFile?: string;
  alt: string;
  caption: string;
}

export interface PdfMetric {
  value: string;
  label: string;
  detail?: string;
}

export interface PdfFlowStep {
  title: string;
  detail: string;
}

export interface PdfTroubleshootingItem {
  title: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
}

export interface PdfVerificationRow {
  screen: string;
  before: string;
  after: string;
  baseline: string;
}

export interface PdfSpreadData {
  kind: 'spread';
  slug: string;
  metrics: PdfMetric[];
  backgroundTitle: string;
  backgroundBody: string;
  goalLabel: string;
  goalBody: string;
  architectureTitle: string;
  architectureSummary: string;
  architectureSteps: PdfFlowStep[];
  screensTitle: string;
  screensNote: string;
  screens: PdfScreenItem[];
  diagramType: 'image' | 'vertical-stitch';
  diagramTitle: string;
  diagramCaption: string;
  diagramAssetFile?: string;
  diagramAlt?: string;
  verticalStitchSteps?: [PdfFlowStep, PdfFlowStep, PdfFlowStep];
  page2Subtitle: string;
  troubleshootingTitle: string;
  troubleshooting: PdfTroubleshootingItem[];
  verificationTitle?: string;
  verificationNote?: string;
  verificationHeaders?: [string, string, string, string];
  verificationRows?: PdfVerificationRow[];
  screenFlowTitle?: string;
  screenFlowAssetFile?: string;
  screenFlowAlt?: string;
  screenFlowBullets?: string[];
  retrospectiveTitle: string;
  retrospectiveSummary: string;
  nextTitle: string;
  nextItems: string[];
  summaryHighlights: string[];
}

export interface PdfSingleData {
  kind: 'single';
  slug: string;
  overviewTitle: string;
  overviewBody: string;
  roleTitle: string;
  roleBullets: string[];
  highlightLabel: string;
  highlightBody: string;
  screensTitle?: string;
  screens?: PdfScreenItem[];
  webScreensTitle?: string;
  webScreens?: PdfScreenItem[];
  modulesTitle?: string;
  modules?: { title: string; tag: string; detail: string }[];
  note?: string;
  summaryHighlights: string[];
}

export type PdfProjectDetail = PdfSpreadData | PdfSingleData;

export interface PdfPreset {
  id: 'ios' | 'ssafy' | 'featured' | 'all';
  label: string;
  description: string;
  includeProfile: boolean;
  detail: string[];
  summary: string[];
}

export interface PdfUiCopy {
  pageTitle: string;
  pageDescription: string;
  backToSite: string;
  toolbarTitle: string;
  toolbarHint: string;
  presetsLabel: string;
  includeProfileLabel: string;
  projectsSectionLabel: string;
  modeDetail: string;
  modeSummary: string;
  modeOff: string;
  moveUpLabel: string;
  moveDownLabel: string;
  pagesUnit: string;
  formatLabel: string;
  copyLinkButton: string;
  copiedLinkButton: string;
  printButton: string;
  emptyState: string;
  profileIndexTitle: string;
  profileIndexHint: string;
  profileEmptyIndex: string;
  webDemoLink: string;
  webDetailLink: string;
  detailPagesTag2: string;
  detailPagesTag1: string;
  summarySheetTitle: string;
  summarySheetSubtitle: string;
  troubleshootingLabels: {
    problem: string;
    cause: string;
    solution: string;
    result: string;
  };
  pageLabel: string;
}

export const pdfUiCopy: Record<Lang, PdfUiCopy> = {
  ko: {
    pageTitle: 'PDF 포트폴리오 내보내기',
    pageDescription: '제출 목적에 맞는 프로젝트를 선택해 A4 가로형 PDF 포트폴리오로 내보냅니다.',
    backToSite: '웹 포트폴리오로',
    toolbarTitle: 'PDF 포트폴리오 구성',
    toolbarHint: '제출할 프로젝트를 선택·정렬한 뒤 PDF로 저장하세요. 인쇄 시 이 막대는 숨겨집니다.',
    presetsLabel: '프리셋',
    includeProfileLabel: '프로필 표지 포함',
    projectsSectionLabel: '프로젝트 선택 (상세 · 요약 · 제외)',
    modeDetail: '상세',
    modeSummary: '요약',
    modeOff: '제외',
    moveUpLabel: '위로 이동',
    moveDownLabel: '아래로 이동',
    pagesUnit: '페이지',
    formatLabel: 'A4 가로',
    copyLinkButton: '구성 링크 복사',
    copiedLinkButton: '복사됨',
    printButton: 'PDF로 저장',
    emptyState: '표시할 페이지가 없습니다. 프로필 표지나 프로젝트를 하나 이상 선택해 주세요.',
    profileIndexTitle: '수록 프로젝트',
    profileIndexHint: '각 프로젝트의 링크를 클릭하면 웹에서 실제 동작 녹화와 전체 케이스 스터디를 볼 수 있습니다.',
    profileEmptyIndex: '선택된 프로젝트가 없습니다.',
    webDemoLink: '웹에서 동작 데모 보기 ↗',
    webDetailLink: '웹 상세 보기 ↗',
    detailPagesTag2: '2p',
    detailPagesTag1: '1p',
    summarySheetTitle: '그 외 프로젝트 요약',
    summarySheetSubtitle: '함께 진행한 팀·개인 프로젝트의 핵심 역할과 구현 범위',
    troubleshootingLabels: {
      problem: '문제',
      cause: '원인',
      solution: '해결',
      result: '결과',
    },
    pageLabel: 'p.',
  },
  ja: {
    pageTitle: 'PDFポートフォリオ出力',
    pageDescription: '提出先に合わせてプロジェクトを選び、A4横型のPDFポートフォリオとして出力します。',
    backToSite: 'Webポートフォリオへ',
    toolbarTitle: 'PDFポートフォリオ構成',
    toolbarHint: '掲載するプロジェクトと順序を選んでPDF保存してください。印刷時にこのバーは非表示になります。',
    presetsLabel: 'プリセット',
    includeProfileLabel: 'プロフィール表紙を含める',
    projectsSectionLabel: 'プロジェクト選択（詳細・要約・除外）',
    modeDetail: '詳細',
    modeSummary: '要約',
    modeOff: '除外',
    moveUpLabel: '上へ移動',
    moveDownLabel: '下へ移動',
    pagesUnit: 'ページ',
    formatLabel: 'A4横',
    copyLinkButton: '構成URLをコピー',
    copiedLinkButton: 'コピー済み',
    printButton: 'PDFとして保存',
    emptyState: '表示するページがありません。プロフィール表紙またはプロジェクトを1つ以上選択してください。',
    profileIndexTitle: '収録プロジェクト',
    profileIndexHint: '各プロジェクトのリンクから、Web版の動作デモ動画と詳細ケーススタディを確認できます。',
    profileEmptyIndex: '選択されたプロジェクトがありません。',
    webDemoLink: 'Webで動作デモを見る ↗',
    webDetailLink: 'Web詳細を見る ↗',
    detailPagesTag2: '2p',
    detailPagesTag1: '1p',
    summarySheetTitle: 'その他のプロジェクト要約',
    summarySheetSubtitle: 'チーム・個人で開発してきたアプリの担当範囲とポイント',
    troubleshootingLabels: {
      problem: '問題',
      cause: '原因',
      solution: '解決',
      result: '結果',
    },
    pageLabel: 'p.',
  },
};

export const pdfPresets: Record<Lang, PdfPreset[]> = {
  ko: [
    {
      id: 'ios',
      label: 'iOS 지원용',
      description: '대표 iOS 2개 상세 + Durumari·iOS 3개 요약 (6p)',
      includeProfile: true,
      detail: ['insulin-note', 'kanji-mate'],
      summary: ['durumari', 'lol-stat', 'pet-mate', 'timoney'],
    },
    {
      id: 'ssafy',
      label: 'SSAFY 리뷰용',
      description: '대표 iOS 2개 + Durumari·Veil 상세 + 나머지 4개 요약 (8p)',
      includeProfile: true,
      detail: ['insulin-note', 'kanji-mate', 'durumari', 'veil'],
      summary: ['lol-stat', 'pet-mate', 'timoney', 'list-up'],
    },
    {
      id: 'featured',
      label: '대표작 핵심만',
      description: '프로필 + Insulin Note · KanjiMate (5p)',
      includeProfile: true,
      detail: ['insulin-note', 'kanji-mate'],
      summary: [],
    },
    {
      id: 'all',
      label: '전체 상세',
      description: '프로필 + 모든 프로젝트 개별 페이지 (11p)',
      includeProfile: true,
      detail: [
        'insulin-note',
        'kanji-mate',
        'durumari',
        'veil',
        'lol-stat',
        'pet-mate',
        'timoney',
        'list-up',
      ],
      summary: [],
    },
  ],
  ja: [
    {
      id: 'ios',
      label: 'iOS応募用',
      description: '代表iOS 2件詳細 + Durumari・その他3件要約 (6p)',
      includeProfile: true,
      detail: ['insulin-note', 'kanji-mate'],
      summary: ['durumari', 'lol-stat', 'pet-mate', 'timoney'],
    },
    {
      id: 'ssafy',
      label: 'SSAFYレビュー用',
      description: '代表iOS 2件 + Durumari・Veil詳細 + その他4件要約 (8p)',
      includeProfile: true,
      detail: ['insulin-note', 'kanji-mate', 'durumari', 'veil'],
      summary: ['lol-stat', 'pet-mate', 'timoney', 'list-up'],
    },
    {
      id: 'featured',
      label: '代表作のみ',
      description: 'プロフィール + Insulin Note・KanjiMate (5p)',
      includeProfile: true,
      detail: ['insulin-note', 'kanji-mate'],
      summary: [],
    },
    {
      id: 'all',
      label: '全件詳細',
      description: 'プロフィール + 全プロジェクト個別ページ (11p)',
      includeProfile: true,
      detail: [
        'insulin-note',
        'kanji-mate',
        'durumari',
        'veil',
        'lol-stat',
        'pet-mate',
        'timoney',
        'list-up',
      ],
      summary: [],
    },
  ],
};

export const pdfProjectDetails: Record<Lang, Record<string, PdfProjectDetail>> = {
  ko: {
    'insulin-note': {
      kind: 'spread',
      slug: 'insulin-note',
      metrics: [
        { value: '5 → 1단계', label: '투여 기록 동선' },
        { value: '26건', label: 'App Store 다운로드', detail: '2026-09-27 기준' },
        { value: 'iOS 17+', label: '지원 버전' },
        { value: '개인 개발', label: '기획·개발·배포' },
      ],
      backgroundTitle: '배경과 제품 목표',
      backgroundBody:
        '제1형 당뇨로 매일 인슐린을 투여하면서 누락·중복 투여 불안을 겪었습니다. 기존 CGM 앱은 실행부터 저장까지 5단계 이상이 필요해 기록이 끊겼습니다. 기억이 필요한 순간 가장 가까운 홈·잠금 화면에서 한 번에 기록하는 경험을 목표로 잡았습니다.',
      goalLabel: '핵심 기준',
      goalBody: '기능 수보다 “투여 직후 1단계로 기록·확인할 수 있는가”를 최우선 지표로 설계했습니다.',
      architectureTitle: '데이터 동기화 & MV 아키텍처',
      architectureSummary:
        '앱·홈 위젯·잠금 위젯이 App Group의 단일 SwiftData 저장소를 공유하고, Swift 6 환경에서 ModelActor로 모든 CRUD를 직렬 처리합니다.',
      architectureSteps: [
        { title: '홈·잠금 위젯', detail: '최근 투여 시각 확인' },
        { title: 'AppIntent', detail: '앱 미실행 기록 요청' },
        { title: 'ModelActor', detail: 'CRUD 직렬 실행' },
        { title: 'SwiftData', detail: 'App Group 공유 저장' },
        { title: 'WidgetKit', detail: '타임라인 즉시 갱신' },
      ],
      screensTitle: '핵심 화면 (정지 컷 · 웹에서 동작 녹화 확인)',
      screensNote: '메인 기록·수정, 캘린더 대시보드, 홈·잠금 화면 인터랙티브 위젯',
      screens: [
        {
          publicSrc: '/projects/insulin-note/main-still.webp',
          alt: 'Insulin Note 메인 화면',
          caption: '메인 기록·수정',
        },
        {
          publicSrc: '/projects/insulin-note/calendar-still.webp',
          alt: 'Insulin Note 캘린더 대시보드',
          caption: '캘린더·패턴 차트',
        },
        {
          publicSrc: '/projects/insulin-note/home-widget-still.webp',
          alt: '홈 화면 위젯으로 투여 기록',
          caption: '홈 화면 위젯',
        },
        {
          publicSrc: '/projects/insulin-note/lock-widget-still.webp',
          alt: '잠금 화면 위젯으로 투여 기록',
          caption: '잠금 화면 위젯',
        },
      ],
      diagramType: 'image',
      diagramTitle: '단방향 MV 아키텍처',
      diagramCaption: 'View는 ModelActor에 요청만 전달하고, 변경된 Model이 View를 다시 그립니다.',
      diagramAssetFile: 'mv-architecture.png',
      diagramAlt: 'User에서 View, ModelActor, Model을 거쳐 View로 돌아오는 MV 패턴 구조도',
      page2Subtitle: '트러블슈팅 · 화면 흐름 · 성과와 회고',
      troubleshootingTitle: '핵심 문제 해결 경험 (3건)',
      troubleshooting: [
        {
          title: '앱과 위젯 기록이 동기화되지 않던 문제',
          problem: 'Interactive Widget에서 기록해도 메인 앱 UI와 저장소에 반영되지 않았습니다.',
          cause: 'AppIntent가 별도 ModelContext를 쓰면서 save 호출이 누락되어 메모리에만 남았습니다.',
          solution: '공유 저장소에 명시적 저장을 적용하고, Swift 6 전환 뒤 CRUD를 ModelActor로 통합했습니다.',
          result: 'Actor에서 데이터 접근을 직렬화하고, 비동기 Task 크래시는 값 복사 전달로 해소했습니다.',
        },
        {
          title: 'View 계층의 책임과 데이터 흐름이 꼬인 문제',
          problem: 'RecordView·하위 뷰·투여량 시트 사이에 Binding과 클로저가 복잡하게 얽혔습니다.',
          cause: '하위 뷰가 UI뿐 아니라 시트용 비즈니스 로직과 기본 투여량까지 알고 있었습니다.',
          solution: '상태와 로직을 부모 뷰로 모으고, 하위 뷰는 렌더링과 클로저 호출만 맡는 단방향 MV로 전환했습니다.',
          result: 'Binding 체인을 줄이고 수정 지점을 단일화해 기능 추가 시 사이드 이펙트를 줄였습니다.',
        },
        {
          title: '기록은 되지만 계속 쓰고 싶지 않던 초기 UI',
          problem: '초기 MVP는 수정·삭제가 없고, 달력은 투여 여부만 보여 줘 지속 사용 동기가 약했습니다.',
          cause: '오입력 수정과 속효성 패턴 확인 같은 실제 반복 사용 요구가 빠져 있었습니다.',
          solution: '수정·삭제 추가, 설정 메인 통합, 달력 아래 복약률·속효성 차트·스트릭 대시보드를 배치했습니다.',
          result: '좁은 화면 정보 구조를 단순화하고 생활 패턴을 보며 자발적으로 기록할 이유를 만들었습니다.',
        },
      ],
      screenFlowTitle: '화면 이동 흐름 & 주요 기능',
      screenFlowAssetFile: 'screen-flow.jpg',
      screenFlowAlt: '위젯, 메인, 캘린더의 기록이 모두 SwiftData에 저장되는 화면 흐름도',
      screenFlowBullets: [
        '지효성·속효성 인슐린 빠른 기록·수정·삭제',
        '투여일·복약률·평균 투여 시각 캘린더 대시보드',
        '속효성 시간·투여량 패턴 차트 및 연속 기록 동기',
        '홈 위젯 1탭 기록 & 잠금 화면 최신 투여 시각 확인',
      ],
      retrospectiveTitle: '성과와 회고',
      retrospectiveSummary:
        '잠금 화면 확인 후 투여하는 루틴이 정착되었고, 개인 문제에서 출발해 App Store 실제 배포·운영(다운로드 26건)까지 완주했습니다. 기능 수보다 반복 행동의 마찰 감소와 데이터 신뢰성이 우선임을 체감했습니다.',
      nextTitle: 'v1.2 준비 항목',
      nextItems: [
        'HealthKit 연동으로 투여 기록·CGM 혈당 데이터 통합 분석',
        '영어·일본어 로컬라이징 및 Swift Testing 핵심 로직 검증',
        'ModelActor 역할별 파일 분리 및 메인 수정 즉시 반영 버그 수정',
      ],
      summaryHighlights: [
        'App Group + SwiftData + ModelActor로 앱·위젯 간 데이터 동기화 직렬 처리',
        'WidgetKit·AppIntents 기반 1탭 기록으로 입력 동선 5 → 1단계 단축 및 App Store 배포',
      ],
    },

    'kanji-mate': {
      kind: 'spread',
      slug: 'kanji-mate',
      metrics: [
        { value: '24% → 50%', label: '세로 전자책 문맥 인식률', detail: '교정 전 기준' },
        { value: '78% → 88%', label: '세로 전자책 다른 페이지', detail: '교정 전 기준' },
        { value: '97%', label: '가로 뉴스 문맥 인식률', detail: '교정 전 기준' },
        { value: 'iOS 18+', label: '온디바이스 번역·Live Activity' },
      ],
      backgroundTitle: '배경과 성공 기준',
      backgroundBody:
        '일본어 원서·뉴스를 읽다 모르는 한자를 만나면 사전 검색으로 읽기 흐름이 끊겼습니다. 스크린샷 한 장에서 한자 단어를 뽑아 읽는 법·뜻을 Live Activity로 바로 보여 주고 저장하는 온디바이스 학습 보조 앱을 설계했습니다.',
      goalLabel: '측정 원칙',
      goalBody:
        '정답 한자와 앞뒤 3글자까지 맞춘 “문맥 인식률”을 교정 전·후로 분리 측정해 OCR 자체 품질을 투명하게 검증합니다.',
      architectureTitle: '7단계 온디바이스 OCR 파이프라인',
      architectureSummary:
        '단축어로 받은 스크린샷을 축소해 메모리 한도를 지키고, Vision OCR · Natural Language · Translation · SwiftData · ActivityKit을 연결합니다.',
      architectureSteps: [
        { title: '단축어', detail: '화면 캡처 전달' },
        { title: '레이아웃 판단', detail: '가로·세로 양방향' },
        { title: 'Vision OCR', detail: '세로글 90° 회전·병합' },
        { title: '형태소 분석', detail: '사전 기본형·품사' },
        { title: 'Translation', detail: '온디바이스 일→한' },
        { title: 'SwiftData', detail: 'App Group 보관' },
        { title: 'Live Activity', detail: '잠금 화면 카드·저장' },
      ],
      screensTitle: '핵심 화면 (최근 분석 · 단어장 · Dynamic Island · 잠금 화면)',
      screensNote: 'Anki 호환 CSV 내보내기 및 Dynamic Island / 잠금 화면 즉시 저장 지원',
      screens: [
        { assetFile: 'recent.png', alt: 'KanjiMate 최근 분석 목록', caption: '최근 분석' },
        { assetFile: 'wordbook.png', alt: 'KanjiMate 내 단어장', caption: '내 단어장' },
        { assetFile: 'dynamic-island.jpg', alt: 'Dynamic Island 단어 카드', caption: 'Dynamic Island' },
        { assetFile: 'live-activity.jpg', alt: '잠금 화면 Live Activity 카드', caption: '잠금 화면 카드' },
      ],
      diagramType: 'vertical-stitch',
      diagramTitle: '세로글 → 가로 OCR 변환 전처리',
      diagramCaption: '90° 회전 후 열 단위 묶기·후리가나 제거·분절 조각 병합 뒤 한 줄로 이어 Vision에 입력합니다.',
      verticalStitchSteps: [
        { title: '세로 원문', detail: '우→좌 열, 위→아래 전자책 본문' },
        { title: '돌리고 열 묶기', detail: '90° 회전·후리가나 제외·조각 병합' },
        { title: '한 줄로 이어 붙이기', detail: '열 순서대로 연결해 가로 OCR 입력' },
      ],
      page2Subtitle: '정량 검증 · 트러블슈팅 · 한계와 다음 단계',
      verificationTitle: '실기기 기준 정량 검증표',
      verificationNote: '변경 시 최소 기준선 아래로 떨어지면 즉시 롤백하는 회귀 테스트 기준으로 운영했습니다.',
      verificationHeaders: ['테스트 화면', '교정 전', '교정 후', '최소 기준선'],
      verificationRows: [
        { screen: '세로 전자책 기준 페이지', before: '50%', after: '59%', baseline: '50% 이상' },
        { screen: '세로 전자책 다른 페이지', before: '88%', after: '88%', baseline: '80% 이상' },
        { screen: '가로 뉴스', before: '97%', after: '99%', baseline: '90% 이상' },
        { screen: '만화 말풍선 (확인용)', before: '4%', after: '4%', baseline: '1% 이상' },
      ],
      troubleshootingTitle: '핵심 문제 해결 및 실험 판단 (5건)',
      troubleshooting: [
        {
          title: '교정이 OCR 실력을 가리던 지표 왜곡',
          problem: '교정 후 점수가 100%에 가까웠으나 교정을 끄면 급락했습니다.',
          cause: '긴 문장·고유명사 치환 목록이 OCR 오인식을 가리고 있었습니다.',
          solution: '교정 전·후 점수를 분리하고 짧은 오인식만 남겼으며 기준선 미달 시 전처리를 재조정했습니다.',
          result: 'OCR 개선분과 교정 효과를 분리 설명할 수 있는 신뢰 지표를 확보했습니다.',
        },
        {
          title: '세로 한자 1글자가 여러 조각으로 쪼개지던 문제',
          problem: '「前」「強」 등 분리형 한자가 여러 글자로 잘려 오인식됐습니다.',
          cause: '부수 조각과 본문 옆 후리가나가 그대로 이어 붙었습니다.',
          solution: '글자 간격·방향 기준으로 조각을 병합하고 본문 옆 후리가나만 제외했습니다.',
          result: '교정 전 문맥 인식률이 기준 페이지 24%→50%, 다른 페이지 78%→88%로 상승했습니다.',
        },
        {
          title: '가로글·세로글 처리 간 상호 간섭',
          problem: '가로 뉴스에 세로 전처리가 개입하거나 세로 원문이 가로 1줄로 오판됐습니다.',
          cause: '이미지 방향만으로 판별해 실제 글자 배열을 반영하지 못했습니다.',
          solution: '가로·세로 양방향으로 인식한 뒤 자체 채점 기준으로 더 온전한 결과를 선택했습니다.',
          result: '가로 뉴스 97% 품질을 유지하면서 세로글 전처리를 독립적으로 개선했습니다.',
        },
        {
          title: '단축어 및 백그라운드 메모리 제약 대응',
          problem: 'AppIntent 단독 캡처 불가 및 대용량 스크린샷 처리 시 메모리 초과 위험이 있었습니다.',
          cause: 'iOS 샌드박스 및 AppIntent 백그라운드 메모리 한도를 간과했습니다.',
          solution: '단축어로 이미지를 전달받고, OCR 전처리 전에 해상도를 먼저 축소했습니다.',
          result: 'iOS 시스템 제약 안에서 안정적으로 OCR과 잠금 화면 카드를 연결했습니다.',
        },
        {
          title: 'MangaOCR 도입 실험 후 데이터 기반 롤백',
          problem: 'iOS에 포팅한 MangaOCR가 기준 페이지에서 Vision 단독보다 점수가 낮았습니다.',
          cause: '모델 동작 여부와 현재 타깃 화면의 인식률 향상은 별개였습니다.',
          solution: 'MangaOCR는 실험용 스위치로만 격리하고 기본 파이프라인은 Vision으로 유지했습니다.',
          result: '신기술 도입 자체보다 실측 기준선으로 제품 기술을 결정하는 기준을 세웠습니다.',
        },
      ],
      retrospectiveTitle: '현재 한계와 다음 단계',
      retrospectiveSummary:
        '「呆れた」처럼 Vision 자체가 텍스트 영역을 놓치는 구간이 남아 있어, 실제 글자 존재 여부를 먼저 확인한 위치만 재인식하도록 제한했습니다.',
      nextTitle: '다음 계획',
      nextItems: [
        '누락 구간 전용 테스트 셋 구축 및 만화 말풍선 전용 전처리·정답 데이터 제작',
        '초기 사용자를 위한 단축어·액션 버튼 온보딩 안내 개선',
        '사용자 수정 이력을 반영하는 개인화 보정 검토',
      ],
      summaryHighlights: [
        '세로글 90° 회전·조각 병합·후리가나 제거로 교정 전 문맥 인식률 24%→50%(다른 페이지 88%) 달성',
        'Vision·Natural Language·Translation·ActivityKit 기반 온디바이스 학습 카드 및 회귀 검증 체계 구축',
      ],
    },

    durumari: {
      kind: 'single',
      slug: 'durumari',
      overviewTitle: '프로젝트 개요',
      overviewBody:
        '여러 AI 코딩 에이전트(Codex·Claude Code·Cursor·Gemini CLI)와 팀원이 프로젝트 문맥(Context)·스킬·비밀값·회의 기록을 함께 관리하는 Cloud Context 플랫폼입니다. SSAFY 15기 자율 팀 프로젝트로 origin/dev 기준 225건의 커밋을 기여했습니다.',
      roleTitle: '담당 역할 및 핵심 구현',
      roleBullets: [
        '회의 STT 파이프라인 A측 전담(하위 이슈 49건): 세션 생명주기(생성·동의·일시정지·ENDING/EOS), 오디오 캡처·outbox 재시도, RTT 시각 오프셋 보정, 호스트 선출·PCM 릴레이 및 실검증 테스트 페이지 구현',
        '오디오 WebSocket 보안·안정성 강화: create/start/end 멱등 락, CSRF·프로젝트 권한 검증, 타 구름·사칭 user_id 차단 테스트 구축',
        '대시보드 위젯 14종을 Figma 크기별 시안으로 재설계하고 오른쪽 우선→아래 연쇄 밀림 드래그, 리사이즈 핸들 제어, data-fit 오버플로 숨김 구현',
        '자동완성 브라우저 확장 3단계 온보딩(PIN 선입력·기기 승인·배지·Firefox 권한) 및 공용 알림 벨 팝오버·초안 이탈 가드 연동 구현',
      ],
      highlightLabel: '핵심 성과 & 협업 포인트',
      highlightBody:
        'React·TypeScript 프론트엔드, FastAPI·WebSocket 백엔드, 브라우저 확장을 넘나들며 실시간 오디오 스트림 경합(장치 교체·절전·종료)을 Fake Relay 자동 테스트로 검증했습니다.',
      webScreensTitle: '주요 UI 화면 (대시보드 위젯 · 회의 STT 검증 · 알림 요약)',
      webScreens: [
        { publicSrc: '/projects/durumari/cover.png', alt: 'Durumari 대시보드 위젯 화면', caption: '대시보드 위젯 (14종)' },
        { assetFile: 'meeting-stt.png', alt: '회의 STT 실검증 테스트 화면', caption: '회의 STT 실검증 화면' },
        { assetFile: 'notifications.png', alt: '공용 알림 요약 창', caption: '알림 요약 팝오버' },
      ],
      modulesTitle: '담당 아키텍처 모듈 (225 커밋)',
      modules: [
        {
          title: '회의 STT 파이프라인 (A측)',
          tag: 'WebSocket · FastAPI · React',
          detail: '오디오 청크 outbox·재시도, RTT 시각 보정, 호스트 적합 판정·PCM 릴레이, 전사 목록·PATCH 정정 및 보안 검증(하위 49건)',
        },
        {
          title: '대시보드 위젯 14종 · 배치 엔진',
          tag: 'React · TypeScript · Figma',
          detail: '14개 위젯 크기별 컴포넌트화, 오른쪽 우선→아래 연쇄 밀림 드래그, 리사이즈 제어 및 data-fit 오버플로 맞춤',
        },
        {
          title: '자동완성 브라우저 확장 온보딩',
          tag: 'Extension · Chrome · Firefox',
          detail: '설치 직후 PIN 선입력·기기 승인 3단계 설정, 사이트/잠금 상태 아이콘 배지, 잠금 해제 후 입력칸 자동 복귀',
        },
        {
          title: '공용 알림 팝오버 · 품질/CI',
          tag: 'Vitest · Playwright · Actions',
          detail: '요청 알림 벨 팝오버 요약·초안 이탈 가드 연동, Windows Git/UTF-8 훅 호환 수정 및 Heavy 러너 전환',
        },
      ],
      summaryHighlights: [
        '회의 STT 파이프라인 A측 전담(49개 이슈): 오디오 outbox·RTT 시각 보정·호스트 PCM 릴레이·보안 검증',
        '대시보드 위젯 14종 개편·연쇄 밀림 드래그, 브라우저 확장 온보딩, 알림 벨 팝오버 구현 (225 커밋)',
      ],
    },

    veil: {
      kind: 'single',
      slug: 'veil',
      overviewTitle: '프로젝트 개요',
      overviewBody:
        '면접관과 지원자가 얼굴과 목소리를 실시간으로 비식별화(3D 아바타·음성 변조)한 상태에서 공정하게 인터뷰할 수 있는 익명 화상회의 웹 서비스입니다. SSAFY 15기 공통 팀 프로젝트로 3주간 개발했습니다.',
      roleTitle: '담당 역할 및 핵심 구현',
      roleBullets: [
        'JWT Access/Refresh 토큰 및 Redis 기반 세션·재발급 인증 파이프라인 구축',
        'LiveKit DataChannel을 활용한 실시간 공동 화이트보드 드로잉 상태 동기화',
        'MediaPipe 얼굴 랜드마크 추적과 VRM 3D 아바타를 결합한 실시간 얼굴 비식별화 구현',
        '다중 참가자 환경에서 동시 화면 공유 충돌을 방지하는 화면 공유 Mutex 제어 구현',
      ],
      highlightLabel: '협업 & 기술 포인트',
      highlightBody:
        'Java·Spring 백엔드 인증부터 React·WebRTC(LiveKit)·MediaPipe 프론트 실시간 처리까지 경계를 넘나들며 핵심 인터랙션을 구현했습니다.',
      modulesTitle: '담당 아키텍처 모듈',
      modules: [
        {
          title: '인증 · 토큰 관리',
          tag: 'Spring · JWT · Redis',
          detail: 'Access/Refresh 토큰 발급·검증 및 Redis 기반 Refresh 토큰 생명주기 관리',
        },
        {
          title: '실시간 화이트보드 동기화',
          tag: 'LiveKit DataChannel',
          detail: '화상 세션 내 저지연 DataChannel 메시지로 참여자 간 화이트보드 상태 동기화',
        },
        {
          title: '3D 아바타 비식별화',
          tag: 'MediaPipe · VRM · React',
          detail: '웹캠 표정·고개 움직임을 실시간 추출해 VRM 3D 아바타에 매핑하여 신원 보호',
        },
        {
          title: '화면 공유 동시성 제어',
          tag: 'Mutex · WebRTC',
          detail: '여러 참가자가 동시에 화면 공유를 요청할 때 경합을 막는 Mutex 잠금 처리',
        },
      ],
      note: 'SSAFY 팀 프로젝트 특성상 공개 GitHub 저장소 및 외부 화면 캡처는 비공개로 관리되고 있습니다.',
      summaryHighlights: [
        'JWT·Redis 인증, LiveKit DataChannel 화이트보드 동기화, 화면 공유 Mutex 구현',
        'MediaPipe·VRM 3D 아바타 기반 실시간 얼굴 비식별화 담당 (SSAFY 15기 공통 프로젝트)',
      ],
    },

    'lol-stat': {
      kind: 'single',
      slug: 'lol-stat',
      overviewTitle: '프로젝트 개요',
      overviewBody:
        'Riot Games API로 소환사 전적을 검색하고, JWT 인증 기반 듀오 매칭 게시판을 함께 제공하는 iOS 앱입니다. SwiftUI와 TCA(The Composable Architecture) 단방향 데이터 흐름을 실전 프로젝트로 익히기 위해 기획부터 구현까지 단독 진행했습니다.',
      roleTitle: '담당 역할 및 핵심 구현',
      roleBullets: [
        'TCA 기반 단방향 상태 관리로 소환사 검색, 전적 조회, 듀오 게시판 필터·상세 시트 구현',
        'Keychain에 JWT 토큰을 안전하게 저장하고 인증 상태 생명주기 관리',
        'Access Token 만료 시 Refresh 요청 후 실패했던 원래 API 요청을 클로저로 재전송해 끊김 없는 UX 구현',
        '최근 검색 기록, 티어·LP·KDA 요약, 매칭 상태·큐 종류 필터링 UI 구성',
      ],
      highlightLabel: '핵심 기술 학습',
      highlightBody:
        'TCA로 복잡한 비동기 네트워크·인증 상태를 예측 가능하게 분리하고, 토큰 자동 재발급 재시도 흐름을 직접 설계했습니다.',
      screensTitle: '주요 화면 (검색 · 전적 · 듀오 게시판 · 상세)',
      screens: [
        { assetFile: 'search.png', alt: '소환사 검색 화면', caption: '소환사 검색' },
        { assetFile: 'summoner.png', alt: '소환사 전적 화면', caption: '소환사 정보' },
        { assetFile: 'duo.png', alt: '듀오 모집 게시판', caption: '듀오 게시판' },
        { assetFile: 'duo-detail.png', alt: '듀오 글 상세 시트', caption: '듀오 상세' },
      ],
      summaryHighlights: [
        'SwiftUI + TCA 단방향 구조로 Riot API 전적 검색·듀오 매칭 커뮤니티 단독 구현',
        'Keychain JWT 저장 및 만료 시 Refresh 후 원래 요청 클로저 재전송 흐름 설계',
      ],
    },

    'pet-mate': {
      kind: 'single',
      slug: 'pet-mate',
      overviewTitle: '프로젝트 개요',
      overviewBody:
        '반려동물을 혼자 두어야 할 때 돌봄·산책을 맡길 메이트를 매칭해 주는 팀 iOS 앱입니다. 멋쟁이사자처럼 테킷 iOS 앱스쿨 6기 팀 프로젝트로 Firebase 기반 매칭·프로필·채팅을 구현했습니다.',
      roleTitle: '담당 역할 및 핵심 구현',
      roleBullets: [
        'EventKit 연동으로 확정된 돌봄 일정을 iOS 시스템 캘린더에 등록하고 [Petmate] 태그로 필터링 표시',
        '홈 화면의 돌봄/산책 메이트 진입 흐름 및 주변 반려견·후기 섹션 구성',
        '강아지·고양이·기타 및 크기별(소형·중형·대형·아기) 다중 필터 목록 구현',
        '반려동물 프로필·성격 태그·신청 액션이 포함된 게시글 작성 및 상세 화면 구현',
      ],
      highlightLabel: '담당 포인트',
      highlightBody:
        'iOS 네이티브 캘린더(EventKit) 연동과 다중 조건 필터링·게시글 CRUD를 맡아 매칭 탐색 흐름을 완성했습니다.',
      screensTitle: '담당 화면 (홈 · 돌봄 목록 필터 · 게시글 상세)',
      screens: [
        { assetFile: 'home.jpg', alt: 'PetMate 홈 화면', caption: '홈' },
        { assetFile: 'care-list.jpg', alt: '돌봄 목록 필터 화면', caption: '돌봄 목록 필터' },
        { assetFile: 'post.jpg', alt: '게시글 상세 화면', caption: '게시글 상세' },
      ],
      summaryHighlights: [
        'EventKit 시스템 캘린더 일정 연동 및 [Petmate] 태그 필터 조회 구현',
        '홈·동물 종류/크기 다중 필터 목록·게시글 작성/상세 담당 (iOS 앱스쿨 6기 팀)',
      ],
    },

    timoney: {
      kind: 'single',
      slug: 'timoney',
      overviewTitle: '프로젝트 개요',
      overviewBody:
        '월급과 급여일을 기준으로 지금까지 번 금액을 실시간 환산하고, 위시리스트 아이템의 목표 달성률을 시각화해 동기부여를 주는 SwiftUI 프로토타입 팀 앱입니다.',
      roleTitle: '담당 역할 및 핵심 구현',
      roleBullets: [
        '앱 첫 실행 온보딩 안내 및 급여 기간·월급 입력 초기 설정 플로우 전담 구현',
        '초기 설정 완료 직후 첫 위시 아이템 검색·등록과 메인 화면 전환 연결',
        '입력값 유효성 검증 및 짧은 스프린트(4일) 내 팀원 간 SwiftUI 화면 인터페이스 조율',
      ],
      highlightLabel: '담당 포인트',
      highlightBody:
        '첫 사용자가 이탈하지 않고 월급·급여일·첫 위시리스트를 빠르게 등록해 메인 환산 화면으로 진입하도록 초기 온보딩을 설계했습니다.',
      screensTitle: '주요 화면 (초기 설정 · 메인 · 위시리스트)',
      screens: [
        { publicSrc: '/projects/timoney/setup-still.webp', alt: 'Timoney 초기 설정 화면', caption: '초기 설정 (담당)' },
        { publicSrc: '/projects/timoney/main-still.webp', alt: 'Timoney 메인 화면', caption: '메인 화면' },
        { publicSrc: '/projects/timoney/wishlist-still.webp', alt: 'Timoney 위시리스트', caption: '위시리스트' },
      ],
      summaryHighlights: [
        '앱 첫 실행 급여 기간·월급 입력 및 위시 등록 초기 설정 온보딩 전담 (SwiftUI)',
        '실시간 환산 메인·위시리스트 달성률 프로토타입 팀 개발 (iOS 앱스쿨 6기)',
      ],
    },

    'list-up': {
      kind: 'single',
      slug: 'list-up',
      overviewTitle: '프로젝트 개요',
      overviewBody:
        '여러 쇼핑몰에 흩어진 할인·쿠폰·사은품 행사를 관심 카테고리와 키워드 기준으로 한곳에서 모아 보는 UIKit 프로토타입 팀 앱입니다.',
      roleTitle: '담당 역할 및 핵심 구현',
      roleBullets: [
        '팀 전체가 재사용하는 UIKit 공통 컴포넌트·뷰 구조 설계 및 구현',
        '할인·프로모션·SNS·카테고리 탭, 특가 배너, 쇼핑몰 목록이 통합된 메인 화면 담당',
        '쇼핑몰·카테고리·행사 종류별 필터링과 키워드 검색 → 행사 상세 → 외부 쇼핑몰 연결 흐름 구현',
      ],
      highlightLabel: '담당 포인트',
      highlightBody:
        'UIKit 기반 공통 뷰를 먼저 정리해 팀원들의 화면 개발 속도를 맞추고, 핵심 탐색 동선인 메인·필터·검색 흐름을 맡았습니다.',
      screensTitle: '주요 화면 (메인 흐름 · 메인 · 알림 키워드)',
      screens: [
        { publicSrc: '/projects/list-up/flow-still.webp', alt: 'ListUp 메인 흐름', caption: '메인 흐름' },
        { publicSrc: '/projects/list-up/home.webp', alt: 'ListUp 메인 화면', caption: '메인 화면 (담당)' },
        { publicSrc: '/projects/list-up/alerts.webp', alt: 'ListUp 알림 키워드 설정', caption: '알림 키워드' },
      ],
      summaryHighlights: [
        'UIKit 공통 뷰 설계 및 쇼핑몰·카테고리·행사 필터와 키워드 검색 메인 화면 담당',
        '다중 쇼핑몰 할인 이벤트 통합 탐색 프로토타입 팀 개발 (iOS 앱스쿨 6기)',
      ],
    },
  },

  ja: {
    'insulin-note': {
      kind: 'spread',
      slug: 'insulin-note',
      metrics: [
        { value: '5 → 1ステップ', label: '投与記録の導線' },
        { value: '26件', label: 'App Store DL', detail: '2026-09-27時点' },
        { value: 'iOS 17+', label: '対応バージョン' },
        { value: '個人開発', label: '企画・開発・公開' },
      ],
      backgroundTitle: '背景とプロダクト目標',
      backgroundBody:
        '1型糖尿病の毎日の投与で、記録忘れや重複投与の不安がありました。既存CGMアプリは保存まで5ステップ以上必要で記録が途切れがちでした。必要な瞬間に最も近いホーム・ロック画面から1タップで記録・確認できる体験を目標にしました。',
      goalLabel: '中心指標',
      goalBody: '機能数より「投与直後に1ステップで記録できるか」を最優先に設計しました。',
      architectureTitle: 'データ同期 & MVアーキテクチャ',
      architectureSummary:
        'アプリとウィジェットがApp Group上の単一SwiftDataストアを共有し、Swift 6環境ではModelActorでCRUDを直列処理します。',
      architectureSteps: [
        { title: 'ウィジェット', detail: '直近時刻を確認' },
        { title: 'AppIntent', detail: 'アプリ未起動で記録' },
        { title: 'ModelActor', detail: 'CRUDを直列実行' },
        { title: 'SwiftData', detail: 'App Group共有保存' },
        { title: 'WidgetKit', detail: 'タイムライン即更新' },
      ],
      screensTitle: '主要画面（静止画・Webで動作録画を確認可能）',
      screensNote: 'メイン記録・修正、カレンダー分析、ホーム／ロック画面ウィジェット',
      screens: [
        { publicSrc: '/projects/insulin-note/main-still.webp', alt: 'メイン画面', caption: 'メイン記録・修正' },
        { publicSrc: '/projects/insulin-note/calendar-still.webp', alt: 'カレンダー画面', caption: 'カレンダー分析' },
        { publicSrc: '/projects/insulin-note/home-widget-still.webp', alt: 'ホーム画面ウィジェット', caption: 'ホームウィジェット' },
        { publicSrc: '/projects/insulin-note/lock-widget-still.webp', alt: 'ロック画面ウィジェット', caption: 'ロック画面ウィジェット' },
      ],
      diagramType: 'image',
      diagramTitle: '単方向MVアーキテクチャ',
      diagramCaption: 'ViewはModelActorへ依頼するのみで、更新されたModelがViewを再描画します。',
      diagramAssetFile: 'mv-architecture.png',
      diagramAlt: 'MVパターンの構成図',
      page2Subtitle: '問題解決・画面遷移・成果と振り返り',
      troubleshootingTitle: '主な問題解決（3件）',
      troubleshooting: [
        {
          title: 'アプリとウィジェットの記録同期不具合',
          problem: 'ウィジェットで追加した記録が本体UIとストアに反映されませんでした。',
          cause: 'AppIntentが別ModelContextを使い、save呼び出しも抜けていました。',
          solution: '共有ストアへの明示的保存を実装し、Swift 6移行後はCRUDをModelActorに集約しました。',
          result: 'Actorでアクセスを直列化し、Task内のクラッシュも値コピー渡しで解消しました。',
        },
        {
          title: 'View階層の責務とBindingの複雑化',
          problem: '親View・子View・シート間でBindingとクロージャが絡み合っていました。',
          cause: '子Viewがビジネスロジックと既定投与量まで抱えていました。',
          solution: '状態とロジックを親Viewへ集約し、子Viewは描画とコールバックのみの単方向MVへ整理しました。',
          result: 'Binding連鎖を減らし、機能追加時の影響範囲を抑えました。',
        },
        {
          title: '継続利用しにくい初期UIの改善',
          problem: '初期MVPは修正・削除がなく、カレンダーも記録有無のみで継続動機が弱い状態でした。',
          cause: '誤入力の修正や速効型パターンの振り返りニーズが不足していました。',
          solution: '修正・削除を追加し設定を統合、服薬率・速効型チャート・ストリークを配置しました。',
          result: '生活パターンの可視化により、自発的に記録を続ける体験を作りました。',
        },
      ],
      screenFlowTitle: '画面遷移と主な機能',
      screenFlowAssetFile: 'screen-flow.jpg',
      screenFlowAlt: '画面遷移とSwiftData保存の流れ',
      screenFlowBullets: [
        '持効型・速効型インスリンの記録・修正・削除',
        '投与日・服薬率・平均時刻を示すカレンダーダッシュボード',
        '速効型の時間帯・投与量傾向チャートと継続ストリーク',
        'ホームウィジェットの1タップ記録とロック画面確認',
      ],
      retrospectiveTitle: '成果と振り返り',
      retrospectiveSummary:
        '自身の課題から出発し、App Store公開・運用（26件DL）まで完走しました。機能数より反復行動の摩擦低減とデータ信頼性が重要であることを学びました。',
      nextTitle: 'v1.2 予定項目',
      nextItems: [
        'HealthKit連携による投与記録とCGM血糖値の統合振り返り',
        '英語・日本語ローカライズおよびSwift Testingによる検証',
        'ModelActorの責務分割とメイン画面修正の即時反映対応',
      ],
      summaryHighlights: [
        'App Group + SwiftData + ModelActorでアプリ・ウィジェット間のデータ同期を直列化',
        'WidgetKit・AppIntentsで入力導線を5→1ステップへ短縮しApp Store公開',
      ],
    },

    'kanji-mate': {
      kind: 'spread',
      slug: 'kanji-mate',
      metrics: [
        { value: '24% → 50%', label: '縦書き電子書籍の文脈認識率', detail: '補正前' },
        { value: '78% → 88%', label: '縦書き・別ページ認識率', detail: '補正前' },
        { value: '97%', label: '横書きニュース認識率', detail: '補正前' },
        { value: 'iOS 18+', label: '端末内翻訳・Live Activity' },
      ],
      backgroundTitle: '背景と成功指標',
      backgroundBody:
        '日本語の電子書籍やニュースを読む際、未知の漢字で辞書を開くと読書フローが途切れていました。スクリーンショットから漢字語を抽出し、Live Activityで読み方・韓国語訳を即確認・保存できる学習補助アプリを開発しています。',
      goalLabel: '測定方針',
      goalBody:
        '対象漢字の前後3文字まで正確に読めた「文脈認識率」を補正前・後で分離し、OCR本体の実力を検証しています。',
      architectureTitle: '7段階オンデバイスOCRパイプライン',
      architectureSummary:
        'ショートカット経由の画像を縮小してメモリ制約を守りつつ、Vision・Natural Language・Translation・SwiftData・ActivityKitを連携させます。',
      architectureSteps: [
        { title: 'ショートカット', detail: '画面撮影を連携' },
        { title: 'レイアウト判定', detail: '横・縦の両方で準備' },
        { title: 'Vision OCR', detail: '縦書き90°回転・結合' },
        { title: '形態素解析', detail: '辞書形と品詞抽出' },
        { title: 'Translation', detail: '端末内で日→韓翻訳' },
        { title: 'SwiftData', detail: 'App Group保管' },
        { title: 'Live Activity', detail: 'ロック画面カード保存' },
      ],
      screensTitle: '主要画面（最近の分析・単語帳・Dynamic Island・ロック画面）',
      screensNote: 'Anki向けCSVエクスポート、Dynamic Island／ロック画面からの即時保存に対応',
      screens: [
        { assetFile: 'recent.png', alt: '最近の分析', caption: '最近の分析' },
        { assetFile: 'wordbook.png', alt: 'マイ単語帳', caption: 'マイ単語帳' },
        { assetFile: 'dynamic-island.jpg', alt: 'Dynamic Islandカード', caption: 'Dynamic Island' },
        { assetFile: 'live-activity.jpg', alt: 'ロック画面カード', caption: 'ロック画面カード' },
      ],
      diagramType: 'vertical-stitch',
      diagramTitle: '縦書き→横書きOCR前処理',
      diagramCaption: '90°回転後に列結合・振り仮名除外・断片統合を行い、1行へ連結してVisionへ渡します。',
      verticalStitchSteps: [
        { title: '縦書き原文', detail: '右列から上→下へ読む電子書籍' },
        { title: '回転して列結合', detail: '90°回転・振り仮名除外・断片統合' },
        { title: '1行へ連結', detail: '列順につなげて横書きOCRへ入力' },
      ],
      page2Subtitle: '定量検証・問題解決・制約と次の課題',
      verificationTitle: '実機ベースの定量検証表',
      verificationNote: '最低ラインを下回る変更は即ロールバックする回帰基準で品質を管理しています。',
      verificationHeaders: ['テスト画面', '補正前', '補正後', '最低ライン'],
      verificationRows: [
        { screen: '縦書き電子書籍・基準ページ', before: '50%', after: '59%', baseline: '50%以上' },
        { screen: '縦書き電子書籍・別ページ', before: '88%', after: '88%', baseline: '80%以上' },
        { screen: '横書きニュース', before: '97%', after: '99%', baseline: '90%以上' },
        { screen: '漫画の吹き出し（確認用）', before: '4%', after: '4%', baseline: '1%以上' },
      ],
      troubleshootingTitle: '主な問題解決と実験判断（5件）',
      troubleshooting: [
        {
          title: '補正リストがOCR実力を覆い隠していた問題',
          problem: '補正後はほぼ100%に見えたが、補正を切ると大幅に低下しました。',
          cause: '長文や固有名詞の置換がOCR誤認識を隠していました。',
          solution: '補正前後を分離し、短い誤認識のみ残して前処理そのものを改善しました。',
          result: 'OCR自体の改善幅を客観的に説明できる指標へ改めました。',
        },
        {
          title: '縦書き漢字1文字が複数断片に分裂する問題',
          problem: '「前」「強」などが複数文字に切り出され誤認識されました。',
          cause: '部首断片や振り仮名がそのまま本文へ連結されていました。',
          solution: '字間と方向で断片を統合し、本文横の振り仮名のみ除外しました。',
          result: '補正前認識率が基準ページ24%→50%、別ページ78%→88%へ向上しました。',
        },
        {
          title: '横書き・縦書き処理の相互干渉',
          problem: '横書きニュースへ縦書き前処理が介入する誤判定がありました。',
          cause: '画像向きのみで判定し、文字配置を反映していませんでした。',
          solution: '横・縦の両方で読み取り、自作採点基準で欠損の少ない方を採用しました。',
          result: '横書きニュース97%を保ったまま縦書き前処理を独立改善できました。',
        },
        {
          title: 'ショートカット連携とメモリ制約への対応',
          problem: 'AppIntent単体で画面撮影不可、大画像処理でメモリ上限超過の恐れがありました。',
          cause: 'iOSサンドボックスとバックグラウンド実行制限の見落としでした。',
          solution: 'ショートカットから画像を受け取り、前処理前にリサイズしました。',
          result: 'OS制約の範囲内で安定してOCRとロック画面カードを接続しました。',
        },
        {
          title: 'MangaOCR実験と実測ベースの不採用判断',
          problem: 'iOS移植したMangaOCRが基準ページでVision単体より低スコアでした。',
          cause: 'モデル動作とターゲット画面での精度向上は別問題でした。',
          solution: '標準処理から外して実験スイッチに留め、Visionを標準採用しました。',
          result: '技術の新規性ではなく実測基準線で採用判断する方針を徹底しました。',
        },
      ],
      retrospectiveTitle: '現在の制約と次の課題',
      retrospectiveSummary:
        '「呆れた」のようにVision自体が文字領域を見落とす箇所が残るため、実文字の存在を確認した箇所のみ再読取する制御を入れています。',
      nextTitle: '次のステップ',
      nextItems: [
        '見落とし箇所専用テストセットの作成と漫画吹き出し専用前処理の整備',
        '初回ユーザー向けのショートカット・アクションボタン設定案内を改善',
        'ユーザー修正履歴を次回の認識へ活かす仕組みの検討',
      ],
      summaryHighlights: [
        '縦書き90°回転・断片統合・振り仮名除外で補正前文脈認識率24%→50%（別ページ88%）を達成',
        'Vision・Natural Language・Translation・ActivityKitによる端末内学習カードと回帰検証を構築',
      ],
    },

    durumari: {
      kind: 'single',
      slug: 'durumari',
      overviewTitle: 'プロジェクト概要',
      overviewBody:
        '複数のAIコーディングエージェント（Codex・Claude Code・Cursor等）とチームがプロジェクト文脈・スキル・シークレット・会議記録を共有管理するCloud Contextプラットフォームです。SSAFY 15期自律チームでorigin/dev基準225件をコミットしました。',
      roleTitle: '担当役割と主な実装',
      roleBullets: [
        '会議STTパイプラインA側専任（49イシュー）：セッション管理・録音同意・音声outbox再送・RTT時刻補正・ホスト選出とPCMリレー・実検証ページを実装',
        '音声WebSocketのセキュリティ・堅牢化：create/start/end冪等ロック、CSRF・権限検証、なりすましuser_id遮断テストを構築',
        'ダッシュボードウィジェット14種をFigmaサイズ別に刷新し、右優先→下段連鎖押し出しドラッグ・リサイズ制御・data-fit自動省略を実装',
        '自動入力ブラウザ拡張の3ステップオンボーディング（PIN先入力・端末承認・Firefox権限）および共通通知ベルポップオーバーを実装',
      ],
      highlightLabel: '成果・チーム開発ポイント',
      highlightBody:
        'React・FastAPI・WebSocket・ブラウザ拡張を横断し、機器切替・スリープ・終了競合をFake Relay自動テストで検証しました。',
      webScreensTitle: '主要画面（ダッシュボード・会議STT検証・通知要約）',
      webScreens: [
        { publicSrc: '/projects/durumari/cover.png', alt: 'Durumariダッシュボード画面', caption: 'ダッシュボード（14種）' },
        { assetFile: 'meeting-stt.png', alt: '会議STT実検証ページ', caption: '会議STT実検証画面' },
        { assetFile: 'notifications.png', alt: '通知要約ポップオーバー', caption: '通知要約ウィンドウ' },
      ],
      modulesTitle: '担当アーキテクチャモジュール（225コミット）',
      modules: [
        {
          title: '会議STTパイプライン（A側）',
          tag: 'WebSocket・FastAPI・React',
          detail: '音声チャンクoutbox再送、RTT時刻補正、ホスト適合判定・PCMリレー、文字起こし訂正とセキュリティ検証（49件）',
        },
        {
          title: 'ダッシュボード14種・配置エンジン',
          tag: 'React・TypeScript・Figma',
          detail: '14ウィジェットのサイズ別刷新、右優先→下段連鎖押し出しドラッグ、リサイズ制御、data-fit溢れ制御',
        },
        {
          title: '自動入力ブラウザ拡張オンボーディング',
          tag: 'Extension・Chrome・Firefox',
          detail: 'PIN先入力・端末承認の3ステップ導入、状態別アイコンバッジ、ロック解除後の入力欄自動復帰',
        },
        {
          title: '共通通知ポップオーバー・品質/CI',
          tag: 'Vitest・Playwright・Actions',
          detail: '通知ベル要約・下書き離脱ガード連携、Windows Git/UTF-8互換修正、Heavyランナー移行',
        },
      ],
      summaryHighlights: [
        '会議STT A側専任（49イシュー）：音声outbox・RTT補正・ホストPCMリレー・セキュリティ検証',
        'ダッシュボードウィジェット14種刷新・連鎖ドラッグ、拡張オンボーディング、共通通知を実装（225コミット）',
      ],
    },

    veil: {
      kind: 'single',
      slug: 'veil',
      overviewTitle: 'プロジェクト概要',
      overviewBody:
        '面接官と応募者が顔・音声をリアルタイムで非識別化（3Dアバター・音声変調）して面談できる匿名ビデオ会議Webサービスです。SSAFY 15期の共通チームプロジェクトとして開発しました。',
      roleTitle: '担当役割と主な実装',
      roleBullets: [
        'JWT Access/RefreshトークンとRedisによる認証・再発行フローを構築',
        'LiveKit DataChannelを用いたリアルタイム共有ホワイトボード同期を実装',
        'MediaPipe顔トラッキングとVRM 3Dアバターを組み合わせた顔非識別化を担当',
        '複数参加者による画面共有の競合を防ぐ画面共有Mutex制御を実装',
      ],
      highlightLabel: 'チーム開発ポイント',
      highlightBody:
        'Java・Springの認証バックエンドからReact・LiveKit・MediaPipeのリアルタイム処理まで横断的に担当しました。',
      modulesTitle: '担当アーキテクチャモジュール',
      modules: [
        {
          title: '認証・トークン管理',
          tag: 'Spring・JWT・Redis',
          detail: 'Access/Refresh発行検証およびRedisでのRefreshライフサイクル管理',
        },
        {
          title: 'ホワイトボード同期',
          tag: 'LiveKit DataChannel',
          detail: '低遅延DataChannelによる会議内ホワイトボード描画状態の同期',
        },
        {
          title: '3Dアバター非識別化',
          tag: 'MediaPipe・VRM・React',
          detail: '表情・頭部ランドマークをリアルタイム抽出しVRMアバターへ反映',
        },
        {
          title: '画面共有Mutex制御',
          tag: 'Mutex・WebRTC',
          detail: '同時画面共有リクエスト時の競合を排他制御で防止',
        },
      ],
      note: 'SSAFYチームプロジェクトの規約上、公開GitHubリポジトリおよび画面キャプチャは非公開です。',
      summaryHighlights: [
        'JWT・Redis認証、LiveKit DataChannelホワイトボード同期、画面共有Mutexを実装',
        'MediaPipe・VRM 3Dアバターによるリアルタイム顔非識別化を担当（SSAFY 15期）',
      ],
    },

    'lol-stat': {
      kind: 'single',
      slug: 'lol-stat',
      overviewTitle: 'プロジェクト概要',
      overviewBody:
        'Riot Games APIによるサモナー戦績検索と、JWT認証ベースのデュオ募集掲示板を一つにまとめた個人開発iOSアプリです。SwiftUIとTCAの単方向データフローを実践的に習得するために設計・実装しました。',
      roleTitle: '担当役割と主な実装',
      roleBullets: [
        'TCAの単方向状態管理で検索・戦績・デュオ掲示板フィルタ・詳細シートを個人実装',
        'JWTトークンをKeychainに安全保存し認証状態を管理',
        'Access Token期限切れ時にRefresh後、元のAPIリクエストをクロージャで自動再送',
        '最近の検索履歴、ティア・LP・KDAサマリ、マッチング種別フィルタUIを実装',
      ],
      highlightLabel: '技術学習ポイント',
      highlightBody:
        'TCAで非同期通信と認証状態を予測可能に分離し、操作が途切れないトークン再発行リトライを設計しました。',
      screensTitle: '主要画面（検索・戦績・デュオ掲示板・詳細）',
      screens: [
        { assetFile: 'search.png', alt: 'サモナー検索', caption: 'サモナー検索' },
        { assetFile: 'summoner.png', alt: 'サモナー情報', caption: 'サモナー情報' },
        { assetFile: 'duo.png', alt: 'デュオ掲示板', caption: 'デュオ掲示板' },
        { assetFile: 'duo-detail.png', alt: 'デュオ詳細', caption: 'デュオ詳細' },
      ],
      summaryHighlights: [
        'SwiftUI + TCA単方向構造でRiot API戦績検索とデュオ募集アプリを個人開発',
        'Keychain保存とToken期限切れ時のRefresh＋元リクエスト自動再送を実装',
      ],
    },

    'pet-mate': {
      kind: 'single',
      slug: 'pet-mate',
      overviewTitle: 'プロジェクト概要',
      overviewBody:
        'ペットの預かり・散歩を頼めるメイトを探すチーム開発iOSアプリです。iOSアプリスクール6期のチームプロジェクトとしてFirebase上にマッチング・プロフィール・チャットを構築しました。',
      roleTitle: '担当役割と主な実装',
      roleBullets: [
        'EventKitで確定した預かり予定をiOSシステムカレンダーへ登録し[Petmate]で絞込表示',
        'ホーム画面の預かり／散歩導線と近くのペット・レビュー一覧を担当',
        '動物種（犬・猫・その他）とサイズ別の複合フィルタ付き一覧を実装',
        'ペットプロフィール・性格タグ・申請アクションを含む投稿作成・詳細画面を実装',
      ],
      highlightLabel: '担当ポイント',
      highlightBody:
        'ネイティブのEventKit連携と複合条件フィルタリング・投稿詳細フローを担当しました。',
      screensTitle: '担当画面（ホーム・預かり一覧フィルタ・投稿詳細）',
      screens: [
        { assetFile: 'home.jpg', alt: 'PetMateホーム', caption: 'ホーム' },
        { assetFile: 'care-list.jpg', alt: '預かり一覧フィルタ', caption: '一覧フィルタ' },
        { assetFile: 'post.jpg', alt: '投稿詳細', caption: '投稿詳細' },
      ],
      summaryHighlights: [
        'EventKitシステムカレンダー予定登録と[Petmate]タグ絞込表示を実装',
        'ホーム・動物種/サイズ複合フィルタ・投稿作成/詳細を担当（iOSアプリスクール6期）',
      ],
    },

    timoney: {
      kind: 'single',
      slug: 'timoney',
      overviewTitle: 'プロジェクト概要',
      overviewBody:
        '給料と給料日から現在までに貯まった金額をリアルタイム換算し、ウィッシュリスト目標の達成率で動機づけするSwiftUIプロトタイプです。',
      roleTitle: '担当役割と主な実装',
      roleBullets: [
        '初回起動時のオンボーディング案内と給料期間・月給入力の初期設定フローを担当',
        '初期設定直後の最初のウィッシュ登録からメイン画面へのスムーズな遷移を実装',
        '短期スプリント内でチーム間のSwiftUIデータ受け渡しインターフェースを調整',
      ],
      highlightLabel: '担当ポイント',
      highlightBody:
        '初回ユーザーが迷わず給料と最初の目標を登録してメイン体験へ入れるオンボーディングを設計しました。',
      screensTitle: '主要画面（初期設定・メイン・ウィッシュリスト）',
      screens: [
        { publicSrc: '/projects/timoney/setup-still.webp', alt: '初期設定', caption: '初期設定（担当）' },
        { publicSrc: '/projects/timoney/main-still.webp', alt: 'メイン画面', caption: 'メイン画面' },
        { publicSrc: '/projects/timoney/wishlist-still.webp', alt: 'ウィッシュリスト', caption: 'ウィッシュリスト' },
      ],
      summaryHighlights: [
        '初回起動時の給料期間・月給・ウィッシュ登録オンボーディングを担当（SwiftUI）',
        'リアルタイム換算メインと目標達成率プロトタイプをチーム開発',
      ],
    },

    'list-up': {
      kind: 'single',
      slug: 'list-up',
      overviewTitle: 'プロジェクト概要',
      overviewBody:
        '複数ショッピングモールの割引・クーポン・特典イベントをカテゴリやキーワードで一括閲覧できるUIKitプロトタイプです。',
      roleTitle: '担当役割と主な実装',
      roleBullets: [
        'チーム全体で再利用するUIKit共通ビューとコンポーネント構造を担当',
        '割引・プロモーション・SNS・カテゴリタブとモール一覧を含むメイン画面を実装',
        'モール・カテゴリ・種別フィルタとキーワード検索→詳細→外部ページ遷移の流れを構築',
      ],
      highlightLabel: '担当ポイント',
      highlightBody:
        'UIKit共通ビューを整備して開発速度を揃え、アプリの主導線であるメイン・検索・フィルタを担当しました。',
      screensTitle: '主要画面（メインの流れ・メイン・通知キーワード）',
      screens: [
        { publicSrc: '/projects/list-up/flow-still.webp', alt: 'メインの流れ', caption: 'メインの流れ' },
        { publicSrc: '/projects/list-up/home.webp', alt: 'メイン画面', caption: 'メイン画面（担当）' },
        { publicSrc: '/projects/list-up/alerts.webp', alt: '通知キーワード設定', caption: '通知キーワード' },
      ],
      summaryHighlights: [
        'UIKit共通ビュー設計とモール・カテゴリフィルタ／検索メイン画面を担当',
        '複数モール割引イベント統合プロトタイプをチーム開発（iOSアプリスクール6期）',
      ],
    },
  },
};
