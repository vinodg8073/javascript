// Promise is a object representing the eventual (delay of) complition / failure of an asynchronous operation..

var resultList = [
  { name: "MNO", result: "Pass" },
  { name: "ABC", result: "Fail" },
  { name: "XYZ", result: "Pass" },
];

function checkResult(event) {
    event.preventDefault();
    console.log("checking result !!!!")
  var sname = document.getElementById("name").value;
  var res=getResult(sname);
    console.log(res);
    res.then((data) => printMessage(data))
    .catch((data) =>{  console.log('From catch'); printMessage(data);});
}

function getResult(sname) {
  // Promise object takes a function with two args of callback function to represnt success / failure of an operation which is optional
  var promiseObject = new Promise((resolve, reject) => {
    for (const obj of resultList) {
      if (obj.name == sname) {
        setTimeout(
        resolve("Result : ".concat(obj.result)),5000)
      } else{
        const err= new Error("Student name is not valid")
        reject(err.message);
      } 
    }
  });

  return promiseObject;
}

function printMessage(promiseObject) {
    console.log(promiseObject)
  document.getElementById("result").innerHTML = promiseObject;
}

// Async , Await 

// async makes a function return promise .. to check remove async keyword -- throws error
(async function abc(){ return "Hi, I'm returning a promise!!!!!!!!!!!"})().then(data=>console.log(data));

// await makes a function to wait for a promise and doesn't move the next line of the code... to check remove await keyword
(async function xyz(){
  console.log('before promise');
  const a= await getResult('MNO');
  console.log(a);
  console.log('after promise')
})();
