
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

function arrayAt(){
    let result = collageNames.at(2);
    document.getElementById("arrayAtResult").innerHTML = result;
}

function arrayJoin(){
    let result = collageNames.join("*");
    document.getElementById("arrayJoinResult").innerHTML = result;
}

function arrayPush(){
    let result = collageNames.push("KMIT");
    document.getElementById("arrayPush").innerHTML = result;
}

function arrayPop(){
    let result = collageNames.pop();
    document.getElementById("arrayPop").innerHTML = result;
}
