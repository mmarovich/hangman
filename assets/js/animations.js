/* 
    These functions will handle animating and rendering of
    elements on the page. 
*/

let hangmanContainer = document.getElementById("hangman-container");
let guessContainer = document.getElementById("guess-container");
let lettersGuessed = document.getElementById("letters-guessed");

// renders all letiables on the page.
function renderEverything(letter) {
    return new Promise(function () {
        fadeInHangman();
        document.getElementById("letters-guessed").innerHTML = `You've guessed: ${renderGuessedArray.join(" ")}`;
        document.getElementById("guesses-left").innerHTML = `You die in ${guessesLeft} guesses`;
        document.getElementById("wins-counter").innerHTML = winsCounter === 1 ? `You've won 1 time!` : `You've won ${winsCounter} times!`;
        document.getElementById("losses-counter").innerHTML = lossesCounter === 1 ? `You've lost 1 time!` : `You've lost ${lossesCounter} times!`;
        document.getElementById("hint").innerHTML = hint;
    })

}

function fadeInHangman() {
    return new Promise(function () {
        hangmanContainer.classList.remove("fadeOut");
        hangmanContainer.classList.add("fadeInUpBig");
    })
}

function animateGuessContainerIn() {
    return new Promise(function () {
        setTimeout(function () {
            guessContainer.innerHTML = renderWordArray.join(" ");
            guessContainer.classList.add('slideInLeft');
        }, 1000)
    })
}

function renderEverythingOut() {
    hangmanContainer.classList.remove('slideInLeft')
    hangmanContainer.classList.add('fadeOut');
}

function renderLetter(guess) {
    let letter = document.getElementsByClassName(guess);

    for (let i = 0; i < randomWord.length; i++) {
        if (guess === randomWord[i]) {
            wordArray[i] = letter;
        }
    }

    for (let i = 0; i < letter.length; i++) {
        letter[i].innerHTML = guess;
        letter[i].classList.add('bounceInDown')
    }
}

function renderGuessed(guess) {
    lettersGuessed.innerHTML = `You've guessed: ${renderGuessedArray.join(" | ")}`;
    let letter = document.getElementById(guess)
    console.log(letter)

    letter.classList.add('fadeInRightBig');
}