// CLOSURES
// function along with it lexical scope bundled together 
console.log('**********',"Closures",'**********')
function aa(){
    let a =10;
    function bb(){
        console.log(a)
    }
    bb();
}

aa();
// uses : "currying, function like once and setTimeout ,maintaining state in async world"

// EG:2
const add = (function () {
    let counter = 0;
    return function () {return counter += 1; }
  })();
  
  add();
  add();
  add();


// CURRYING 
console.log('**********',"Currying",'**********')
function multiply(a){
   return function (b){
        return a+b;
    }
}

console.log('Currying',multiply(10)(5));












