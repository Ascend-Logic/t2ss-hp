# t2ss-hp

T2サミットソリューションズ合同会社 (T2SS) コーポレートサイト。
Next.js (App Router) の静的エクスポートで生成し、GitHub Actions から GitHub Pages に公開する。

## 構成

- `src/app/` — ページ (`/`, `/news/`, `/news/[slug]/`, `/company/`, `/recruit/`) と `sitemap.xml` / `robots.txt`
- `src/components/` — ヘッダー・フッターなど共通部品
- `src/lib/site.ts` — 会社情報・ナビ・事業内容・提携先。**文言修正はまずここ**
- `content/news/*.md` — お知らせ記事（frontmatter + Markdown）。ファイルを追加すれば一覧・詳細・sitemap に自動反映
- `public/img/` — 画像・イラスト
- `design/` — Claude Design で作成したデザイン原本（`T2SS Website v3.dc.html`）。公開対象ではない

## 開発

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # out/ に静的サイトを生成
npx serve out      # 生成物の確認
```

## お知らせ記事の追加

`content/news/<slug>.md` を作成する。`slug` がそのまま URL (`/news/<slug>/`) になる。

```md
---
title: "記事タイトル"
date: "2026-09-01"
time: "10:00 AM"        # 任意
excerpt: "一覧・OGP に使う要約"
source: "https://..."   # 任意（転載元）
---

本文（Markdown）
```

## 公開

- `main` に push すると `.github/workflows/deploy.yml` がビルドして GitHub Pages にデプロイする
- リポジトリ設定 → Pages → Source を **GitHub Actions** にしておくこと
- 独自ドメインを当てるときは Pages 設定でカスタムドメインを登録するだけでよい。
  ビルド時の `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BASE_PATH` は `actions/configure-pages` の出力から自動で決まる
