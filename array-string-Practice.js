const arr = [1,3,2,4,6,5];
console.log(arr);

const arr2= [7,8,9,10];
var a0= arr.sort();
console.log('sort : ',a0);

var a=arr.push(7);
console.log('push : ',a,arr);

var b = arr.pop();
console.log('pop :',b,arr);

var c = arr.concat(arr2);
console.log('concat :',c,arr);

var d=arr.join('-');
console.log('join',d,arr);
console.log('toString : ',arr.toString());

var e = arr.unshift(0);
console.log('unshift',e,arr);

var f=arr.shift();
console.log('shift',f,arr)

var g=arr.slice(2,3);
console.log('slice',g,arr );

var h = arr.includes(3);
console.log('include :',h);

var i0 = arr.splice(2,1);
console.log('splice',i0, arr);

var i = arr.splice(2,0,3);
console.log('splice',i, arr);

var j = arr.indexOf(4);
console.log('indexOf :',j);

var k=arr.map((x)=> {return x=x*2}); // Can take 3 args ==> (value, index, array)
console.log('map :',k,arr);

var l = arr.filter((x)=>{return x > 3});
console.log('filter : ',l,arr)

var m = arr.forEach((x)=> {return x=x*2}) // Undefined as it doesn't return any value
console.log('forEach : ',m,arr)

var n = arr.flatMap((x) => x * 2); 
console.log('flatMap : ',n,arr)
console.log('reverse : ',arr.reverse());
console.log('**************************************************************** String ****************************************************************');

let myName = 'Vinod';

let fullName=myName.concat(' ','G');
console.log('concat :',fullName);

console.log('toLowerCase : ',fullName.toLowerCase());
console.log('toUpperCase : ',fullName.toUpperCase());
console.log('charAt : ',myName.charAt(0))
console.log('includes : ' ,myName.includes('Vin'));
console.log('split : ',fullName.split(' '));
console.log('replace : ',fullName.replace('G',''));
console.log('indexOf : ',fullName.indexOf('n'));
console.log(myName.match('in'));  
console.log(myName.startsWith('V')); //endWith
console.log('trim : ',' Vinod G '.trim());









