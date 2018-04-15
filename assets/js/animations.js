/* 
    These functions will handle animating and rendering of
    elements on the page. 
*/

function animateGuessContainerIn() {
    guessContainer = document.getElementById("guess-container")
    guessContainer.innerHTML = renderArray.join(" ");

    for (var i = 0; i < 1; i++) {

        if (guessContainer.classList.contains('slideInLeft')) {
            guessContainer.classList.remove('slideInLeft');
            // alert("remove faq display!");
        } else {
            guessContainer.classList.add('slideInLeft');
            // alert("add faq display!");
        }

    };
}

function renderLetter(guess) {
    var letter = document.getElementsByClassName(guess);
    console.log(letter)

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