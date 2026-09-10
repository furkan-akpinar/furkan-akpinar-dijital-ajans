import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { navItems, services } from "@/lib/site-data";

export function Logo() {
  return (
    <span className="brand-lockup">
      <span className="brand-mark">
        FA<span>/</span>
      </span>
      <span className="brand-name">
        <strong>Furkan Akpınar</strong>
        <small>YAZILIM & DİJİTAL AJANS</small>
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Furkan Akpınar ana sayfa">
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Ana menü">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/iletisim" className="header-cta">
          Proje Başlat <span>↗</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-intro">
          <Logo />
          <p>
            İyi görünenin ötesinde; çalışan, ölçülen ve markayı ileri taşıyan
            dijital deneyimler.
          </p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Sayfalar</span>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column footer-services">
          <span className="footer-label">Uzmanlıklar</span>
          {services.slice(0, 6).map((item) => (
            <Link key={item.slug} href={`/hizmetler/${item.slug}`}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-label">Çalışma Alanı</span>
          <p>Türkiye · Uzaktan</p>
          <p>Web · Yazılım · Büyüme</p>
          <Link href="/iletisim" className="footer-contact">
            Projeni anlat ↗
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Furkan Akpınar. Tüm hakları saklıdır.</span>
        <span>Strateji · Tasarım · Kod</span>
      </div>
    </footer>
  );
}
