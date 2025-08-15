// -------------------------Bookmark toggle-------------------------

export function toggleBookmark(bookmark) {
  bookmark.classList.toggle("card__bookmark-active");
  //console.log("test");
}

// -------------------------answer button toggle-------------------------
export function toggleAnswer(answerButton, quizAnswer) {
  quizAnswer.toggleAttribute("hidden");
  //quizAnswer.classList.toggle("card__answer--hidden");
  answerButton.classList.toggle("card__button--ghost");

  if (quizAnswer.hasAttribute("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
}
