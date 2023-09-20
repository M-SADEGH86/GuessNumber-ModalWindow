'use strict';
const func_SecretNumber = () => Math.floor(Math.random() * 20) + 1 ;
let secretNumber = func_SecretNumber();
console.log(secretNumber)
let score = 20;
let highScore = 0;

const displayMessage = (selector , message) => {
    document.querySelector(selector).textContent = message ;
} ;

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    //!console.log(guess , typeof guess) ;

    if (!guess) {
        displayMessage('.message' , 'no Number 🤬')
    } else if (guess === secretNumber) {
        displayMessage('.message' , 'Correct Number 🥳🥳🥳')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displayMessage('.number' , secretNumber)
        if (score > highScore) {
            highScore = score;
            displayMessage('.highscore' , highScore)
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage('.message' , guess > secretNumber ? '⬆📈 Too High !' : '📉 Too Low !')
            score--;
            displayMessage('.score' , score)
        } else {
            displayMessage('.message' , 'You Lost The Game 💥')
            displayMessage('.message' , 0)
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = '#222';
    score = 20;
    displayMessage('.score' , score)
    secretNumber = func_SecretNumber() ;
    displayMessage('.message' , 'Start guessing...')
    displayMessage('.number' , '?')
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});