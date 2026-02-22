// Sayfa yüklendiğinde çalışacak ana fonksiyon
function initClock() {
    // 1. Kullanıcıdan isim alma
    let userName = prompt("Lütfen adınızı giriniz:");
    
    // Eğer kullanıcı boş bırakırsa veya iptale basarsa varsayılan isim ata
    if (!userName || userName.trim() === "") {
        userName = "Misafir";
    }
    
    // 2. İsmi HTML'deki ilgili yere yazdır
    document.getElementById("myName").innerHTML = userName;

    // 3. Saati başlat
    showTime();
}

// Saati ve günü ekrana yazdıran fonksiyon
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    // Günleri Türkçe yazdırmak için dizi oluşturuyoruz
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[date.getDay()];

    // Sayılar 10'dan küçükse başına "0" ekliyoruz (Örn: 9:5 -> 09:05)
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Saat formatını birleştiriyoruz
    let time = `${h}:${m}:${s} ${dayName}`;

    // HTML içindeki myClock id'li div'e saati yazdırıyoruz
    document.getElementById("myClock").innerText = time;

    // Fonksiyonun her 1000 milisaniyede (1 saniye) bir kendini tekrar etmesini sağlıyoruz
    setTimeout(showTime, 1000);
}