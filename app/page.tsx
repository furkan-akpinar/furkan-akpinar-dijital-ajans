import Link from "next/link";
import { ServiceMarquee } from "@/components/service-marquee";
import { Cta, ProjectCard, ServiceCard } from "@/components/cards";
import { process, projects, services } from "@/lib/site-data";

export default function Home() {
  return (
    <main tabIndex={-1} id="main-content">
      <section className="home-hero">
        <div className="grid-bg" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="hero-kicker">
              <i />
              Yazılım · Tasarım · Dijital Büyüme
            </span>
            <h1>
              Fikirleri <em>Dijital güce</em> dönüştürüyoruz.
            </h1>
            <p>
              Markalar için yalnızca web sitesi değil; stratejisi, tasarımı,
              yazılımı ve büyüme planı birlikte çalışan dijital sistemler
              kuruyorum.
            </p>
            <div className="hero-actions">
              <Link href="/referanslar" className="button button-primary">
                Referanslar <span>↗</span>
              </Link>
              <Link href="/hizmetler" className="button button-ghost">
                Hizmetleri Keşfet <span>→</span>
              </Link>
            </div>
          </div>
          <div className="hero-console">
            <div className="console-top">
              <span>
                <i />
                FA / DIGITAL LAB
              </span>
              <span>ONLINE</span>
            </div>
            <div className="console-body">
              {[
                "Strateji",
                "Deneyim Tasarımı",
                "Geliştirme",
                "Yayın & Büyüme",
              ].map((x, i) => (
                <div className="console-line" key={x}>
                  <span>0{i + 1}</span>
                  <strong>{x}</strong>
                  <i className={i < 3 ? "active" : ""} />
                </div>
              ))}
              <div className="console-progress">
                <span>PROJECT SYSTEM</span>
                <div>
                  <i />
                </div>
                <strong>75%</strong>
              </div>
            </div>
            <div className="console-code">
              <span>const</span> growth = strategy
              <br />
              &nbsp;&nbsp;+ design
              <br />
              &nbsp;&nbsp;+ technology;
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>Türkiye&apos;den markalara, dünyanın her yerine.</span>
          <div>
            <span>Web</span>
            <i />
            <span>Software</span>
            <i />
            <span>Growth</span>
          </div>
        </div>
      </section>
      <ServiceMarquee />
      <section className="section about-teaser">
        <div className="container split">
          <div>
            <span className="section-kicker">01 / Yaklaşım</span>
            <h2>
              Ajans bakışı.
              <br />
              Yazılımcı disiplini.
            </h2>
          </div>
          <div>
            <p className="lead">
              Tasarımı estetik bir katman, yazılımı görünmez bir arka plan
              olarak görmüyorum. İkisini markanın büyüme hedefleriyle birlikte
              ele alıyorum.
            </p>
            <p>
              Böylece sadece güzel görünen değil; hızlı çalışan, kolay yönetilen
              ve ziyaretçiyi doğru aksiyona taşıyan bir dijital ürün ortaya
              çıkıyor.
            </p>
            <Link href="/hakkimda" className="text-link">
              Yaklaşımımı İncele ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="container section-head">
          <div>
            <span className="section-kicker">02 / Hizmetler</span>
            <h2>
              Tek noktadan,
              <br />
              uçtan uca dijital.
            </h2>
          </div>
          <p>
            İhtiyacınız tek bir web sitesi de olabilir, bütün dijital yapınızın
            yeniden kurulması da. Kapsamı hedefe göre şekillendiriyorum.
          </p>
        </div>
        <div className="container services-grid">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
      <section className="section projects-section">
        <div className="container section-head">
          <div>
            <span className="section-kicker">03 / Seçili İşler</span>
            <h2>
              Her işe ayrı fikir,
              <br />
              tek kalite standardı.
            </h2>
          </div>
          <Link href="/referanslar" className="button button-ghost">
            Tüm İşler →
          </Link>
        </div>
        <div className="container projects-grid">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </section>
      <section className="section process-section">
        <div className="container process-layout">
          <div className="process-copy">
            <span className="section-kicker">04 / Çalışma Modeli</span>
            <h2>Belirsizliği azaltan, ilerlemeyi görünür kılan süreç.</h2>
            <p>
              Her aşamada ne yaptığımızı, neden yaptığımızı ve sırada ne
              olduğunu bilirsiniz.
            </p>
          </div>
          <div className="process-list">
            {process.map((x) => (
              <article key={x[0]}>
                <span>{x[0]}</span>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
