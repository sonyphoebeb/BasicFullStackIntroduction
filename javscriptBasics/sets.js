// Initialize Set
const fruits = new Set(["Apple", "Banana", "Mango"]);

function addFruit() {
  const fruit = document.getElementById("fruitInput").value.trim();
  if (fruit) {
    if (fruits.has(fruit)) {
      document.getElementById("output").innerHTML = fruit + " already exists!";
    } else {
      fruits.add(fruit);
      document.getElementById("output").innerHTML = fruit + " added!";
    }
  }
}

function deleteFruit() {
  const fruit = document.getElementById("fruitInput").value.trim();
  if (fruit && fruits.has(fruit)) {
    fruits.delete(fruit);
    document.getElementById("output").innerHTML = fruit + " deleted!";
  } else {
    document.getElementById("output").innerHTML = "Fruit not found!";
  }
}

function checkFruit() {
  const fruit = document.getElementById("fruitInput").value.trim();
  if (fruits.has(fruit)) {
    document.getElementById("output").innerHTML = fruit + " is in the Set ✅";
  } else {
    document.getElementById("output").innerHTML = fruit + " is NOT in the Set ❌";
  }
}

function showAll() {
  let list = [...fruits].join(", ");
  document.getElementById("output").innerHTML = "Fruits in Set: " + list;
}
