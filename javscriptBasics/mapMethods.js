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
    myMap.set("language", "JavaScript");
    document.getElementById("output").innerHTML = "Added: language ➝ JavaScript";
  }
  
  // 3. Map.get()
  function useGet() {
    let value = myMap.get("name");
    document.getElementById("output").innerHTML = "myMap.get('name') = " + value;
  }
  
  // 4. Map.size
  function useSize() {
    document.getElementById("output").innerHTML = "Map size = " + myMap.size;
  }
  
  // 5. Map.delete()
  function useDelete() {
    myMap.delete("age");
    document.getElementById("output").innerHTML = "Deleted key: age";
  }
  
  // 6. Map.has()
  function useHas() {
    let result = myMap.has("country");
    document.getElementById("output").innerHTML = "Has country? " + result;
  }
  
  // 7. Map.clear()
  function useClear() {
    myMap.clear();
    document.getElementById("output").innerHTML = "Map cleared!";
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
    let objKey = { id: 1 };
    myMap.set(objKey, "Object Value");
    document.getElementById("output").innerHTML = "Added object key: {id:1} ➝ Object Value";
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
  