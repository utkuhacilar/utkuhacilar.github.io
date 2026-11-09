/* =====================================================================
   SİTE İÇERİĞİ — Siteyi güncellemek için yalnızca bu dosyayı düzenle.
   ---------------------------------------------------------------------
   İKİ DİL: { tr: "Türkçe", en: "English" } biçimindeki alanlar iki dilde
   gösterilir. Düz metin yazarsan her iki dilde de aynısı görünür.

   • Yeni ders dosyası: dosyayı "dosyalar/" klasörüne yükle, sonra
     aşağıdaki "dosyalar" listesine bir satır ekle.
   • Yeni not: "notlar" listesine bir kayıt ekle (Markdown: ## başlık,
     **kalın**, - liste, > ipucu, kod için ~~~ satırları arası).
   • Fotoğraf eklemek: dosyayı "assets/galeri/" klasörüne koy ve
     "galeri" listesine ekle. Boş yerler "yakında" olarak görünür.
   • Tarih biçimi: "2026-11-09" (yıl-ay-gün).
   ===================================================================== */

window.SITE = {

  /* ---------------- PROFİL (ana sayfa) ---------------- */
  profil: {
    ad: "Utku Hacılar",
    unvan: { tr: "Bilişim Teknolojileri ve Yazılım Öğretmeni", en: "ICT & Software Teacher" },
    okul: { tr: "Özel Mesafe Koleji", en: "Özel Mesafe College" },
    okulUzun: { tr: "Özel Mesafe Koleji · Mesleki ve Teknik Anadolu Lisesi", en: "Özel Mesafe College · Vocational & Technical Anatolian High School" },
    konum: { tr: "Bursa, Türkiye", en: "Bursa, Türkiye" },
    foto: "assets/foto.jpg",
    ozet: {
      tr: "Bilişim Teknolojileri öğretmeniyim. Eğitim sektöründe güncel teknoloji dersleri veriyor, okulun bilişim altyapısını yönetiyor ve yapay zekâyı eğitim süreçlerine taşıyorum. Öğrencilerimle yarışma ve proje takımları kuruyor, öğretmenlere yapay zekâ eğitimleri veriyor, okullar ve işletmeler için yazılımlar geliştiriyorum.",
      en: "I am an ICT teacher. I teach up-to-date technology courses, run my school's IT infrastructure and bring AI into teaching and learning. I build competition and project teams with my students, deliver AI training for teachers, and develop software for schools and businesses."
    },
    eposta: "utkuhacilar@gmail.com",
    telefon: "",            // Herkese açık olsun istersen: "0534 319 12 19"
    linkedin: "https://www.linkedin.com/in/utku-hacilar-a470bb202/",
    github: "https://github.com/utkuhacilar",
    cv: { tr: "dosyalar/utku-hacilar-cv.pdf", en: "dosyalar/utku-hacilar-cv-en.pdf" },
    diller: { tr: "Türkçe (ana dil) · İngilizce (temel)", en: "Turkish (native) · English (basic)" }
  },

  uzmanlik: [
    { baslik: { tr: "Eğitim Teknolojileri ve Yapay Zekâ", en: "EdTech & AI Integration" },
      metin: { tr: "Derslerimde yapay zekâyı ve araçlarını öğretiyor; bu araçları öğretmenlerin ders hazırlama, materyal üretme ve değerlendirme iş akışlarına uyarlıyorum.",
               en: "I teach AI and AI tools in my lessons, and adapt them to teachers' workflows for lesson planning, creating materials and assessment." } },
    { baslik: { tr: "BT Öğretmenliği ve Mentörlük", en: "ICT Teaching & Mentoring" },
      metin: { tr: "Güncel teknolojilerle öğrencilerime programlama, web, mobil, robotik ve tasarım alanlarında uygulamalı teknik dersler veriyor, gelişimlerini mentör olarak takip ediyorum.",
               en: "I give hands-on technical courses in programming, web, mobile, robotics and design using current technologies, and follow my students' growth as their mentor." } },
    { baslik: { tr: "Okul BT Operasyonları", en: "School IT Operations" },
      metin: { tr: "Ağ ve sistem yönetimi; bilgisayar laboratuvarı, akıllı tahta ve konferans salonu kurulumları; donanım bakımı, onarımı ve kullanıcı desteği.",
               en: "Network and system administration; setting up computer labs, smart boards and conference halls; hardware maintenance, repair and user support." } },
    { baslik: { tr: "Yazılım Geliştirme", en: "Software Development" },
      metin: { tr: "Okullar için yönetim yazılımları, işletmeler için e-ticaret siteleri, web ve mobil uygulamalar geliştiriyorum. Fikirden yayına kadar tüm süreci yürütüyorum.",
               en: "I build management software for schools, e-commerce sites for businesses, and web and mobile apps, taking each from idea to launch." } }
  ],

  /* hat: "is" (iş) veya "egitim" */
  ozgecmis: [
    { hat: "is", bas: "2021", bit: "",
      baslik: { tr: "Bilişim Teknolojileri ve Yazılım Öğretmeni", en: "ICT & Software Teacher" },
      yer: { tr: "Özel Mesafe Koleji, Bursa", en: "Özel Mesafe College, Bursa" },
      maddeler: [
        { tr: "9–11. sınıflara programlama, nesne tabanlı programlama (C#), web, mobil, robotik ve kodlama dersleri.", en: "Teaching programming, OOP (C#), web, mobile, robotics and coding to grades 9–11." },
        { tr: "Okulun bilişim altyapısının yönetimi: ağ, bilgisayarlar, akıllı tahtalar, konferans salonu kurulumları ve bakımı, tedarikçi iletişimi.", en: "Running the school's IT: network, computers, smart boards, conference hall setup and maintenance, vendor relations." },
        { tr: "Yapay Zekâ Kulübü'nün yürütülmesi ve öğretmenlere yapay zekâ eğitimleri.", en: "Leading the AI Club and delivering AI training for teachers." },
        { tr: "TEKNOFEST 2026 İnsansız Su Altı Sistemleri Yarışması'nda danışmanı olduğum takımla Türkiye ikinciliği.", en: "Advisor to the student team that placed 2nd in Türkiye at the TEKNOFEST 2026 Unmanned Underwater Systems Competition." },
        { tr: "TEKNOFEST ve MEB robot yarışmalarında takım danışmanlığı; mentör öğretmenlik.", en: "Coaching TEKNOFEST and national robotics teams; student mentoring." }
      ] },
    { hat: "egitim", bas: "2020", bit: "",
      baslik: { tr: "Yönetim Bilişim Sistemleri", en: "Management Information Systems" },
      yer: { tr: "Anadolu Üniversitesi", en: "Anadolu University" }, maddeler: [] },
    { hat: "egitim", bas: "2019", bit: "2021",
      baslik: { tr: "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği", en: "B.Ed. Computer Education & Instructional Technology" },
      yer: { tr: "Trakya Üniversitesi", en: "Trakya University" }, maddeler: [] },
    { hat: "is", bas: "2018", bit: "2019",
      baslik: { tr: "Junior Developer", en: "Junior Developer" }, yer: { tr: "Medya X, Bursa", en: "Medya X, Bursa" },
      maddeler: [{ tr: "PHP ile web uygulamaları ve veritabanı entegrasyonu.", en: "PHP web applications and database integration." }] },
    { hat: "egitim", bas: "2016", bit: "2018",
      baslik: { tr: "Bilgisayar Programcılığı", en: "Associate Degree, Computer Programming" },
      yer: { tr: "Manisa Celal Bayar Üniversitesi", en: "Manisa Celal Bayar University" }, maddeler: [] },
    { hat: "is", bas: "2013", bit: "2014",
      baslik: { tr: "Junior Developer (Staj)", en: "Junior Developer (Internship)" }, yer: { tr: "Türkticaret.net, Bursa", en: "Türkticaret.net, Bursa" },
      maddeler: [{ tr: ".NET Framework ile uygulama geliştirme.", en: "Application development with the .NET Framework." }] }
  ],

  beceriler: [
    { grup: { tr: "Yapay Zekâ", en: "AI Tools" }, ogeler: ["Claude", "Claude Code", "ChatGPT", "Gemini", "OpenAI API", "NotebookLM", "MagicSchool AI", "Runway", "VEO", "InVideo AI"] },
    { grup: { tr: "Programlama & Web", en: "Programming & Web" }, ogeler: ["C#", ".NET", "Python", "PHP", "JavaScript", "HTML", "CSS", "React", "Next.js", "Node.js", "SAP ABAP"] },
    { grup: { tr: "Veritabanı & Araçlar", en: "Databases & Tools" }, ogeler: ["PostgreSQL", "Prisma", "Electron", "Socket.io", "Git", "GitHub"] },
    { grup: { tr: "Sistem & Ağ", en: "Systems & Network" }, ogeler: [
      { tr: "Ağ yönetimi", en: "Network administration" }, { tr: "Windows kurulum ve bakım", en: "Windows setup & maintenance" },
      { tr: "Sunucu kurulumu", en: "Server setup" }, { tr: "Donanım bakım ve onarım", en: "Hardware repair" },
      { tr: "Akıllı tahta yönetimi", en: "Smart board management" }, { tr: "Konferans salonu ses ve görüntü", en: "Conference hall AV systems" },
      { tr: "Teknik destek", en: "Help desk" }] },
    { grup: { tr: "Elektronik & Robotik", en: "Electronics & Robotics" }, ogeler: ["Arduino", "ESP32", { tr: "Sensörler", en: "Sensors" }, "Tinkercad", { tr: "3D yazıcı", en: "3D printing" }, "LEGO Spike Prime", "EV3", "mBlock", "Scratch"] },
    { grup: { tr: "Tasarım & İçerik", en: "Design & Content" }, ogeler: ["Figma", "Canva", "Photoshop", "Illustrator", { tr: "Yapay zekâ ile video üretimi", en: "AI video production" }] },
    { grup: { tr: "E-ticaret & Ofis", en: "E-commerce & Office" }, ogeler: ["ikas", "Microsoft Office", "Excel"] }
  ],

  /* ---------------- ÖĞRETMENLİK ---------------- */
  ogretmenlik: {
    slogan: { tr: "Projelerle öğretiyorum.", en: "I teach through projects." },
    yaklasim: {
      tr: "Öğrencilerim bir konuyu dinleyerek değil, onunla bir şey üreterek öğreniyor. Her ünitenin sonunda çalışan bir ürün olsun istiyorum: bir uygulama, bir devre, bir chatbot. Gerçek bir problemden yola çıkıyor, araçları o problemi çözmek için öğreniyoruz. Hata yapmayı sürecin bir parçası sayıyor, yapay zekâyı da kopya aracı değil, düşünme ortağı olarak kullanmayı öğretiyorum.",
      en: "My students learn a topic by building something with it, not by listening to it. I want every unit to end with a working product: an app, a circuit, a chatbot. We start from a real problem and learn the tools needed to solve it. Mistakes are part of the process, and I teach students to use AI as a thinking partner rather than a shortcut."
    },
    ilkeler: [
      { baslik: { tr: "Üreterek öğrenme", en: "Learning by making" },
        metin: { tr: "Her ünite çalışan bir ürünle biter. Öğrenci yazdığı kodun ne işe yaradığını görür.", en: "Every unit ends with something that works, so students see what their code does." } },
      { baslik: { tr: "Gerçek problemler", en: "Real problems" },
        metin: { tr: "Konular okuldan, şehirden, öğrencinin kendi hayatından seçilen problemlerle işlenir.", en: "Topics are taught through problems from the school, the city and students' own lives." } },
      { baslik: { tr: "Yapay zekâ okuryazarlığı", en: "AI literacy" },
        metin: { tr: "Yapay zekâyı doğru soru sormak, sonucu sorgulamak ve sorumlu kullanmak için öğretiyorum.", en: "Using AI well: asking good questions, checking the output, using it responsibly." } }
    ],
    alanlar: [
      { baslik: { tr: "Mentörlük", en: "Mentoring" },
        metin: { tr: "Kendi mentör grubumdaki öğrencilerin akademik ve sosyal gelişimini takip ediyor, velilerle düzenli iletişim kuruyorum.", en: "I follow the academic and social growth of my mentee group and keep regular contact with parents." } },
      { baslik: { tr: "Yapay Zekâ Kulübü", en: "AI Club" },
        metin: { tr: "Öğrenciler bir problem seçiyor, içeriğini hazırlıyor ve kendi chatbot'larını geliştiriyor.", en: "Students choose a problem, prepare the content and build their own chatbots." } },
      { baslik: { tr: "Yarışma takımları", en: "Competition teams" },
        metin: { tr: "TEKNOFEST, MEB Robot Yarışması ve Destination Imagination takımlarına danışmanlık. Su altı takımımız TEKNOFEST 2026'da Türkiye ikincisi oldu; şimdi 2027 İHA takımı hazırlanıyor.", en: "Advisor for TEKNOFEST, national robotics and Destination Imagination teams. Our underwater team placed 2nd in Türkiye at TEKNOFEST 2026; a 2027 UAV team is now in preparation." } },
      { baslik: { tr: "Öğretmen eğitimleri", en: "Teacher training" },
        metin: { tr: "Öğretmenlere MagicSchool AI, Claude, ChatGPT ve Gemini gibi araçlarla ders planlama, materyal ve ölçme hazırlama üzerine yapay zekâ eğitimleri veriyorum.", en: "AI training for teachers on lesson planning, materials and assessment with MagicSchool AI, Claude, ChatGPT and Gemini." } }
    ],
    /* Verdiğim dersler — tek liste (Öğrenci Köşesi'ndeki sınıf filtreli liste ayrıdır, aşağıda "dersler") */
    dersler: [
      { ad: { tr: "Bilişim Teknolojilerinin Temelleri", en: "Fundamentals of ICT" }, arac: { tr: "Donanım · İşletim sistemi · Ağ", en: "Hardware · Operating systems · Networks" } },
      { ad: { tr: "Programlama Temelleri", en: "Programming Fundamentals" }, arac: { tr: "Algoritma · Python", en: "Algorithms · Python" } },
      { ad: { tr: "Nesne Tabanlı Programlama", en: "Object-Oriented Programming" }, arac: "C# · Windows Forms · .NET" },
      { ad: { tr: "Web Tabanlı Uygulama Geliştirme", en: "Web Application Development" }, arac: "HTML · CSS · JavaScript · PHP" },
      { ad: { tr: "Mobil Uygulamalar", en: "Mobile Applications" }, arac: { tr: "Mobil arayüz · Uygulama yayınlama", en: "Mobile UI · App publishing" } },
      { ad: { tr: "Robotik ve Kodlama", en: "Robotics & Coding" }, arac: "Arduino · Tinkercad · mBlock" },
      { ad: { tr: "Grafik ve Canlandırma", en: "Graphics & Animation" }, arac: { tr: "Photoshop · Illustrator · Animasyon", en: "Photoshop · Illustrator · Animation" } },
      { ad: { tr: "Office Uygulamaları", en: "Office Applications" }, arac: "Word · Excel · PowerPoint" },
      { ad: { tr: "Mesleki Gelişim", en: "Professional Development" }, arac: { tr: "Kariyer planlama · Mesleki yetkinlikler", en: "Career planning · Professional skills" } }
    ],
    yarismalar: [
      { yil: "2027", ad: "TEKNOFEST · İHA", durum: { tr: "hazırlık", en: "preparing" }, tip: "hazirlik" },
      { yil: "2026", ad: { tr: "TEKNOFEST · İnsansız Su Altı Sistemleri", en: "TEKNOFEST · Unmanned Underwater Systems" }, durum: { tr: "Türkiye 2.si", en: "2nd in Türkiye" }, tip: "odul" },
      { yil: "2023", ad: { tr: "MEB Robot Yarışması", en: "MEB Robotics Competition" }, durum: { tr: "danışman", en: "advisor" } },
      { yil: "2022", ad: "Destination Imagination", durum: { tr: "danışman", en: "advisor" } },
      { yil: "2021", ad: "TEKNOFEST", durum: { tr: "danışman", en: "advisor" } }
    ]
  },

  /* Sınıftan kareler — fotoğrafları "assets/galeri/" klasörüne koy, buraya ekle.
     Öğrenci yüzleri görünmesin ya da veli izni alınmış olsun. */
  galeri: [
    // { foto: "assets/galeri/arduino-atolye.jpg", aciklama: { tr: "Arduino atölyesi", en: "Arduino workshop" } },
  ],
  galeriBosYer: 6,   // galeri boşken gösterilecek "yakında" kutusu sayısı

  /* ---------------- YAZILIM & PROJELER ---------------- */
  /* durum: "devam" | "hazirlik" | "tamam" */
  projeler: [
    { ad: "EduKilit", tur: { tr: "Ürün", en: "Product" }, durum: "devam",
      ozet: { tr: "Türk okulları için akıllı tahta kilit ve yönetim sistemi. Okul BT ekibi tahtaları tek panelden yönetir; uzaktan kilitleme, ekran görüntüsü, dosya gönderme ve veli SMS bildirimi sunar.",
              en: "Smart-board lock and management system for schools. The school IT team manages every board from one panel: remote lock, screenshots, file push and parent SMS notifications." },
      rol: { tr: "Tasarım ve geliştirme", en: "Design & development" },
      teknoloji: ["Electron", "Node.js", "PostgreSQL", "React", "PWA", "Socket.io"] },
    { ad: { tr: "Okul Asistanı", en: "School Assistant" }, tur: { tr: "Okul projesi", en: "School project" }, durum: "devam",
      ozet: { tr: "Okul için iki ayrı yapay zekâ uygulaması: soruları yanıtlayan bir chatbot ve sesli asistan.", en: "Two AI apps for the school: a chatbot that answers questions and a voice assistant." },
      rol: { tr: "Geliştirici", en: "Developer" }, teknoloji: ["OpenAI API", "Python", "Web"] },
    { ad: { tr: "İHA ve Su Altı Aracı (ROV)", en: "UAV & Underwater ROV" }, tur: { tr: "Öğrenci projesi", en: "Student project" }, durum: "devam",
      ozet: { tr: "Öğrencilerle insansız hava aracı ve su altı keşif aracı tasarımı ve prototip geliştirme. Su altı takımımız TEKNOFEST 2026'da Türkiye ikincisi oldu.", en: "Designing and prototyping drones and underwater exploration vehicles with students. Our underwater team placed 2nd in Türkiye at TEKNOFEST 2026." },
      rol: { tr: "Proje yürütücüsü", en: "Project lead" }, teknoloji: ["Arduino", "ESP32", "3D printing"] },
    { ad: { tr: "E-ticaret Siteleri", en: "E-commerce Sites" }, tur: { tr: "Serbest çalışma", en: "Freelance" }, durum: "devam",
      ozet: { tr: "İşletmeler için e-ticaret sitesi kurulumu: mağaza yapısı, ürün ve ödeme ayarları, tasarım uyarlaması.", en: "Setting up online stores for businesses: store structure, products, payments and design." },
      rol: { tr: "Kurulum ve tasarım", en: "Setup & design" }, teknoloji: ["ikas", "Web", { tr: "Tasarım", en: "Design" }] },
    { ad: { tr: "Akıllı Periyodik Cetvel", en: "Smart Periodic Table" }, tur: { tr: "Eğitim materyali", en: "Teaching aid" }, durum: "tamam",
      ozet: { tr: "RGB LED'lerle elementleri gruplarına göre aydınlatan etkileşimli kimya materyali.", en: "Interactive chemistry aid that lights element groups with RGB LEDs." },
      rol: { tr: "Tasarım ve üretim", en: "Design & build" }, teknoloji: ["Arduino", "RGB LED"] },
    { ad: { tr: "Okul Yazılımları", en: "School Software" }, tur: { tr: "Yazılım", en: "Software" }, durum: "tamam",
      ozet: { tr: ".NET ile öğrenci takip-yoklama, not takip ve stok uygulamaları.", en: "Attendance, grade tracking and inventory apps built with .NET." },
      rol: { tr: "Geliştirici", en: "Developer" }, teknoloji: ["C#", ".NET", "Windows Forms"] }
  ],
  yigin: [
    { katman: { tr: "Masaüstü", en: "Desktop" }, ogeler: ["C#", ".NET", "Windows Forms", "Electron"] },
    { katman: "Web", ogeler: ["HTML", "CSS", "JavaScript", "PHP", "React", "Next.js"] },
    { katman: "Backend", ogeler: ["Node.js", "PostgreSQL", "Prisma", "Socket.io"] },
    { katman: { tr: "Yapay zekâ", en: "AI" }, ogeler: ["OpenAI API", "Python"] },
    { katman: { tr: "Donanım", en: "Hardware" }, ogeler: ["Arduino", "ESP32", "3D printing"] }
  ],

  /* ---------------- ÖĞRENCİ KÖŞESİ (yalnız Türkçe) ---------------- */
  duyuru: "Ders dosyaları sınıf ve derse göre listelenir. Bir dosya açılmıyorsa derste haber verin.",
  dersler: [
    { kod: "btt", ad: "Bilişim Teknolojilerinin Temelleri", sinif: 9,  arac: "Donanım · İşletim sistemi · Ağ" },
    { kod: "pt",  ad: "Programlama Temelleri",              sinif: 9,  arac: "Algoritma · Python" },
    { kod: "rk",  ad: "Robotik ve Kodlama",                 sinif: 9,  arac: "Arduino · Tinkercad · mBlock" },
    { kod: "ntp", ad: "Nesne Tabanlı Programlama",          sinif: 10, arac: "C# · Windows Forms · .NET" },
    { kod: "web", ad: "Web Tabanlı Uygulama Geliştirme",    sinif: 11, arac: "HTML · CSS · JavaScript · PHP" },
    { kod: "mob", ad: "Mobil Uygulamalar",                  sinif: 11, arac: "Mobil arayüz · Uygulama yayınlama" }
  ],
  /* tur: pdf | pptx | docx | zip | kod | link · ornek: true olanlar örnektir, gerçeğiyle değiştir. */
  dosyalar: [
    { ad: "C# Windows Forms — İlk Uygulama Çalışma Kâğıdı", ders: "ntp", sinif: 10, tur: "pdf",  tarih: "2026-11-02", yol: "dosyalar/ntp-ilk-uygulama.pdf", ornek: true },
    { ad: "Hesap Makinesi Projesi — Başlangıç Kodu",        ders: "ntp", sinif: 10, tur: "zip",  tarih: "2026-10-26", yol: "dosyalar/hesap-makinesi.zip",   ornek: true },
    { ad: "Algoritma ve Akış Şeması Sunumu",                ders: "pt",  sinif: 9,  tur: "pptx", tarih: "2026-10-12", yol: "dosyalar/algoritma.pptx",       ornek: true },
    { ad: "Python Kurulum Rehberi",                         ders: "pt",  sinif: 9,  tur: "link", tarih: "2026-09-28", yol: "#not-python-kurulum" },
    { ad: "Arduino ile Trafik Lambası (Tinkercad)",         ders: "rk",  sinif: 9,  tur: "pdf",  tarih: "2026-10-19", yol: "dosyalar/trafik-lambasi.pdf",   ornek: true },
    { ad: "HTML Etiketleri Kopya Kâğıdı",                   ders: "web", sinif: 11, tur: "pdf",  tarih: "2026-10-05", yol: "dosyalar/html-kopya.pdf",       ornek: true },
    { ad: "GitHub Pages ile Ücretsiz Site Yayınlama",       ders: "web", sinif: 11, tur: "link", tarih: "2026-11-09", yol: "#not-github-pages" }
  ],
  notlar: [
    {
      slug: "github-pages",
      baslik: "GitHub Pages ile ücretsiz site yayınlama",
      tarih: "2026-11-09",
      etiketler: ["web", "github"],
      ozet: "Bu site de böyle yayında. Beş adımda kendi sitenizi internete açın.",
      metin: `
GitHub Pages, bir GitHub deposundaki HTML dosyalarını ücretsiz olarak internette yayınlar. Sunucu kiralamanız gerekmez.

## 1. Hesap ve depo

GitHub'da hesap açın. Sağ üstteki **+** düğmesinden *New repository* seçin. Depo adını \`kullaniciadi.github.io\` yaparsanız siteniz doğrudan bu adreste açılır.

## 2. Dosyaları yükleyin

Depoda *Add file → Upload files* deyin. \`index.html\` dosyası mutlaka ana klasörde olmalı; tarayıcı siteyi bu dosyadan açar.

## 3. Pages'i açın

*Settings → Pages* bölümünde kaynak olarak \`main\` dalını ve \`/ (root)\` klasörünü seçin, kaydedin.

## 4. Bekleyin ve kontrol edin

Bir iki dakika sonra siteniz yayında olur. Her yeni yüklemede site kendiliğinden güncellenir.

> İpucu: Bir şey bozulursa önce tarayıcıda F12 ile konsolu açın. Hata mesajı çoğu zaman hangi dosyanın bulunamadığını söyler.

## 5. Kendi alan adınız (isteğe bağlı)

Alan adı aldıysanız *Settings → Pages → Custom domain* kutusuna yazın ve alan adı firmasında DNS kayıtlarını GitHub'a yönlendirin.
`
    },
    {
      slug: "winforms-ilk-uygulama",
      baslik: "C# Windows Forms: ilk uygulamamız",
      tarih: "2026-11-02",
      etiketler: ["c#", "10. sınıf"],
      ozet: "Form, buton ve etiketle tıklamaya tepki veren ilk programı yazıyoruz.",
      metin: `
Bu derste bir butona tıklandığında ekrandaki yazıyı değiştiren küçük bir uygulama yazıyoruz.

## Proje oluşturma

Visual Studio'da *Yeni Proje → Windows Forms App (.NET Framework)* seçin. Projeye anlamlı bir ad verin, örneğin \`IlkUygulama\`.

## Form tasarımı

Araç kutusundan forma bir **Label** ve bir **Button** sürükleyin. Özellikler penceresinden adlarını değiştirin:

- Label: \`lblMesaj\`
- Button: \`btnTikla\`

## Kod

Butona çift tıklayın. Visual Studio sizin için tıklama olayını açar:

~~~
private void btnTikla_Click(object sender, EventArgs e)
{
    lblMesaj.Text = "Merhaba, ilk uygulamam çalışıyor!";
}
~~~

**F5** ile çalıştırın ve butona tıklayın.

## Kendin dene

1. Her tıklamada artan bir sayaç ekle.
2. Sayaç 10 olunca butonu devre dışı bırak (\`btnTikla.Enabled = false\`).
`
    },
    {
      slug: "python-kurulum",
      baslik: "Python'a başlarken: kurulum",
      tarih: "2026-09-28",
      etiketler: ["python", "9. sınıf"],
      ozet: "Evdeki bilgisayara Python ve kod editörü kurmak için adımlar.",
      metin: `
Derste yazdığımız kodları evde de çalıştırabilmek için iki şeye ihtiyacınız var: Python ve bir kod editörü.

## Python

python.org adresinden *Downloads* bölümüne girin ve en güncel sürümü indirin. Kurulumun ilk ekranında **Add Python to PATH** kutusunu mutlaka işaretleyin.

## Kontrol

Komut istemini açıp şunu yazın:

~~~
python --version
~~~

Sürüm numarası görüyorsanız kurulum tamam.

## Editör

Visual Studio Code kurun, ardından eklentilerden **Python** eklentisini yükleyin. Yeni bir \`deneme.py\` dosyası açıp \`print("Merhaba")\` yazın ve çalıştırın.

> Bilgisayarınız yoksa replit.com gibi tarayıcıda çalışan ortamları kullanabilirsiniz.
`
    }
  ],

  /* ---------------- HOBİLER ---------------- */
  hobiler: [
    { ad: { tr: "Dağcılık", en: "Mountaineering" }, metin: { tr: "Zirve rotaları, yürüyüş planlama ve doğada uzun günler.", en: "Summit routes, route planning and long days outdoors." } },
    { ad: { tr: "Yürüyüş & Kamp", en: "Hiking & Camping" }, metin: { tr: "Hafta sonu parkurları, kamp kurmak ve ekipman denemek.", en: "Weekend trails, setting up camp and testing gear." } },
    { ad: { tr: "Balıkçılık", en: "Fishing" }, metin: { tr: "Sabır isteyen, kafayı boşaltan bir uğraş.", en: "A patient hobby that clears the head." } },
    { ad: { tr: "Kodlama", en: "Coding" }, metin: { tr: "Ders dışında da kod yazıyorum: okul için araçlar, yan projeler, denemeler.", en: "I code outside class too: tools for the school, side projects, experiments." } }
  ]
};
