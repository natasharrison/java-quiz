// TIMER
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');

// QUESTION CONTENT 
var questionEl = document.getElementById('question');

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

var questionIndex = 0;

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

// QUESTION FUNCTION 
function populateQuestion(){
  var currentQuestion = quizQuestions[questionIndex];
  var questionEl = document.getElementById("question");

  questionEl.textContent = currentQuestion.question;
  var currentOptions = currentQuestion.option;
  var buttonEl = document.getElementById ("option");

  for (var i=0; i < currentOptions.length; i++) {
    var createButtonEl = document.createElement("button");
    createButtonEl.textContent = currentOptions[i];
    buttonEl.appendChild(createButtonEl);
  }
};

startBtn.onclick= function(){
  populateQuestion();
  countdown();
};

// REMAINING CODE 
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score