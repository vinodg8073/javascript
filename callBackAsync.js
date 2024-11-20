setTimeout(() => {
  console.log("settimer, deebug and check in the devtool");
}, 3000);

// calback is a function send as a argument to a function which can executed at later point
// example: setTimeout, addEventListener
function display(value) {
  console.log("Result : ", value);
}

function add(callback, x, y) {
  console.log("beforeCallBack");
  const z = x + y;
  callback(z);
}

add(display, 5, 10);

//asynchonous callback
function download(callbackFunc, url) {
  setTimeout(() => {
    console.log("URL to download" + url);
    console.log("Downloaded");
    callbackFunc(); //comment for sync callback execution
  }, 1000);
}

function processImage() {
  console.log("processing the image after download");
}

let url = "www.google.co.in";
//synchronous call> executes processImage first since tiemout
// download(url);
// processImage();

//asynchronous callback
download(processImage, url);

// Call back hell or Pyramid of doom
// nesting many async func inside callback
//to avoid this use promise or async/await

function download1(callbackFunc, url) {
    setTimeout(() => {
      console.log("URL to download" + url);
      console.log("Downloaded");
      callbackFunc(url); 
    }, 1000);
}

download1((url) => {
  console.log("Processing image for: " + url);
  download1((url) => {
    console.log("Processing second image for: " + url);
    download1((url) => {
      console.log("Processing third image for: " + url);
    }, url);
  }, url);
}, url);
