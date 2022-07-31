import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems, galleryCb) {
  const addImages = galleryItems
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

  galleryCb.insertAdjacentHTML('afterbegin', addImages);
}
createGallery(galleryItems, galleryList);

galleryList.addEventListener('click', (e) => {
  e.preventDefault();
  const isGalleryImage = e.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
});
