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

 WriteGreet() ;
 


// Ask the user for the accomodation type
 var accomodation = prompt("healthy food or fast food?");
 while(accomodation != "healthy food" && accomodation != "fast food"){
   accomodation = prompt("wrong answer! healthy food or fast food?");
 }


 // Get the picture source
 var imageSource;
 if (accomodation === "healthy food"){
   imageSource = 'https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg';
 }else if (accomodation==="fast food"){
   imageSource = 'https://cdn.editorchoice.com/wp-content/uploads/2019/09/fast-food.jpg';
 }


 // ask the user for number of images
 var numOfImages = prompt("How many times you want the pic to be repeated?");

 // Validate the number of images
 while(numOfImages=='' || isNaN(numOfImages)){
   numOfImages = prompt("Wrong answer! How many times you want the pic to be repeated?");
 }

 // Build the <img> element to add it to the page 
 var imgElement = '<img src="'+imageSource+'"/>';

 // make a loop to repeat the picture
 for (var i=0; i<numOfImages; i+=1){
   document.write(imgElement)
 }

