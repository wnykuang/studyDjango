
var fname = prompt("What's your first name?");
var lname = prompt("What's your last name?");
var age = prompt("How old are you?");
var tall = prompt("How tall are you(in centimeter)?");
var petName = prompt("What's the name of your pet?");

if (fname[0] == lname[0] && Number(age) > 20 && Number(age) < 30 
 && Number(tall) >= 170 && petName[petName.length - 1] === 'y'){
     console.log("Hey you are a spy!")
 }