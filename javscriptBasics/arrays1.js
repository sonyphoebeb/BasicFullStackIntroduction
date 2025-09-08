
var collageNames = ["RCE", "CRR", "VIT", "SRKR", "BVIT"];

function showArray(){
    document.getElementById("showArray").innerHTML = collageNames;
}

function arrayLength(){
    debugger;
    let result = collageNames.length;
    document.getElementById("arrayResult").innerHTML = result;
}

function arrayToString(){
    let result = collageNames.toString();
    document.getElementById("toStringResult").innerHTML = result;
}
