var a = document.getElementById("d1").innerHTML;
/*document.getElementById("d1").firstChild.nodeValue;
document.getElementById("d1").childNodes[0].nodeValue;*/
var a1 = document.getElementById("d1").nodeType;
var a2 = document.getElementById("d1").nodeName;
var b =document.getElementsByClassName("d2")[0].innerHTML;
var c = document.getElementsByTagName("h3")[0].innerHTML; 


var d= document.querySelector("h4",'.q2','#q1').innerHTML;
var e = document.querySelector('.q2','#q1',"h5").innerHTML;

// A NodeList object is a list (collection) of nodes extracted from a document.
var f = document.querySelectorAll('h5');
var g = document.querySelectorAll('#q3');
var h = document.querySelectorAll('.q4');

console.log(a);
console.log(a1);
console.log(a2);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

document.getElementById('d1').style.color='blue';
function changeColor(){
    document.getElementById('d1').style.color='red';
}
document.getElementById('ip').onclick= changeColor;
document.getElementById('ip').addEventListener("click",changeColor);

var x= document.createElement('h1');
var y= document.createTextNode('Hii I am a new element');
x.appendChild(y);
var z =document.getElementById('div1');
z.appendChild(x);


// Other methods
// insertBefore(secElement, firstElement) to insert ele in between
// remove() to remove the ele
// removeChild(child);