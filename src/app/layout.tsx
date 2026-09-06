import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { RevealInit } from "@/components/RevealInit";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.shortName}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "ja_JP",
    images: [{ url: "/img/logo.png", width: 1200, height: 1200, alt: site.name }],
  },
  twitter: { card: "summary" },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: `${site.url}/`,
  logo: `${site.url}/img/logo.png`,
  email: site.email,
  telephone: `+81-${site.tel.replace(/^0/, "")}`,
  foundingDate: site.businessStartIso,
  founder: { "@type": "Person", name: site.representative },
  address: {
    "@type": "PostalAddress",
    postalCode: site.address.postalCode,
    addressRegion: site.address.region,
    addressLocality: site.address.locality,
    streetAddress: site.address.street,
    addressCountry: "JP",
  },
  sameAs: [site.legacyUrl, site.ascendFreelanceUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* フォントはブラウザ側で Google Fonts から読む。next/font はビルド時に取得が必要でネットワーク断で落ちるため使わない */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
        />
        {/* JS 無効時はフェードイン待ちにせず最初から表示する */}
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={organizationJsonLd} />
        <div className="page">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <RevealInit />
      </body>
    </html>
  );
}
