var wordArray = [];
var guessedArray = [];
var renderArray = [];
var randomWord;
var guessesLeft = 6;
var winsCounter = 0;
var lossesCounter = 0;

// Two booleans handle conditional checking for the user guess.
// Does the letter exist in the word?  Has the letter been guessed before?
var inWord = false;
var alreadyGuessed = false;

// Will choose a word from dogs.js, and then trigger corresponding blanks to be rendered.
function chooseWord() {
    var randomNumber = Math.floor(Math.random() * dogs.length);
    randomWord = dogs[randomNumber].breed.toLowerCase();
    console.log(randomWord);
    displayBlanks(randomWord);
}

// fills the word array with blanks and then triggers render.
function displayBlanks() {
    for (var i = 0; i < randomWord.length; i++) {
        if (randomWord[i] !== " ") {
            wordArray.push("_");
            renderArray.push("<span class='animated " + randomWord[i] + "'>_</span>");
        } else {
            wordArray.push("&nbsp;")
        }
    }
    renderEverything();
}

// Evaluates whether the user has guessed the letter before,
// and whether the letter exists in the word.
function evaluate(guess) {
    existsInWord(guess);
    guessedBefore(guess);

    if (inWord && alreadyGuessed) {
        console.log("You already guessed that");
    }
    if (inWord && !alreadyGuessed) {
        guessedArray.push(guess);
        renderLetter(guess);
        if (wordArray.indexOf("_") === -1) {
            winsCounter++;
            console.log("You win!");
            startGame();
        }
    }
    if (!inWord && alreadyGuessed) {
        console.log("You already guessed that");
    }
    if (!inWord && !alreadyGuessed) {
        guessesLeft--;
        if (guessesLeft === 0) {
            lossesCounter++;
            console.log("you die.");
            // renderEverythingOut();
            startGame();
        } else {
            guessedArray.push(guess);
            // renderEverything(guess);
        }
    }
}

// Does the letter exist in the word?
function existsInWord(guess) {
    if (randomWord.indexOf(guess) === -1) {
        inWord = false;
    } else {
        inWord = true;
    }
}

// Has the user guessed this letter before?
function guessedBefore(guess) {
    if (guessedArray.indexOf(guess) === -1) {
        alreadyGuessed = false;
    } else {
        alreadyGuessed = true;
    }
}

// renders all variables on the page.
function renderEverything(letter) {

    document.getElementById("letters-guessed").innerHTML = `You've guessed: ${guessedArray.join(", ")}`;
    document.getElementById("guesses-left").innerHTML = `You die in ${guessesLeft} guesses`;
    animateGuessContainerIn();
    document.getElementById("wins-counter").innerHTML = winsCounter === 1 ? `You've won 1 time!` : `You've won ${winsCounter} times!`;
    document.getElementById("losses-counter").innerHTML = lossesCounter === 1 ? `You've lost 1 time!` : `You've lost ${lossesCounter} times!`;
}

function startGame() {
    wordArray = [];
    guessedArray = [];
    renderArray = [];
    guessesLeft = 6;
    chooseWord();
}

document.onkeypress = function (e) {
    var guess = e.key;

    if (/^[a-zA-Z]/.test(guess)) {
        evaluate(guess);
    } else {
        console.log("Please choose a letter... gawd")
    }
}

startGame();