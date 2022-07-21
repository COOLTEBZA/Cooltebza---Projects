var hoursBtn =document.getElementById('hours');
var minutesBtn =document.getElementById('minutes');
var secondsBtn =document.getElementById('seconds');
var millisecondsBtn =document.getElementById('milliseconds');

var xT1 = parseInt(hoursBtn.value) ;
var xT2 = parseInt(minutesBtn.value) ;
var xT3 = parseInt(secondsBtn.value) ;
var xT4 = parseInt(millisecondsBtn.value) ;


timerInterval2 = window.setInterval(checkStopWatch0, 100);

function startStopWatch(){
//timerInterval = window.setInterval(stopwatch3, 1000);

/*
String.fromCharCode(49) returns "1"
String.fromCharCode(97) returns "a"
String.fromCharCode((96 <= key && key <= 105)? key-48 : key)
keyboardMap[];

*/
timerInterval2 = window.setInterval(stopwatch4, 100);

xT1 = parseInt(hoursBtn.value) ;
xT2 = parseInt(minutesBtn.value) ;
xT3 = parseInt(secondsBtn.value) ;
xT4 = parseInt(millisecondsBtn.value) ;
}


var blink;
for(var i = 0; i < 3; i++){ blink=document.getElementById('blink'+i);}


function stopwatch1(){xT1++;hoursBtn.value=xT1;if(hoursBtn.value == "24"){

xT1 =00;
hoursBtn.value="00";
}}
function stopwatch2(){xT2++;minutesBtn.value=xT2;if(minutesBtn.value == "60"){
stopwatch1();
xT2 =00;
minutesBtn.value="00";
}}
function stopwatch3(){xT3++;secondsBtn.value=xT3;if(secondsBtn.value == "60"){
stopwatch2();
xT3 =00;
secondsBtn.value="00";
}}
function stopwatch4(){xT4++;millisecondsBtn.value=xT4;
for(var i = 0; i < 61; i++){ if(millisecondsBtn.value == i+"0"){ stopwatch3(); } }
if(millisecondsBtn.value == "600"){
xT4 =0;
millisecondsBtn.value="00";
}}

window.onkeydown = function(event) {

  //console.log("Unicode CHARACTER code: " + event.keyCode);
if (window.event.keyCode == "107"){event.preventDefault();}else
if (window.event.keyCode == "109"){event.preventDefault();}else
if (window.event.keyCode == "106"){event.preventDefault();}else
if (window.event.keyCode == "111"){event.preventDefault();}else
if (window.event.keyCode == "187"){event.preventDefault();}else
if (window.event.keyCode == "189"){event.preventDefault();}else
if (window.event.keyCode == "192"){event.preventDefault();}else
 
if (window.event.keyCode == "220"){event.preventDefault();}else
if (window.event.keyCode == "221"){event.preventDefault();}else
if (window.event.keyCode == "219"){event.preventDefault();}else
if (window.event.keyCode == "186"){event.preventDefault();}else
 
if (window.event.keyCode == "222"){event.preventDefault();}else
if (window.event.keyCode == "188"){event.preventDefault();}else
if (window.event.keyCode == "190"){event.preventDefault();}else
if (window.event.keyCode == "191"){event.preventDefault();} 
}


hoursBtn.onkeyup = function(){if(hoursBtn.value > 23 || 
hoursBtn.value < 0 || 
hoursBtn.value.length > 2 || 
hoursBtn.value.length < 0
){
hoursBtn.value="00";
}else{console.log("false");}}
minutesBtn.onkeyup = function(){if(minutesBtn.value > 60 || 
minutesBtn.value < 0 || 
minutesBtn.value.length > 2 || 
minutesBtn.value.length < 0){
minutesBtn.value="00";
}else{console.log("false");}}
secondsBtn.onkeyup = function(){if(secondsBtn.value > 60 || 
secondsBtn.value < 0 || 
secondsBtn.value.length > 2 || 
secondsBtn.value.length < 0){
secondsBtn.value="00";
}else{console.log("false");}}
millisecondsBtn.onkeyup = function(){if(millisecondsBtn.value > 600 || 
millisecondsBtn.value < 0 || 
millisecondsBtn.value.length > 3 || 
millisecondsBtn.value.length < 0){
millisecondsBtn.value="000";
}else{console.log("false");}}

function checkStopWatch(){

for(var i = 0; i < 3; i++){var blinks =document.getElementById('blink'+i);
if(blinks.style.color === "black"){
blinks.style.color= "white";
}else{blinks.style.color= "black";}
}


}

function checkStopWatch0(){


}

function resetStopWatch(){


window.clearInterval(timerInterval2);
hoursBtn.value="00";
minutesBtn.value="00";
secondsBtn.value="00";
millisecondsBtn.value="000";
}
function stopPauseStopWatch(){

window.clearInterval(timerInterval2);
}