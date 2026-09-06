import type { NextConfig } from "next";

// GitHub Pages のプロジェクトサイト (https://<org>.github.io/<repo>/) で公開する間は
// CI が NEXT_PUBLIC_BASE_PATH="/<repo>" を渡す。独自ドメイン適用後は空文字になる。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
