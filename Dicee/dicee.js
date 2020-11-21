var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".container .img1").setAttribute("src","images/dice" + randomNumber1.toString() + ".png");
document.querySelector(".container .img2").setAttribute("src","images/dice" + randomNumber2.toString() + ".png");
var winner = "";
if(randomNumber1 > randomNumber2){
  winner = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
  winner = "Player 2 Wins";
}else{
  winner = "Tie";
}
document.querySelector("h1").innerHTML = winner;
