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