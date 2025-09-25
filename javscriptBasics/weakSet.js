// Create a WeakSet
let weakSet = new WeakSet();

// Example objects
let obj1 = { name: "Sony" };
let obj2 = { name: "Learner" };

// Show initial data
window.onload = function () {
  document.getElementById("initialObjects").textContent =
    "Object 1: " + JSON.stringify(obj1) + " | Object 2: " + JSON.stringify(obj2);
};

function addObj() {
  weakSet.add(obj1);
  weakSet.add(obj2);
  document.getElementById("result").textContent = "✅ Objects added to WeakSet!";
}

function checkObj() {
  let result = weakSet.has(obj1);
  document.getElementById("result").textContent =
    "🔍 Does WeakSet have obj1? " + result;
}

function deleteObj() {
  weakSet.delete(obj2);
  document.getElementById("result").textContent = "❌ obj2 deleted from WeakSet!";
}
