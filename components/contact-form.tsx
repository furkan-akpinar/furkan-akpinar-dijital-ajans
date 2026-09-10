import { services } from "@/lib/site-data";

export function ContactForm() {
  return (
    <form className="contact-form" aria-describedby="contact-status">
      <p id="contact-status" className="form-status" role="status">
        İletişim formu şu anda kullanılamıyor. Bu form üzerinden bilgi
        gönderilemez.
      </p>
      <fieldset disabled>
        <legend className="sr-only">Proje talebi</legend>
        <div className="form-row">
          <label>
            <span>Ad Soyad *</span>
            <input
              name="name"
              autoComplete="name"
              required
              placeholder="Adınız ve soyadınız"
            />
          </label>
          <label>
            <span>E-posta *</span>
            <input
              name="email"
              autoComplete="email"
              required
              type="email"
              placeholder="ornek@sirket.com"
            />
          </label>
        </div>
        <div className="form-row">
          <label>
            <span>Telefon</span>
            <input
              name="phone"
              autoComplete="tel"
              type="tel"
              placeholder="Telefon numaranız"
            />
          </label>
          <label>
            <span>İlgilendiğiniz hizmet</span>
            <select name="service" defaultValue="">
              <option value="" disabled>
                Hizmet seçin
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label>
          <span>Projenizi kısaca anlatın *</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Hedefiniz, ihtiyacınız ve varsa zaman planınız..."
          />
        </label>
        <div className="form-submit-row">
          <button type="submit" disabled className="button button-primary">
            Gönderim kullanılamıyor
          </button>
        </div>
      </fieldset>
    </form>
  );
}
