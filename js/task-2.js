//Mission 2 - Task 2
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryRow1 = document.querySelector('.gallery-row-1');
const galleryRow2 = document.querySelector('.gallery-row-2');

// İlk 3 resim için ilk listeyi oluştur
const galleryItemsRow1 = images.slice(0, 3).map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
}).join('');

galleryRow1.insertAdjacentHTML('beforeend', galleryItemsRow1);

// Sonraki 3 resim için ikinci listeyi oluştur
const galleryItemsRow2 = images.slice(3, 6).map(image => {
  return `<li><img src="${image.url}" alt="${image.alt}"></li>`;
}).join('');

galleryRow2.insertAdjacentHTML('beforeend', galleryItemsRow2);

// Minimal Flexbox styling for the gallery
const galleries = document.querySelectorAll('.gallery');
galleries.forEach(gallery => {
  gallery.style.display = 'flex';
  gallery.style.justifyContent = 'space-between';
  gallery.style.listStyle = 'none';
  gallery.style.padding = '0';
  gallery.style.gap = '20px';
});
