'use strict';
// selecting element
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); // get element is faster as compare to querryselector
const diceEL = document.querySelector('.dice');
score0EL.textContent = 0; // initialise the score to 0
score1EL.textContent = 0; 
//----------------------------------------------
let currentplayer = 0; // intitialising the first person to atart the game 
// function to change the player
const playerchange = function () {
    document.getElementById(`current--${currentplayer}`).textContent = 0;
    if (currentplayer === 1) {
        currentplayer = 0;
    }
    else {
        currentplayer = 1;
    }   
}
// feature of hold button
document.querySelector('.btn--hold').addEventListener('click', function () {
    let g = document.getElementById(`score--${currentplayer}`).textContent;
    let h = document.getElementById(`current--${currentplayer}`).textContent;
    g = Number(g) + Number(h);
    document.getElementById(`score--${currentplayer}`).textContent = g;
    if (g >= 100) {
        console.log(`player-${currentplayer + 1} won the match`);
        
        const winner = document.querySelector(`.player--${currentplayer}`);
        winner.classList.add('player--winner');
        diceEL.classList.add('hidden');// remove the dice 
    }
    else {
        playerchange();
    }
});
//dice roll btn features
//-------------------------------------------------------
document.querySelector('.btn--roll').addEventListener('click', function () {
    diceEL.classList.remove('hidden');// show the dice;
    const randomvalue = Math.trunc(Math.random() * 6) + 1; // generate random values

    const curradd = function () { // function to add the dice values 
        let g = document.getElementById(`current--${currentplayer}`).textContent;
        g = Number(g) + randomvalue;
        document.getElementById(`current--${currentplayer}`).textContent = g;
    }
    if (randomvalue == 1) {
        diceEL.src = `dice-${randomvalue}.png`;
        playerchange();
    }
    else {
        diceEL.src = `dice-${randomvalue}.png`;
        curradd();
    }
});
// NEW GAME BUTTON
document.querySelector('.btn--new').addEventListener('click', function () {
    diceEL.classList.add('hidden');
    const winner = document.querySelector(`.player--${currentplayer}`);
    winner.classList.remove('player--winner');
    currentplayer = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
});