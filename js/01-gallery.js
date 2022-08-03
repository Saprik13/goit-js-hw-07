import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems) {
  return galleryItems
    .map(
      (image) => `
      <div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
      <img class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"/></a></div>`
    )
    .join('');
}

const addImages = createGallery(galleryItems);
galleryList.insertAdjacentHTML('afterbegin', addImages);

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  const isGalleryImage = e.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  instance.show();
  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';

    if (e.code === ESC_KEY_CODE) {
      instance.close();
    }
  }
}
