let num = 0;

function chageNum(){
    return num = parseInt(Math.random()*100+1);
}

chageNum();

const guessyTitle = document.getElementById('topLine');
let input = document.getElementById('inp');
const submit = document.getElementById('sbt');
const lowOrHi = document.querySelector('.lowOrHi');
const prev = document.querySelector('.prevGuess');
const rem = document.querySelector('.remGuess');
const startOver = document.querySelector('.results')

// const p = document.createElement('p');
let prevGuess = [];
let guessRem = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const userVal = parseInt(input.value);
        // console.log(userVal);
        validateGuess(userVal);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        guessyTitle.innerHTML = `Uh Oh! Please Enter a Number.`;
    }
    else if(guess<1){
        guessyTitle.innerHTML = `Your number is less than 1. Enter a number between 1 to 100.`;
    }
    else if(guess>100){
        guessyTitle.innerHTML = `Your number is greater than 100. Enter a number between 1 to 100.`;
    }
    else{
        prevGuess.push(guess);
        if(guessRem===10){
            displayGuess(guess);
            displayMessage(`OOPS! The number was ${num}. Play Again!!`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess===num){
        guessyTitle.innerHTML = `WoHoo! You guessed it right, it was ${num}.`;
        endGame();
    }
    else if(guess<num){
        guessyTitle.innerHTML = `You Guess is too small.`;
    }
    else{
        guessyTitle.innerHTML = `You Guess is too large.`;
    }

}

function displayGuess(guess){
    input.value = '';
    prev.innerHTML += `${guess}, `;
    guessRem++;
    rem.innerHTML = `Remaining Guess: ${10 - guessRem}`;
}

function displayMessage(message){
    guessyTitle.innerHTML = `${message}`;

}

function endGame(){
    input.val = '';
    input.setAttribute('disabled', '');
    // p.classList.add('button');
    // p.innerHTML = `<p id="restart">Click here to restart the game!!</p>`;

    lowOrHi.innerHTML = `<p id="restart">Click here to restart the game!!</p>`;
    // lowOrHi.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#restart');
    newGameButton.addEventListener('click', (e)=>{
        prevGuess = [];
        guessRem = 1;
        prev.innerHTML = `Previous Guesses: `;
        rem.innerHTML = `${11 - guessRem}`;
        input.removeAttribute('disabled');
        // startOver.removeChild(p);
        lowOrHi.innerHTML = `Let's play the game!!`;
        playGame = true;
        chageNum();
        guessyTitle.innerHTML = `So Again, I am thinking of a number between 1 to 100. Best Of Luck!`;
    });

}

