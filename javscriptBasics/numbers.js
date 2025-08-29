// Helper: get input value
function getValue() {
    return Number(document.getElementById("numInput").value);
  }
  
  // Basic operations
  function addTen() {
    let x = getValue();
    document.getElementById("result").textContent = x + 10;
  }
  
  function multiplyTwo() {
    let x = getValue();
    document.getElementById("result").textContent = x * 2;
  }
  
  function divideTwo() {
    let x = getValue();
    document.getElementById("result").textContent = x / 2;
  }
  
  function modThree() {
    let x = getValue();
    document.getElementById("result").textContent = x % 3;
  }
  
  // Number methods
  function toStringDemo() {
    let x = getValue();
    document.getElementById("result").textContent = x.toString();
  }
  
  function toFixedDemo() {
    let x = getValue();
    document.getElementById("result").textContent = x.toFixed(2);
  }
  
  function toPrecisionDemo() {
    let x = getValue();
    document.getElementById("result").textContent = x.toPrecision(4);
  }
  
  function parseIntDemo() {
    let x = document.getElementById("numInput").value;
    document.getElementById("result").textContent = parseInt(x);
  }
  
  function parseFloatDemo() {
    let x = document.getElementById("numInput").value;
    document.getElementById("result").textContent = parseFloat(x);
  }
  
  // Special Numbers
  function infinityDemo() {
    document.getElementById("result").textContent = 1 / 0; // Infinity
  }
  
  function nanDemo() {
    document.getElementById("result").textContent = 100 / "apple"; // NaN
  }
  