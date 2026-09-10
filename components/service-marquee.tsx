"use client";

import { useState } from "react";
const items = [
  "Web Tasarım",
  "Özel Yazılım",
  "E-Ticaret",
  "UI/UX",
  "SEO & GEO",
  "Dijital Büyüme",
];

export function ServiceMarquee() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="marquee" aria-label="Uzmanlık alanları">
      <div
        className="marquee-track"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[0, 1].map((copy) => (
          <div
            className="marquee-group"
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((item) => (
              <span key={item}>
                {item}
                <i aria-hidden="true">✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
      <button
        className="marquee-toggle"
        type="button"
        onClick={() => setPaused(!paused)}
        aria-pressed={paused}
        aria-label="Kayan yazıyı duraklat"
      >
        {paused ? "Devam et" : "Duraklat"}
      </button>
    </section>
  );
}
