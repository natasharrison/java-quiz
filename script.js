// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// TIMER
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

// QUESTION CONTENT 
var quizQuestions = [
  {
    question: "What is the proper way to write 'Hello!' in an alert box?",
    option: ["prompt('Hello!');", "msg('Hello!');", "alert('Hello!');", "box('Hello!');"],
    answer: "alert('Hello'!);"
  },
  {
    question: "Control flow statements like for and while loops can be used to direct the order of operations and beahvior of your application. True or False?",
    option: ["true", "false"],
    answer: "true"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    option: [".", "=", ":", "&"],
    answer: "="
  },
  {
    question: "Inside which HTML element do we put or link to JavaScript?",
    option: ["<script>", "<js>", "<java>", "<javaScript>"],
    answer: "<script>"
  },
  {
    question: "What is the correct way to write a script array?",
    option: ["var animals = 'jaguar', 'otter', 'octopus'", "var animals =['jaguar', 'otter', 'octopus']", "var animals =(1)jaguar, (2)otter, (3)octopus", "var animals = jaguar/otter/octopus"],
    answer: "alert('Hello'!);"
  }
];

// ARRAY TO HOLD ANSWERS FOR SAVING 
var answers = [];

// TIMER
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
      if (timeLeft > 0){
          timerEl.textContent = timeLeft
          timeLeft--
      } else {
        timerEl.textContent = ""
        clearInterval(timeInterval);
      }
    },
    1000);
};




// TIMER
startBtn.onclick = countdown;