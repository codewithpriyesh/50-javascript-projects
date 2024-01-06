// script.js
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  // Add more questions following the same structure
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function displayQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;

  optionsElement.innerHTML = "";
  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const q = questions[currentQuestion];
  if (answer === q.answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  nextBtn.style.display = "none";

  resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
  resultElement.style.fontSize = "24px";
}

displayQuestion();
