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
  var promiseObject = new Promise((resolve, reject) => {
    for (const obj of resultList) {
      if (obj.name == sname) {
        resolve("Result : ".concat(obj.result));
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
