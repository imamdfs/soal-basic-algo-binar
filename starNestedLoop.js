function starNestedLoop(a, b) {
    let result = "";
    for (let i = 0; i < b; i++) {
      for (let j = 0; j < a; j++) {
        result += "*";
      }
      if (i!==b-1) result += "\n";
    }
    console.log(result);
  }
  
  //TEST CASE
    console.log(starNestedLoop(1,2))
  // *
  // *
  
    console.log(starNestedLoop(2,3))
  // **
  // **
  // **
  
    console.log(starNestedLoop(4,1))
  // ****
