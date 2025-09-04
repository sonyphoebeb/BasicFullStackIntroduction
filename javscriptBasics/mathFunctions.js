// Helper to get numbers from input
function getNumbers() {
    let input = document.getElementById("inputNums").value.trim();
    return input ? input.split(",").map(Number) : [];
  }
  
  // Show result
  function showResult(text) {
    document.getElementById("resultBox").textContent = text;
  }
  
  // Math.ceil()
  function mathCeil() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter at least one number!");
    showResult(nums.map(n => `Math.ceil(${n}) = ${Math.ceil(n)}`).join("\n"));
  }
  
  // Math.floor()
  function mathFloor() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter at least one number!");
    showResult(nums.map(n => `Math.floor(${n}) = ${Math.floor(n)}`).join("\n"));
  }
  
  // Math.abs()
  function mathAbs() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter at least one number!");
    showResult(nums.map(n => `Math.abs(${n}) = ${Math.abs(n)}`).join("\n"));
  }
  
  // Math.max()
  function mathMax() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter at least one number!");
    showResult(`Math.max(...nums) = ${Math.max(...nums)}`);
  }
  
  // Math.min()
  function mathMin() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter at least one number!");
    showResult(`Math.min(...nums) = ${Math.min(...nums)}`);
  }
  
  // Math.pow()
  function mathPow() {
    let nums = getNumbers();
    if (nums.length < 2) return showResult("Enter at least two numbers (base, exponent)!");
    showResult(`Math.pow(${nums[0]}, ${nums[1]}) = ${Math.pow(nums[0], nums[1])}`);
  }
  
  // Math.sqrt()
  function mathSqrt() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter at least one number!");
    showResult(nums.map(n => `Math.sqrt(${n}) = ${Math.sqrt(n)}`).join("\n"));
  }
  
  // Math.random()
  function mathRandom() {
    showResult(`Math.random() = ${Math.random()}`);
  }
  