let wordArray = [];
let renderWordArray = [];
let guessedArray = [];
let renderGuessedArray = [];
let randomWord;
let guessesLeft = 6;
let winsCounter = 0;
let lossesCounter = 0;
let hint;
let howManyWords;

// Two booleans handle conditional checking for the user guess.
// Does the letter exist in the word?  Has the letter been guessed before?
let inWord = false;
let alreadyGuessed = false;

// Will choose a word from dogs.js, and then trigger corresponding blanks to be rendered.
function chooseWord() {
    let randomNumber = Math.floor(Math.random() * dogs.length);
    randomWord = dogs[randomNumber].breed.toLowerCase();
    hint = dogs[randomNumber].info;
    howManyWords = randomWord.split(" ").length;
    displayBlanks(randomWord);
}

// fills the word array with blanks and then triggers render.
function displayBlanks() {
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] !== " ") {
            wordArray.push("_");
            renderWordArray.push("<span class='animated " + randomWord[i] + "'>_</span>");
        } else {
            renderWordArray.push("<span class='animated'>&nbsp;</span>")
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
        renderGuessedArray.push("<span id='" + guess + "' class='animated'>" + guess + "</span>");
        console.log(renderGuessedArray);
        renderLetter(guess);
        renderGuessed(guess);
        if (wordArray.indexOf("_") === -1) {
            winsCounter++;
            console.log("You win!");
            startGame();
        } else if (howManyWords === 2) {
            let countBlanks = 0;
            for (let i = 0; i < wordArray.length; i++) {
                if (wordArray[i] === "_") {
                    countBlanks++
                }
            }
            if (countBlanks < 2) {
                winsCounter++;
                console.log("You win!");
                startGame();
            }
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
            renderGuessedArray.push("<span id=" + guess + " class='animated'>" + guess + "</span>")
            renderEverything(guess);
            renderLetter(guess);
            renderGuessed(guess);
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
    renderWordArray = [];
    guessedArray = [];
    renderGuessedArray = [];
    renderArray = [];
    guessesLeft = 6;
    chooseWord();
}

document.onkeypress = function (e) {
    let guess = e.key;

    if (/^[a-zA-Z]/.test(guess)) {
        evaluate(guess);
    } else {
        console.log("Please choose a letter... gawd")
    }
}

startGame();