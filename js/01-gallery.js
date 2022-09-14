import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

function onGalleryContainerClick(e) {
  const isGalleryItemLarge = e.target.classList.contains('gallery__link');
  if (!isGalleryItemLarge) {
    return;
  }
  //   e.stopPropagation();
  //   e.preventDefault();
}

// function stopRefToLink(e) {
//   e.preventDefault();
// }

// document.classList('.gallery__image').addEventListener('click', stopRefToLink);
