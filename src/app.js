const questionText = document.querySelector(".question");
const buttons = document.querySelectorAll(".buttons button");
const nextBtn = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of Ethiopia?",
    answers: ["Addis Ababa", "Nairobi", "Cairo", "Kampala"],
    correct: "Addis Ababa"
  },
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Hot Mail",
      "High Text Machine Language",
      "Home Tool Markup Language"
    ],
    correct: "Hyper Text Markup Language"
  },
  {
    question: "Which language runs in the browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  }
];

function loadQuestion() {
  const current = questions[currentQuestionIndex];

  questionText.textContent = current.question;

  buttons.forEach((btn, index) => {
    btn.textContent = current.answers[index];
    btn.disabled = false;
    btn.style.background = "";
  });

  nextBtn.style.display = "none";
}

function selectAnswer(e) {
  const selected = e.target.textContent;
  const correct = questions[currentQuestionIndex].correct;

  buttons.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    e.target.style.background = "green";
    score++;
  } else {
    e.target.style.background = "red";

    // highlight correct answer
    buttons.forEach(btn => {
      if (btn.textContent === correct) {
        btn.style.background = "green";
      }
    });
  }

  nextBtn.style.display = "block";
}

buttons.forEach(btn => {
  btn.addEventListener("click", selectAnswer);
});

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionText.textContent = `You scored ${score} / ${questions.length}`;

  buttons.forEach(btn => {
    btn.style.display = "none";
  });

  nextBtn.textContent = "Restart";
  nextBtn.style.display = "block";

  nextBtn.onclick = () => {
    currentQuestionIndex = 0;
    score = 0;

    buttons.forEach(btn => {
      btn.style.display = "block";
    });

    nextBtn.textContent = "Next";
    nextBtn.onclick = nextQuestion;
    loadQuestion();
  };
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// override initial next behavior
function start() {
  nextBtn.onclick = nextQuestion;
  loadQuestion();
}

start();