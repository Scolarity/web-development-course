var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var winner = document.querySelector('.winner');

function randomDice() {
    if (randomNumber1 === 1) {
        img1.setAttribute('src', 'images/dice1.png');
    } else if (randomNumber1 === 2) {
        img1.setAttribute('src', 'images/dice2.png');
    } else if (randomNumber1 === 3) {
        img1.setAttribute('src', 'images/dice3.png');
    } else if (randomNumber1 === 4) {
        img1.setAttribute('src', 'images/dice4.png');
    } else if (randomNumber1 === 5) {
        img1.setAttribute('src', 'images/dice5.png');
    } else if (randomNumber1 === 6) {
        img1.setAttribute('src', 'images/dice6.png');
    }

    if (randomNumber2 === 1) {
        img2.setAttribute('src', 'images/dice1.png');
    } else if (randomNumber2 === 2) {
        img2.setAttribute('src', 'images/dice2.png');
    } else if (randomNumber2 === 3) {
        img2.setAttribute('src', 'images/dice3.png');
    } else if (randomNumber2 === 4) {
        img2.setAttribute('src', 'images/dice4.png');
    } else if (randomNumber2 === 5) {
        img2.setAttribute('src', 'images/dice5.png');
    } else if (randomNumber2 === 6) {
        img2.setAttribute('src', 'images/dice6.png');
    }

}

function declareGame() {
    if (randomNumber1 === randomNumber2) {
        winner.innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        winner.innerHTML = "Player 1 won!";
    } else {
        winner.innerHTML = "Player 2 won!";
    }
}

randomDice()
declareGame()