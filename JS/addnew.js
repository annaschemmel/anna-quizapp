console.clear();

//---------imports------------
import { toggleBookmark } from "./helpers.js";
import { toggleAnswer } from "./helpers.js";
//-----------------------------

//-----------------declare variables-----------------------

const form = document.querySelector('[data-js="addnew-form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const inputQ = document.querySelector('[data-js="inputQuestion"]');
const charCountQ = document.querySelector('[data-js="counterQuestion"]');
const inputA = document.querySelector('[data-js="inputAnswer"]');
const charCountA = document.querySelector('[data-js="counterAnswer"]');

//-----------------max char input counter-----------------------

const MAX_COUNT = 200;
charCountQ.textContent = `${MAX_COUNT} characters left`;
charCountA.textContent = `${MAX_COUNT} characters left`;
inputQ.setAttribute("maxlength", `${MAX_COUNT}`);
inputA.setAttribute("maxlength", `${MAX_COUNT}`);

inputQ.addEventListener("input", () => updateCount(inputQ, charCountQ));
inputA.addEventListener("input", () => updateCount(inputA, charCountA));

function updateCount(input, output) {
  let count = MAX_COUNT - input.value.length;
  output.textContent = `${count} characters left`;
}

//-----------------submit event-----------------------

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const addNewQuestion = data.addNewQuestion;
  const addNewAnswer = data.addNewAnswer;
  const addNewTag = data.addNewTag;

  createNewCard();
  event.target.reset();
  charCountQ.textContent = `${MAX_COUNT} characters left`;
  charCountA.textContent = `${MAX_COUNT} characters left`;
}

//-----------------create new cards-----------------------

function createNewCard() {
  const card = document.createElement("section");
  card.classList.add("card", "card__quiz");
  card.setAttribute("aria-label", "Quiz question");

  const bookmark = document.createElement("button");
  bookmark.classList.add("card__bookmark");
  bookmark.setAttribute("aria-label", "Quiz question");
  bookmark.setAttribute("aria-pressed", "true");
  //add event listener to bookmark -> probably has to be in same js file
  bookmark.innerHTML = ` <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 2 7.6 2 9 2h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 3.9 19 4.6 19 6v13.208c0 1.056 0 1.583-.217 1.856a1 1 0 0 1-.778.378c-.349.002-.764-.324-1.593-.976L12 17l-4.411 3.466c-.83.652-1.245.978-1.594.976a1 1 0 0 1-.778-.378C5 20.791 5 20.264 5 19.208V6z"
              fill="#000000"
            />
          </svg>`;
  bookmark.addEventListener("click", () => toggleBookmark(bookmark));
  // - we need an arrowfunction here cause the "togglebutton" event should only be called when clicked and not on pageload
  // - the parameter "bookmark" is passed to the toggleBookmark function which uses "event" and then "event.target"

  const question = document.createElement("h2");
  question.classList.add("card__question");
  question.setAttribute("aria-label", "Question");
  question.textContent = `${addNewQuestion.value}`;
  //   console.log(addNewQuestion.value);

  const answer = document.createElement("p");
  answer.classList.add("card__answer");
  answer.setAttribute("aria-label", "Answer");
  answer.hidden = true;
  answer.textContent = `${addNewAnswer.value}`;

  const answerButton = document.createElement("button");
  answerButton.classList.add("card__button");
  answerButton.textContent = "Show answer";
  console.log(answerButton);
  answerButton.addEventListener("click", () =>
    toggleAnswer(answerButton, answer)
  );

  const tagContainer = document.createElement("ul");
  tagContainer.classList.add("card__tag-container");
  tagContainer.setAttribute("aria-label", "Topics");

  const tag = document.createElement("li");
  tag.classList.add("card__tag");
  tag.textContent = `${addNewTag.value}`;

  tagContainer.append(tag);
  card.append(bookmark, question, answer, answerButton, tagContainer);
  cardContainer.append(card);
}
