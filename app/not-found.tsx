import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="container">
          <span className="section-kicker">404 / Sayfa bulunamadı</span>
          <h1>
            Bu sayfa <em>bulunamadı.</em>
          </h1>
          <p className="not-found-copy">
            Bağlantı değişmiş olabilir. Ana sayfadan devam edebilirsiniz.
          </p>
          <Link href="/" className="button button-primary">
            Ana Sayfaya Dön
          </Link>
        </div>
      </section>
    </main>
  );
}
