let fname = "ABC";
let lname = "XYZ";

var person = {
    //here this refers to the passed object scope or global scope (window object)
    fullName: function () {
        return `${this.fname}   ${this.lname}`;
    },

    hobbies: function (...activities) {
        return `${this.fname} ${this.lname} hobbies are ${activities}`;
    },

    job :function (role){
        return  `${this.fname} ${this.lname} works as ${role}`;
    }

}

var person1={
    fname:"Vinod",
    lname:"Gowda"
}

//call method invokes the the method by specifying the owner object  args as individual but not array)and returns the result 
//(built in funcs to define context of this /changing the context of "this")
console.log(person.fullName.call(this));
document.getElementById("cab1").innerHTML= person.fullName.call(person1); //techncally person1 object carries the function of person.fullName function
// similar to call but args are passed as array and not individually
document.getElementById("cab2").innerHTML= person.hobbies.apply(person1, ['Cricket', 'Reading', 'Trekking']);
//similar but returns new function of the current one by binding the object 
//but the args are passed when the new func is called
var job =person.job.bind(person1);
document.getElementById("cab3").innerHTML=job("Developer");




//ex:2
function isOdd(number) {
    return number % 2;
  }
  
  function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
  }
  
  let results = getOddNumbers(10, 1, 3, 4, 8, 9);
  console.log(results);