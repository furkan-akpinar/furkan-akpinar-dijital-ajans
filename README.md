# Furkan Akpınar — Yazılım ve Dijital Ajans

Hizmetleri, çalışma yaklaşımını ve portföy projelerini tanıtan Türkçe web sitesi. Ana sayfa, hakkımda, hizmetler, sekiz hizmet detayı, referanslar ve iletişim sayfalarından oluşur.

## Teknoloji

React, TypeScript ve Next.js App Router API'lerini kullanan Vinext uygulaması. Vite ile derlenir; Cloudflare Workers ve Sites için paketlenir. Stiller Tailwind CSS ve özel CSS'ten, görseller yerel WebP dosyalarından oluşur. Bağımlılık sürümleri `package-lock.json` ile sabitlenir.

## Kurulum ve geliştirme

Node.js 22.13 veya üzeri ve npm gerekir. Windows, macOS ve Linux'ta:

```sh
npm ci
npm run dev
```

Geliştirme sunucusu `http://localhost:3000` adresinde açılır. Başka bilgisayardan kopyalanmış `node_modules` klasörünü kullanmayın; `npm ci` bağımlılıkları bulunduğunuz işletim sistemi için kurar.

## Kontroller ve üretim

```sh
npm run lint
npm run typecheck
npm test
npm run start
```

`npm test` üretim derlemesini, Worker paket doğrulamasını ve tüm sayfaların HTML testlerini çalıştırır. Hazır derlemeyi yeniden kontrol etmek için `npm run validate:artifact` kullanılır. Yalnızca derlemek için `npm run build` çalıştırılabilir.

Tarayıcı testleri:

```sh
npx playwright install chromium
npm run test:e2e
```

Önce `npm run build` çalıştırılmalıdır. Testler 4173 portunda üretim sunucusunu açar ve masaüstü, tablet, mobil ekranlarda sayfaları, görselleri, ağ ve konsol hatalarını, menüyü, klavyeyi, SSS açılır alanlarını, animasyon kontrollerini ve 404 dönüşünü doğrular. GitHub Actions, Windows ve Linux'ta kalite kontrollerini; Linux'ta tarayıcı testlerini çalıştırır.

## Dosya yapısı

- `app/`: sayfalar, metadata, 404 ekranı ve ortak stiller.
- `components/`: menü, kartlar, iletişim formu ve ortak sayfa alanları.
- `lib/`: hizmet, proje ve gezinme içerikleri.
- `public/`: favicon ve optimize edilmiş görseller.
- `worker/`: Cloudflare Worker giriş noktası.
- `build/`: kaynak kod olan Sites paketleme eklentisi; üretilmiş çıktı değildir.
- `scripts/`: taşınabilir çalıştırma ve paket doğrulama komutları.
- `tests/`: üretim HTML ve tarayıcı kontrolleri.

## Yayın ve ortam değişkenleri

Mevcut site için zorunlu ortam değişkeni, veritabanı veya gizli anahtar yoktur. `.env` dosyaları Git dışında tutulur. Gerçek bir entegrasyon eklenmeden örnek anahtar veya servis adresi tanımlanmamıştır.

Mevcut Sites bağlantısı `.openai/hosting.json` içindedir. `build/sites-vite-plugin.ts`, bu yapılandırmayı `dist/.openai/hosting.json` olarak paketler. Yayın paketi `dist/server/index.js` Worker girişini ve `dist/client/` statik dosyalarını içerir. `.openai/hosting.json` ve `build/` yayın için gereklidir; `dist/`, `.vinext/`, `.wrangler/` ve `.sites-runtime/` üretilir ve Git'e eklenmez.

Site yalnızca bir statik dosya sunucusuna kopyalanarak yayımlanamaz; mevcut Worker dağıtım akışı kullanılmalıdır. Üretim domaini belirlenmediği için tahmini canonical URL veya sitemap domaini eklenmemiştir.

## İletişim ve içerik

İletişim adresi ve gönderim servisi sonraki aşamaya bırakılmıştır. Form açık bir bilgilendirme ile pasiftir; veri toplamaz, mesaj göndermez ve başarı bildirimi göstermez. Etkinleştirmeden önce gerçek iletişim bilgisi, sunucu doğrulaması, gönderim servisi ve hata davranışı tamamlanmalıdır.

Portföydeki dört eski yayın adresi 404, bir adres 401 döndürdüğü için aktif bağlantılar kaldırılmıştır. Çalışmalar ve önizleme görselleri bilgi kartı olarak korunur. Doğrulanmış yeni adresler `lib/site-data.ts` içindeki isteğe bağlı `url` alanına eklenebilir. Hizmet ve proje içerikleri `lib/site-data.ts` içinden düzenlenebilir. Üçüncü taraf yazılım lisansları ilgili paketlerde korunur. Yerel Geist ve Geist Mono fontlarının SIL Open Font License metinleri `public/fonts/` altındadır. Fontlar tarayıcıda dış servis isteği olmadan yüklenir.

## Bilinen teknik sınır

Vinext'in Node üretim önizleme sunucusu, istemci yanıt tamamlanmadan bağlantıyı kapattığında zaman zaman `ERR_STREAM_UNABLE_TO_PIPE` günlüğü üretiyor. Bu durum tarayıcı testlerinde bir sayfa veya varlık yükleme hatasına yol açmadı; kütüphanenin akış kapatma davranışı olarak izlenmelidir. Testler Chromium ile yerel Windows ortamında çalıştırıldı. Gerçek Cloudflare yayını ve GitHub Actions sonuçları ayrıca yayın ortamında doğrulanmalıdır.
