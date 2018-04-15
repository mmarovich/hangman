/* 
    These functions will handle animating and rendering of
    elements on the page. 
*/

var hangmanContainer = document.getElementById("hangman-container");
var guessContainer = document.getElementById("guess-container");
var lettersGuessed = document.getElementById("letters-guessed");

// renders all variables on the page.
function renderEverything(letter) {
    return new Promise(function () {
        fadeInHangman();
        document.getElementById("letters-guessed").innerHTML = `You've guessed: ${renderGuessedArray.join(" ")}`;
        document.getElementById("guesses-left").innerHTML = `You die in ${guessesLeft} guesses`;
        document.getElementById("wins-counter").innerHTML = winsCounter === 1 ? `You've won 1 time!` : `You've won ${winsCounter} times!`;
        document.getElementById("losses-counter").innerHTML = lossesCounter === 1 ? `You've lost 1 time!` : `You've lost ${lossesCounter} times!`;
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
    var letter = document.getElementsByClassName(guess);

    for (var i = 0; i < randomWord.length; i++) {
        if (guess === randomWord[i]) {
            wordArray[i] = letter;
        }
    }

    for (var i = 0; i < letter.length; i++) {
        letter[i].innerHTML = guess;
        letter[i].classList.add('bounceInDown')
    }
}

function renderGuessed(guess) {
    lettersGuessed.innerHTML = `You've guessed: ${renderGuessedArray.join(" | ")}`;
    var letter = document.getElementById(guess)
    console.log(letter)

    letter.classList.add('fadeInRightBig');
}