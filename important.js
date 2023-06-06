// Memoisation  :  is a form of caching where the return value of a function is cached based on its parameters.

function memoizedAddTo256(){
    var cache1 = {};
  
    return function(num){
      if(num in cache1){
        console.log(`cached value :${num}`, cache1[num]);
        return cache1[num]
      }
      else{
        cache1[num] = num + 256;
        return cache1[num];
      }
    }
  }
  var memoizedFunc = memoizedAddTo256();
  console.time();
  memoizedFunc(20); // Normal return
  console.timeEnd();
  memoizedFunc(20); // Cached return


  let x=[1,3,3,5,8,8]
// Check time taken to return the new value v/s cached value;
  for (const key of x) {
    console.time();
    console.log(`args : ${key}`)
    memoizedFunc(key); 
    console.timeEnd();
  }


// Debouncing
// Throttling 
