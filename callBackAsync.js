setTimeout(() => {
    console.log('settimer, deebug and check in the devtool');
}, 3000);

// calback is a function send as a argument to a function which can executed at later point
//  best example calculator, setTimeout, addEventListener
function display(value){
    console.log('Result : ',value);
}

function add (callback, x, y){
    console.log('beforeCallBack');
    const z=x+y;
    callback(z);
}

add(display,5,10);
