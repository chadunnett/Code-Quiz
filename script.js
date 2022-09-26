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

var cardsEl = document.getElementById("card")
var startEl = document.getElementById("start")
var timer = document.getElementById("time")
var time = 60
var index = 0
var 
// startEl.addEventListener("click", function startQuiz() {
//     document.getElementById("question1").hidden = true;
// document.getElementById("question2").hidden = false
// }
function startQuiz(){
timerCountdown = setInterval(countDown, 1000)

}
    
function countDown(){
    time --;
    timer.textContent = time;
    if (time <= 0){
        timeEnd()
    }
}

function timeEnd(){
    clearInterval(timerCountdown);
}
// .addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
// var buttonEl = document.getElementById("buttons")
// buttonEl.addEventListener("click", checkAnswer)
document.getElementById("start")
.addEventListener("click", function() {
    startQuiz();
    document.getElementById("question1").hidden = false;
    // for(var i = 0; i < 4; i++){
//         var choice = document.getElementById("buttons");
        
//         var choiceButton = document.createElement("button");

//         choiceButton.setAttribute = ("value", choice);}
//         choiceButton.innerHTML = choice
        
}
)
// questions[index].choices[i]


// function checkAnswer(event){

//     }

// function scoreboard(){

// }
    

