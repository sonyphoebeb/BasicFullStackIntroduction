// Create a new Map
let myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["country", "India"]
  ]);
  
  // Show current map
  function showMap() {
    let result = "";
    myMap.forEach((value, key) => {
      result += `${key} ➝ ${value}<br>`;
    });
    document.getElementById("output").innerHTML = result || "Map is empty.";
  }
  
  // Add a new entry
  function addEntry() {
    let key = prompt("Enter key:");
    let value = prompt("Enter value:");
    myMap.set(key, value);
    showMap();
  }
  
  // Get an entry
  function getEntry() {
    let key = prompt("Enter key to get value:");
    let value = myMap.get(key);
    document.getElementById("output").innerHTML = 
      value !== undefined ? `${key} ➝ ${value}` : "Key not found!";
  }
  
  // Delete an entry
  function deleteEntry() {
    let key = prompt("Enter key to delete:");
    if (myMap.delete(key)) {
      document.getElementById("output").innerHTML = `${key} deleted.`;
    } else {
      document.getElementById("output").innerHTML = `${key} not found.`;
    }
  }
  
  // Check if entry exists
  function hasEntry() {
    let key = prompt("Enter key to check:");
    let result = myMap.has(key) ? `${key} exists.` : `${key} not found.`;
    document.getElementById("output").innerHTML = result;
  }
  
  // Clear all entries
  function clearMap() {
    myMap.clear();
    document.getElementById("output").innerHTML = "Map cleared!";
  }
  