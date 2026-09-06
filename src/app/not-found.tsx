import Link from "next/link";

export default function NotFound() {
  return (
    <section className="subpage">
      <div className="wrap-narrow notfound">
        <div className="code gradient-text">404</div>
        <h1>ページが見つかりません</h1>
        <p>お探しのページは移動または削除された可能性があります。</p>
        <Link className="btn btn-purple" href="/">トップページへ</Link>
      </div>
    </section>
  );
}
