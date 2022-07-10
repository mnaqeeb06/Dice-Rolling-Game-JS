
var num1 = Math.floor(Math.random() * 6) +1 ;
var num2 = Math.floor(Math.random() * 6) +1 ;

var result_txt = document.querySelector('.container h1');


var img1 = document.getElementsByClassName('img1')[0].setAttribute('src','images/dice'+num1+'.png');
var img1 = document.getElementsByClassName('img2')[0].setAttribute('src','images/dice'+num2+'.png');

if(num1 == num2){
    result_txt.innerHTML = "Draw";
}
else if(num1>num2){
    result_txt.innerHTML = "🚩 Player 1 wins";
}else{
    result_txt.innerHTML = "🚩 Player 2 wins";
}
