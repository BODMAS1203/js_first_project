'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Check bnt
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage(' ⚠️ NO NUMBER');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎇 Correct Number');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('GAME OVER!!!');
      displayScore(0);
    }
  }
});

///////Again bnt
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  let guess = Number((document.querySelector('.guess').value = ''));

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '10rem';
});
