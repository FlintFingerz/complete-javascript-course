'use strict';

// THIS IS THE CODE THAT I DID PRETTY MUCH ON MY OWN BEFORE GOING THROUGH THE VIDEOS FROM JONAS TO SIMPLIFY IT.

const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const btnNew = document.querySelector(`.btn--new`);
const diceEl = document.querySelector(`.dice`); // ADDED THIS FROM JONAS
const score1El = document.querySelector(`#score--0`); // ADDED THIS FROM JONAS
const score2El = document.querySelector(`#score--1`); // ADDED THIS FROM JONAS

diceEl.classList.add(`hidden`);
score1El.textContent = `0`;
score2El.textContent = `0`;

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let dice = 0;

const active = function () {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

const resetCurrentScore = function () {
  document.querySelector('#current--0').textContent = '0';
  document.querySelector('#current--1').textContent = '0';
};

const resetMainScore = function () {
  document.querySelector(`#score--0`).textContent = `0`;
  document.querySelector(`#score--1`).textContent = `0`;
};

const resetPlayer = function () {
  player0.classList.remove(`player--winner`, `name`);
  player1.classList.remove(`player--winner`, `name`);
};

const addScore = function () {
  document.querySelector(`#score--` + activePlayer).textContent =
    scores[activePlayer];
};

const diceRoll = function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`; // USED THIS INSTEAD OF EXPLICITY CHANGING SRC IN EACH IF STATEMENT BELOW

  if (dice === 2) {
    currentScore += +dice;
    document.querySelector(
      `#current--` + activePlayer
    ).textContent = currentScore;
  } else if (dice === 3) {
    currentScore += dice;
    document.querySelector(
      `#current--` + activePlayer
    ).textContent = currentScore;
  } else if (dice === 4) {
    currentScore += dice;
    document.querySelector(
      `#current--` + activePlayer
    ).textContent = currentScore;
  } else if (dice === 5) {
    currentScore += dice;
    document.querySelector(
      `#current--` + activePlayer
    ).textContent = currentScore;
  } else if (dice === 6) {
    currentScore += dice;
    document.querySelector(
      `#current--` + activePlayer
    ).textContent = currentScore;
  } else {
    currentScore = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    resetCurrentScore();
    active();
  }
};

const hold = function () {
  scores[activePlayer] += currentScore;
  document.querySelector(`#current--` + activePlayer).textContent = `0`;

  if (activePlayer === 0 && scores[activePlayer] >= 100) {
    addScore();
    player0.classList.add(`player--winner`, `name`);
  } else if (scores[activePlayer] >= 100 && activePlayer === 1) {
    addScore();
    player1.classList.add(`player--winner`, `name`);
  } else if (activePlayer === 0) {
    addScore();
    activePlayer = 1;
    active();
    currentScore = 0;
  } else if (activePlayer === 1) {
    addScore();
    activePlayer = 0;
    active();
    currentScore = 0;
  }
};

const newGame = function () {
  diceEl.classList.add(`hidden`);
  currentScore = 0;
  player0.classList.add(`player--active`);
  player1.classList.remove(`player--active`);
  activePlayer = 0;
  resetCurrentScore();
  resetMainScore();
  resetPlayer();
  scores = [0, 0];
};

btnRoll.addEventListener(`click`, diceRoll);

btnHold.addEventListener(`click`, hold);

btnNew.addEventListener(`click`, newGame);
