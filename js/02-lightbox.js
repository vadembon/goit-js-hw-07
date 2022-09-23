import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    })
    .join("");
}

galleryBox.addEventListener("click", onItemGalleryClick);
function onItemGalleryClick(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  evt.preventDefault();
  var lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
