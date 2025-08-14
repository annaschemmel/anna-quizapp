console.clear();
//---------imports------------
import { toggleBookmark } from "./helpers.js";
//----------------------------

//-----------------Bookmark Toggle-----------------------

const bookmark = document.querySelector('[data-js="bookmark"]');

// In the event we need to pass a "our" variable
bookmark.addEventListener("click", () => toggleBookmark(bookmark));

// bookmark.addEventListener("click", toggleBookmarkEvent);

// function toggleBookmark(bookmarkElement) {
//   bookmarkElement.classList.toggle("card__bookmark-active");
//   console.log("test");
// }
// ^ this was written before we exported the function to the "helpers" file

// bookmark.addEventListener("click", () => {
//   bookmark.classList.toggle("card__bookmark-active");
//   console.log("test");
// });
// in this case

//-----------------Answer Toggle-----------------------

// can be exported to the "helpers" file once done with the other tasks

const answerButton = document.querySelector('[data-ja="answerButton"]');
const quizAnswer = document.querySelector('[data-js="quizAnswer"]');
answerButton.addEventListener("click", toggleAnswer);

function toggleAnswer() {
  quizAnswer.toggleAttribute("hidden");
  answerButton.classList.toggle("card__button--ghost");

  if (quizAnswer.hasAttribute("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
}
