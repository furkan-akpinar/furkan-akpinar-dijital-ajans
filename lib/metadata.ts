import type { Metadata } from "next";

export function pageMetadata(title: string, description: string): Metadata {
  const fullTitle = `${title} | Furkan Akpınar`;
  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      locale: "tr_TR",
      siteName: "Furkan Akpınar",
    },
    twitter: { card: "summary", title: fullTitle, description },
  };
}
