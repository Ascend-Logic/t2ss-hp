import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { SectionHead } from "@/components/SectionHead";
import { formatDate, getAllNews } from "@/lib/news";
import { asset, ogImages, pillars, services, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: `${site.name} | ${site.shortName}`, description: site.description, images: ogImages },
};

const aboutIllustrations = [
  ["/img/about-1.svg", "/img/about-2.svg"],
  ["/img/about-3.svg", "/img/about-4.svg"],
  ["/img/about-5.svg", "/img/about-6.svg"],
];

export default function HomePage() {
  const news = getAllNews().slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="heroTitle">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="hero-body">
          <h1 id="heroTitle">
            <span className="l1">「T2サミット</span>
            <span className="l2">ソリューションズ合同会社</span>
            <span className="l3">(T2SS)」へようこそ</span>
          </h1>
          <p>T2SS では、“お客様と共に頂上をめざす”というビジョンを掲げ、以下のビジネスを主軸としまして、お客様の事業成長を支える一員となる事を目指しております。</p>
          <p>IT関連のみならず、業務効率化などのお悩みをお持ちの企業の皆様、一度ご連絡下さい。</p>
          <ul className="hero-list">
            {pillars.map((p) => (
              <li key={p.label}>
                <span className="dot" style={{ background: p.color }} />
                {p.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <div className="mask">
            <Image src={asset("/img/hero-visual.svg")} alt="" width={900} height={700} priority />
          </div>
          <span className="bar bar-1" />
          <span className="bar bar-2" />
        </div>
        <div className="hero-copy">© 2026 T2 Summit Solutions LLC.</div>
        <div className="hero-scroll" aria-hidden="true">
          <span className="txt">SCROLL</span>
          <span className="line" />
        </div>
      </section>

      <section className="news-strip reveal" aria-labelledby="newsTitle">
        <div className="wrap news-card">
          <div className="ttl">
            <span className="en" id="newsTitle">NEWS</span>
            <span className="ja">お知らせ</span>
          </div>
          <div className="news-list">
            {news.map((n) => (
              <Link key={n.slug} href={`/news/${n.slug}/`}>
                <time dateTime={n.date}>{formatDate(n.date)}</time>
                <span className="t">{n.title}</span>
              </Link>
            ))}
            <Link className="link-more" href="/news/">VIEW MORE →</Link>
          </div>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="aboutTitle">
        <div className="orb" />
        <div className="wrap grid">
          <div className="reveal">
            <SectionHead id="aboutTitle" ja="T2SSが提供できること" en="ABOUT US" />
            <h2 className="gradient-text">“お客様と共に頂上をめざす”</h2>
            <p className="lead">
              T2SS では、“お客様と共に頂上をめざす”というビジョンを掲げ、以下のビジネスを主軸としまして、お客様の事業成長を支える一員となる事を目指しております。
              <br />
              IT関連のみならず、業務効率化などのお悩みをお持ちの企業の皆様、一度ご連絡下さい。
            </p>
            <ul className="list">
              {pillars.map((p) => (
                <li key={p.label}>
                  <span style={{ color: p.color }}>◆</span>
                  {p.label}
                </li>
              ))}
            </ul>
            <Link className="btn btn-purple" href="/company/">VIEW MORE</Link>
          </div>
          <div className="photo-grid reveal" aria-hidden="true">
            {aboutIllustrations.map((col, i) => (
              <div className="col" key={i}>
                {col.map((src) => (
                  <div className="photo" key={src}>
                    <Image src={asset(src)} alt="" width={320} height={320} loading="lazy" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="service" aria-labelledby="serviceTitle">
        <div className="orb" />
        <div className="wrap">
          <SectionHead id="serviceTitle" ja="T2SSのサービス" en="SERVICE ／ 事業概要" reveal />
          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc-card reveal" key={s.num}>
                <div className="ico">
                  <Image src={asset(s.icon)} alt="" width={160} height={160} loading="lazy" />
                </div>
                <span className={`num${s.tone === "purple" ? "" : ` ${s.tone}`}`}>{s.num}</span>
                <h3>
                  {s.title}
                  {s.badge && (
                    <>
                      <br />
                      <span className="svc-name">{s.badge}</span>
                    </>
                  )}
                </h3>
                <ul>
                  {s.items.map((it) => (
                    <li key={it.text}>
                      ・{it.text}
                      {it.sub && (
                        <>
                          <br />
                          <span className="sub">{it.sub}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
                {s.link &&
                  (s.link.external ? (
                    <a className={`more${s.tone === "cyan" ? " cyan" : ""}`} href={s.link.href} target="_blank" rel="noopener">
                      {s.link.label}
                    </a>
                  ) : (
                    <Link className={`more${s.tone === "cyan" ? " cyan" : ""}`} href={s.link.href}>
                      {s.link.label}
                    </Link>
                  ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-teaser" aria-labelledby="companyTitle">
        <div className="wrap grid">
          <Image className="reveal" src={asset("/img/about.jpg")} alt="" width={900} height={600} style={{ height: "auto" }} loading="lazy" />
          <div className="reveal">
            <SectionHead id="companyTitle" ja="T2SSについて" en="COMPANY ／ About us" />
            <address>
              {site.address.full}
              <br />
              {site.name}
              <br />
              TEL: {site.tel}
              <br />
              MAIL：{site.email}
            </address>
            <Link className="btn btn-purple" href="/company/">READ MORE</Link>
          </div>
        </div>
      </section>

      <section className="recruit-teaser" aria-labelledby="recruitTitle">
        <div className="orb" />
        <div className="wrap grid">
          <div className="reveal">
            <SectionHead id="recruitTitle" ja="採用情報" en="RECRUIT" tone="cyan" />
            <h2 className="gradient-text cyan">Let&apos;s Work Together!</h2>
            <h3>募集職種：IT関連</h3>
            <p>
              正社員及び契約社員 ※試用期間6ケ月後正式採用予定
              <br />
              勤務地：東京都港区（虎ノ門） / 在宅ワーク可(日数は相談の上確定)
            </p>
            <Link className="btn btn-cyan" href="/recruit/">VIEW MORE</Link>
          </div>
          <div className="recruit-visual reveal">
            <Image src={asset("/img/hero.jpg")} alt="" width={1500} height={812} loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
