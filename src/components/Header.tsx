"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { BrandMark } from "./BrandMark";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`header${open ? " is-open" : ""}`}>
      <Link className="brand" href="/" onClick={close}>
        <BrandMark />
        <span className="brand-text">
          <span className="brand-name">{site.name}</span>
          <span className="brand-tag">{site.tagline}</span>
        </span>
      </Link>
      <button
        className="menu-btn"
        type="button"
        aria-controls="nav"
        aria-expanded={open}
        aria-label="メニュー"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="nav" id="nav" aria-label="メインナビゲーション">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "is-active" : undefined}
              aria-current={active ? "page" : undefined}
              onClick={close}
            >
              <span className="dot" />
              <span className="lbl">
                <span className="en">{item.en}</span>
                <span className="ja">{item.ja}</span>
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="header-cta">
        <Link className="btn btn-cyan" href="/recruit/" onClick={close}>RECRUIT</Link>
      </div>
    </header>
  );
}
