// Object Destructuring : Expression to unpack object/Array into distinct variables
console.log('**********',"Destructuring",'**********')
let details ={
    fname:"Vinod",
    lname:"Gowda",
    age:24,
}

let {fname,lname,age} =details;
console.log(fname,lname,age);

let fullname,lastname,myAge;

// To change variables name
({fullname:fname,lastname:lname,myAge:age}=details);

console.log()

// Array Destructuring

let num= [1,2,3,4];

let [a,b,c,d]=num;
console.log(a,b,c,d);

let [e,f,...g]=num;
console.log(e,f,g);