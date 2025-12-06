// script.js

const startButton = document.getElementById('buton');
let heartIntervalId = null; // Sürekli oluşumu durdurmak için gerekli referans

// Tek bir kalp oluşturma ve animasyon verme fonksiyonu
function createSingleHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Ekranın rastgele bir yerinde başla
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';

    // Animasyon Süresi (Duration): 4 saniye ile 6 saniye arasında.
    // Süre, kalbin görünür kalacağı zamanı belirler.
    const duration = 4 + Math.random() * 2; 
    
    // Interval kullandığımız için gecikme (delay) 0 olarak ayarlanır.
    const delay = 0; 

    // Animasyonu uygula
    heart.style.animation = `growAndFade ${duration}s ease-out ${delay}s forwards`;

    document.body.appendChild(heart); // Kalbi body'ye ekle

    // Animasyon bittiğinde kalbi DOM'dan kaldır (temizlik için)
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

startButton.addEventListener('click', function() {
    // 1. Mevcut alert mesajınız
    alert("Seni Çok Seviyorum Kankam! İyi Ki Varsın!");
    
    // 2. Eğer zaten bir interval çalışıyorsa, onu durdur (Gereksiz döngüleri önler)
    if (heartIntervalId) {
        clearInterval(heartIntervalId);
    }
    
    // 3. Kalp yağmurunu sürekli başlatan döngüyü kur
    // Her 100 milisaniyede (0.1 saniyede) yeni bir kalp oluştur.
    heartIntervalId = setInterval(createSingleHeart, 100); 

    // Butonu devre dışı bırak ve metni değiştir (süreklilik başladığı için)
    startButton.disabled = true;
    startButton.textContent = "Kalp Yağmuru Başladı!";
});

// Eski createHeartRain fonksiyonu artık gerekli değil ve kaldırılmalıdır.