# velo.az — Müasir Redizayn Prototipi (Engineering & Deployment Guide)

Bu layihə Azərbaycanın aparıcı velosiped və aksessuar mağazası **velo.az** üçün müasir, yüksək performanslı və mobil uyğunlaşdırılmış redizayn prototipidir. Layihə tam Azərbaycan dilində və AZN (₼) valyutası ilə hazırlanmışdır.

---

## 1. Təklif Olunan Arxitektura və Struktur

Layihə iki rejimdə istifadə üçün təşkil olunub:

1. **İnteraktiv React SPA (`/src/`):**
   - React 19 + Tailwind CSS + Lucide Icons əsasında qurulmuşdur.
   - AI Studio preview mühitində tam reaktiv və animasiyalı şəkildə işləyir.
   - Səbət və seçilmişlər (Wishlist) `localStorage` vasitəsilə saxlanılır.

2. **Standalone Pure HTML/CSS/JS (`/velo-prototype/`):**
   - Heç bir Node.js və ya xarici kitabxana asılılığı olmayan təmiz HTML5, CSS3 və Vanilla JavaScript.
   - İstənilən brauzerdə dərhal ikiqat kliklə açılır və ya statik hostinqdə yerləşdirilə bilər.

```
├── /src/                      # React 19 tətbiq kodları (AI Studio aktiv görünüşü)
│   ├── components/            # Header, Hero, ProductCatalog, ProductDetail, CartDrawer, SizeCalc və s.
│   ├── data/products.ts       # Məhsullar, qiymətlər, servislər və Bakı mağaza məlumatları
│   └── App.tsx                # Əsas tətbiq konteyneri
├── /velo-prototype/           # AYRILMIŞ STANDALONE PROTOTİP QOVLUĞU
│   ├── index.html             # Təmiz semantik HTML5 səhifəsi
│   ├── styles.css             # Xüsusi müasir dizayn stilləri və responsive grid
│   ├── app.js                 # Axtarış, filtr, səbət və kalkulyator JavaScript məntiqi
│   └── README.md              # Bu sənəd
```

---

## 2. Demo Funksiyalar vs. Real Mağaza Backend İnteqrasiyası

Bu prototip müstəqil konseptual nümayişdir. Aşağıdakı cədvəl hansı xüsusiyyətlərin lokal demo olduğunu və canlı mağazaya keçid üçün hansı backend sistemlərinin lazım olduğunu aydınlaşdırır:

| Funksionallıq | Prototip Vəziyyəti (Demo) | Real İstehsalat / Backend Tələbi |
| :--- | :--- | :--- |
| **Məhsul Kataloqu və Qiymətlər** | `products.ts` daxilində statik AZN qiymətləri və parametrlər | Mağazanın ERP / 1C / Mikro anbar bazası ilə real vaxt API sinxronizasiyası |
| **Səbət və Sifariş Sayı** | Brauzerin `localStorage` yaddaşında saxlanılır | İstifadəçi sessiyası, server tərəfli səbət və anbar rezervasiyası |
| **Promo Kod Sistemi** | "BAKU10" kodu ilə lokal 10% endirim hesabı | Promokodların etibarlılıq müddətini və limitini yoxlayan marketinq API |
| **Ölçü Kalkulyatoru** | Boya (sm) əsaslanan dəqiq riyazi düym hesablama düsturu | Tam hazırdır, istehsalatda dəyişilmədən birbaşa istifadə oluna bilər |
| **WhatsApp Sifariş Meneceri** | Sifariş kodunu, ölçü, rəng və məbləği dolduran dinamik link | WhatsApp Business API və ya canlı operator CRM qovşağı (LiveChat, Bitrix24) |
| **Ödəniş Üsulu** | POS terminal və nağd ödəniş simulyasiyası | Azericard, Kapital Bank (E-point), Pasha Bank, Birkart / Tamkart taksit API |
| **Usta Servisi Qəbulu** | Təqvim seçimi və WhatsApp bildirişi | Emalatxananın real boş saatlarını saxlayan rezervasiya bazası və SMS OTP |
| **Çatdırılma İzləmə** | 100₼-dən yuxarı pulsuz çatdırılma qaydası | 189 Kuryer, Wolt Drive və ya Azərpoçt API inteqrasiyası |

---

## 3. Lokal Kompüterdə İşə Salma Qaydası

### A Variantı: Standalone HTML Versiyasını İşə Salmaq (Ən Asan)
1. `velo-prototype` qovluğuna keçin.
2. `index.html` faylını siçanın sağ düyməsi ilə klikləyib sevdiyiniz brauzerdə (**Google Chrome**, **Firefox**, **Edge**, **Safari**) açın.
3. Və ya terminalda sadə Python serveri ilə işə salın:
   ```bash
   cd velo-prototype
   python3 -m http.server 8080
   ```
   Brauzerdə `http://localhost:8080` ünvanını açın.

### B Variantı: Vite React Layihəsini İşə Salmaq
1. Layihə kök qovluğunda asılılıqları quraşdırın:
   ```bash
   npm install
   ```
2. İnkişaf serverini işə salın:
   ```bash
   npm run dev
   ```
3. Brauzerdə `http://localhost:3000` ünvanına daxil olun.

---

## 4. Pulsuz Statik Hostinqdə Yerləşdirmə Təlimatı

Bu prototip heç bir ödənişli server və ya ödənişli verilənlər bazası tələb etmir. Aşağıdakı platformalarda tamamilə **pulsuz** yerləşdirilə bilər:

### 1. Vercel (Tövsiyə olunur)
- [vercel.com](https://vercel.com) saytına daxil olun və GitHub hesabınızla giriş edin.
- Repozitoriyanı idxal edin ("Add New Project").
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- "Deploy" düyməsini sıxın — 1 dəqiqə ərzində pulsuz `.vercel.app` domeni aktiv olacaq.

### 2. Netlify
- [netlify.com](https://netlify.com) saytında "Add new site" -> "Import an existing project".
- Build settings:
  - Base directory: `/`
  - Build command: `npm run build`
  - Publish directory: `dist`
- Və ya sadəcə `velo-prototype` qovluğunu Netlify Drop sahəsinə sürükləyib atın (heç bir build tələb olunmur!).

### 3. Cloudflare Pages
- Cloudflare Dashboard -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
- Framework preset kimi **Vite** seçin və deploy edin. Limitsiz pulsuz zolaq genişliyi təmin edilir.

### 4. GitHub Pages
- GitHub repozitoriyanızın **Settings -> Pages** bölməsinə keçin.
- `Source` bölməsində `Deploy from a branch` seçin və `main` qolunun `/velo-prototype/` qovluğunu (və ya `gh-pages` qolunu) təyin edin.

---

## 5. Müəlliflik və Məsuliyyətin Məhdudlaşdırılması

Bu prototip velo.az saytının canlı kodunu kopyalamır, rəsmi domeninə müdaxilə etmir və real müştəri rəylərini saxtalaşdırmır. Layihə müasir dizayn tədqiqatı, istifadəçi təcrübəsinin (UX) təkmilləşdirilməsi və konseptual təqdimat məqsədilə sıfırdan hazırlanmışdır.
