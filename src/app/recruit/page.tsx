import type { Metadata } from "next";
import { SectionHead } from "@/components/SectionHead";
import { ogImages, site } from "@/lib/site";

const description = `${site.name}の採用情報。募集職種：IT関連（上流コンサル／PM／PMO／SE）。個人事業主・フリーランスの方は業務委託（Ascend Freelance）でも募集しています。`;

export const metadata: Metadata = {
  title: "採用情報",
  description,
  alternates: { canonical: "/recruit/" },
  openGraph: { url: "/recruit/", title: "採用情報", description, images: ogImages },
};

const rows: { label: string; value: string }[] = [
  { label: "雇用形態", value: "正社員及び契約社員 ※試用期間6ケ月後正式採用予定" },
  { label: "採用予定人数", value: "若干名" },
  {
    label: "業務内容",
    value: `□主な仕事内容
✔ お客様視点での現状分析～構想立案～実施計画立案迄
　＊業務面/IT面、両面でのアプローチ
　＊RFP/RFI作成～ベンダ選定支援
✔ 各業種のIT導入プロジェクトマネージメント
✔ ERP/各パッケージ/スクラッチ開発プロジェクトマネージメント`,
  },
  {
    label: "必要な経験等",
    value: `【必須】
１．IT業界経験3年以上
【尚可】
２．以下の業務経験・知識をお持ちの方
1）上流コンサル(要件定義支援)
　＊製造業、流通、金融業界経験者は歓迎
　＊ERP導入経験者は歓迎
　例：SAP/Dynamics365/IFS/GRANDIT/STRAMMIC/OracleCloud 等
2）プロジェクトマネージメント(PM)
　＊システム設計、導入、運用等
　＊ERP導入経験者は歓迎
　例：SAP/Dynamics365/IFS/GRANDIT/STRAMMIC/OracleCloud 等
3）プロジェクトマネージメントオフィサー(PMO)
　＊システム設計、導入、運用等
　＊ERP導入経験者は歓迎
　例：SAP/Dynamics365/IFS/GRANDIT/STRAMMIC/OracleCloud 等
　＊ServiceNow, Salesforce導入経験者は歓迎
4）システムエンジニア(SE)
　＊開発経験(Java,C＃、.Net系、Python,PHP,SQL Server 等)
　＊上記の経験3年以上だと尚歓迎
　＊未経験でも、独学の意欲のある方も歓迎`,
  },
  { label: "勤務地", value: "東京都港区（虎ノ門） / 在宅ワーク可(日数は相談の上確定)" },
  { label: "勤務時間", value: "通常9:00～18:00（1h休憩）参考、個別相談による" },
  {
    label: "待遇",
    value: `・各種社会保険（雇用・労災・健康・厚生年金）
・交通費全額支給
・社内規定に準じ、提携都内大学/大学院に編入制度あり
・個々に応じた働き方により就労可能`,
  },
  { label: "給与", value: "スキル見合い\n例）¥50,000/月より上限なし 等" },
  { label: "資格", value: "不問、ビジネス英語可能尚歓迎" },
  { label: "学歴", value: "不問" },
  { label: "副業", value: "可" },
];

/** 個人事業主・業務委託の募集（Ascend Freelance の募集内容の要約） */
const freelanceRows: { label: string; value: string }[] = [
  { label: "契約形態", value: "業務委託（個人事業主・フリーランス）" },
  {
    label: "対象",
    value: `FDE・AIエージェント開発をはじめとする IT エンジニア案件
　＊PM／PMO／SE／AI 開発など、ご経験に応じてご提案`,
  },
  {
    label: "案件・報酬",
    value: `高単価案件に強いフリーランスエージェント「Ascend Freelance」の案件をご紹介
　＊使用技術・開発フェーズ・チーム体制まで確認した上でご提案
　＊報酬はご経験に見合った条件をご提示`,
  },
  {
    label: "サポート",
    value: `元メガベンチャーエンジニアの専任担当が伴走
　＊単価・稼働条件はクライアントと担当者が直接交渉
　＊参画後も定期的にフォローし、課題があれば間に入って調整`,
  },
  {
    label: "登録の流れ",
    value: `1）メールアドレスのみで会員登録
2）オンライン面談で経験・希望条件を確認
3）案件のご提案 → 契約 → 参画後フォロー`,
  },
  {
    label: "窓口",
    value: `本募集の面談・契約等の具体的な対応は、${site.ascendLogicName}（Ascend Freelance 運営）が行います。`,
  },
];

export default function RecruitPage() {
  return (
    <section className="subpage" aria-labelledby="pageTitle">
      <div className="wrap-narrow">
        <SectionHead ja="採用情報" en="RECRUIT" tone="cyan" size="lg" />
        <h1 className="role" id="pageTitle">募集職種：IT関連（正社員・契約社員）</h1>
        <dl className="spec cyan">
          {rows.map((r) => (
            <div className="row" key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
        <div className="cta-band" style={{ padding: "56px 0 0", background: "none" }}>
          <div className="grid">
            <a className="cta cta-cyan" href={`mailto:${site.email}?subject=${encodeURIComponent("採用応募")}`}>
              <span className="lbl">
                <span className="en">ENTRY</span>
                <span className="ja">ご応募・お問い合わせ　{site.email}</span>
              </span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <h2 className="role" id="freelanceTitle">個人事業主・フリーランスの方（業務委託）</h2>
        <p className="note">
          個人事業主・フリーランスのエンジニアの方は、当社提携のフリーランスエージェント「Ascend Freelance」を通じて業務委託でご参画いただけます。募集内容の概要は以下のとおりです。詳細・最新の案件は Ascend Freelance のサイトをご覧ください。
        </p>
        <dl className="spec cyan" aria-labelledby="freelanceTitle">
          {freelanceRows.map((r) => (
            <div className="row" key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
        <div className="cta-band" style={{ padding: "56px 0 0", background: "none" }}>
          <div className="grid">
            <a className="cta cta-cyan" href={site.ascendFreelanceUrl} target="_blank" rel="noopener">
              <span className="lbl">
                <span className="en">PROJECTS</span>
                <span className="ja">案件を見る　Ascend Freelance</span>
              </span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="cta cta-cyan" href={site.ascendFreelanceSignupUrl} target="_blank" rel="noopener">
              <span className="lbl">
                <span className="en">SIGN UP</span>
                <span className="ja">会員登録（メールアドレスのみ）</span>
              </span>
              <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
