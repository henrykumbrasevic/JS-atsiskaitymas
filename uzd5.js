const num = document.getElementById("number");
const percentage = document.getElementById("percent")
const button = document.getElementById("submitButton")
const resultHTML = document.getElementById("result")

const calcPercentage = (event) =>{
    event.preventDefault();
    resultHTML.innerHTML = (+num.value * +percentage.value)/100 
}   

button.addEventListener("click", calcPercentage);