import type { Metadata } from "next";
import Link from "next/link";
import { SectionHead } from "@/components/SectionHead";
import { formatDate, getAllNews } from "@/lib/news";
import { ogImages, site } from "@/lib/site";

const description = `${site.name}からのお知らせ・プレスリリース一覧。`;

export const metadata: Metadata = {
  title: "お知らせ",
  description,
  alternates: { canonical: "/news/" },
  openGraph: { url: "/news/", title: "お知らせ", description, images: ogImages },
};

export default function NewsPage() {
  const news = getAllNews();
  return (
    <section className="subpage" aria-labelledby="pageTitle">
      <div className="wrap-narrow news-articles">
        <SectionHead as="h1" id="pageTitle" ja="お知らせ" en="NEWS" size="lg" />
        {news.map((n) => (
          <article className="article reveal" key={n.slug}>
            <div className="when">
              <time dateTime={n.date}>{formatDate(n.date)}</time>
              {n.time && <span className="clock">{n.time}</span>}
            </div>
            <div className="body">
              <Link className="title" href={`/news/${n.slug}/`}>{n.title}</Link>
              <p className="excerpt">{n.excerpt}</p>
              <Link className="btn btn-purple btn-sm" href={`/news/${n.slug}/`}>READ MORE</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
