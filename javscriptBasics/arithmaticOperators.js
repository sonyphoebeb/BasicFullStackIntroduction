
//fun to add two nums
function addNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let sum = num1 + num2;
    document.getElementById("pNumResult").innerHTML = "Sum = " +sum;
}

//fun to sub two nums
function SubNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let sub = num1 - num2;
    document.getElementById("pResult").innerHTML = "Difference  = " +sub;
}

//fun to mul two nums
function MulNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let mul = num1 * num2;
    document.getElementById("pResult").innerHTML = "Product = " +mul;
}

//fun to div two nums
function DivNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let div = num1 / num2;
    document.getElementById("pResult").innerHTML = "Quotient  = " +div;
}

//fun to mod two nums
function ModNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let mod = num1 % num2;
    document.getElementById("pResult").innerHTML = "Remainder  = " +mod;
}