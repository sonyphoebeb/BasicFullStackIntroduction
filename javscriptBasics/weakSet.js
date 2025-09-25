// Create a WeakSet
let weakSet = new WeakSet();

// Example objects
let obj1 = { name: "Sony" };
let obj2 = { name: "Trainer" };

function addObj() {
  weakSet.add(obj1);
  weakSet.add(obj2);
  document.getElementById("result").textContent = "Objects added to WeakSet!";
}

function checkObj() {
  let result = weakSet.has(obj1);
  document.getElementById("result").textContent = "Does WeakSet have obj1? " + result;
}

function deleteObj() {
  weakSet.delete(obj2);
  document.getElementById("result").textContent = "obj2 deleted from WeakSet!";
}
