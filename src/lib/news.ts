import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * お知らせ記事は content/news/<slug>.md に置く。
 * frontmatter: title / date (YYYY-MM-DD) / time? / excerpt / source?（転載元URL）
 */
export type NewsMeta = {
  slug: string;
  title: string;
  date: string;
  time?: string;
  excerpt: string;
  source?: string;
};

export type NewsArticle = NewsMeta & { html: string };

const NEWS_DIR = path.join(process.cwd(), "content", "news");

function readFile(slug: string) {
  const raw = fs.readFileSync(path.join(NEWS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const meta: NewsMeta = {
    slug,
    title: String(data.title),
    date: String(data.date),
    time: data.time ? String(data.time) : undefined,
    excerpt: String(data.excerpt ?? ""),
    source: data.source ? String(data.source) : undefined,
  };
  return { meta, content };
}

export function getAllNews(): NewsMeta[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readFile(f.replace(/\.md$/, "")).meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getNews(slug: string): NewsArticle {
  const { meta, content } = readFile(slug);
  const html = marked.parse(content, { gfm: true, async: false }) as string;
  return { ...meta, html };
}

/** 2026-06-22 → 2026.06.22 */
export function formatDate(iso: string) {
  return iso.replaceAll("-", ".");
}
