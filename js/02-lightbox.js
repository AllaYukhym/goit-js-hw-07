import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainerRef = document.querySelector(".gallery");
const gallaryMarkup = createGallaryMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", gallaryMarkup);
// викликаємо бібліотеку  SimpleLightbox,
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

function createGallaryMarkup(imgs) {
  return imgs
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
}
