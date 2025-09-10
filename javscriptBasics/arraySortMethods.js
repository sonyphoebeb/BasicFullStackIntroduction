
// Sample Array
let myFamily = ["Rambabu", "Jyothi", "Shyamala", "Sony", "Nani"];
document.getElementById("showArray").innerHTML = myFamily;

//fun to sort an array
function arraySort(){
    document.getElementById("arraySortResult").innerHTML = myFamily.sort();
}

//fun to reverse an array
function arrayReverse(){
    document.getElementById("arrayReverseResult").innerHTML = myFamily.reverse();
}