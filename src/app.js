const questionText = document.querySelector(".question");
const answerBtn = document.querySelectorAll(".buttons button");
const nextBtn = document.querySelector(".next");

const displayQuestion = () => {
  nextBtn.style.display = "none"
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
const correctAnswer = "Washington D.C";

answerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isCorrect = btn.textContent === correctAnswer;

    if (isCorrect) {
      btn.style.background = "green";
      btn.textContent = "Correct!";
      btn.style.color = "var(--white)";
      nextBtn.style.display = "block";
    } else {
      btn.style.background = "red";
      btn.textContent = "Wrong!";
      btn.style.color = "var(--black)";
    }
  });
});
