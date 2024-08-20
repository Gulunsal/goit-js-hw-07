//Mission 5- task 5

// Rastgele bir hex renk değeri döndüren fonksiyon
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color'); // Değiştir butonunu seç
const body = document.querySelector('body'); // Body öğesini seç
const colorSpan = document.querySelector('.color'); // Renk bilgisini gösterecek span öğesini seç

// Butona tıklama olayı dinleyici ekle
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor(); // Yeni rastgele renk oluştur
  body.style.backgroundColor = newColor; // Body'nin arka plan rengini değiştir
  colorSpan.textContent = newColor; // Renk bilgisini span içine yaz
  colorSpan.style.color = newColor; // Span text rengini de yeni renkle değiştir
});
