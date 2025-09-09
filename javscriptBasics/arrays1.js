
var collageNames = ["RCE", "CRR", "VIT", "SRKR", "BVIT"];


//fun to show the array
function showArray(){
    document.getElementById("showArray").innerHTML = collageNames;
}

//this fun will display array length
function arrayLength(){
    debugger;
    let result = collageNames.length;
    document.getElementById("arrayResult").innerHTML = result;
}

//this fun will convert array elements into comma separated strings
function arrayToString(){
    let result = collageNames.toString();
    document.getElementById("toStringResult").innerHTML = result;
}

//this fun will display array element at particular index
function arrayAt(){
    let result = collageNames.at(2);
    document.getElementById("arrayAtResult").innerHTML = result;
}

//this fun will join * or whatever we desire in place of comma
function arrayJoin(){
    let result = collageNames.join("*");
    document.getElementById("arrayJoinResult").innerHTML = result;
}

//this fun will adds elements at the end
function arrayPush(){
    let result = collageNames.push("KMIT");
    document.getElementById("arrayPush").innerHTML = result;
    document.getElementById("arrayPushResult").innerHTML = collageNames;
}

//this fun will removes elements at the end
function arrayPop(){
    let result = collageNames.pop();
    document.getElementById("arrayPop").innerHTML = result;
    document.getElementById("arrayPopResult").innerHTML = collageNames;
}

//this fun will removes elements from the start
function arrayShift(){
    let result = collageNames.shift();
    document.getElementById("arrayShift").innerHTML = result;
    document.getElementById("arrayShiftResult").innerHTML = collageNames;
}

//this fun will adds elements from the start
function arrayUnshift(){
    let result = collageNames.unshift("KMIT");
    document.getElementById("arrayUnshift").innerHTML = result;
    document.getElementById("arrayUnshiftResult").innerHTML = collageNames;
}

//this fun will combine 2 or more arrays
function arrayConcat(){
    let firmNames = ["TechM", "MedSquire", "Fulltanker", "Infosys", "Microsoft"];
    let newArray = firmNames.concat(collageNames);
    document.getElementById("arrayConcat").innerHTML = newArray;
}

//we can also use concat() to merge the array with value
function arrayConcatWithValue(){
    let newArray = collageNames.concat("CBIT");
    document.getElementById("arrayConcatWithValue").innerHTML = newArray;
}

//fun to use copywithin() method
function arraycopywithin(){
    document.getElementById("arraycopywithin").innerHTML = collageNames.copyWithin(3,0);
}

//fun to use flat() method
function arrayFlat(){
    let myBoolValues = [['M','F'], ["True", "False"], [0,1]];
    document.getElementById("arrayFlat").innerHTML = myBoolValues.flat(); //this method will give the result in new array 
}

//fun to use flatMap() method
function arrayFlatMap(){
    let myArr = [1,2,3,4,5];
    document.getElementById("myArray").innerHTML = myArr;
    document.getElementById("arrayFlatMap").innerHTML = myArr.flatMap(a => [a,a*5]);
}