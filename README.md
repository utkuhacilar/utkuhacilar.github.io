# Utku Hacılar · Kişisel Site

Kişisel web sitesi. Beş bölüm, ortak iskelet, bölüm başına renk:

| Bölüm | Adres | Renk |
|---|---|---|
| Profil (ana sayfa, CV özeti) | `#profil` | lacivert |
| Öğretmenlik | `#ogretmenlik` | yeşil |
| Yazılım & Projeler | `#yazilim` | mavi |
| Öğrenci Köşesi + Notlar | `#ogrenci` | turuncu |
| Hobiler | `#hobiler` | toprak |

Profil, Öğretmenlik, Yazılım ve Hobiler Türkçe + İngilizce; Öğrenci Köşesi yalnız Türkçe.

Sunucu, veritabanı veya derleme gerektirmez; düz HTML/CSS/JS'dir. GitHub Pages'te ücretsiz çalışır.

## Klasör yapısı

```
index.html        Sayfa iskeleti (genelde dokunmana gerek yok)
icerik.js         TÜM İÇERİK — siteyi güncellemek için yalnızca bunu düzenle
assets/style.css  Tasarım
assets/app.js     Sayfa motoru
assets/foto.jpg       Profil fotoğrafı (4:5 dikey)
assets/foto-kare.jpg  Paylaşım önizlemesi için kare fotoğraf
assets/galeri/        "Sınıftan kareler" ve hobi fotoğrafları (klasörü sen oluşturacaksın)
dosyalar/             Öğrenci dosyaları + utku-hacilar-cv.pdf (TR) + utku-hacilar-cv-en.pdf (EN)
.nojekyll         GitHub Pages'in dosyaları olduğu gibi yayınlaması için (silme)
```

## Siteyi güncellemek

**İki dil:** `icerik.js` içinde `{ tr: "...", en: "..." }` biçimindeki alanlar iki dilde gösterilir. Düz metin yazarsan her iki dilde aynısı görünür.

**Fotoğraf eklemek (Sınıftan kareler):** fotoğrafı `assets/galeri/` klasörüne koy, `galeri` listesine ekle:

```js
{ foto: "assets/galeri/arduino-atolye.jpg", aciklama: { tr: "Arduino atölyesi", en: "Arduino workshop" } },
```

Öğrenci yüzleri görünmesin ya da veli izni alınmış olsun. Fotoğrafları 1600 px genişliği geçmeyecek şekilde küçültürsen site hızlı açılır. Hobi kartlarına fotoğraf için `hobiler` listesinde ilgili kayda `foto: "assets/galeri/kamp.jpg"` ekle.

**Yeni ders dosyası:** dosyayı `dosyalar/` klasörüne yükle, sonra `icerik.js` içindeki `dosyalar` listesine bir satır ekle:

```js
{ ad: "Döngüler Çalışma Kâğıdı", ders: "pt", sinif: 9, tur: "pdf", tarih: "2026-11-16", yol: "dosyalar/donguler.pdf" },
```

`ders` alanı, `dersler` listesindeki `kod` ile eşleşir (btt, pt, rk, ntp, web, mob). Örnek kayıtlarda `ornek: true` yazar; gerçek dosyayı yükleyince o kısmı sil.

**Yeni not:** `notlar` listesine bir kayıt ekle. Metin Markdown'dır: `## Başlık`, `**kalın**`, `- liste`, `1. sıralı liste`, `> ipucu`, kod bloğu için `~~~` satırları arasına yaz.

**Ana sayfadaki "şu an" bölümü:** `suAn` listesini güncel tut.

Değişiklikten sonra `index.html` dosyasını tarayıcıda çift tıklayarak açıp kontrol edebilirsin; internet olmadan da çalışır.

## GitHub Pages ile ücretsiz yayın

1. github.com'da oturum aç. Sağ üstte **+ → New repository**.
2. Depo adı: **`utkuhacilar.github.io`** (kullanıcı adınla birebir aynı olmalı). Public seç, oluştur.
3. Depoda **Add file → Upload files**. Bu klasörün *içindekileri* (index.html, icerik.js, assets, dosyalar, .nojekyll) sürükle bırak. `index.html` en üst seviyede olmalı. **Commit changes**.
   - `.nojekyll` gizli dosya olduğu için görünmeyebilir. Görünmüyorsa depoda **Add file → Create new file**, adını `.nojekyll` yaz, boş bırakıp kaydet.
4. **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, klasör = `/ (root)`. Save.
5. 1–2 dakika sonra site **https://utkuhacilar.github.io** adresinde açılır.

Sonraki güncellemelerde sadece değişen dosyayı yeniden yüklemen yeterli; site kendiliğinden yenilenir.

## Kendi alan adını bağlamak

Alan adı aldıktan sonra (ör. `utkuhacilar.com`):

1. Depoda **Settings → Pages → Custom domain** kutusuna alan adını yaz, Save. (GitHub depoya `CNAME` dosyası ekler.)
2. Alan adını aldığın firmanın DNS panelinde şu kayıtları ekle:

| Tür | Ad | Değer |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | utkuhacilar.github.io |

3. DNS yayılınca (birkaç dakika ile birkaç saat) Pages ayarlarında **Enforce HTTPS** kutusunu işaretle.

Bu IP adreslerini GitHub'ın güncel dokümanından da kontrol et: docs.github.com → "Managing a custom domain for your GitHub Pages site".

## Notlar

- Dosyalar herkese açıktır. Öğrenci adı, not listesi gibi kişisel veri içeren dosyaları buraya koyma.
- Tek dosya 100 MB'ı geçemez; depo toplamı 1 GB altında kalmalı. Büyük videolar için YouTube veya Drive bağlantısı kullan (`tur: "link"`).
- Klavyeden **Ctrl+K** ile hızlı arama açılır.
