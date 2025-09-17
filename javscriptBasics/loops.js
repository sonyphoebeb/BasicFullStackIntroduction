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
    let i = 10;
    do {
      result += "Value: " + i + "<br>";
      i++;
    } while (i <= 15);
    document.getElementById("doWhileLoopResult").innerHTML = result;
  }
  
  // for...in loop
  function forInLoop() {
    let person = { name: "Sony", age: 23, city: "Hyderabad" };
    let result = "";
    for (let key in person) {
      result += key + ": " + person[key] + "<br>";
    }
    document.getElementById("forInLoopResult").innerHTML = result;
  }
  
  // for...of loop
  function forOfLoop() {
    let courses = ["HTML", "CSS", "JavaScript"];
    let result = "";
    for (let course of courses) {
      result += course + "<br>";
    }
    document.getElementById("forOfLoopResult").innerHTML = result;
  }
  
  // forEach loop
  function forEachLoop() {
    let games = ["CandyCrush", "Pubg", "BattleGround"];
    let result = "";
    games.forEach(game => {
      result += "Game: " + game + "<br>";
    });
    document.getElementById("forEachLoopResult").innerHTML = result;
  }
  
  // map loop
  function mapLoop() {
    let nums = [1, 2, 3];
    let squares = nums.map(n => n * n);
    document.getElementById("mapLoopResult").innerHTML = squares.join(", ");
  }
  