import { galleryItems } from "./gallery-items.js";
// Change code below this line

const el = {
  gallery: document.querySelector(".gallery"),
};

const galleryItemsHtml = galleryItems
  .map(
    (el) =>
      `<div class="gallery__item"><a class="gallery__link" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"/></a></div>`
  )
  .join("");

el.gallery.innerHTML = galleryItemsHtml;

el.gallery.addEventListener("click", hanleGalleryModalWithImage);

function hanleGalleryModalWithImage(event) {
  event.preventDefault();

  const isClickOnImg = event.target.classList.contains("gallery__image");

  if (!isClickOnImg) {
    return;
  }

  const imgSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imgSource}" width="800" height="600">`);

  instance.show();

  el.gallery.addEventListener("keydown", (ev) => {
    if (ev.code !== "Escape") {
      return;
    }
    console.log(ev.code);

    instance.close();
  });
}
