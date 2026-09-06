import type { ReactNode } from "react";

type Props = {
  ja: ReactNode;
  en: ReactNode;
  id?: string;
  tone?: "purple" | "cyan";
  size?: "md" | "lg";
  /** 見出しタグ。ページタイトルなら h1 */
  as?: "h1" | "span";
  reveal?: boolean;
};

export function SectionHead({ ja, en, id, tone = "purple", size = "md", as: Tag = "span", reveal }: Props) {
  return (
    <div className={`sec-head${size === "lg" ? " lg" : ""}${reveal ? " reveal" : ""}`}>
      <Tag className="ja" id={id}>{ja}</Tag>
      <span className={`en${tone === "cyan" ? " cyan" : ""}`}>{en}</span>
    </div>
  );
}
