class NotANumberException extends Error{
    constructor(message){
        super(message);
        this.name = 'NotANumber'
    }
}

function checkNumber (a,b){
    if (Number.isNaN(a) || Number.isNaN(b)){
        //throw 'either of the argument is not a number'; 
        //throw new Error('either of the argument is not a number');
        throw new NotANumberException('either of the argument is not a number');
    }
}

try{
    checkNumber(1,1/'abc');
}
catch(e){
    console.log(e);
    console.log(e.name, ':', e.message);
}
// catch{   //optional catch binding when ever n need of error object
// }