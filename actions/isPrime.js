function isPrime(n) {
  if (n === 1) {
    return false;
  }
  
  else if (n === 2) {
    return true;
  }
  
  else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}

var assert = require("assert")
assert(isPrime(5), "test case passed for number 5")

