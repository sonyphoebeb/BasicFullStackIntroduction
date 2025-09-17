// for loop
function forLoop() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
      result += "Iteration: " + i + "<br>";
    }
    document.getElementById("forLoopResult").innerHTML = result;
  }
  
  // while loop
  function whileLoop() {
    let result = "";
    let i = 1;
    while (i <= 5) {
      result += "Number: " + i + "<br>";
      i++;
    }
    document.getElementById("whileLoopResult").innerHTML = result;
  }
  
  // do...while loop
  function doWhileLoop() {
    let result = "";
    let i = 6;
    do {
      result += "Value: " + i + "<br>";
      i++;
    } while (i <= 5);
    document.getElementById("doWhileLoopResult").innerHTML = result;
  }
  
  // for...in loop
  function forInLoop() {
    let person = { name: "Sony", age: 22, city: "Hyderabad" };
    let result = "";
    for (let key in person) {
      result += key + ": " + person[key] + "<br>";
    }
    document.getElementById("forInLoopResult").innerHTML = result;
  }
  
  // for...of loop
  function forOfLoop() {
    let fruits = ["Apple", "Mango", "Orange"];
    let result = "";
    for (let fruit of fruits) {
      result += fruit + "<br>";
    }
    document.getElementById("forOfLoopResult").innerHTML = result;
  }
  
  // forEach loop
  function forEachLoop() {
    let nums = [10, 20, 30];
    let result = "";
    nums.forEach(num => {
      result += "Number: " + num + "<br>";
    });
    document.getElementById("forEachLoopResult").innerHTML = result;
  }
  
  // map loop
  function mapLoop() {
    let nums = [1, 2, 3];
    let squares = nums.map(n => n * n);
    document.getElementById("mapLoopResult").innerHTML = squares.join(", ");
  }
  