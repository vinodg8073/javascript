//Double quotes

// The below exapmle 1 and 2 throws error because string  with double quotes cannot break into seperate lines
Eg:1
/*let details = "Hi Hello
this is Vinod";*/
Eg:2
/*var details = 'Hi Hello
this is Vinod';*/

//Solution : To use back tics
Eg:3 
/*var details=`Hi Hello
this is Vinod`*/;

//or : using escape character

var details="Hi Hello \n this is Vinod";


document.getElementById("display").innerHTML=details;
// The below examples show how to concat {interpolation} the dynamic value using string literals 

var myName="Vinod";

//Interpolation doesn't work with single / double quotes
Eg:1
//var details = "Hi Hello this is ${myName}";
//var details = 'Hi Hello this is ${myName}';

//Solution : by concatinating or interpolation with back tics
var details = "Hi Hello this is " + myName;

var details = `Hi Hello this is ${myName}`;

//Using special characters 

// error
// var sc = 'It's correct':

// Solution :Using Escape Character / template literals

var sc = 'It\'s correct';
// or 
var sc = `It's correct`;
