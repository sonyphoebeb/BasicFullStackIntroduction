
// sample array
let nums = [45, 4, 9, 16, 25];

window.onload = function () {
  document.getElementById("showArray").innerHTML = nums;
};

// fun to use foreach() to call a function once for each element
function arrayForEach() {
  let txt = "";
  nums.forEach(myFunction);   // loop through each element in nums[]
  document.getElementById("forEachResult").innerHTML = txt;

  function myFunction(value) {
    txt += value + "<br>";    // append each value with a line break
  }
}

// array map
function arrayMap() {

  let result = nums.map(myFunction);
  document.getElementById("mapResult").innerHTML = result

  function myFunction(value) {
    return value + 10;
  }
}

// array flatmap
function arrayFlatMap() {
  document.getElementById("flatMapResult").innerHTML = nums.flatMap(x => [x, x + 20]);
}

// array filter
function arrayFilter() {

  let result = nums.filter(myFunction)
  document.getElementById("filterResult").innerHTML = result;

  function myFunction(value) {
    return value < 10;
  }
}

// array reduce
function arrayReduce() {

  let result = nums.reduce(myFunction)
  document.getElementById("reduceResult").innerHTML = result;

  function myFunction(total, value) {
    return total + value;
  }
}

// array reduce
function arrayReduce2() {

  let result = nums.reduce(myFunction, 150)
  document.getElementById("reduceResult2").innerHTML = result;

  function myFunction(total, value) {
    return total + value;
  }
}

// array reduce-right
function arrayReduceRight() {

  let myChar = ['a', 'b', 'c'];
  document.getElementById("currentArray").innerHTML = "Current Array: " + myChar;

  document.getElementById("reduceRightResult").innerHTML = "reduceRight result: " + myChar.reduceRight(myFunction);

  function myFunction(total, value) {
    return total + value;
  }
}

// array every
function arrayEvery() {

  let result = nums.every(myFunction)
  document.getElementById("everyResult").innerHTML = result;

  function myFunction(value) {
    return value > 5;
  }
}

// array some
function arraySome() {

  let result = nums.some(myFunction)
  document.getElementById("someResult").innerHTML = result;

  function myFunction(value) {
    return value > 5;
  }
}

// array from
function arrayFrom() {

  let text = "SONY IS THE BEST";
  document.getElementById("myString").innerHTML = "My String: " + text;
  
  document.getElementById("fromResult").innerHTML = "from() result: " + Array.from(text);
}

let mobileCompanies = ["Apple", "Samsung", "Oneplus", "Oppo"];

window.onload = function () {
  document.getElementById("myString2").innerHTML = mobileCompanies;
};

// array keys -> gives array indexes
function arrayKeys() {

let keys = mobileCompanies.keys();
let keysOutput = "";
for (let key of keys) {
  keysOutput += key + "<br>";
}
document.getElementById("keysResult").innerHTML = "<b>Keys:</b><br>" + keysOutput;
}

// array keys -> gives array indexes
function arrayEntries() {

  let entries = mobileCompanies.entries();
  let entriesOutput = "";
  for (let entry of entries) {
    entriesOutput += entry + "<br>";
  }
  document.getElementById("entriesResult").innerHTML = "<b>Entries:</b><br>" + entriesOutput;
  }
