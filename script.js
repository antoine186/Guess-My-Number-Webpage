'use strict';

/* Various kinds of DOM element manipulation
console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 😍';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // If there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Invalid Number! 😒';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 😍';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High! 🤔';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low! 🤔';
  }
});
