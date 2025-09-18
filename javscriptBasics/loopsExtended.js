// 1. Nested Loops
function nestedLoops() {
  let result = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      result += `i=${i}, j=${j}<br>`;
    }
  }
  document.getElementById("nestedLoopsResult").innerHTML = result;
}

// 2. Break & Continue
function breakContinue() {
  let result = "";
  for (let i = 1; i <= 7; i++) {
    if (i === 3) continue; // skips 3
    if (i === 6) break;   // stops at 5
    result += "Iteration " + i + "<br>";
  }
  document.getElementById("breakContinueResult").innerHTML = result;
}

// 3. Looping Array with Condition
function arrayWithCondition() {
  let nums = [10, 25, 30, 45, 60];
  let evens = [];
  for (let n of nums) {
    if (n % 2 === 0) {
      evens.push(n);
    }
  }
  document.getElementById("arrayConditionResult").innerHTML = "Even Numbers: " + evens.join(", ");
}

// 4. Loop Objects
function objectLoop() {
  const student = { name: "Sony", age: 24, course: "Full Stack" };
  let result = "";

  for (let key in student) {
    result += `${key}: ${student[key]}<br>`;
  }
  document.getElementById("objectLoopResult").innerHTML = result;
}

// 5. Loop + DOM
function domLoop() {
  const movies  = ["Seeta Ramam", "Jathi Ratnalu", "Venom", "The Drak Knight"];
  const list = document.getElementById("domLoopResult");
  list.innerHTML = ""; // clear before appending

  movies.forEach(movie => {
    let li = document.createElement("li");
    li.textContent = movie;
    list.appendChild(li);
  });
}

// 6. Compare Loops
function compareLoops() {
  let nums = [1, 2, 3, 4];
  let forLoop = "";
  let forEachLoop = "";
  let mapLoop = "";

  // For
  for (let i = 0; i < nums.length; i++) {
    forLoop += nums[i] + " ";
  }

  // ForEach
  nums.forEach(n => 
    {
      forEachLoop += n + " ";
    }
  );

  // Map
  mapLoop = nums.map(n => n * 2).join(" ");

  document.getElementById("compareLoopsResult").innerHTML =
    `<b>For:</b> ${forLoop}<br>
       <b>ForEach:</b> ${forEachLoop}<br>
       <b>Map (*2):</b> ${mapLoop}`;
}
