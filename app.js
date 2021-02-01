var min = 0
var sec = 0
var milisec = 0
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
var displayMilisec = document.getElementById('mili')
var interval;

function timer(){
    milisec++
    displayMilisec.innerHTML = milisec
    if(milisec==100){
        sec++
      displaySec.innerHTML = sec
   milisec =0

    }
    else if(sec==59){
        min++
        displayMin.innerHTML = min
        sec=0
    }
  
}



function start(){
    document.getElementById('start').style.display = 'none'
    interval = setInterval(timer, 10) 
}
function pause(){
    document.getElementById('start').style.display = 'inline-block'
    clearInterval(interval)
}
function reset(){
    pause()
    milisec=0;
    sec=0;
    min=0;
    displayMilisec.innerHTML = milisec
    displaySec.innerHTML = sec
    displayMin=innerHTML = min
}