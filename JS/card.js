console.clear();

//-----------------Bookmark Toggle-----------------------

const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener("click", toggleBookmark);

function toggleBookmark() {
  bookmark.classList.toggle("card__bookmark-active");
  console.log("test");
}

//-----------------Answer Toggle-----------------------

const answerButton = document.querySelector('[data-ja="answerButton"]');
const quizAnswer = document.querySelector('[data-js="quizAnswer"]');
answerButton.addEventListener("click", toggleAnswer);

function toggleAnswer() {
  quizAnswer.toggleAttribute("hidden");
  answerButton.classList.toggle("card__button--hide");

  if (quizAnswer.hasAttribute("hidden")) {
    answerButton.textContent = "Show answer";
  } else {
    answerButton.textContent = "Hide answer";
  }
}
