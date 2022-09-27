'use strict';

const START_SCORE = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = START_SCORE;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = START_SCORE;
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('❌ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎆 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Whenn guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  // When player lose
  else {
    displayMessage('🧨 You lose. Try again');
    document.querySelector('.score').textContent = 0;
  }
});
