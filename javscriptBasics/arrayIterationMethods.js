
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
