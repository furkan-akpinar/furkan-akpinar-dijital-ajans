import { pageMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/contact-form";
export const metadata = pageMetadata(
  "İletişim",
  "Web sitesi, yazılım ve dijital büyüme projeleri için çalışma kapsamı ve ilk görüşme bilgileri.",
);
export default function Page() {
  return (
    <main tabIndex={-1} id="main-content">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="section-kicker">İletişim / 04</span>
            <h1>
              Aklınızdaki işi <em>birlikte netleştirelim.</em>
            </h1>
          </div>
          <p>
            Web, yazılım ve dijital büyüme projeleri için kapsamı birlikte
            belirleyelim.
          </p>
        </div>
      </section>
      <section className="section light-section">
        <div className="container contact-layout">
          <aside>
            <span className="section-kicker">Projeyi Anlat</span>
            <h2>İyi bir başlangıç için birkaç bilgi yeterli.</h2>
            <p>
              Proje görüşmesinde hedefinizi, ihtiyacınız olan hizmeti ve varsa
              zaman planınızı birlikte değerlendiririz.
            </p>
            <div className="contact-info">
              <div>
                <span>Çalışma Alanı</span>
                <strong>Türkiye · Uzaktan</strong>
              </div>
              <div>
                <span>Uzmanlık</span>
                <strong>Web · Yazılım · Büyüme</strong>
              </div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-grid">
          <div>
            <span className="section-kicker">İlk Görüşme</span>
            <h2>Neleri konuşacağız?</h2>
          </div>
          <div className="faq-list">
            {[
              [
                "Projenin hedefi ve mevcut durum",
                "Bugün nerede olduğunuzu, neyi değiştirmek istediğinizi ve başarıyı nasıl ölçeceğimizi konuşuruz.",
              ],
              [
                "Kapsam, zaman ve öncelikler",
                "İlk sürümde olması gerekenleri ve sonraya bırakılabilecekleri birlikte ayırırız.",
              ],
              [
                "Çalışma modeli ve sonraki adım",
                "Proje, sürekli destek veya danışmanlık modellerinden uygun olanı netleştiririz.",
              ],
            ].map((x, i) => (
              <details key={x[0]} open={i === 0}>
                <summary>{x[0]}</summary>
                <p>{x[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
