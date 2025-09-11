
// sample array
let nums = [45, 4, 9, 16, 25];

window.onload = function () {
    document.getElementById("showArray").innerHTML = nums;
};

// fun to use foreach() to call a function once for each element
function arrayForEach(){
    let txt = "";
    nums.forEach(myFunction);   // loop through each element in nums[]
    document.getElementById("forEachResult").innerHTML = txt;
    
    function myFunction(value) {
      txt += value + "<br>";    // append each value with a line break
    }
}
