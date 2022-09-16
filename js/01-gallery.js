import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const itemsMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainer.addEventListener('click', onItemClick);

let modalWindow;

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      loading = "lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  createModalWindow(e);

  closeModalWindow();
}

function createModalWindow(e) {
  modalWindow = basicLightbox.create(
    `<img src='${e.target.dataset.source}' width = '800' height = '600'>`,
  );
  modalWindow.show();
}

function closeModalWindow() {
  galleryContainer.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      modalWindow.close();
    }
  });
}
