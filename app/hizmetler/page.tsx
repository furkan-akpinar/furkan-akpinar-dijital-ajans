import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { Cta, ServiceCard } from "@/components/cards";
import { services } from "@/lib/site-data";
export const metadata = pageMetadata(
  "Hizmetler",
  "Kurumsal web sitesi, e-ticaret, özel yazılım, UI/UX, SEO ve dijital büyüme hizmetlerini inceleyin.",
);
export default function Page() {
  return (
    <main tabIndex={-1} id="main-content">
      <section className="page-hero services-page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="section-kicker">Hizmetler / 02</span>
            <h1>
              Dijital varlığınızı <em>bütün olarak</em> tasarlıyorum.
            </h1>
          </div>
          <div className="services-hero-side">
            <p>
              Stratejiden arayüze, yazılımdan görünürlüğe kadar birbirini
              tamamlayan hizmetlerle markanız için doğru sistemi kuruyorum.
            </p>
            <div className="services-hero-collage">
              {services.slice(0, 4).map((s, i) => (
                <Image
                  width={1536}
                  height={1024}
                  key={s.slug}
                  src={s.image}
                  alt=""
                  aria-hidden="true"
                  style={{ "--i": i } as React.CSSProperties}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container intro-note">
          <span>08 uzmanlık alanı</span>
          <p>
            Tek bir hizmetle başlayabilir, ihtiyaç büyüdükçe diğer katmanları
            aynı sistemin üzerine ekleyebiliriz.
          </p>
        </div>
        <div className="container services-grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <section className="section light-section">
        <div className="container section-head">
          <div>
            <span className="section-kicker">Çalışma Biçimleri</span>
            <h2>İhtiyaca göre esnek kapsam.</h2>
          </div>
          <p>
            Her proje aynı büyüklükte değildir. Çalışma modelini işin gerçek
            ihtiyacına göre seçeriz.
          </p>
        </div>
        <div className="container model-grid">
          {[
            [
              "01",
              "Proje Bazlı",
              "Net başlangıcı ve teslim hedefi olan web sitesi, e-ticaret veya yazılım projeleri için.",
            ],
            [
              "02",
              "Sürekli Destek",
              "Düzenli tasarım, geliştirme, içerik, reklam veya optimizasyon ihtiyacı olan markalar için.",
            ],
            [
              "03",
              "Danışmanlık",
              "Doğru yol haritası veya mevcut dijital yapısını değerlendirmek isteyen ekipler için.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <Cta
        eyebrow="Kapsamı birlikte netleştirelim"
        title="İhtiyacınız kadar yalın, hedefiniz kadar güçlü."
      />
    </main>
  );
}
