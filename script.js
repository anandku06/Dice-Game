var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
var im1 = document.querySelector(".img1");
var im2 = document.querySelector(".img2");
var randomimg1 = "./images/dice" + random1 + ".png";
var randomimg2 = "./images/dice" + random2 + ".png";

im1.setAttribute("src", randomimg1);
im2.setAttribute("src", randomimg2);

if (random1 > random2) {
  document.querySelector("h1").textContent = "Player 1 Wins !!!";
} else if (random1 < random2) {
  document.querySelector("h1").textContent = "Player 2 Wins !!!";
} else {
  document.querySelector("h1").textContent = "Draw !!!";
}
