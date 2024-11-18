(
    //No name for the function and not stored in the variable
    //variables are function scoped (creating a isolated scope before ES6)
    function (a,b){ 
        console.log(`This is IIFE syntax (function defined)(second parantesis to immediately invoke the function soon as it is defined/created)`);
    }
)(1,2);

( calculator =
    function (){
        var pi = 22/7;  //function scoped variable (declared only w/ var)
        function add(a,b){
            console.log(pi);  
            return a+b;
        }
        function multiply(a,b){
            return a*b;
        }

        return {
            add:add,
            multiply: multiply
        }
    }
)();     // the second parantesis will imediatly invoke the function expression as 
var pi = Math.PI;
console.log(pi)
//advantage : 
//JS engine doesn't add the variable/ inner function to the global object. Therefore global object is not poluted and memory is efficient
//avoids clearing function in global scope by create closures

console.log (calculator().add(1,2));
console.log (calculator().multiply(1,2));

//before ES6 all variables had global scope/function scope but ES6 introduced let and const which is for block scope So no need of IIFE to create function scope
//but still it is helpful to immediately invoke any functions 
//Note : local scope is nothing but block scope or function scope which works similarly