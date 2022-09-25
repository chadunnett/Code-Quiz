var questions = [
    {
        question: "Commonly used data types do NOT include..",
        choices: ["string", "boolean", "alert", "number"],
        answer: "alert"
    },
    {
        question: "The condition in an IF/ELSE statement..",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store..",
        choices: ["numbers and strings", "other arrays", "booleans", "All the above"],
        answer: "All the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
]

var cardsEl = getElementById("card")
var quizEl = getElementById("quiz")
var startEl = getElementById("start")

document.getElementById("question1").hidden = true;
document.getElementById("question2").hidden = false;

// startEl.addEventListener("click", function startQuiz() {
//     document.getElementById("question1").hidden = true;
// document.getElementById("question2").hidden = false
// }

    
// .addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {

    getElementById("start")
    .addEventListener("click", function () {
        document.getElementById("question1").hidden = false;
    }
