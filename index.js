var rand1 = (Math.floor(Math.random()*6)+1);
var rand2 = (Math.floor(Math.random()*6)+1);

imgUrl1 = "./images/dice"+rand1+".png";
imgUrl2 = "./images/dice"+rand2+".png";

document.querySelector('.img1 img').setAttribute("src",imgUrl1);
document.querySelector('.img2 img').setAttribute("src",imgUrl2);

if( rand1 > rand2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if( rand1 < rand2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}