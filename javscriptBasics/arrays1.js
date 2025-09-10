
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
    let myBoolValues = [['M','F'], ["True", "False"], [0,1]];   //array of arrays
    document.getElementById("arrayFlat").innerHTML = myBoolValues.flat(); //this method will give the result in new array 
}

//fun to use flatMap() method
function arrayFlatMap(){
    let myArr = [1,2,3,4,5];
    document.getElementById("myArray").innerHTML = myArr;
    document.getElementById("arrayFlatMap").innerHTML = myArr.flatMap(a => [a, a * 5]);
}

//fun to use splice() method to add the elements
function arraySplice(){
    let result = collageNames.splice(0, 2, "SSIT", "MTIT");
    document.getElementById("arraySplice").innerHTML = result;  //this will show only the spliced elements
    document.getElementById("arraySpliceResult").innerHTML = collageNames;   //this will show entire array after splicing
}

//fun to use splice() method to remove the elements
function arraySpliceRemove(){
    document.getElementById("currentArray").innerHTML = "Current array: "+collageNames; //show current array
    document.getElementById("arraySpliceRemove").innerHTML = "Removed item: " +collageNames.splice(3, 1);  //this will show only the spliced elements
    document.getElementById("arraySpliceRemovedResult").innerHTML = "Array after removing: " +collageNames;   //this will show entire array after splicing
}

//fun to use toSpliced() method
function arrayToSpliced(){
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];  
    document.getElementById("currentArray2").innerHTML = "Current array: " +months;  //show current array
    document.getElementById("arrayToSpliced").innerHTML = months.toSpliced(0, 2);   
}

//fun to use slice() method to remove the elements
function arraySlice(){
    let myArray = [1,2,3,4,5,6];
    document.getElementById("currentArray3").innerHTML = "Current array: " +myArray;  //show current array
    document.getElementById("arraySliceResult").innerHTML = myArray.slice(3);   //it will remove 1st 3 elements
}

//fun to use slice() method can also take 2 arguments
function arraySlice2(){
    let myArray = [0,1,2,3,4,5,6];  
    document.getElementById("currentArray4").innerHTML = "Current array: " +myArray;  //show current array
    document.getElementById("arraySliceResult2").innerHTML = myArray.slice(2,5);   //it will show the elements from to 5(exclude last argument)
}

