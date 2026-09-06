import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap grid">
        <div>
          <Link className="brand" href="/">
            <BrandMark small />
            <span className="brand-name">{site.name}</span>
          </Link>
          <address>
            {site.address.full}
            <br />
            TEL: <a href={site.telHref}>{site.tel}</a>
            <br />
            MAIL：<a href={`mailto:${site.email}`}>{site.email}</a>
          </address>
        </div>
        <nav aria-label="フッターナビゲーション">
          {footerNav.map((item) =>
            item.href.startsWith("mailto:") ? (
              <a key={item.href} href={item.href}>{item.label}</a>
            ) : (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ),
          )}
        </nav>
      </div>
      <div className="wrap copy">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  );
}
