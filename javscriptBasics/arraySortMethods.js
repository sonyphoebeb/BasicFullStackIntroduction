
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

// Sample Array 2
let numbers = [20, 50, 10, 305, 100, 119, 90];
document.getElementById("showArray2").innerHTML = numbers;

//fun to sort num array 1s,2s,3s
function arraySortNum(){
    document.getElementById("arraySortNumResult").innerHTML = numbers.sort();
}

//fun to sort num array correctly by writing a fun
function arraySortNum2(){
    document.getElementById("arraySortNum2Result").innerHTML = numbers.sort(function (a,b) {return a - b});
}