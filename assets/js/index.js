var wordArray = [];
var renderWordArray = [];
var guessedArray = [];
var renderGuessedArray = [];
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
            renderWordArray.push("<span class='animated " + randomWord[i] + "'>_</span>");
        } else {
            wordArray.push("&nbsp;")
        }
    }
    renderEverything().then(animateGuessContainerIn());
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
        renderGuessedArray.push("<span id='"+ guess + "' class='animated'>" + guess + "</span>");
        console.log(renderGuessedArray);
        renderLetter(guess);
        renderGuessed(guess);
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
            renderEverythingOut().then(startGame());
        } else {
            guessedArray.push(guess);
            renderGuessedArray.push("<span id="+ guess + " class='animated'>" + guess + "</span>")
            renderLetter(guess);
            renderGuessed(guess);
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