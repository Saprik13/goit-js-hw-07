import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

function createGallery(galleryItems, galleryCb) {
  const addImages = galleryItems
    .map(
      (image) => `
          <a class="gallery__item" href="${image.original}">
          <img class="gallery__image"
          src="${image.preview}" 
          alt="${image.description}" />
</a>
  `
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

  let lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
