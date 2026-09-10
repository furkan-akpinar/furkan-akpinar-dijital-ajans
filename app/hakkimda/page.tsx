import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { Cta } from "@/components/cards";
export const metadata = pageMetadata(
  "Hakkımda",
  "Furkan Akpınar’ın tasarım, yazılım ve dijital büyümeyi birleştiren yaklaşımı ve çalışma ilkeleri.",
);
export default function Page() {
  return (
    <main tabIndex={-1} id="main-content">
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <span className="section-kicker">Hakkımda / 01</span>
            <h1>
              Tasarımın gücünü <em>kodun disipliniyle</em> birleştiriyorum.
            </h1>
          </div>
          <p>
            Ben Furkan Akpınar. Markaların dijitalde daha iyi görünmesiyle
            yetinmeyip daha iyi çalışmasını sağlayan web siteleri, ürünler ve
            büyüme sistemleri kuruyorum.
          </p>
        </div>
      </section>
      <section className="section light-section">
        <div className="container about-grid">
          <div className="about-art">
            <strong>
              FA<span>/</span>
            </strong>
            <i />
            <i />
          </div>
          <div>
            <span className="section-kicker">Bakış Açısı</span>
            <h2>İyi bir dijital iş üç şeyi aynı anda başarmalı.</h2>
            <div className="principles">
              {[
                [
                  "01",
                  "Doğru anlatmalı.",
                  "Markanın ne yaptığını ve neden tercih edilmesi gerektiğini saniyeler içinde anlaşılır kılmalı.",
                ],
                [
                  "02",
                  "Kolay çalışmalı.",
                  "Kullanıcıyı yormayan, her cihazda hızlı ve erişilebilir bir deneyim sunmalı.",
                ],
                [
                  "03",
                  "Sonuç üretmeli.",
                  "Talep, satış, görünürlük veya operasyonel verimlilik gibi gerçek bir hedefe hizmet etmeli.",
                ],
              ].map((x) => (
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
        </div>
      </section>
      <section className="section values-section">
        <div className="container section-head">
          <div>
            <span className="section-kicker">Çalışma İlkeleri</span>
            <h2>
              Gösterişten önce netlik.
              <br />
              Hızdan önce doğruluk.
            </h2>
          </div>
          <p>
            Kararları görünür, iletişimi açık ve ortaya çıkan işi sürdürülebilir
            tutarım.
          </p>
        </div>
        <div className="container values-grid">
          {[
            [
              "01",
              "Strateji önce gelir",
              "Renk ve ekranlardan önce hedefi, kullanıcıyı ve doğru mesajı netleştiririm.",
            ],
            [
              "02",
              "Özgünlük işlev taşır",
              "Markaya ait görünmeyen hiçbir trendi sadece popüler olduğu için kullanmam.",
            ],
            [
              "03",
              "Teknik kalite görünmezdir",
              "Hız, erişilebilirlik ve temiz kod deneyimi belirler.",
            ],
            [
              "04",
              "İş yayınla bitmez",
              "Ölçüm, bakım ve iyileştirme planı yatırımın değerini korur.",
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
      <section className="section capabilities">
        <div className="container capability-panel">
          <div>
            <span className="section-kicker">Yetkinlik Haritası</span>
            <h2>Fikirden yayına aynı masada.</h2>
            <p>
              Farklı disiplinleri tek hedef ve tek tasarım dili altında
              buluşturuyorum.
            </p>
            <Link href="/hizmetler" className="button button-primary">
              Hizmetleri Gör ↗
            </Link>
          </div>
          <div className="tags">
            {[
              "Dijital Strateji",
              "Web Tasarım",
              "Front-end",
              "Özel Yazılım",
              "E-Ticaret",
              "UI/UX",
              "İçerik Mimarisi",
              "SEO",
              "GEO",
              "Google Ads",
              "Meta Ads",
              "Analitik",
              "Bakım & Destek",
            ].map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </section>
      <Cta
        eyebrow="Birlikte çalışalım"
        title="Markanızın dijital geleceğini bugünden kuralım."
      />
    </main>
  );
}
