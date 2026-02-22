# 🕒 JavaScript Saat ve Karşılama Ekranı

Bu proje, **Patika.dev & Kodluyoruz** Frontend Web Development eğitim patikası kapsamında verilen "Javascript 1. Ödevi" için hazırlanmıştır. Kullanıcıdan ismini alarak ekranda dinamik bir karşılama mesajı ve eşzamanlı (canlı) akan bir dijital saat gösterir.

Proje, klasik ödev şablonunun dışına çıkılarak modern web tasarım trendlerinden **Glassmorphism (Cam Efekti)** ve hareketli degrade (animated gradient) arka plan kullanılarak tamamen özgünleştirilmiştir.

## ✨ Özellikler

- **Dinamik Veri Alma:** Sayfa yüklendiğinde `prompt()` ile kullanıcının ismini alır ve ekrana yazdırır. Boş bırakılması durumunda varsayılan (Misafir) ataması yapar.
- **Canlı Dijital Saat:** `Date()` objesi kullanılarak saat, dakika, saniye ve gün bilgisi anlık olarak çekilir ve `setTimeout` ile her saniye ekranda güncellenir.
- **Modern UI Tasarımı:** Herhangi bir CSS kütüphanesi (Bootstrap vb.) kullanılmadan, tamamen **Pure (Vanilla) CSS** ile şeffaf cam kart tasarımı kodlanmıştır.
- **Gelişmiş Tipografi:** Google Fonts üzerinden projeye entegre edilmiş modern (`Poppins`) ve dijital ekran (`Share Tech Mono`) yazı tipleri kullanılmıştır.
- **Neon Efekti:** Dijital saatin okunabilirliğini ve estetiğini artırmak için CSS `text-shadow` ile neon parlama efekti verilmiştir.

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Semantik sayfa iskeleti.
- **CSS3:** Hareketli arka plan, Glassmorphism, Flexbox hizalamaları ve animasyonlar.
- **JavaScript (ES6+):** DOM manipülasyonu, zamanlayıcı fonksiyonlar ve mantıksal operatörler.

## 🚀 Nasıl Çalıştırılır?

Proje herhangi bir sunucu ya da paket kurulumu gerektirmez. Sadece tarayıcı üzerinde çalıştırılabilir statik dosyalardan oluşur.

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Klasör dizininde bulunan `index.html` dosyasını favori web tarayıcınızda (Chrome, Safari, Firefox vb.) açın.
3. Ekrana gelen kutucuğa isminizi girin ve canlı saatin tadını çıkarın!

## 📂 Proje Yapısı

```text
📦 js-saat-odevi
 ┣ 📂 css
 ┃ ┗ 📜 style.css      # Tüm tasarım ve animasyon kodları
 ┣ 📂 js
 ┃ ┗ 📜 clock.js       # Saat ve isim alma algoritmaları
 ┣ 📜 index.html       # Sayfa iskeleti
 ┗ 📜 README.md        # Proje açıklaması
