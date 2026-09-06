import type { Metadata } from "next";
import { SectionHead } from "@/components/SectionHead";
import { ogImages, site } from "@/lib/site";

const description = `${site.name}の採用情報。募集職種：IT関連（上流コンサル／PM／PMO／SE）。`;

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
  { label: "給与", value: "¥50,000/月より上限なし\nご自身の能力、働き方により相談" },
  { label: "資格", value: "不問、ビジネス英語可能尚歓迎" },
  { label: "学歴", value: "不問" },
  { label: "副業", value: "可" },
];

export default function RecruitPage() {
  return (
    <section className="subpage" aria-labelledby="pageTitle">
      <div className="wrap-narrow">
        <SectionHead ja="採用情報" en="RECRUIT" tone="cyan" size="lg" />
        <h1 className="role" id="pageTitle">募集職種：IT関連</h1>
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
      </div>
    </section>
  );
}
