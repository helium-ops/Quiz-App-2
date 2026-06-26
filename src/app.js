const questionArea = document.querySelector(".question");
const answerBtn = document.querySelectorAll(".buttons button");
const nextBtn = document.querySelector(".next");

function showQuestion() {
    let questions = {
        question: "What is the capital of France?",
        answer: "Paris",
        answerChoises: ["Paris", "London", "Berlin", "Madrid"]
    }
    questionArea.innerHTML = questions.question;
    answerBtn.forEach((btn, index) => {
        btn.innerHTML = questions.answerChoises[index];
    })
    nextBtn.style.display = "none";
}
showQuestion();

let correctAnswer = 0;

let QuestionAnswered = 0;
answerBtn.forEach((btn) => {
    btn.addEventListener("click", ()=>{
    QuestionAnswered++;
    if(QuestionAnswered === 1){
        if(btn.textContent === "Paris"){
            btn.style.background = "green";
            btn.style.color = "#FFF5F5";
            correctAnswer++;
        } else if(btn.textContent != "Paris"){
            btn.style.background = "red";
            btn.style.color = "#FFF5F5"
        }
        nextBtn.style.display = "";
    } else if(QuestionAnswered === 2){
        if(btn.textContent === "Berlin"){
            btn.style.background = "green";
            btn.style.color = "#FFF5F5";
            correctAnswer++;
        } else if(btn.textContent != "Berlin"){
            btn.style.background = "red";
            btn.style.color = "#FFF5F5"
        }
    } else if(QuestionAnswered === 3){
        if(btn.textContent === "Madrid"){
            btn.style.background = "green";
            btn.style.color = "#FFF5F5";
            correctAnswer++;
        } else if(btn.textContent != "Madrid"){
            btn.style.background = "red";
            btn.style.color = "#FFF5F5"
        }
    } else if(QuestionAnswered === 4){
        if(btn.textContent === "Rome"){
            btn.style.background = "green";
            btn.style.color = "#FFF5F5";
            correctAnswer++;
        } else if(btn.textContent != "Rome"){
            btn.style.background = "red";
            btn.style.color = "#FFF5F5"
        }
    }
    
        nextBtn.style.display = "";
 })
})

localStorage.setItem("correctAnswer", correctAnswer);

let clicked = 0;
nextBtn.addEventListener("click", ()=>{
    clicked += 1;
    if(clicked === 1){
        let questions = {
            question: "What is the capital of Germany?",
            answer: "Berlin",
            answerChoises: ["Paris", "London", "Berlin", "Madrid"]
        }
        questionArea.innerHTML = questions.question;
    answerBtn.forEach((btn, index) => {
        btn.innerHTML = questions.answerChoises[index];
    })
    } else if(clicked === 2){
        let questions = {
            question: "What is the capital of Spain?",
            answer: "Madrid",
            answerChoises: ["Paris", "London", "Berlin", "Madrid"]
        }
        questionArea.innerHTML = questions.question;
        answerBtn.forEach((btn, index) => {
            btn.innerHTML = questions.answerChoises[index];
        })
    } else if(clicked === 3){
        let questions = {
            question: "What is the capital of Italy?",
            answer: "Rome",
            answerChoises: ["Paris", "London", "Berlin", "Rome"]
        }
        questionArea.innerHTML = questions.question;
        answerBtn.forEach((btn, index) => {
            btn.innerHTML = questions.answerChoises[index];
        })
    } else if(clicked === 4){
        window.location.href = "../result/result.html";
    }
    answerBtn.forEach((btn) => {
        btn.style.background = "#FFF5F5";
        btn.style.color = "var(--black)";
    })
    nextBtn.style.display = "none";
})