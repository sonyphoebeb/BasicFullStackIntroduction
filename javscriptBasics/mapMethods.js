// Create a sample map
let myMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["country", "India"]
  ]);
  
  // 1. new Map()
  function showMap() {
    let result = "";
    myMap.forEach((value, key) => {
      result += `${key} ➝ ${value}<br>`;
    });
    document.getElementById("output").innerHTML = result || "Map is empty.";
  }
  
  // 2. Map.set()
  function useSet() {
    let key = prompt("Enter the key to set:");
    let value = prompt("Enter the value for " + key + ":");
    myMap.set(key, value);
    document.getElementById("output").innerHTML = `Added: ${key} ➝ ${value}`;
  }
  
  // 3. Map.get()
  function useGet() {
    let key = prompt("Enter the key to get value:");
    let value = myMap.get(key);
    document.getElementById("output").innerHTML = value
      ? `myMap.get('${key}') = ${value}`
      : `Key '${key}' not found!`;
  }
  
  // 4. Map.size
  function useSize() {
    document.getElementById("output").innerHTML = "Map size = " + myMap.size;
  }
  
  // 5. Map.delete()
  function useDelete() {
    let key = prompt("Enter the key to delete:");
    if (myMap.delete(key)) {
      document.getElementById("output").innerHTML = `Deleted key: ${key}`;
    } else {
      document.getElementById("output").innerHTML = `Key '${key}' not found.`;
    }
  }
  
  // 6. Map.has()
  function useHas() {
    let key = prompt("Enter the key to check:");
    let result = myMap.has(key);
    document.getElementById("output").innerHTML = `Has ${key}? ${result}`;
  }
  
  // 7. Map.clear()
  function useClear() {
    let confirmClear = confirm("Are you sure you want to clear the Map?");
    if (confirmClear) {
      myMap.clear();
      document.getElementById("output").innerHTML = "Map cleared!";
    }
  }
  
  // 8. Map.forEach()
  function useForEach() {
    let result = "";
    myMap.forEach((value, key) => {
      result += `${key} = ${value}<br>`;
    });
    document.getElementById("output").innerHTML = result || "Map is empty.";
  }
  
  // 9. Map.entries()
  function useEntries() {
    let result = "";
    for (let [key, value] of myMap.entries()) {
      result += `${key} ➝ ${value}<br>`;
    }
    document.getElementById("output").innerHTML = result;
  }
  
  // 10. Map.keys()
  function useKeys() {
    let result = "";
    for (let key of myMap.keys()) {
      result += key + "<br>";
    }
    document.getElementById("output").innerHTML = result;
  }
  
  // 11. Map.values()
  function useValues() {
    let result = "";
    for (let value of myMap.values()) {
      result += value + "<br>";
    }
    document.getElementById("output").innerHTML = result;
  }
  
  // 12. Objects as Keys
  function useObjectsAsKeys() {
    let id = prompt("Enter object id:");
    let objKey = { id: id };
    let value = prompt("Enter value for object key:");
    myMap.set(objKey, value);
    document.getElementById("output").innerHTML =
      `Added object key: {id:${id}} ➝ ${value}`;
  }
  
  // 13. Map.groupBy() (ES2023+)
  function useGroupBy() {
    let arr = [6.1, 4.2, 6.3];
    let grouped = Map.groupBy(arr, Math.floor);
    let result = "";
    grouped.forEach((values, key) => {
      result += `${key} ➝ [${values}]<br>`;
    });
    document.getElementById("output").innerHTML = result;
  }
  