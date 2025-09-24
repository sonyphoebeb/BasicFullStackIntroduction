// Global Set
let fruits = new Set(["Apple", "Banana", "Mango"]);
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("showSet").innerHTML =
    "Current Set: " + [...fruits].join(", ");
});

// new Set()
function newSetExample() {
  let mySet = new Set(["A", "B", "C"]);
  document.getElementById("newSetResult").innerHTML =
    "New Set created: " + [...mySet].join(", ");
}

// add()
function addExample() {
  fruits.add("Orange");
  document.getElementById("addResult").innerHTML =
    "After add(): " + [...fruits].join(", ");
}

// delete()
function deleteExample() {
  fruits.delete("Banana");
  document.getElementById("deleteResult").innerHTML =
    "After delete(): " + [...fruits].join(", ");
}

// clear()
function clearExample() {
  let tempSet = new Set(["X", "Y", "Z"]);
  tempSet.clear();
  document.getElementById("clearResult").innerHTML =
    "After clear(): " + [...tempSet].join(", ");
}

// entries()
function entriesExample() {
  let entries = "";
  for (let entry of fruits.entries()) {
    entries += entry + "<br>";
  }
  document.getElementById("entriesResult").innerHTML = entries;
}

// forEach()
function forEachExample() {
  let txt = "";
  fruits.forEach(fruit => {
    txt += fruit + "<br>";
  });
  document.getElementById("forEachResult").innerHTML = txt;
}

// has()
function hasExample() {
  let result = fruits.has("Apple");
  document.getElementById("hasResult").innerHTML =
    "Has Apple? " + result;
}

// keys()
function keysExample() {
  let txt = "";
  for (let key of fruits.keys()) {
    txt += key + "<br>";
  }
  document.getElementById("keysResult").innerHTML = txt;
}

// values()
function valuesExample() {
  let txt = "";
  for (let val of fruits.values()) {
    txt += val + "<br>";
  }
  document.getElementById("valuesResult").innerHTML = txt;
}

// size
function sizeExample() {
  document.getElementById("sizeResult").innerHTML =
    "Size of Set: " + fruits.size;
}
