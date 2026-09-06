import Link from "next/link";

export function CtaBand() {
  return (
    <section className="cta-band" aria-label="採用">
      <div className="wrap grid">
        <Link className="cta cta-cyan reveal" href="/recruit/">
          <span className="lbl">
            <span className="en">RECRUIT</span>
            <span className="ja">採用情報　Recruitment</span>
          </span>
          <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
