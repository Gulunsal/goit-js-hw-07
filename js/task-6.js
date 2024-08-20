//Mission 6 - Task 6
// Rastgele bir hex renk değeri döndüren fonksiyon
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls')
const input = controls.querySelector('input')
const createButton = controls.querySelector('[data-create]')
const destroyButton = controls.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')

// Belirtilen sayıda div öğesi oluştur ve div#boxes içine ekler
function createBoxes(amount) {
  const boxArray = [];
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    box.style.backgroundColor = getRandomHexColor()
    box.style.margin = '5px'
    boxArray.push(box)
    boxSize += 10
  }

  boxes.append(...boxArray)
}

// Tüm kutuları temizle
function destroyBoxes() {
  boxes.innerHTML = ''
}

// "Create" butonuna tıklama olayını dinle
createButton.addEventListener('click', () => {
  const amount = Number(input.value); 
  if (amount >= 1 && amount <= 100) { 
    destroyBoxes()
    createBoxes(amount)
  }
  input.value = ''
})

// "Destroy" butonuna tıklama olayını dinle
destroyButton.addEventListener('click', destroyBoxes)
