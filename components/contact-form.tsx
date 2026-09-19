"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import { services } from "@/lib/site-data";

const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export function ContactForm() {
  // Keep the form inert until its local-only submit handler is attached.
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState("");
  const [copying, setCopying] = useState(false);
  const revision = useRef(0);
  const output = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (brief) output.current?.focus();
  }, [brief]);

  function invalidate(event: FormEvent<HTMLFieldSetElement>) {
    const field = event.target;
    if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
      field.setCustomValidity("");
    }
    revision.current += 1;
    setBrief("");
    setStatus("");
    setCopying(false);
  }

  function prepareBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
      field.setCustomValidity(field.value.trim() ? "" : "Lütfen bu alanı doldurun.");
    }
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const service = services.find((item) => item.slug === value("service"));
    revision.current += 1;
    setCopying(false);
    setBrief([
      "PROJE ÖZETİ",
      `Ad Soyad: ${value("name")}`,
      ...(value("email") ? [`E-posta: ${value("email")}`] : []),
      ...(value("phone") ? [`Telefon: ${value("phone")}`] : []),
      `Hizmet: ${service?.title ?? "Henüz seçilmedi"}`,
      "",
      "Proje detayları:",
      value("message"),
    ].join("\n"));
    setStatus("Proje özeti hazır. Bilgileriniz gönderilmedi. Özeti kopyalayabilirsiniz.");
  }

  async function copyBrief() {
    const currentRevision = revision.current;
    setCopying(true);
    try {
      await navigator.clipboard.writeText(brief);
      if (revision.current === currentRevision) {
        setStatus("Özet panoya kopyalandı. Bilgileriniz gönderilmedi.");
      }
    } catch {
      if (revision.current === currentRevision) {
        setStatus("Otomatik kopyalama kullanılamıyor. Seçili metni elle kopyalayabilirsiniz. Bilgileriniz gönderilmedi.");
        output.current?.focus();
        output.current?.select();
      }
    } finally {
      if (revision.current === currentRevision) setCopying(false);
    }
  }

  return (
    <form className="contact-form" aria-describedby="contact-notice" onSubmit={prepareBrief}>
      <p id="contact-notice" className="form-status">
        Bu alan yalnızca proje özeti hazırlamak içindir. Bilgileriniz gönderilmez
        veya bu sayfa tarafından kaydedilmez. Saklamak istediğiniz özeti kopyalayın.
      </p>
      <noscript>Proje özeti hazırlamak için JavaScript açık olmalıdır.</noscript>
      <fieldset disabled={!ready} onChange={invalidate}>
        <legend className="sr-only">Proje özeti hazırlayın</legend>
        <div className="form-row">
          <label>
            <span>Ad Soyad *</span>
            <input name="name" autoComplete="name" required maxLength={120} placeholder="Adınız ve soyadınız" />
          </label>
          <label>
            <span>E-posta (isteğe bağlı)</span>
            <input name="email" autoComplete="email" type="email" maxLength={254} placeholder="ornek@sirket.com" />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>Telefon (isteğe bağlı)</span>
            <input name="phone" autoComplete="tel" type="tel" maxLength={40} placeholder="Telefon numaranız" />
          </label>
          <label>
            <span>İlgilendiğiniz hizmet</span>
            <select name="service" defaultValue="">
              <option value="">Henüz seçmedim</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>{service.title}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          <span>Projenizi kısaca anlatın *</span>
          <textarea name="message" required rows={6} maxLength={5000} placeholder="Hedefiniz, ihtiyacınız ve varsa zaman planınız..." />
        </label>
        <div className="form-submit-row">
          <button type="submit" className="button button-primary">Proje Özeti Hazırla</button>
        </div>
      </fieldset>
      <p id="brief-status" className="brief-status" role="status" aria-atomic="true">{status}</p>
      {brief && (
        <div className="project-brief">
          <label>
            <span>Hazırlanan proje özeti</span>
            <textarea ref={output} value={brief} readOnly rows={10} aria-describedby="brief-status" />
          </label>
          <button type="button" className="button button-primary" onClick={copyBrief} disabled={copying}>
            {copying ? "Kopyalanıyor…" : "Özeti Kopyala"}
          </button>
        </div>
      )}
    </form>
  );
}
