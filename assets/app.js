/* Utku Hacılar — sayfa motoru. İçerik için icerik.js dosyasını düzenleyin. */
(function () {
  "use strict";
  var S = window.SITE, P = S.profil;
  var view = document.getElementById("view");
  var L = document.documentElement.getAttribute("lang") === "en" ? "en" : "tr";

  /* ---------- yardımcılar ---------- */
  function t(v) { return v && typeof v === "object" && !Array.isArray(v) && ("tr" in v || "en" in v) ? (v[L] || v.tr) : v; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function e(v) { return esc(t(v)); }
  function kucuk(s) { return String(s).toLocaleLowerCase("tr"); }
  function tarih(s) {
    var p = String(s).split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    return isNaN(d) ? esc(s) : d.toLocaleDateString(L === "en" ? "en-GB" : "tr-TR", { day: "numeric", month: "short", year: "numeric" });
  }
  function ders(kod) { for (var i = 0; i < S.dersler.length; i++) if (S.dersler[i].kod === kod) return S.dersler[i]; return null; }

  var U = {
    profil: { tr: "Profil", en: "Profile" },
    ogretmenlik: { tr: "Öğretmenlik", en: "Teaching" },
    yazilim: { tr: "Yazılım", en: "Software" },
    ogrenci: { tr: "Öğrenci Köşesi", en: "Students" },
    hobiler: { tr: "Hobiler", en: "Hobbies" },
    cvIndir: { tr: "CV'yi indir", en: "Download CV" },
    digerCv: { tr: "English CV", en: "Türkçe CV" },
    iletisimeGec: { tr: "İletişime geç", en: "Get in touch" },
    uzmanlik: { tr: "Uzmanlık alanları", en: "Areas of expertise" },
    deneyim: { tr: "Deneyim", en: "Experience" },
    egitim: { tr: "Eğitim", en: "Education" },
    yetkinlik: { tr: "Yetkinlikler", en: "Skills" },
    diller: { tr: "Diller", en: "Languages" },
    gunumuz: { tr: "Günümüz", en: "Present" },
    dahaFazla: { tr: "Bu sitede daha fazlası", en: "More on this site" },
    iletisim: { tr: "İletişim", en: "Contact" },
    eposta: { tr: "E-posta", en: "Email" },
    telefon: { tr: "Telefon", en: "Phone" },
    kurum: { tr: "Kurum", en: "School" },
    kopyala: { tr: "Kopyala", en: "Copy" },
    kopyalandi: { tr: "Kopyalandı", en: "Copied" },
    secildi: { tr: "Seçildi, Ctrl+C", en: "Selected, Ctrl+C" },
    incele: { tr: "İncele →", en: "Explore →" },
    yaklasim: { tr: "Yaklaşımım", en: "My approach" },
    verdigim: { tr: "Verdiğim dersler", en: "Courses I teach" },
    sinif: { tr: "sınıf", en: "grade" },
    dosyalar: { tr: "Ders dosyaları →", en: "Course files →" },
    sinifDisi: { tr: "Sınıfın dışında", en: "Beyond the classroom" },
    yarismalar: { tr: "Yarışmalar ve takımlar", en: "Competitions & teams" },
    galeri: { tr: "Sınıftan kareler", en: "From the classroom" },
    yakinda: { tr: "Fotoğraf yakında", en: "Photo coming soon" },
    rolum: { tr: "Rolüm", en: "Role" },
    devam: { tr: "devam ediyor", en: "in progress" },
    hazirlik: { tr: "hazırlık", en: "preparing" },
    tamam: { tr: "tamamlandı", en: "completed" },
    hobiAlt: { tr: "Ekrandan kalktığımda dağ, kamp ve su kenarı. Ekran başındayken yine kod.", en: "Away from the screen: mountains, camping and the waterside. At the screen: more code." }
  };
  function u(k) { return esc(t(U[k])); }

  var I = {
    ok: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    indir: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    pin: '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
    okul: '<path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 11.5V16c0 1.4 2.2 3 5 3s5-1.6 5-3v-4.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5L12 13l8.5-6.5"/>',
    ai: '<rect x="5" y="5" width="14" height="14" rx="3"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><path d="M9.5 15l1.5-6h2l1.5 6M10.2 13h3.6"/>',
    ders: '<path d="M4 5h7a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4z"/><path d="M20 5h-7a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h7z"/>',
    ag: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-2h12v2"/>',
    kod: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    kisi: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.5 3.6-5.5 7-5.5s6.2 2 7 5.5"/>',
    kupa: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8"/>',
    sunum: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4"/>',
    dosya: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h6"/>',
    dag: '<path d="M3 19l6-10 4 6 2-3 6 7z"/><path d="M8 11l1.5 1.5L11 11"/>',
    kamera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'
  };
  function svg(k) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + I[k] + '</svg>'; }

  /* ---------- mini markdown ---------- */
  function satirIci(s) {
    s = esc(s);
    s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, a, h) {
      return '<a href="' + h + '"' + (/^https?:/.test(h) ? ' target="_blank" rel="noopener"' : "") + ">" + a + "</a>";
    });
    return s;
  }
  function md(src) {
    var Ls = String(src).replace(/\r/g, "").split("\n"), out = [], i = 0, para = [];
    function bitir() { if (para.length) { out.push("<p>" + satirIci(para.join(" ")) + "</p>"); para = []; } }
    while (i < Ls.length) {
      var l = Ls[i];
      if (/^(~~~|```)/.test(l)) {
        bitir(); var k = []; i++;
        while (i < Ls.length && !/^(~~~|```)/.test(Ls[i])) { k.push(Ls[i]); i++; }
        out.push("<pre><code>" + esc(k.join("\n")) + "</code></pre>"); i++; continue;
      }
      var h = l.match(/^(#{1,3})\s+(.*)/);
      if (h) { bitir(); var n = Math.min(h[1].length + 1, 3); out.push("<h" + n + ">" + satirIci(h[2]) + "</h" + n + ">"); i++; continue; }
      if (/^>\s?/.test(l)) { bitir(); var q = []; while (i < Ls.length && /^>\s?/.test(Ls[i])) { q.push(Ls[i].replace(/^>\s?/, "")); i++; } out.push("<blockquote>" + satirIci(q.join(" ")) + "</blockquote>"); continue; }
      if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
        bitir(); var ol = /^\s*\d+\./.test(l), li = [];
        while (i < Ls.length && /^\s*([-*]|\d+\.)\s+/.test(Ls[i])) { li.push("<li>" + satirIci(Ls[i].replace(/^\s*([-*]|\d+\.)\s+/, "")) + "</li>"); i++; }
        out.push((ol ? "<ol>" : "<ul>") + li.join("") + (ol ? "</ol>" : "</ul>")); continue;
      }
      if (/^\s*$/.test(l)) { bitir(); i++; continue; }
      para.push(l.trim()); i++;
    }
    bitir();
    return out.join("\n");
  }

  function yilAraligi(x) { return esc(x.bas) + " – " + (x.bit ? esc(x.bit) : u("gunumuz")); }
  function bolumBaslik(baslik, sag) { return '<div class="sec-h"><h2>' + baslik + '</h2>' + (sag || "") + '</div>'; }

  /* =========================================================
     PROFİL
     ========================================================= */
  function profil() {
    var digerDil = L === "tr" ? "en" : "tr";
    var hero =
      '<section class="p-hero"><div>' +
      '<div class="eyebrow">' + e(P.unvan) + '</div>' +
      '<h1>' + esc(P.ad) + '</h1>' +
      '<div class="meta"><span>' + svg("pin") + e(P.konum) + '</span></div>' +
      '<p class="lead">' + e(P.ozet) + '</p>' +
      '<div class="btns">' +
      '<a class="btn p" href="' + esc(P.cv[L]) + '" target="_blank" rel="noopener">' + svg("indir") + u("cvIndir") + '</a>' +
      '<button class="btn s" type="button" data-kaydir="iletisim">' + u("iletisimeGec") + '</button>' +
      '<a class="link-sm" href="' + esc(P.cv[digerDil]) + '" target="_blank" rel="noopener">' + u("digerCv") + '</a>' +
      '</div></div>' +
      '<figure class="portre"><img src="' + esc(P.foto) + '" alt="' + esc(P.ad) + '" width="720" height="900"></figure></section>';

    var uIkon = ["ai", "ders", "ag", "kod"];
    var uzm = '<section class="sec">' + bolumBaslik(u("uzmanlik")) +
      '<div class="card uzm">' + S.uzmanlik.map(function (x, i) {
        return '<div>' + svg(uIkon[i % 4]) + '<h3>' + e(x.baslik) + '</h3><p>' + e(x.metin) + '</p></div>';
      }).join("") + '</div></section>';

    var isler = S.ozgecmis.filter(function (x) { return x.hat === "is"; });
    var egt = S.ozgecmis.filter(function (x) { return x.hat === "egitim"; });
    var tl = '<div class="card tl">' + isler.map(function (x) {
      return '<div class="tl-row' + (x.bit ? "" : " su-an") + '"><div class="tl-yil">' + yilAraligi(x) + '</div><div class="tl-cizgi"><i></i></div>' +
        '<div class="tl-ic"><h3>' + e(x.baslik) + '</h3><div class="yer">' + e(x.yer) + '</div>' +
        (x.maddeler.length ? '<ul>' + x.maddeler.map(function (m) { return "<li>" + e(m) + "</li>"; }).join("") + '</ul>' : "") + '</div></div>';
    }).join("") + '</div>';
    var yan = '<div class="yan">' +
      '<div class="card blok"><h3>' + u("egitim") + '</h3><ul class="clean egt">' + egt.map(function (x) {
        return '<li><b>' + e(x.baslik) + '</b><span>' + e(x.yer) + '</span><span class="num">' + yilAraligi(x) + '</span></li>';
      }).join("") + '</ul></div>' +
      '<div class="card blok"><h3>' + u("yetkinlik") + '</h3><div class="bec">' + S.beceriler.map(function (b) {
        return '<div><div class="g">' + e(b.grup) + '</div><div class="tags">' + b.ogeler.map(function (o) { return '<span class="tag">' + e(o) + '</span>'; }).join("") + '</div></div>';
      }).join("") + '</div></div>' +
      '<div class="card blok"><h3>' + u("diller") + '</h3><p style="color:var(--ink-2)">' + e(P.diller) + '</p></div></div>';
    var cvb = '<section class="sec">' + bolumBaslik(u("deneyim"), '<a href="' + esc(P.cv[L]) + '" target="_blank" rel="noopener">' + u("cvIndir") + ' →</a>') +
      '<div class="cv-grid">' + tl + yan + '</div></section>';

    var kapiMetin = {
      ogretmenlik: { tr: "Öğretim yaklaşımım, derslerim, mentörlük ve yarışma takımları.", en: "My teaching approach, courses, mentoring and competition teams." },
      yazilim: { tr: "EduKilit, okul asistanı ve öğrencilerle geliştirdiğimiz projeler.", en: "EduKilit, the school assistant and projects built with students." },
      ogrenci: { tr: "Öğrencilerim için ders dosyaları ve notlar.", en: "Course files and notes for my students (in Turkish)." },
      hobiler: { tr: "Dağcılık, kamp, balıkçılık ve ekran dışı hayat.", en: "Mountaineering, camping, fishing and life off-screen." }
    };
    var kIkon = { ogretmenlik: "ders", yazilim: "kod", ogrenci: "dosya", hobiler: "dag" };
    var kapilar = '<section class="sec">' + bolumBaslik(u("dahaFazla")) + '<div class="kapilar">' +
      ["ogretmenlik", "yazilim", "ogrenci", "hobiler"].map(function (k) {
        return '<a class="card kapi ' + k + '" href="#' + k + '" style="--c:var(--ac-' + k + ')"><span class="sw">' + svg(kIkon[k]) + '</span>' +
          '<h3>' + u(k) + '</h3><p>' + e(kapiMetin[k]) + '</p><span class="git">' + u("incele") + '</span></a>';
      }).join("") + '</div></section>';

    return '<div class="page">' + hero + uzm + cvb + kapilar + iletisimBlok() + '</div>';
  }

  function iletisimBlok() {
    function satir(k, v, kopya, link) {
      return '<div class="ilet-row"><span class="k">' + k + '</span>' +
        (link ? '<a class="v" href="' + esc(link) + '" target="_blank" rel="noopener">' + esc(v) + '</a>' : '<span class="v">' + esc(v) + '</span>') +
        (kopya ? '<button class="kopya" type="button" data-kopya="' + esc(v) + '">' + u("kopyala") + '</button>' : "<span></span>") + '</div>';
    }
    return '<section class="sec" id="iletisim">' + bolumBaslik(u("iletisim")) + '<div class="card ilet">' +
      satir(u("eposta"), P.eposta, true) +
      (P.telefon ? satir(u("telefon"), P.telefon, true) : "") +
      satir("LinkedIn", P.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), false, P.linkedin) +
      satir("GitHub", P.github.replace(/^https?:\/\//, ""), false, P.github) +
      '</div></section>';
  }

  /* =========================================================
     ÖĞRETMENLİK
     ========================================================= */
  function ogretmenlik() {
    var O = S.ogretmenlik;
    var slogan = e(O.slogan).replace(/^(\S+)/, "<span>$1</span>");
    var hero = '<section class="o-hero"><div class="eyebrow">' + u("ogretmenlik") + '</div><h1>' + slogan + '</h1><p class="lead">' + e(O.yaklasim) + '</p></section>';

    var ilkeler = '<section class="sec">' + bolumBaslik(u("yaklasim")) + '<div class="ilkeler">' + O.ilkeler.map(function (x, i) {
      return '<div class="card ilke"><span class="mono">0' + (i + 1) + '</span><h3>' + e(x.baslik) + '</h3><p>' + e(x.metin) + '</p></div>';
    }).join("") + '</div></section>';

    var dersler = '<section class="sec">' + bolumBaslik(u("verdigim"), '<a href="#ogrenci">' + u("dosyalar") + '</a>') +
      '<ul class="clean card dliste">' + O.dersler.map(function (d) {
        return '<li><b>' + e(d.ad) + '</b><span>' + e(d.arac) + '</span></li>';
      }).join("") + '</ul></section>';

    var aIkon = ["kisi", "ai", "kupa", "sunum"];
    var alanlar = '<section class="sec">' + bolumBaslik(u("sinifDisi")) + '<div class="alanlar">' + O.alanlar.map(function (x, i) {
      return '<div class="card alan"><span class="ic">' + svg(aIkon[i % 4]) + '</span><div><h3>' + e(x.baslik) + '</h3><p>' + e(x.metin) + '</p></div></div>';
    }).join("") + '</div></section>';

    var yar = '<section class="sec">' + bolumBaslik(u("yarismalar")) + '<ul class="clean card yar">' + O.yarismalar.map(function (y) {
      return '<li><span class="y">' + esc(y.yil) + '</span><span>' + e(y.ad) + '</span><span class="pill ' + (y.tip || "") + '">' + e(y.durum) + '</span></li>';
    }).join("") + '</ul></section>';

    var g = S.galeri || [], kutular = g.map(function (f) {
      return '<figure><img src="' + esc(f.foto) + '" alt="' + e(f.aciklama) + '" loading="lazy"><figcaption>' + e(f.aciklama) + '</figcaption></figure>';
    });
    for (var i = g.length; i < (S.galeriBosYer || 0); i++) kutular.push('<div class="yakinda"><div>' + svg("kamera") + u("yakinda") + '</div></div>');
    var galeri = kutular.length ? '<section class="sec">' + bolumBaslik(u("galeri")) + '<div class="galeri">' + kutular.join("") + '</div></section>' : "";

    return '<div class="page">' + hero + ilkeler + dersler + alanlar + yar + galeri + '</div>';
  }

  /* =========================================================
     YAZILIM
     ========================================================= */
  function hucre(no, kod, govde, sag, cikti) {
    return '<section class="cell"><div class="prompt">In [' + no + ']:</div><div class="sheet">' +
      '<div class="sheet-h"><code>' + kod + '</code>' + (sag || "") + '</div>' + govde +
      (cikti ? '<div class="out"><div class="lbl">Out [' + no + ']:</div>' + cikti + '</div>' : "") + '</div></section>';
  }
  function projeKart(p) {
    return '<article class="proje"><div class="ust"><span>' + e(p.tur) + '</span><span class="pill ' + p.durum + '">' + u(p.durum) + '</span></div>' +
      '<h3>' + e(p.ad) + '</h3><p>' + e(p.ozet) + '</p><div class="rol">' + u("rolum") + ': <b>' + e(p.rol) + '</b></div>' +
      '<div class="tags">' + p.teknoloji.map(function (x) { return '<span class="tag">' + e(x) + '</span>'; }).join("") + '</div></article>';
  }
  function yazilim() {
    var aktif = S.projeler.filter(function (p) { return p.durum !== "tamam"; }).length;
    var giris = '<div class="sheet-b"><p class="lead" style="max-width:none">' +
      (L === "en" ? "I build software for schools: classroom technology, management tools and AI assistants. Some are products, some are projects built together with my students."
                  : "Okullar için yazılım geliştiriyorum: sınıf teknolojileri, yönetim araçları ve yapay zekâ asistanları. Bir kısmı ürün, bir kısmı öğrencilerimle birlikte geliştirdiğimiz projeler.") +
      '</p><div class="btns" style="margin-top:18px"><a class="btn p" href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub ' + svg("ok") + '</a></div></div>';
    var dict = '<div class="dict">{\n  <span class="k">"' + (L === "en" ? "projects" : "projeler") + '"</span>: <span class="n">' + S.projeler.length + '</span>,\n' +
      '  <span class="k">"' + (L === "en" ? "active" : "aktif") + '"</span>: <span class="n">' + aktif + '</span>,\n' +
      '  <span class="k">"' + (L === "en" ? "focus" : "odak") + '"</span>: [<span class="s">"' + (L === "en" ? "education" : "eğitim") + '"</span>, <span class="s">".NET"</span>, <span class="s">"web"</span>, <span class="s">"' + (L === "en" ? "AI" : "yapay zekâ") + '"</span>]\n}</div>';
    var sira = { devam: 0, hazirlik: 1, tamam: 2 };
    var proj = '<div class="sheet-b"><div class="pgrid' + (S.projeler.length % 2 ? " tek" : "") + '">' + S.projeler.slice().sort(function (a, b) { return sira[a.durum] - sira[b.durum]; }).map(projeKart).join("") + '</div></div>';
    var yig = '<div class="sheet-b"><ul class="clean yigin">' + S.yigin.map(function (y) {
      return '<li><span class="k">' + e(y.katman) + '</span><div class="tags">' + y.ogeler.map(function (o) { return '<span class="tag">' + esc(o) + '</span>'; }).join("") + '</div></li>';
    }).join("") + '</ul></div>';
    return '<div class="page y-page"><header class="y-baslik"><div class="yol">~/<b>' + (L === "en" ? "software" : "yazilim") + '</b></div><h1>' + (L === "en" ? "Software & Projects" : "Yazılım ve Projeler") + '</h1></header>' +
      hucre(1, '<span class="fn">utku</span>.yazilim()', giris, "", dict) +
      hucre(2, '<span class="fn">projeler</span>.listele()', proj) +
      hucre(3, '<span class="fn">teknoloji</span>.yigin', yig) +
      '</div>';
  }

  /* =========================================================
     ÖĞRENCİ KÖŞESİ (Türkçe)
     ========================================================= */
  var durum = { sinif: "tum", ders: "tum", q: "", etiket: "" };
  function siraliNotlar() { return S.notlar.slice().sort(function (a, b) { return a.tarih < b.tarih ? 1 : -1; }); }
  function notSatir(n) {
    return '<a class="not-li" href="#not-' + esc(n.slug) + '"><span class="num">' + tarih(n.tarih) + '</span><div><h3>' + esc(n.baslik) + '</h3><p>' + esc(n.ozet) + '</p>' +
      '<div class="tags">' + n.etiketler.map(function (x) { return '<span class="tag">#' + esc(x) + '</span>'; }).join("") + '</div></div></a>';
  }
  function ogrenci() {
    var dersKart = '<div class="dersler">' + S.dersler.map(function (d) {
      var n = S.dosyalar.filter(function (f) { return f.ders === d.kod; }).length;
      return '<button type="button" class="card ders" data-ders="' + d.kod + '" aria-pressed="' + (durum.ders === d.kod) + '"><span class="ust"><b>' + d.sinif + '. sınıf</b><span>' + n + ' dosya</span></span>' +
        '<strong>' + esc(d.ad) + '</strong><small>' + esc(d.arac) + '</small></button>';
    }).join("") + '</div>';
    var seg = '<div class="seg" role="group" aria-label="Sınıf">' + ["tum", "9", "10", "11"].map(function (s) {
      return '<button type="button" data-sinif="' + s + '" aria-pressed="' + (durum.sinif === s) + '">' + (s === "tum" ? "Tümü" : s + ".") + '</button>';
    }).join("") + '</div>';
    var sec = '<select class="alanx" id="fDers" aria-label="Ders"><option value="tum">Tüm dersler</option>' + S.dersler.map(function (d) {
      return '<option value="' + d.kod + '"' + (durum.ders === d.kod ? " selected" : "") + '>' + esc(d.ad) + '</option>';
    }).join("") + '</select>';

    var etiketler = [];
    S.notlar.forEach(function (n) { n.etiketler.forEach(function (x) { if (etiketler.indexOf(x) < 0) etiketler.push(x); }); });
    var notlar = siraliNotlar().filter(function (n) { return !durum.etiket || n.etiketler.indexOf(durum.etiket) >= 0; });
    var eseg = '<div class="seg" role="group" aria-label="Etiket">' + [""].concat(etiketler).map(function (x) {
      return '<button type="button" data-etiket="' + esc(x) + '" aria-pressed="' + (durum.etiket === x) + '">' + (x ? "#" + esc(x) : "Tümü") + '</button>';
    }).join("") + '</div>';

    return '<div class="page">' +
      '<header class="s-baslik"><div class="eyebrow">Öğrenci Köşesi</div><h1>Ders dosyaları ve notlar</h1>' +
      '<p class="lead">Çalışma kâğıtları, sunumlar, proje başlangıç kodları ve ders notları. Dersini seç, dosyanı bul.</p>' +
      (L === "en" ? '<p class="dil-not">This section is for my students and is written in Turkish.</p>' : "") + '</header>' +
      (S.duyuru ? '<div class="duyuru"><b>Duyuru</b><span>' + esc(S.duyuru) + '</span></div>' : "") +
      '<section class="sec">' + bolumBaslik("Dersler") + dersKart + '</section>' +
      '<section class="sec">' + bolumBaslik("Dosyalar") + '<div class="card"><div class="kontrol">' + seg + sec +
      '<input class="alanx ara" id="fAra" type="search" placeholder="Dosya ara…" value="' + esc(durum.q) + '" aria-label="Dosya ara"></div><div id="dosyaListe"></div></div></section>' +
      '<section class="sec" id="notlar">' + bolumBaslik("Notlar") + '<div class="card"><div class="kontrol">' + eseg + '</div><div class="notlar">' +
      (notlar.length ? notlar.map(notSatir).join("") : '<div class="bos"><strong>Henüz not yok</strong></div>') + '</div></div></section>' +
      '</div>';
  }
  function dosyaListe() {
    var el = document.getElementById("dosyaListe"); if (!el) return;
    var q = kucuk(durum.q.trim());
    var l = S.dosyalar.filter(function (f) {
      if (durum.sinif !== "tum" && String(f.sinif) !== durum.sinif) return false;
      if (durum.ders !== "tum" && f.ders !== durum.ders) return false;
      if (q) { var d = ders(f.ders); if (kucuk(f.ad + " " + (d ? d.ad : "")).indexOf(q) < 0) return false; }
      return true;
    }).sort(function (a, b) { return a.tarih < b.tarih ? 1 : -1; });
    if (!l.length) { el.innerHTML = '<div class="bos"><strong>Bu seçimde dosya yok</strong>Başka bir sınıf ya da ders seçin veya aramayı temizleyin.</div>'; return; }
    el.innerHTML = '<div class="tbl-wrap"><table class="dtablo"><thead><tr><th>Dosya</th><th>Ders</th><th>Sınıf</th><th>Tarih</th><th></th></tr></thead><tbody>' + l.map(function (f) {
      var d = ders(f.ders), ic = /^#/.test(f.yol);
      var link = f.ornek ? '<span class="indir pasif">Yakında</span>' : ic ? '<a class="indir" href="' + esc(f.yol) + '">Oku →</a>' :
        '<a class="indir" href="' + esc(f.yol) + '"' + (f.tur === "pdf" ? ' target="_blank" rel="noopener">Aç' : ' download>İndir') + '</a>';
      return '<tr><td><div class="dosya-ad"><span class="ftur ' + esc(f.tur) + '">' + esc(String(f.tur).toUpperCase()) + '</span><span>' + esc(f.ad) + (f.ornek ? '<span class="ornek">örnek</span>' : "") + '</span></div></td>' +
        '<td class="d-ders">' + esc(d ? d.ad : f.ders) + '</td><td class="d-sinif num">' + esc(f.sinif) + '</td><td class="d-tarih num">' + tarih(f.tarih) + '</td><td class="d-link" style="text-align:right">' + link + '</td></tr>';
    }).join("") + '</tbody></table></div>';
  }
  function notOku(slug) {
    var n = S.notlar.filter(function (x) { return x.slug === slug; })[0];
    if (!n) return yok();
    return '<div class="page" style="gap:20px"><a class="geri" href="#ogrenci">← Öğrenci Köşesi</a>' +
      '<article class="card okuma"><div class="meta"><span>' + tarih(n.tarih) + '</span>' + n.etiketler.map(function (x) { return '<span>#' + esc(x) + '</span>'; }).join("") + '</div>' +
      '<h1>' + esc(n.baslik) + '</h1><div class="prose">' + md(n.metin) + '</div></article></div>';
  }

  /* =========================================================
     HOBİLER
     ========================================================= */
  var CIZGI = [
    "M0 30 L18 24 L30 26 L46 12 L58 16 L74 2 L88 10 L100 6 L118 20 L134 14 L150 26 L170 22 L200 30",
    "M0 26 C20 26 24 18 40 18 S62 26 80 22 S110 8 130 12 S170 24 200 16",
    "M0 18 Q12 6 25 18 T50 18 T75 18 T100 18 T125 18 T150 18 T175 18 T200 18",
    "M4 32 V20 M20 32 V10 M36 32 V24 M52 32 V6 M68 32 V16 M84 32 V22 M100 32 V4 M116 32 V18 M132 32 V12 M148 32 V26 M164 32 V8 M180 32 V20 M196 32 V14"
  ];
  function hobiler() {
    return '<div class="page"><header class="s-baslik"><div class="eyebrow">' + u("hobiler") + '</div><h1>' + (L === "en" ? "Off the clock" : "Mesai dışında") + '</h1><p class="lead">' + u("hobiAlt") + '</p></header>' +
      '<div class="hgrid">' + S.hobiler.map(function (h, i) {
        var gorsel = h.foto ? '<img src="' + esc(h.foto) + '" alt="' + e(h.ad) + '" loading="lazy">' : '<div class="yakinda"><div>' + svg("kamera") + u("yakinda") + '</div></div>';
        return '<article class="card hobi">' + gorsel + '<div class="ic"><h3>' + e(h.ad) + '</h3><p>' + e(h.metin) + '</p>' +
          '<div class="cizgi" aria-hidden="true"><svg viewBox="0 0 200 34" preserveAspectRatio="none"><path d="' + CIZGI[i % CIZGI.length] + '"/></svg></div></div></article>';
      }).join("") + '</div></div>';
  }

  function yok() {
    return '<div class="page"><div class="card bos"><strong>' + (L === "en" ? "Page not found" : "Bu sayfa bulunamadı") + '</strong><a href="#profil">' + u("profil") + ' →</a></div></div>';
  }

  /* =========================================================
     GEZİNME
     ========================================================= */
  var BOLUMLER = ["profil", "ogretmenlik", "yazilim", "ogrenci", "hobiler"];
  var SAYFA = { profil: profil, ogretmenlik: ogretmenlik, yazilim: yazilim, ogrenci: ogrenci, hobiler: hobiler };
  var ESKI = { ana: "profil", cv: "profil", iletisim: "profil", projeler: "yazilim", dersler: "ogrenci", notlar: "ogrenci" };

  function kabuk(aktif) {
    document.getElementById("nav").innerHTML = BOLUMLER.map(function (b) {
      return '<a href="#' + b + '" style="--c:var(--ac-' + b + ')"' + (b === aktif ? ' aria-current="page"' : "") + '><i></i>' + u(b) + '</a>';
    }).join("");
    document.getElementById("brandSub").textContent = t(P.unvan);
    [].forEach.call(document.querySelectorAll("[data-dil]"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-dil") === L)); });
    document.getElementById("foot").innerHTML =
      '<div><b>' + esc(P.ad) + '</b><span>' + e(P.unvan) + ' · ' + e(P.konum) + '</span></div>' +
      '<nav><a href="mailto:' + esc(P.eposta) + '">' + esc(P.eposta) + '</a><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + esc(P.github) + '" target="_blank" rel="noopener">GitHub</a></nav>' +
      '<span class="k">© ' + new Date().getFullYear() + ' ' + esc(P.ad) + '</span>';
    var cur = document.querySelector('.nav a[aria-current="page"]');
    if (cur && window.innerWidth <= 860 && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function git(sakla) {
    var h = (location.hash || "").replace(/^#/, "") || "profil";
    if (ESKI[h]) h = ESKI[h];
    var bolum, html, ad;
    if (h.indexOf("not-") === 0) {
      bolum = "ogrenci"; html = notOku(h.slice(4));
      var n = S.notlar.filter(function (x) { return "not-" + x.slug === h; })[0];
      ad = n ? n.baslik : "Not";
    } else if (SAYFA[h]) { bolum = h; html = SAYFA[h](); ad = t(U[h]); }
    else { bolum = "profil"; html = yok(); ad = "404"; }
    document.body.setAttribute("data-bolum", bolum);
    view.innerHTML = html;
    kabuk(bolum);
    if (bolum === "ogrenci") dosyaListe();
    document.title = h === "profil" ? P.ad + " · " + t(P.unvan) : ad + " · " + P.ad;
    if (!sakla) { window.scrollTo(0, 0); try { view.focus({ preventScroll: true }); } catch (x) {} }
  }

  /* ---------- etkileşim ---------- */
  document.addEventListener("click", function (ev) {
    var d = ev.target.closest("[data-dil]");
    if (d) {
      L = d.getAttribute("data-dil");
      document.documentElement.setAttribute("lang", L);
      try { localStorage.setItem("dil", L); } catch (x) {}
      var y = window.scrollY; git(true); window.scrollTo(0, y); return;
    }
  });
  view.addEventListener("click", function (ev) {
    var x = ev.target.closest("[data-ders],[data-sinif],[data-etiket],[data-kopya],[data-kaydir]");
    if (!x) return;
    if (x.hasAttribute("data-kaydir")) { var hedef = document.getElementById(x.getAttribute("data-kaydir")); if (hedef) hedef.scrollIntoView({ block: "start" }); return; }
    if (x.hasAttribute("data-ders")) {
      var k = x.getAttribute("data-ders");
      durum.ders = durum.ders === k ? "tum" : k; durum.sinif = "tum";
      [].forEach.call(document.querySelectorAll(".ders[data-ders]"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-ders") === durum.ders)); });
      [].forEach.call(document.querySelectorAll("[data-sinif]"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-sinif") === "tum")); });
      var s = document.getElementById("fDers"); if (s) s.value = durum.ders;
      dosyaListe(); return;
    }
    if (x.hasAttribute("data-sinif")) {
      durum.sinif = x.getAttribute("data-sinif");
      [].forEach.call(x.parentNode.children, function (b) { b.setAttribute("aria-pressed", String(b === x)); });
      dosyaListe(); return;
    }
    if (x.hasAttribute("data-etiket")) { durum.etiket = x.getAttribute("data-etiket"); var y = window.scrollY; git(true); window.scrollTo(0, y); return; }
    if (x.hasAttribute("data-kopya")) {
      var v = x.getAttribute("data-kopya");
      var ok = function () { x.textContent = t(U.kopyalandi); setTimeout(function () { x.textContent = t(U.kopyala); }, 1600); };
      var sec = function () { var r = document.createRange(); r.selectNodeContents(x.previousElementSibling); var w = getSelection(); w.removeAllRanges(); w.addRange(r); x.textContent = t(U.secildi); };
      try { navigator.clipboard.writeText(v).then(ok, sec); } catch (err) { sec(); }
    }
  });
  view.addEventListener("input", function (ev) { if (ev.target.id === "fAra") { durum.q = ev.target.value; dosyaListe(); } });
  view.addEventListener("change", function (ev) {
    if (ev.target.id === "fDers") {
      durum.ders = ev.target.value;
      [].forEach.call(document.querySelectorAll(".ders[data-ders]"), function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-ders") === durum.ders)); });
      dosyaListe();
    }
  });
  document.getElementById("temaDegis").addEventListener("click", function () {
    var r = document.documentElement;
    var simdi = r.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var yeni = simdi === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", yeni);
    try { localStorage.setItem("tema", yeni); } catch (x) {}
  });

  window.addEventListener("hashchange", function () { git(); });
  git(true);
})();
