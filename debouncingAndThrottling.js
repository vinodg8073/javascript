const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateThrottle = throttle((text)=>{
    throtlleText.textContent = text;
});

//executed once for every specified interval/time
function throttle(callbackFunc, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) shouldWait = false;
    else {
      callbackFunc(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    callbackFunc(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

const updateDebounce = debounce((text) => {
  debounceText.textContent = text;
});

//Delay the exec.. of func() untill a certian time passed 
//since the event last triggered
function debounce(callbackFunc, delay = 1000) {
  let timeout;
  return (...args) => {
    //clears the previous setTimeout if any pending execution
    //therefore continuously waits
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFunc(...args);
    }, delay);
  };
}
input.addEventListener("input", (e) => {
    defaultText.textContent = e.target.value;
    updateDebounce(e.target.value);
    updateThrottle(e.target.value);
});
