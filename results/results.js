const score = document.querySelector(".result");
const btn = document.querySelector("button");

const displayResult = ()=>{
   const result = localStorage.getItem("correctAnswer");
   score.innerHTML = result + "/4";
}

btn.addEventListener("click", ()=>{
    window.location.href = "../src/index.html";
})

displayResult();