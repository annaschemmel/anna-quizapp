export function toggleBookmark(bookmark) {
  bookmark.classList.toggle("card__bookmark-active");
  console.log("test");
}

// export function toggleBookmarkEvent(event) {
//   event.target.classList.toggle("card__bookmark-active");
//   console.log("test");
// }

export function toggleAnswer(answerButton, quizAnswer) {
  quizAnswer.toggleAttribute("hidden");
  answerButton.classList.toggle("card__button--ghost");

  if (quizAnswer.hasAttribute("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
}
