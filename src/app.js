const question = document.querySelector('.question');
const choises = document.querySelectorAll('.buttons button');
const nextBtn = document.querySelector('.next');
function loadQuestion() {
  let questions = {
    question: 'What is the capital of France?',
    choises: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correctAnswer: 'Paris'
  }
  question.textContent = questions.question;
  choises.forEach((btn, index) => {
    btn.textContent = questions.choises[index];
  });
}
loadQuestion();

// ...existing code...
nextBtn.addEventListener("click", ()=> {
  nextBtn.style.display = "none";
  answerBtns.forEach((btn) => {
    btn.style.backgroundColor = "var(--white)";
    btn.style.color = "var(--black)";
  })
  let questions = {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  }
  question.textContent = questions.question;
  answerBtns.forEach((btn, index) => {
    btn.textContent = questions.options[index];
  })
}); // <-- added to close the click handler
// ...existing code...