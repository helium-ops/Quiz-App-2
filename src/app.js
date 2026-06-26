const question = document.querySelector(".question");
const answerBtn = document.querySelector(".buttons button");
const nextBtn = document.querySelector(".next");

function displayQuestion(){
  let questions = {
    question = "What is the capital of the United States",
    answers = ["Berlin", "Madrid", "New York City", "Washington D.C"],
    correctAnswer = question.answers[3]
  }
  question.innerHTML = questions.question;
  
}

displayQuestion();