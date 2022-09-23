import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryBox.addEventListener("click", onItemGalleryClick);
function onItemGalleryClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  Modal();
}

function Modal() {
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}"/>`,
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseEsc);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseEsc);
      },
    }
  );
  instance.show();
  function onCloseEsc(event) {
    if (event.code === "Escape") {
      instance.close();
      //   console.log(event);
    }
  }
}
