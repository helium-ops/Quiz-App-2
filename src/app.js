const questionText = document.querySelector(".question");
const answerBtn = document.querySelectorAll(".buttons button");
const nextBtn = document.querySelector(".next");

const displayQuestion = () => {
  const question = {
    question: "What is the capital of the United States?",
    answers: ["Berlin", "Madrid", "New York City", "Washington D.C"],
    correctAnswer: "Washington D.C"
  };

  questionText.innerHTML = question.question;

  answerBtn.forEach((btn, index) => {
    btn.innerHTML = question.answers[index];
  });
};

displayQuestion();