import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, getAllNews, getNews } from "@/lib/news";
import { ogImages, site } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllNews().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const n = getNews(slug);
  const path = `/news/${slug}/`;
  return {
    title: n.title,
    description: n.excerpt,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title: n.title, description: n.excerpt, publishedTime: n.date, images: ogImages },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const n = getNews(slug);
  const url = `${site.url}/news/${slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: n.title,
    description: n.excerpt,
    datePublished: n.date,
    dateModified: n.date,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name, url: `${site.url}/` },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/img/logo.png` },
    },
  };

  return (
    <section className="subpage" aria-labelledby="pageTitle">
      <JsonLd data={jsonLd} />
      <div className="wrap-narrow article-page">
        <div className="sec-head lg">
          <span className="ja">お知らせ</span>
          <span className="en">NEWS</span>
        </div>
        <header className="article-head reveal">
          <div className="when">
            <time dateTime={n.date}>{formatDate(n.date)}</time>
            {n.time && <span className="clock">{n.time}</span>}
          </div>
          <h1 id="pageTitle">{n.title}</h1>
        </header>
        <div className="article-body reveal">
          <div className="prose" dangerouslySetInnerHTML={{ __html: n.html }} />
        </div>
        <div className="article-foot">
          <Link className="btn btn-purple btn-sm" href="/news/">← お知らせ一覧へ</Link>
          {n.source && (
            <p className="src">
              初出：<a href={n.source} target="_blank" rel="noopener">t2tss.com の記事</a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
