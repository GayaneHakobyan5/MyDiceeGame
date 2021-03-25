


var randomNumber1 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute('src', 'images/dice' + randomNumber1 + '.png');

var randomNumber2 = Math.floor(Math.random()*6)+1;


document.querySelector(".img2").setAttribute('src', 'images/dice' + randomNumber2 + '.png');

var txt = document.querySelector("h1");
var winImg = document.querySelector(".winner")

if (randomNumber1>randomNumber2) {
    txt.innerHTML = "<h1>🚩Player 1 wins! </h1>";
} else if (randomNumber1<randomNumber2) {
    txt.innerHTML = "<h1>Player 2 wins! 🚩 </h1>";
} else(txt.innerHTML = "<h1>Draw! </h1>");






