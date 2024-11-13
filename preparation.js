console.log(NaN/2); // NaN
console.log('a'/2); // NaN;
console.log(NaN == NaN); // false
console.log(NaN === NaN); //false sice special vaue
console.log(NaN == undefined);//false
console.log(NaN === undefined); //false

var x;
console.log(typeof (x));  //undefined
console.log(typeof undefined); //undefined
console.log(null == undefined); // true defined by JS *****
console.log(null === undefined);  //false since type of null is object and undefined is undefined

console.log(999999999999999999);  //1000000000000000000 too large to represent as 64 bit floating point so rounded at nearest representable number
let num=999999999999999999n;
console.log(num); //999999999999999999n (typeof --> bigint) n denotes bigint
console.log(typeof num); //bigint

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity
console.log((100/0)===Number.POSITIVE_INFINITY);
console.log(100/0);// Infinity
console.log(-100/0); // -Infinity
console.log(typeof(Infinity)); //number
console.log(typeof(-Infinity)); //number
console.log(1_000_000_000); // Numeric separator  1000000000 jus to create visual separation (easy to understand)

let octalnum = 0o71;  // or 071 also gives same result since octal number starts w/ 0 and followed by sequence of octal numbers
//0o is a new literla introduced by ES6
console.log(octalnum);  //57
//let num1 = 0o81; cannot define 081 because Decimals with leading zeros not allowed and 0o81 because octal digits consist only 0 to 7
//therefore SyntaError
// let num1 = 080; still this works in online compiler as JS ignores 0 if it is not octal number and treats as Decimal 
// console.log(num1);

let hexaDec = 0x1a; //HexaDecimal starts w/ 0x or 0X followed by hexadecimal digits (0-9,a-f)
console.log(hexaDec); // 26
//0X1b3y ==> SyntaxError


let obj = null;
console.log(typeof obj); // object

let s = 'JavaScript';
s[0] = 'j';
console.log(s);   //JavaScript because immutable but can create a new string as below
console.log(s[0]); // can access based on index
let str = 'JavaScript';
str = str + ' String'; //BTS JS engine creates a new string and destroy the older


//Boolean function to cast  a non boolean value to boolean
console.log(Boolean('Hi'));// true when non empty string
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false when 0 or NaN

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

let val = false;
let str1 = val.toString(); // "false"
let back = Boolean(str1); // true

let result = 'a' < 'B'; // charCode 97 < 66
console.log(result); // false

console.log("Vinod" == new String("Vinod")); //true
console.log("Vinod" === new String("Vinod")); //false