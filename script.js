let randomNumber1 = Math.floor(Math.random() * 6) + 1; // Dice 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // Dice 2

let img1 = "images/dice" + randomNumber1 + ".png";
let img2 = "images/dice" + randomNumber2 + ".png";


let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];

// Set new src attributes
image1.setAttribute("src", img1);
image2.setAttribute("src", img2);

let text
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 won"
}
else if(randomNumber1 < randomNumber2){
     document.querySelector("h1").innerHTML = "player 2 won"
}
else{
    document.querySelector("h1").innerHTML = "its a draw"

}
function screenReload(){
    location.reload();
}