
// Sample Array
let myFamily = ["Rambabu", "Jyothi", "Shyamala", "Sony", "Nani"];
document.getElementById("showArray").innerHTML = myFamily;

//fun to sort an array
function arraySort(){
    document.getElementById("arraySortResult").innerHTML = myFamily.sort();
}

//same as sort but toSorted will not alter the original array
function arrayToSorted(){
    document.getElementById("arrayToSortedResult").innerHTML = myFamily.toSorted();
}

//fun to reverse an array
function arrayReverse(){
    document.getElementById("arrayReverseResult").innerHTML = myFamily.reverse();
}

//same as sort but toReversed will not alter the original array
function arrayToReversed(){
    document.getElementById("arrayToReversedResult").innerHTML = myFamily.toReversed();
}