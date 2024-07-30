  
var image = Math.floor(Math.random()*6)+1;

var randomNumber1 = "images/dice" + image + ".png";
    
document.querySelectorAll("img")[0].setAttribute("src", randomNumber1);


var image2 = Math.floor(Math.random()*6)+1;

var randomNumber2 = "images/dice" + image2 + ".png";
 
document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);

if(image2>image) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉";
}
else if(image2<image){
    document.querySelector("h1").innerHTML="Player 1 Wins 🎉";
}
else if(image2===image){
    document.querySelector("h1").innerHTML="It's a DRAW 🥴";

}




