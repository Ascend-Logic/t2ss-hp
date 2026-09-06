/**
 * サイト全体で共有する定数。
 * 会社情報・ナビ・事業内容・提携先はここだけを直せば全ページに反映される。
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ascend-logic.github.io/t2ss-hp";

export const site = {
  name: "T2サミットソリューションズ合同会社",
  nameWithAbbr: "T2サミットソリューションズ合同会社(T2ss)",
  shortName: "T2SS",
  tagline: "お客様と共に頂上をめざす",
  description:
    "T2サミットソリューションズ合同会社(T2SS)は、セキュリティソリューション・生成AI導入支援・ITエンジニア提供（Ascend Freelance）の3本柱で、お客様と共に頂上をめざします。",
  /** 末尾スラッシュなしの公開URL。独自ドメイン適用後は CI の環境変数で切り替える */
  url: rawUrl.replace(/\/+$/, ""),
  email: "info@t2tss.com",
  tel: "070-3163-3020",
  telHref: "tel:07031633020",
  address: {
    postalCode: "152-0035",
    region: "東京都",
    locality: "目黒区",
    street: "自由が丘1丁目16-18",
    /** 表示用 */
    full: "〒152-0035 東京都目黒区自由が丘1丁目16-18",
  },
  representative: "宮本 敏匡",
  representativeRoman: "Toshimasa MIYAMOTO",
  businessStart: "2025年3月",
  businessStartIso: "2025-03",
  capital: "10,000,000円",
  partnerQualification: "Summit Group(サミットグループ)コアパートナー",
  /** 現行サイト（WordPress） */
  legacyUrl: "https://t2tss.com/",
  ascendFreelanceUrl: "https://ascend-freelance.com/",
} as const;

/** GitHub Pages のプロジェクトサイト配下で公開する間のパス接頭辞（独自ドメイン後は空） */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/** public/ 配下のファイルパスに basePath を付ける。next/image は unoptimized だと付けてくれない */
export const asset = (path: string) => `${basePath}${path}`;

/** OGP 画像。ページごとの openGraph は layout の設定を丸ごと上書きするので、各ページで必ず渡す */
export const ogImages = [{ url: "/img/logo.png", width: 1200, height: 1200, alt: site.name }];

export const mailto = `mailto:${site.email}`;

export const nav = [
  { href: "/", en: "Home", ja: "ホーム" },
  { href: "/news/", en: "News", ja: "お知らせ" },
  { href: "/company/", en: "Company", ja: "会社概要" },
  { href: "/#service", en: "Service", ja: "事業概要" },
] as const;

export const footerNav = [
  { href: "/", label: "Home ／ ホーム" },
  { href: "/news/", label: "News ／ お知らせ" },
  { href: "/company/", label: "Company ／ 会社概要" },
  { href: "/#service", label: "Service ／ 事業概要" },
  { href: "/recruit/", label: "Recruitment ／ 採用情報" },
  { href: mailto, label: "Contact ／ お問い合わせ" },
] as const;

/** 3本柱。ヒーロー・About・Service カードで共通利用 */
export const pillars = [
  { label: "セキュリティソリューション事業", color: "#7c5cd6" },
  { label: "生成AI導入支援事業", color: "#5a4a9c" },
  { label: "ITエンジニア提供事業「Ascend Freelance」", color: "#1fb0e8" },
] as const;

export type ServiceItem = { text: string; sub?: string };
export type Service = {
  num: string;
  tone: "purple" | "navy" | "cyan";
  icon: string;
  title: string;
  badge?: string;
  items: ServiceItem[];
  link?: { href: string; label: string; external?: boolean };
};

export const services: Service[] = [
  {
    num: "SERVICE.01",
    tone: "purple",
    icon: "/img/svc-security.svg",
    title: "セキュリティソリューション事業",
    items: [
      { text: "セキュリティコンサルサービス" },
      { text: "WAF＋簡易SOCサービス" },
      { text: "脆弱性診断サービス", sub: "（Web/プラットフォーム）" },
      { text: "モバイルアプリ診断 他" },
    ],
  },
  {
    num: "SERVICE.02",
    tone: "navy",
    icon: "/img/svc-ai.svg",
    title: "生成AI導入支援事業",
    items: [
      { text: "AI実装支援サービス", sub: "（株式会社レインフォレストと共同提供）" },
      { text: "MCPを活用したセキュアなAI・データ連携" },
      { text: "業務プロセスの可視化とAI適合度診断" },
      { text: "調達・人事・CS・ヘルプデスク等 周辺業務へのAI導入 他" },
    ],
    link: { href: "/news/ai-implementation-support/", label: "プレスリリースを見る →" },
  },
  {
    num: "SERVICE.03",
    tone: "cyan",
    icon: "/img/svc-engineer.svg",
    title: "ITエンジニア提供事業",
    badge: "Ascend Freelance",
    items: [
      { text: "フリーランスエージェント「Ascend Freelance」", sub: "（FDE・AI案件をはじめ高単価案件に強い）" },
      { text: "プロジェクトマネジメント（PM／PMO）" },
      { text: "オープン系／Web系技術者の提供" },
      { text: "SAP他ERP導入エンジニアの提供 他" },
    ],
    link: { href: site.ascendFreelanceUrl, label: "Ascend Freelance サイトへ →", external: true },
  },
];

/** 会社概要「事業内容」 */
export const businessLines = [
  "セキュリティソリューション",
  "セキュリティコンサル＆ツール導入",
  "生成AI導入支援サービス",
  "ITエンジニア提供サービス「Ascend Freelance」",
  "プロジェクトマネジメントサービス",
];

/** 会社概要「主な提携先」（掲載順） */
export const partners = [
  "株式会社アイ・エフ・ティ",
  "株式会社アイテック",
  "株式会社イーセクター",
  "株式会社アリス",
  "株式会社エム・アール・オー",
  "株式会社クロスオーバー",
  "株式会社システムズエンジニアリング",
  "株式会社シティリバース",
  "株式会社セキュリティエキスパート",
  "Summit Group(サミットグループ)",
  "株式会社ネクステージ",
  "セイコソリューションズ株式会社",
  "株式会社ソルパック",
  "株式会社フレンズシステムコンサルティング",
  "株式会社ブレインズ",
  "ミツイ情報株式会社",
  "レノボ・ジャパン合同会社",
  "レイ・イージスジャパン株式会社",
  "株式会社Ascend Logic",
  "株式会社FCN",
  "FITEC株式会社",
  "GHコンサルティング株式会社",
];
