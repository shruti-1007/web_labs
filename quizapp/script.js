const quiz = [
  {
    question: "What is the capital of Nepal?",
    options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
    answer: "Kathmandu"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Hyperlinks Text Mark Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//"
  }
];

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = quiz[currentIndex];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  selectedAnswer = null;

  q.options.forEach(option => {
    const div = document.createElement("div");
    div.innerText = option;
    div.classList.add("option");

    div.addEventListener("click", () => {
      selectedAnswer = option;

      document.querySelectorAll(".option").forEach(el => {
        el.classList.remove("selected");
      });

      div.classList.add("selected");
    });

    optionsEl.appendChild(div);
  });
}

nextBtn.addEventListener("click", () => {
  if (!selectedAnswer) {
    alert("Please select an answer!");
    return;
  }

  if (selectedAnswer === quiz[currentIndex].answer) {
    score++;
  }

  currentIndex++;

  if (currentIndex < quiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionEl.classList.add("hidden");
  optionsEl.classList.add("hidden");
  nextBtn.classList.add("hidden");

  resultEl.classList.remove("hidden");
  resultEl.innerText = `Your Score: ${score} / ${quiz.length}`;
}

// start
loadQuestion();