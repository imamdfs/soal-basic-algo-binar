function starLoop(n) {
   if (n<0) {
    console.log("number invalid");
  }
  for (let i = 0; i < n; i++) {
    console.log("*");
  }
}

// TEST CASE
console.log(starLoop(1))
// *

console.log(starLoop(2))
// *
// *

console.log(starLoop(6))
//*
//*
//*
//*
//*
//*

console.log(starLoop(0))
//

console.log(starLoop(-5))
// number invalid
