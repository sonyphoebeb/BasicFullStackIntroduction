
// Sample Array
let myFamily = ["Rambabu", "Jyothi", "Shyamala", "Sony", "Nani"];
document.getElementById("showArray").innerHTML = myFamily;

//fun to sort an array
function arraySort() {
    document.getElementById("arraySortResult").innerHTML = myFamily.sort();
}

//same as sort but toSorted will not alter the original array
function arrayToSorted() {
    document.getElementById("arrayToSortedResult").innerHTML = myFamily.toSorted();
}

//fun to reverse an array
function arrayReverse() {
    document.getElementById("arrayReverseResult").innerHTML = myFamily.reverse();
}

//same as sort but toReversed will not alter the original array
function arrayToReversed() {
    document.getElementById("arrayToReversedResult").innerHTML = myFamily.toReversed();
}

// Sample Array 2
let numbers = [20, 50, 10, 305, 100, 119, 90];

window.onload = function () {
    document.getElementById("showArray2").innerHTML = numbers;
};

//fun to sort num array 1s,2s,3s
function arraySortNum() {
    document.getElementById("arraySortNumResult").innerHTML = numbers.sort();
}

//fun to sort num array correctly by writing a fun
function arraySortNum2() {
    document.getElementById("arraySortNum2Result").innerHTML = numbers.sort(function (a, b) { return a - b });
}

//fun to get random array elements using fisher Yates method
function fisherYatesShuffle() {
    debugger;
    for (let i = numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i

        // Swap numbers[i] and numbers[j]
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    document.getElementById("fisherYatesShuffleResult").innerHTML = numbers;
}

// fun to find min value by sorting the array to ascending order and getting 0th index value
function arrayFindMin() {
    numbers.sort(function (a, b) { return a - b });
    document.getElementById("arrayFindMinResult").innerHTML = numbers[0];
}

// fun to find min value using math.min() and spread operator
function arrayFindMin2() {
    let result = Math.min(...numbers);
    document.getElementById("arrayFindMinResult2").innerHTML = result;
}

// fun to find max value using math.max() and spread operator
function arrayFindMax() {
    let result = Math.max(...numbers);
    document.getElementById("arrayFindMaxResult").innerHTML = result
}

//  object array sort
const courses = [
    { lang: "JavaScript", year: 1995 },
    { lang: "HTML", year: 1991 },
    { lang: "Java", year: 1995 }
];

// Function to sort and display courses
function displayCourses() {
    // Sort by year
    courses.sort(function (a, b) { return a.year - b.year });

    // Display result
    let result = courses.map(c => `${c.lang} ${c.year}`).join("<br>");
    document.getElementById("objectArraySort").innerHTML = result;
}