import { pageMetadata } from "@/lib/metadata";
import { Cta, ProjectCard } from "@/components/cards";
import { projects } from "@/lib/site-data";
export const metadata = pageMetadata(
  "Referanslarım",
  "Furkan Akpınar’ın farklı sektörler için hazırladığı web siteleri, ürün deneyimleri ve konsept projeler.",
);
export default function Page() {
  return (
    <main tabIndex={-1} id="main-content">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="section-kicker">Referanslarım / 07</span>
            <h1>
              Sektöre değil, <em>probleme özel</em> işler.
            </h1>
          </div>
          <p>
            Farklı sektörler için tasarlanan kurumsal siteler, ürün deneyimleri
            ve özgün konsept projelerden seçki.
          </p>
        </div>
      </section>
      <section className="section light-section">
        <div className="container intro-note dark-note">
          <span>Seçili çalışmalar · 2026</span>
          <p>
            Farklı sektörlerdeki çalışmaların görsel yaklaşımını ve proje
            kapsamlarını inceleyin.
          </p>
        </div>
        <div className="container projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="section principles-section">
        <div className="container section-head">
          <div>
            <span className="section-kicker">Her Projede</span>
            <h2>Aynı kalite kontrolü.</h2>
          </div>
          <p>
            Sektör ve görsel dil değişse de temel kalite standardı değişmez.
          </p>
        </div>
        <div className="container compact-list">
          {[
            "Markaya özel tasarım",
            "Tüm cihazlarda deneyim",
            "Hız ve teknik SEO",
            "Anlaşılır içerik mimarisi",
            "Yayın öncesi kalite kontrolü",
          ].map((x, i) => (
            <span key={x}>
              0{i + 1} · {x}
            </span>
          ))}
        </div>
      </section>
      <Cta
        eyebrow="Sıradaki proje"
        title="Bu seçkiye markanızın hikâyesini ekleyelim."
      />
    </main>
  );
}
