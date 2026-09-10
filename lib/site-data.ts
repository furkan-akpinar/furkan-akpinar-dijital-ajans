export type Service = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  outcome: string;
  accent: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "kurumsal-web-sitesi",
    index: "01",
    title: "Kurumsal Web Sitesi",
    eyebrow: "Tasarım + Geliştirme",
    accent: "#b9ff66",
    image: "/images/services/kurumsal-web-sitesi.webp",
    imageAlt:
      "Neon yeşil vurgulu, katmanlı kurumsal web arayüzü görselleştirmesi",
    summary:
      "Markanızı güven veren, hızlı ve dönüşüm odaklı bir dijital merkeze dönüştürür.",
    description:
      "Hazır şablonlara sıkışmayan; markanızın karakterini, hizmet modelini ve satış hedeflerini aynı yapıda buluşturan kurumsal web siteleri tasarlıyor ve geliştiriyorum.",
    outcome:
      "Daha güçlü ilk izlenim, daha nitelikli talepler ve yönetilebilir bir dijital altyapı.",
    deliverables: [
      "Markaya özel arayüz tasarımı",
      "Mobil, tablet ve masaüstü uyumluluğu",
      "SEO uyumlu sayfa ve içerik mimarisi",
      "Hız ve erişilebilirlik optimizasyonu",
      "Yönetilebilir içerik altyapısı ve yayın desteği",
    ],
    faqs: [
      {
        question: "Kurumsal web sitesi ne kadar sürede tamamlanır?",
        answer:
          "Sayfa sayısı ve içerik hazırlığına göre çoğu proje 3–6 haftada tamamlanır.",
      },
      {
        question: "Siteyi sonradan kendim güncelleyebilir miyim?",
        answer:
          "Evet. İhtiyaca göre yönetim paneli eklenir ve teslimde kullanım desteği verilir.",
      },
      {
        question: "Metin ve görselleri kim hazırlıyor?",
        answer:
          "Mevcut içerikler birlikte iyileştirilebilir; ihtiyaç halinde içerik üretimi ve görsel seçimi de kapsama eklenir.",
      },
    ],
  },
  {
    slug: "e-ticaret-sistemleri",
    index: "02",
    title: "E-Ticaret Sistemleri",
    eyebrow: "Satış + Operasyon",
    accent: "#66ffd8",
    image: "/images/services/e-ticaret-sistemleri.webp",
    imageAlt:
      "Ürün kartları ve ödeme akışını gösteren koyu temalı e-ticaret görselleştirmesi",
    summary:
      "Ürün keşfinden ödemeye kadar sürtünmesiz ve ölçeklenebilir satış deneyimleri kurar.",
    description:
      "B2C veya B2B satış modelinize uygun, ürün yönetimini kolaylaştıran ve müşteriyi satın almaya taşıyan e-ticaret deneyimleri geliştiriyorum.",
    outcome:
      "Kolay yönetilen operasyon, güvenli ödeme akışı ve büyümeye hazır satış altyapısı.",
    deliverables: [
      "Kategori, ürün ve filtreleme deneyimi",
      "Sepet, ödeme ve kargo entegrasyonları",
      "Kampanya ve kupon kurguları",
      "Mobil alışveriş optimizasyonu",
      "Dönüşüm ölçümü ve temel raporlama",
    ],
    faqs: [
      {
        question: "Hazır altyapı mı özel yazılım mı?",
        answer:
          "Bütçe, ürün sayısı ve operasyon karmaşıklığına göre Shopify, WooCommerce veya özel altyapı seçilir.",
      },
      {
        question: "Pazaryeri entegrasyonu yapılabilir mi?",
        answer:
          "Evet. Projeye göre stok, sipariş ve fiyat senkronizasyonu planlanabilir.",
      },
      {
        question: "Ödeme güvenliği nasıl sağlanır?",
        answer:
          "PCI uyumlu ödeme sağlayıcıları kullanılır; hassas kart verisi site üzerinde tutulmaz.",
      },
    ],
  },
  {
    slug: "ozel-yazilim-web-uygulama",
    index: "03",
    title: "Özel Yazılım & Web Uygulama",
    eyebrow: "Ürün + Otomasyon",
    accent: "#a7a4ff",
    image: "/images/services/ozel-yazilim-web-uygulama.webp",
    imageAlt:
      "Bağlantılı paneller ve veri katmanlarından oluşan özel yazılım görselleştirmesi",
    summary:
      "İş akışınıza uyum sağlayan paneller, portallar ve web tabanlı ürünler geliştirir.",
    description:
      "Excel dosyaları ve dağınık araçlar arasında kalan süreçleri; işinize özel, güvenli ve ölçeklenebilir web uygulamalarına dönüştürüyorum.",
    outcome:
      "Daha az manuel iş, tek merkezden kontrol ve büyüdükçe genişleyebilen bir ürün.",
    deliverables: [
      "Yönetim paneli ve müşteri portalı",
      "CRM, ERP ve API entegrasyonları",
      "Rol bazlı yetkilendirme",
      "Raporlama ve iş akışı otomasyonları",
      "Dokümantasyon ve bakım planı",
    ],
    faqs: [
      {
        question: "Fikrim için önce MVP yapılabilir mi?",
        answer:
          "Evet. En kritik değeri üreten özelliklerle başlanır; gerçek kullanıcı verisine göre genişletilir.",
      },
      {
        question: "Mevcut sistemlere bağlanabilir mi?",
        answer:
          "API veya uygun veri erişimi varsa mevcut CRM, ERP ve diğer araçlarla entegrasyon planlanabilir.",
      },
      {
        question: "Yayın sonrası destek var mı?",
        answer:
          "Evet. Bakım, güvenlik güncellemeleri ve yeni özellikler için destek modeli oluşturulur.",
      },
    ],
  },
  {
    slug: "ui-ux-tasarim",
    index: "04",
    title: "UI/UX Tasarım",
    eyebrow: "Araştırma + Deneyim",
    accent: "#ffcf70",
    image: "/images/services/ui-ux-tasarim.webp",
    imageAlt:
      "Sıcak sarı vurgulu arayüz bileşenleri ve prototip katmanları görselleştirmesi",
    summary:
      "Karmaşık ürünleri anlaşılır, tutarlı ve kullanımı kolay deneyimlere dönüştürür.",
    description:
      "Web sitesi, mobil uygulama veya dijital ürününüz için kullanıcı ihtiyacını iş hedefleriyle birleştiren arayüzler ve tasarım sistemleri oluşturuyorum.",
    outcome:
      "Daha kolay öğrenilen ürün, daha düşük kullanıcı hatası ve tutarlı marka deneyimi.",
    deliverables: [
      "Kullanıcı akışları ve bilgi mimarisi",
      "Wireframe ve etkileşimli prototip",
      "Yüksek çözünürlüklü arayüzler",
      "Tasarım sistemi ve component kütüphanesi",
      "Geliştirici teslim dosyaları",
    ],
    faqs: [
      {
        question: "Sadece tasarım hizmeti alabilir miyim?",
        answer:
          "Evet. Tasarım dosyaları ekibinize teslim edilebilir veya geliştirme de birlikte yürütülebilir.",
      },
      {
        question: "Mevcut ürün yeniden tasarlanabilir mi?",
        answer:
          "Evet. Veriler, geri bildirimler ve mevcut sorunlar üzerinden kademeli yenileme yapılabilir.",
      },
      {
        question: "Tasarım sistemi neden gerekli?",
        answer:
          "Tutarlılık sağlar, geliştirmeyi hızlandırır ve ürün büyürken tekrar işi azaltır.",
      },
    ],
  },
  {
    slug: "seo-geo-gorunurluk",
    index: "05",
    title: "SEO & GEO Görünürlük",
    eyebrow: "Arama + Yapay Zekâ",
    accent: "#ff8d8d",
    image: "/images/services/seo-geo-gorunurluk.webp",
    imageAlt:
      "Arama görünürlüğü, yapay zekâ keşfi ve veri ağlarını temsil eden görselleştirme",
    summary:
      "Markanızı hem klasik aramalarda hem yapay zekâ yanıtlarında bulunabilir hale getirir.",
    description:
      "Teknik SEO, içerik mimarisi ve yeni nesil GEO yaklaşımını bir araya getirerek Google ve yapay zekâ destekli keşif kanallarındaki görünürlüğünüzü güçlendiriyorum.",
    outcome:
      "Daha nitelikli organik trafik, güçlü konu otoritesi ve sürdürülebilir dijital görünürlük.",
    deliverables: [
      "Teknik SEO ve indekslenebilirlik analizi",
      "Arama niyeti ve rakip araştırması",
      "İçerik kümeleri ve sayfa optimizasyonu",
      "Yapısal veri işaretlemeleri",
      "GEO görünürlük takibi ve raporlama",
    ],
    faqs: [
      {
        question: "GEO nedir?",
        answer:
          "Markanın yapay zekâ destekli arama ve yanıt sistemlerinde anlaşılır ve referans verilebilir olmasını hedefler.",
      },
      {
        question: "SEO sonuçları ne zaman görülür?",
        answer:
          "Teknik kazanımlar erken görülse de kalıcı organik büyüme genellikle birkaç aylık düzenli çalışma ister.",
      },
      {
        question: "İçerikleri de hazırlıyor musunuz?",
        answer:
          "Evet. Strateji, içerik planı, üretim ve optimizasyon birlikte yürütülebilir.",
      },
    ],
  },
  {
    slug: "dijital-reklam-performans",
    index: "06",
    title: "Dijital Reklam & Performans",
    eyebrow: "Google + Meta",
    accent: "#71b7ff",
    image: "/images/services/dijital-reklam-performans.webp",
    imageAlt:
      "Dijital reklam kampanyası ve performans verilerini temsil eden mavi vurgulu görselleştirme",
    summary:
      "Reklam bütçesini ölçülebilir talep, satış ve büyümeye dönüştürür.",
    description:
      "Google, Meta ve uygun dijital kanallarda; yalnızca gösterime değil gerçek iş sonucuna odaklanan kampanya sistemleri kuruyorum.",
    outcome:
      "Şeffaf bütçe kullanımı, doğru hedef kitle ve düzenli optimize edilen dönüşüm maliyeti.",
    deliverables: [
      "Kanal ve kampanya stratejisi",
      "Google Ads ve Meta Ads kurulumu",
      "Dönüşüm ve analitik ölçümleme",
      "Kreatif test planı ve hedef kitleler",
      "Bütçe optimizasyonu ve raporlama",
    ],
    faqs: [
      {
        question: "Reklam bütçesi hizmet ücretine dahil mi?",
        answer:
          "Hayır. Medya bütçesi platforma ödenir; yönetim hizmeti ayrı planlanır.",
      },
      {
        question: "Hangi platformla başlamalıyız?",
        answer:
          "Hedef kitlenin niyeti ve satın alma davranışına göre önce en güçlü kanalı seçeriz.",
      },
      {
        question: "Raporlarda neyi göreceğim?",
        answer:
          "Harcama, dönüşüm, müşteri edinme maliyeti ve hedefe göre satış veya nitelikli talep sonuçlarını.",
      },
    ],
  },
  {
    slug: "sosyal-medya-icerik",
    index: "07",
    title: "Sosyal Medya & İçerik",
    eyebrow: "Strateji + Kreatif",
    accent: "#ff9edd",
    image: "/images/services/sosyal-medya-icerik.webp",
    imageAlt:
      "Sosyal medya içerik kartları ve yaratıcı yayın akışını temsil eden görselleştirme",
    summary:
      "Markanızı düzenli, tanınabilir ve hedef kitlesiyle ilişki kuran bir yayıncıya dönüştürür.",
    description:
      "Rastgele paylaşım takvimi yerine; marka konumlandırmasını, içerik serilerini ve ticari hedefleri aynı stratejide buluşturan sosyal medya yönetimi sunuyorum.",
    outcome:
      "Tutarlı marka dili, sürdürülebilir içerik sistemi ve etkileşimden talebe uzanan net akış.",
    deliverables: [
      "İçerik stratejisi ve yayın planı",
      "Görsel dil ve sosyal medya şablonları",
      "Post, kısa video ve hikâye içerikleri",
      "Topluluk yönetimi çerçevesi",
      "Aylık performans analizi",
    ],
    faqs: [
      {
        question: "Çekim hizmeti dahil mi?",
        answer:
          "İhtiyaca göre fotoğraf ve video çekimi proje kapsamına eklenebilir.",
      },
      {
        question: "Her platformda olmak gerekir mi?",
        answer:
          "Hayır. Hedef kitlenin ve içeriğin güçlü olduğu kanallara odaklanmak daha verimlidir.",
      },
      {
        question: "Aylık kaç içerik hazırlanır?",
        answer:
          "Sayı; platform, format ve hedefe göre sürdürülebilir biçimde belirlenir.",
      },
    ],
  },
  {
    slug: "bakim-hiz-guvenlik",
    index: "08",
    title: "Bakım, Hız & Güvenlik",
    eyebrow: "Süreklilik + Kalite",
    accent: "#d8ff8f",
    image: "/images/services/bakim-hiz-guvenlik.webp",
    imageAlt:
      "Güvenli altyapı, hız ve sistem izlemeyi temsil eden koyu temalı görselleştirme",
    summary:
      "Yayındaki dijital varlığınızı hızlı, güncel, güvenli ve sorunsuz tutar.",
    description:
      "Web sitenizin yayın sonrası performansını koruyan; güncelleme, yedekleme, güvenlik ve geliştirme ihtiyaçlarını düzenli yöneten destek sunuyorum.",
    outcome:
      "Daha az kesinti, daha iyi kullanıcı deneyimi ve teknik sürprizlere karşı kontrol.",
    deliverables: [
      "Düzenli altyapı güncellemeleri",
      "Yedekleme ve geri dönüş planı",
      "Hız, çalışma süresi ve hata takibi",
      "Güvenlik kontrolleri",
      "Aylık geliştirme ve içerik desteği",
    ],
    faqs: [
      {
        question: "Başka birinin yaptığı siteye destek verir misiniz?",
        answer:
          "Evet. Teknik inceleme sonrası sağlıklı devralınabilecek projeler için plan hazırlanır.",
      },
      {
        question: "Acil sorunlarda destek var mı?",
        answer:
          "Seçilen kapsama göre kritik kesintiler için öncelikli müdahale süresi tanımlanır.",
      },
      {
        question: "Sadece hız optimizasyonu olur mu?",
        answer:
          "Evet. Tek seferlik performans analizi ve iyileştirme yapılabilir.",
      },
    ],
  },
];

export const process = [
  [
    "01",
    "Keşif & Strateji",
    "Hedefleri, hedef kitleyi, rakipleri ve gerçek ihtiyacı netleştiririz.",
  ],
  [
    "02",
    "İçerik & Deneyim",
    "Sayfa yapısını, kullanıcı akışlarını ve içerik hiyerarşisini kurarım.",
  ],
  [
    "03",
    "Tasarım & Geliştirme",
    "Markaya özel arayüzü performanslı ve sürdürülebilir kodla hayata geçiririm.",
  ],
  [
    "04",
    "Test & Yayın",
    "Tüm ekranları ve teknik kaliteyi kontrol eder; projeyi yayına alırız.",
  ],
];

export type Project = {
  title: string;
  category: string;
  type: string;
  description: string;
  tone: string;
  label: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  previewPosition?: string;
};

export const projects: Project[] = [
  {
    title: "Ezo Eylül Sağır",
    category: "İç Mimarlık",
    type: "Kurumsal Web Sitesi",
    description:
      "Koyu, editoryal görsel dil ve proje odaklı çok sayfalı portföy deneyimi.",
    tone: "olive",
    label: "Gerçek Portföy Projesi",
  },
  {
    title: "Sude Naz Zülal",
    category: "Hukuk",
    type: "Kurumsal Web Sitesi",
    description:
      "Güven ve uzmanlığı petrol yeşili bir arayüzde birleştiren hukuk sitesi.",
    tone: "petrol",
    label: "Gerçek Portföy Projesi",
  },
  {
    title: "NODUS",
    category: "SaaS / Ürün",
    type: "Web Uygulama & UI/UX",
    description:
      "Ajans operasyonlarını tek merkezde toplayan çok sayfalı ürün ve çalışan panel demosu.",
    tone: "nodus",
    label: "Konsept Dijital Ürün",
    image: "/images/services/ozel-yazilim-web-uygulama.webp",
    imageAlt: "NODUS projesinin yazılım ve panel yapısını temsil eden görsel",
    previewPosition: "center top",
  },
  {
    title: "NOA Mare",
    category: "Turizm / Konaklama",
    type: "Premium Deneyim Sitesi",
    description:
      "Bozburun kıyısında özgün görseller ve rezervasyon akışıyla tasarlanan butik resort deneyimi.",
    tone: "noa",
    label: "Konsept Marka Projesi",
    image: "/images/projects/noa.webp",
    imageAlt: "NOA Mare butik resort ana sayfası",
    previewPosition: "center top",
  },
  {
    title: "SILEA Parfums",
    category: "E-Ticaret / Güzellik",
    type: "Premium E-Ticaret",
    description:
      "Niş parfüm koleksiyonu, ürün varyantları ve kalıcı sepet deneyimiyle dijital mağaza.",
    tone: "silea",
    label: "Konsept E-Ticaret",
    image: "/images/projects/silea.webp",
    imageAlt: "SILEA Parfums ana sayfası",
    previewPosition: "center top",
  },
  {
    title: "VORON Systems",
    category: "Endüstri / İhracat",
    type: "B2B Kurumsal Site",
    description:
      "Uluslararası endüstriyel otomasyon markası için teknik çözüm ve vaka çalışması mimarisi.",
    tone: "voron",
    label: "Konsept B2B Projesi",
    image: "/images/projects/voron.webp",
    imageAlt: "VORON Systems endüstriyel teknoloji ana sayfası",
    previewPosition: "center top",
  },
  {
    title: "ARKHE",
    category: "Kültür / Yeni Medya",
    type: "Kültür & Etkinlik Sitesi",
    description:
      "Sergiler, program ve etkileşimli bilet akışıyla deneysel dijital sanat merkezi.",
    tone: "arkhe",
    label: "Konsept Kültür Projesi",
    image: "/images/projects/arkhe.webp",
    imageAlt: "ARKHE dijital sanat merkezi ana sayfası",
    previewPosition: "center top",
  },
];

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/referanslar", label: "Referanslarım" },
  { href: "/iletisim", label: "İletişim" },
];
