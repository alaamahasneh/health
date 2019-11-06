'use strict'
function WriteGreet(){
    
    var timecreat;
    timecreat = prompt('when you join us? 1 month-23');
    var weight;
    weight = prompt('how much your weight?');

var greeting;
if (weight > 80) {
greeting= 'Oh! you should play sport';}
else if (weight < 40) {
greeting = 'Oh! you should tack care about yourself';}
else if (weight>40) {
greeting ='you are perfect';}
else{
greeting='Welcome!';}

document.write('<h3>'+greeting + ' ' + name +'</ h3>'); 

}

WriteGreet();
