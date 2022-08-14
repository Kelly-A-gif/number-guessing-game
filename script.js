'use strict'

const random_number = (Math.floor(Math.random() * 20) + 1);

let checknumber = document.getElementById('check-number');
let number = document.getElementById('number');
let down = document.querySelector('.down');
let right_number_span = document.querySelector('.right-number-span >p');
let game_container = document.getElementById('container');
let score = document.querySelector('.score >span');
let answer_div = document.querySelector('.answer-div');
let high_score = document.querySelector('.high-score >span');
let again_button = document.querySelector('.again-button');


checknumber.addEventListener('click', function(){
    const nber = number.value;
    //  console.log(nber);

    if(!nber){
        alert('You must input a number.');
    }else if(nber){
        if(nber < random_number){
            down.textContent = 'Too low';
            score.textContent -= 1 ;
            collectScore();
        }else if(nber > random_number){
            down.textContent = 'Too high';
            score.textContent -= 1 ;
            collectScore();
        }else{ 
            answer_div.textContent = nber;
            game_container.style.background = 'green';
            number.style.background = 'green';
            right_number_span.textContent = '🎁'
            down.textContent = 'Correct Number!';

            localStorage.setItem('highscore', high_score.textContent);

            if(score.textContent > high_score.textContent){
                high_score.textContent = score.textContent;
            }
        }

    }
})
// display message if the score number reaches 0
function collectScore(){
    if(score.textContent == 0){
        right_number_span.textContent = '😧'
        down.textContent = 'Sorry you did not get the number. You can play again';
    }
}
// reload game 
again_button.addEventListener('click', ()=>{
    loadAgain();
   })
function loadAgain(){
    location.reload();
}
// restoring the last high score after reloading the game
window.addEventListener('DOMContentLoaded', function(){
    high_score.textContent = localStorage.getItem('highscore');

})