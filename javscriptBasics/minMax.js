
//Max fun
function maxMathFun(inputValues){
    let inputNums = inputValues.split(",").map(Number);
    document.getElementById("resultNum").innerHTML = Math.max(...inputNums);
}

//Min fun
function minMathFun(inpVal){
    let inputNums = inpVal.split(",").map(Number);
    document.getElementById("resultNum").innerHTML = Math.min(...inputNums);

}