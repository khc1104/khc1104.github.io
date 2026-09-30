import type { Lang } from '../i18n/ui';

export interface SkillGroup {
  label: string;
  items: string[];
  secondary?: boolean;
}

export interface HistoryItem {
  period: string;
  title: string;
  role?: string;
  summary?: string;
}

export interface Profile {
  intro: string[];
  skills: SkillGroup[];
  experience: HistoryItem[];
  education: HistoryItem[];
  certifications: HistoryItem[];
}

export const profiles: Record<Lang, Profile> = {
  ko: {
    intro: [
      'iOS / SwiftUI 개발자로, 사용자가 앱 안에서 헤매지 않도록 입력 뎁스를 줄이고 홈·잠금 화면 위젯으로 바로 닿는 UX를 만드는 일에 관심이 많습니다.',
      '직접 쓰는 Insulin Note로 투여 기록을 한 번에 남기는 경험을 만들었고, KanjiMate에서는 스크린샷·OCR·Live Activity로 읽기 흐름을 끊지 않는 보조를 실험하고 있습니다.',
      'iOS 앱 개발 포지션에서 제품과 사용자 문제를 함께 고민하는 팀과 일하고 싶습니다.',
    ],
    skills: [
      { label: 'Language', items: ['Swift'] },
      { label: 'UI', items: ['SwiftUI', 'UIKit', 'WidgetKit', 'ActivityKit'] },
      { label: 'Architecture', items: ['TCA', 'MV · 단방향 데이터 흐름', 'Swift Concurrency · Actor'] },
      {
        label: 'Data & Platform',
        items: ['SwiftData', 'Firebase', 'Keychain', 'Vision', 'AppIntents', 'JWT'],
      },
      { label: 'Tools', items: ['Git', 'REST API'] },
      { label: 'Secondary', items: ['Java · Spring', 'JavaScript · React'], secondary: true },
    ],
    experience: [
      {
        period: '2026.01 – 2026.12',
        title: '삼성 청년 SW 아카데미(SSAFY) 15기',
        role: '교육생',
        summary:
          'Java·Spring으로 기본기를 다진 뒤 공통 프로젝트 Veil과 특화 프로젝트 Steam 운영 진단 플랫폼을 팀으로 개발하고 있습니다.',
      },
      {
        period: '2024.06 – 2024.11',
        title: '멋쟁이사자처럼 테킷 iOS 앱스쿨 6기',
        role: '수료',
        summary:
          'UIKit·SwiftUI로 iOS 앱을 만들며 팀 협업과 HIG를 배웠고, ListUp·Timoney·PetMate 등 팀 프로젝트를 수행했습니다.',
      },
      {
        period: '2021.03 – 2021.08',
        title: '인투씨엔에스',
        role: '인턴 · IT팀 백엔드',
        summary:
          'MySQL·PHP CI4·Vue.js로 SNS 앱 인투펫 리뉴얼에 참여해 회원가입, 산책 기록(Kakao 지도·GPS), 안드로이드 웹앱과 FCM 푸시를 구현했습니다.',
      },
      {
        period: '2019.07 – 2019.12',
        title: '블루 트리',
        role: '계약직 · 전산팀',
        summary:
          'MySQL·Laravel·React로 스마트 공장화 사내 행정 홈페이지를 개발해 출퇴근, 차량 관리, 게시판, Socket.io 채팅을 구현했습니다.',
      },
    ],
    education: [
      { period: '2017.03 – 2022.02', title: '명지대학교', role: '컴퓨터공학과 졸업' },
      { period: '2014.03 – 2017.02', title: '효양고등학교', role: '이과 졸업' },
    ],
    certifications: [
      { period: '2026.06', title: 'SQLD', role: '한국데이터산업진흥원' },
      { period: '2026.03', title: 'OPIc 영어', role: 'ACTFL' },
      { period: '2024.01', title: 'JLPT N1', role: '일본국제교류기금 · 일본국제교육지원협회' },
      { period: '2022.11', title: '정보처리기사', role: '과학기술정보통신부' },
    ],
  },
  ja: {
    intro: [
      'iOS / SwiftUIエンジニアとして、ユーザーがアプリの中で迷わないよう入力の深さを減らし、ホーム・ロック画面のウィジェットからすぐ届くUXを作ることに関心があります。',
      '自分で使うInsulin Noteでは投与記録を1回で残せる体験を作り、KanjiMateではスクリーンショット・OCR・Live Activityで読む流れを止めない補助を試しています。',
      'iOSアプリ開発のポジションで、プロダクトとユーザーの課題を一緒に考えるチームで働きたいと考えています。',
    ],
    skills: [
      { label: 'Language', items: ['Swift'] },
      { label: 'UI', items: ['SwiftUI', 'UIKit', 'WidgetKit', 'ActivityKit'] },
      { label: 'Architecture', items: ['TCA', 'MV・単方向データフロー', 'Swift Concurrency・Actor'] },
      {
        label: 'Data & Platform',
        items: ['SwiftData', 'Firebase', 'Keychain', 'Vision', 'AppIntents', 'JWT'],
      },
      { label: 'Tools', items: ['Git', 'REST API'] },
      { label: 'Secondary', items: ['Java・Spring', 'JavaScript・React'], secondary: true },
    ],
    experience: [
      {
        period: '2026.01 – 2026.12',
        title: 'サムスン青年SWアカデミー(SSAFY) 15期',
        role: '受講生',
        summary:
          'Java・Springで基礎を固めた後、共通プロジェクトVeilと特化プロジェクトSteam運営診断プラットフォームをチームで開発しています。',
      },
      {
        period: '2024.06 – 2024.11',
        title: 'LIKELION TECHIT iOSアプリスクール 6期',
        role: '修了',
        summary:
          'UIKit・SwiftUIでiOSアプリを作りながらチーム開発とHIGを学び、ListUp・Timoney・PetMateなどのチームプロジェクトを行いました。',
      },
      {
        period: '2021.03 – 2021.08',
        title: 'INTOCNS',
        role: 'インターン・IT部門バックエンド',
        summary:
          'MySQL・PHP CI4・Vue.jsでSNSアプリ「イントゥペット」のリニューアルに参加し、会員登録、散歩記録(Kakaoマップ・GPS)、Androidウェブアプリ、FCMプッシュを実装しました。',
      },
      {
        period: '2019.07 – 2019.12',
        title: 'ブルーツリー',
        role: '契約社員・情報システム部',
        summary:
          'MySQL・Laravel・Reactでスマートファクトリー化した社内管理サイトを開発し、出退勤、車両管理、掲示板、Socket.ioチャットを実装しました。',
      },
    ],
    education: [
      { period: '2017.03 – 2022.02', title: '明知大学校', role: 'コンピュータ工学科 卒業' },
      { period: '2014.03 – 2017.02', title: '孝陽高等学校', role: '理系 卒業' },
    ],
    certifications: [
      { period: '2026.06', title: 'SQLD', role: '韓国データ産業振興院' },
      { period: '2026.03', title: 'OPIc 英語', role: 'ACTFL' },
      { period: '2024.01', title: 'JLPT N1', role: '国際交流基金・日本国際教育支援協会' },
      { period: '2022.11', title: '情報処理技師', role: '韓国 科学技術情報通信部' },
    ],
  },
};
