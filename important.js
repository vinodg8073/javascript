// Memoisation  :  is a form of caching where the return value of a function is cached based on its parameters.

function memoizedAddTo256(){
    var cache1 = {};
  
    return function(num){
      if(num in cache1){
        console.log("cached value");
        
        return cache1[num]
      }
      else{
        cache1[num] = num + 256;
        return cache1[num];
      }
    }
  }
  var memoizedFunc = memoizedAddTo256();
  
  memoizedFunc(20); // Normal return
  memoizedFunc(20); // Cached return