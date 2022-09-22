import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");
const gallaryMarkup = createGallaryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", gallaryMarkup);

galleryContainerRef.addEventListener("click", onImgClick);

function createGallaryMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
}

function onImgClick(evt) {
  // щоб не перенаправляло на іншу сторінку
  evt.preventDefault();
  // перевіряємо, що саме картинка цільовий елемент
  const isGalarryItemEl = evt.target.classList.contains("gallery__image");
  if (!isGalarryItemEl) {
    return;
  }
  // викликаємо бібліотеку  basicLightbox
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscapeClose);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscapeClose);
      },
    }
  );

  function onEscapeClose() {
    galleryContainerRef.addEventListener("keydown", (evt) => {
      if (evt.code === "Escape") {
        instance.close();
      }
    });
  }
  instance.show();
}
