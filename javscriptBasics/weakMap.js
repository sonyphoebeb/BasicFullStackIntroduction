// Create a WeakMap
let weakMap = new WeakMap();

// Some sample objects
let obj1 = { name: "Sony" };
let obj2 = { name: "Phoebe" };

// Add initial values
weakMap.set(obj1, "Developer");
weakMap.set(obj2, "Designer");

// Show WeakMap content (not directly iterable, so we'll check manually)
function showWeakMap() {
  let msg = "WeakMap contains Sony? " + weakMap.has(obj1);
  msg += "<br>WeakMap contains Phoebe? " + weakMap.has(obj2);
  document.getElementById("output").innerHTML = msg;
}

// Add a new object dynamically
function addWeakMap() {
  let name = prompt("Enter name of person:");
  let role = prompt("Enter role for " + name + ":");
  let newObj = { name: name };
  weakMap.set(newObj, role);
  document.getElementById("output").innerHTML = `Added ${name} ➝ ${role}`;
}

// Get value by key
function getWeakMap() {
  let choice = prompt("Enter 'Sony' or 'Phoebe' to get role:");
  let key = choice === "Sony" ? obj1 : obj2;
  let value = weakMap.get(key);
  document.getElementById("output").innerHTML =
    value ? `${choice}'s role is ${value}` : `No role found for ${choice}`;
}

// Check if WeakMap has a key
function hasWeakMap() {
  let choice = prompt("Enter 'Sony' or 'Phoebe' to check:");
  let key = choice === "Sony" ? obj1 : obj2;
  let result = weakMap.has(key);
  document.getElementById("output").innerHTML = `Has ${choice}? ${result}`;
}

// Delete a key
function deleteWeakMap() {
  let choice = prompt("Enter 'Sony' or 'Phoebe' to delete:");
  let key = choice === "Sony" ? obj1 : obj2;
  if (weakMap.delete(key)) {
    document.getElementById("output").innerHTML = `Deleted ${choice}`;
  } else {
    document.getElementById("output").innerHTML = `${choice} not found`;
  }
}
