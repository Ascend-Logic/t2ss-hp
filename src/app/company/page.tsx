import type { Metadata } from "next";
import { SectionHead } from "@/components/SectionHead";
import { businessLines, ogImages, partners, site } from "@/lib/site";

const description = `${site.name}の会社概要、所在地、事業内容、主な提携先。`;

export const metadata: Metadata = {
  title: "会社概要",
  description,
  alternates: { canonical: "/company/" },
  openGraph: { url: "/company/", title: "会社概要", description, images: ogImages },
};

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "会社名", value: site.nameWithAbbr },
  { label: "代表者名", value: `代表社員 ${site.representative} (${site.representativeRoman})` },
  { label: "所在地", value: `〒${site.address.postalCode}\n${site.address.region}${site.address.locality}${site.address.street}` },
  { label: "TEL", value: site.tel },
  { label: "MAIL", value: <a href={`mailto:${site.email}`}>{site.email}</a> },
  { label: "事業開始", value: site.businessStart },
  { label: "資本金", value: site.capital },
  { label: "パートナー資格", value: site.partnerQualification },
  { label: "事業内容", value: businessLines.map((b) => `◇${b}`).join("\n") },
  { label: "主な提携先", value: partners.join("\n") },
];

export default function CompanyPage() {
  return (
    <section className="subpage" aria-labelledby="pageTitle">
      <div className="wrap-narrow">
        <SectionHead as="h1" id="pageTitle" ja="会社概要" en="COMPANY" size="lg" />
        <p className="lead">T2SS では、“お客様と共に頂上をめざす”というビジョンを掲げ、以下のビジネスを主軸としまして、お客様の事業成長を支える一員となる事を目指しております。</p>
        <dl className="spec">
          {rows.map((r) => (
            <div className="row" key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
