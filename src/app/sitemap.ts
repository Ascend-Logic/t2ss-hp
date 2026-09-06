import type { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const news = getAllNews();
  const latest = news[0]?.date ?? site.businessStartIso;
  const pages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: latest, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/news/`, lastModified: latest, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/company/`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/recruit/`, changeFrequency: "monthly", priority: 0.6 },
  ];
  const articles: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${site.url}/news/${n.slug}/`,
    lastModified: n.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
