var countries = [
	"france",
    "germany",
    "iceland",
    "algeria",
    "brazil",
    "belgium",
    "spain",
    "croatia",
    "colombia",
    "egypt",
    "ireland",
    "italy",
    "japan",
    "mexico",
    "netherlands",
    "pakistan",
    "portugal",
    "russia",
    "sweden",
    "turkey",
    "wales",
    "australia",
    "argentina",
    "china",
    "denmark",
    "thailand"
]

let answer = '';
let wrongAns = 6;
let errors = 0;
let guessed = [];
let wordNum = null;

function randomWord() {
  answer = countries[Math.floor(Math.random() * countries.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('statement').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    errors++;
    updateErrors();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanImg').src = './Images/' + errors + '.png';
}

function checkIfGameWon() {
  if (wordNum === answer) {
    document.getElementById('statement').innerHTML = 'You guessed the correct country, Well done!';
  }
}

function checkIfGameLost() {
  if (errors === wrongAns) {
    document.getElementById('wordGuess').innerHTML = 'The answer was: ' + answer;
    document.getElementById('statement').innerHTML = 'You did not guess the correct country, you lose!';
  }
}

function guessedWord() {
  wordNum = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordGuess').innerHTML = wordNum;
}

function updateErrors() {
  document.getElementById('errors').innerHTML = errors;
}

function reset() {
  errors = 0;
  guessed = [];
  document.getElementById('hangmanImg').src = './Images/0.png';

  randomWord();
  guessedWord();
  updateErrors();
  generateButtons();
}

document.getElementById('wrongAns').innerHTML = wrongAns;

randomWord();
generateButtons();
guessedWord();