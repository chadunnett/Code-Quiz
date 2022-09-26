var cardsEl = document.getElementById("card")
var startEl = document.getElementById("start")
var timer = document.getElementById("time")
var time = 60
var index = 0

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

function checkAnswer(event){
console.log(event.target)
var answerEl = event.target.getAttribute("data-right")
console.log(answerEl)
if (answerEl === "true"){
} else{
    time = time - 10
    }
    document.getElementById("question1").hidden = true
    document.getElementById("question2").hidden = false
}

document.getElementById("start")
.addEventListener("click", function() {
    startQuiz();
    document.getElementById("question1").hidden = false;
    var answer = document.getElementById("question1")
    var buttons = answer.querySelectorAll("button")
    for(var i=0; i<buttons.length; i++){
buttons[i].addEventListener("click", checkAnswer)
    }
}
)
// questions[index].choices[i]

// for(var i = 0; i < 4; i++){
//         var choice = document.getElementById("buttons");
        
//         var choiceButton = document.createElement("button");

//         choiceButton.setAttribute = ("value", choice);}
//         choiceButton.innerHTML = choice
        
// function checkAnswer(event){
// if (choiceButton.value === answer.value){
// startQuiz("question2")
// } else {
//     time = time - 10
//     startQuiz("question2")
// }

// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
//   }
  
//   function renderScore() {
//     var score = localStorage.getItem("score");

// function scoreboard(){
// score = time.value
// }
    
/* save score to local storage with input for initials and add clear score button*/


