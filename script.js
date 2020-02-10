var intro = document.querySelector(".intro");
var match = document.querySelector(".match");
var play = document.querySelector("#play-button");
play.addEventListener("click",function(){
    intro.classList.toggle("fadeout");
    match.classList.toggle("fadeout");
});
var player_hand = document.querySelectorAll("img")[0];
var computer_hand = document.querySelectorAll("img")[1];
var player_score = document.querySelector(".player-score");
var computer_score = document.querySelector(".computer-score");
options = ['stone','paper','scissor'];
const state = {
    option_p: "",
    option_c: "",
};
let score_p = 0;
let score_c = 0;
var stone = document.querySelector(".stone");
stone.addEventListener("click",function(){
    state.option_p = options[0];
    player_hand.src = "stoneimg.png";
    compnum = Math.floor(Math.random()*3);
    state.option_c = options[compnum];
    if(compnum === 0)
        computer_hand.src = "stoneimg.png"
    else if(compnum === 1)
        computer_hand.src = "paperimg.png"
    else if(compnum === 2)
        computer_hand.src = "scissorimg.png"
        if(state.option_p === 'stone' && state.option_c === 'scissor')
        score_p++;
    else if(state.option_p === 'scissor' && state.option_c === 'paper')
        score_p++;
    else if(state.option_p === 'paper' && state.option_c === 'stone')
        score_p++;
    else if(state.option_c === 'stone' && state.option_p === 'scissor')
        score_c++;
    else if(state.option_c === 'scissor' && state.option_p === 'paper')
        score_c++;
    else if(state.option_c === 'paper' && state.option_p === 'stone')
        score_c++;
    player_score.textContent = score_p;
    computer_score.textContent = score_c;
});
var paper = document.querySelector(".paper");
paper.addEventListener("click",function(){
    state.option_p = options[1];
    player_hand.src = "paperimg.png";
    compnum = Math.floor(Math.random()*3);
    state.option_c = options[compnum];
    if(compnum === 0)
        computer_hand.src = "stoneimg.png"
    else if(compnum === 1)
        computer_hand.src = "paperimg.png"
    else if(compnum === 2)
        computer_hand.src = "scissorimg.png"
        if(state.option_p === 'stone' && state.option_c === 'scissor')
        score_p++;
    else if(state.option_p === 'scissor' && state.option_c === 'paper')
        score_p++;
    else if(state.option_p === 'paper' && state.option_c === 'stone')
        score_p++;
    else if(state.option_c === 'stone' && state.option_p === 'scissor')
        score_c++;
    else if(state.option_c === 'scissor' && state.option_p === 'paper')
        score_c++;
    else if(state.option_c === 'paper' && state.option_p === 'stone')
        score_c++;
    player_score.textContent = score_p;
    computer_score.textContent = score_c;
});
var scissor = document.querySelector(".scissor");
scissor.addEventListener("click",function(){
    state.option_p = options[2];
    player_hand.src = "scissorimg.png"
    compnum = Math.floor(Math.random()*3);
    state.option_c = options[compnum];
    if(compnum === 0)
        computer_hand.src = "stoneimg.png"
    else if(compnum === 1)
        computer_hand.src = "paperimg.png"
    else if(compnum === 2)
        computer_hand.src = "scissorimg.png"
        if(state.option_p === 'stone' && state.option_c === 'scissor')
        score_p++;
    else if(state.option_p === 'scissor' && state.option_c === 'paper')
        score_p++;
    else if(state.option_p === 'paper' && state.option_c === 'stone')
        score_p++;
    else if(state.option_c === 'stone' && state.option_p === 'scissor')
        score_c++;
    else if(state.option_c === 'scissor' && state.option_p === 'paper')
        score_c++;
    else if(state.option_c === 'paper' && state.option_p === 'stone')
        score_c++;
    player_score.textContent = score_p;
    computer_score.textContent = score_c;
});



