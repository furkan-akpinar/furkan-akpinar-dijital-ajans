import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/cards";
import { process, services } from "@/lib/site-data";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return services.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? pageMetadata(s.title, s.summary) : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const index = services.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const s = services[index],
    next = services[(index + 1) % services.length];
  return (
    <main
      tabIndex={-1}
      id="main-content"
      style={{ "--service-accent": s.accent } as React.CSSProperties}
    >
      <section className="service-hero">
        <div className="grid-bg" />
        <div className="container service-hero-inner">
          <div className="service-hero-copy">
            <div className="breadcrumb">
              <Link href="/hizmetler">Hizmetler</Link> /{" "}
              <strong>{s.index}</strong>
            </div>
            <span className="service-detail-eyebrow">{s.eyebrow}</span>
            <h1>{s.title}</h1>
            <p>{s.description}</p>
            <Link href="/iletisim" className="button button-accent">
              Bu Hizmet İçin Görüşelim ↗
            </Link>
          </div>
          <figure className="service-hero-media">
            <Image
              width={1536}
              height={1024}
              src={s.image}
              preload
              alt={s.imageAlt}
            />
            <figcaption>
              <span>{s.index} / 08</span>
              <strong>FA / SERVICE VISUAL</strong>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="outcome">
        <div className="container">
          <span>Beklenen Sonuç</span>
          <h2>{s.outcome}</h2>
        </div>
      </section>
      <section className="section service-visual-story">
        <div className="container service-visual-layout">
          <figure>
            <Image
              width={1536}
              height={1024}
              src={s.image}
              alt=""
              aria-hidden="true"
            />
            <span className="visual-scan-line" />
            <figcaption>{s.eyebrow}</figcaption>
          </figure>
          <div className="service-visual-copy">
            <span className="section-kicker">Görsel Bakış</span>
            <h2>İş hedefi, deneyim ve teknoloji aynı sistemde.</h2>
            <p>
              Her projede estetik tercihleri yalnızca görünüm için değil; odağı
              güçlendirmek, kullanımı kolaylaştırmak ve markayı daha akılda
              kalıcı hale getirmek için kullanıyorum.
            </p>
            <div className="service-focus-list">
              {s.deliverables.slice(0, 3).map((x, i) => (
                <span key={x}>
                  <i>0{i + 1}</i>
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container scope-grid">
          <div>
            <span className="section-kicker">Hizmet Kapsamı</span>
            <h2>Projede neler var?</h2>
            <p>
              Kapsam, iş modelinize ve mevcut altyapınıza göre birlikte
              netleştirilir.
            </p>
          </div>
          <div className="deliverables">
            {s.deliverables.map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <strong>{x}</strong>
                <i>✓</i>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section service-process">
        <div className="container section-head">
          <div>
            <span className="section-kicker">Nasıl İlerliyor?</span>
            <h2>Dört net aşama.</h2>
          </div>
          <p>
            Sürecin her adımı görünür, kararlar birlikte ve ilerleme
            ölçülebilir.
          </p>
        </div>
        <div className="container values-grid">
          {process.map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section light-section">
        <div className="container faq-grid">
          <div>
            <span className="section-kicker">Sık Sorulanlar</span>
            <h2>Başlamadan önce.</h2>
          </div>
          <div className="faq-list dark-faq">
            {s.faqs.map((x, i) => (
              <details key={x.question} open={i === 0}>
                <summary>{x.question}</summary>
                <p>{x.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Link href={`/hizmetler/${next.slug}`} className="next-service">
        <div className="container">
          <span>Sıradaki Hizmet · {next.index}</span>
          <h2>{next.title}</h2>
          <strong>İncele ↗</strong>
        </div>
      </Link>
      <Cta
        eyebrow="Bu hizmet markanıza uygun mu?"
        title="Kısa bir görüşmeyle doğru kapsamı belirleyelim."
      />
    </main>
  );
}
