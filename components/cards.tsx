import Image from "next/image";
import Link from "next/link";
import type { Project, Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="service-card"
      style={{ "--card-accent": service.accent } as React.CSSProperties}
    >
      <div className="service-card-visual">
        <Image
          width={1536}
          height={1024}
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
        />
        <span className="service-card-number">{service.index}</span>
        <span className="service-card-view">Detayı İncele ↗</span>
      </div>
      <div className="service-card-body">
        <div className="service-card-top">
          <span>{service.eyebrow}</span>
          <span className="service-arrow">↗</span>
        </div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
      </div>
    </Link>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const visual = (
    <div className={`project-visual ${project.image ? "has-preview" : ""}`}>
      <div className="project-browser">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>{project.url ? "CANLI ANA SAYFA" : "PORTFÖY PROJESİ"}</span>
        </div>
        {project.image ? (
          <div className="project-screen">
            <Image
              width={1536}
              height={1024}
              src={project.image}
              loading="lazy"
              alt={project.imageAlt ?? `${project.title} ana sayfası`}
              style={{ objectPosition: project.previewPosition }}
            />
            <span className="preview-hint">
              Üzerine gel · Önizlemeyi incele
            </span>
            {project.url && <b>Canlı projeyi aç ↗</b>}
          </div>
        ) : (
          <div className="browser-art">
            <span>{project.category}</span>
            <strong>{project.title}</strong>
            <i />
            <i />
            <b>{project.type}</b>
          </div>
        )}
      </div>
      <span className="project-index">0{index + 1}</span>
    </div>
  );
  return (
    <article
      className={`project-card project-${project.tone}`}
      tabIndex={project.image && !project.url ? 0 : undefined}
    >
      {project.url ? (
        <a
          className="project-live-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} canlı projesini yeni sekmede aç`}
        >
          {visual}
        </a>
      ) : (
        visual
      )}
      <div className="project-info">
        <div>
          <span>{project.label}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <span className="project-type">{project.type}</span>
      </div>
    </article>
  );
}

export function Cta({
  eyebrow = "Bir fikrin mi var?",
  title = "Dijitalde sıradaki güçlü işini birlikte kuralım.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container cta-grid">
        <span className="section-kicker">{eyebrow}</span>
        <h2>{title}</h2>
        <Link href="/iletisim" className="round-link">
          <span>Projeyi</span>
          <strong>Başlat ↗</strong>
        </Link>
      </div>
    </section>
  );
}
