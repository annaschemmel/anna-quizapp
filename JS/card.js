console.clear();

const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener("click", toggleBookmark);

function toggleBookmark() {
  bookmark.classList.toggle("card__bookmark-active");
  console.log("test");
}
