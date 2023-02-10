import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const imageGalleryHtml = galleryItems
  .map(
    (el) =>
      `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>`
  )
  .join("");

galleryEl.innerHTML = imageGalleryHtml;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
