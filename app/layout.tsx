import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Furkan Akpınar | Yazılım ve Dijital Ajans",
    template: "%s | Furkan Akpınar",
  },
  description:
    "Kurumsal web sitesi, özel yazılım, e-ticaret, UI/UX, SEO, dijital reklam ve sosyal medya çözümleri.",
  openGraph: {
    title: "Furkan Akpınar | Yazılım ve Dijital Ajans",
    description:
      "Kurumsal web sitesi, özel yazılım, e-ticaret ve dijital büyüme çözümleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Furkan Akpınar",
  },
  twitter: {
    card: "summary",
    title: "Furkan Akpınar | Yazılım ve Dijital Ajans",
    description:
      "Kurumsal web sitesi, özel yazılım, e-ticaret ve dijital büyüme çözümleri.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          İçeriğe geç
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
