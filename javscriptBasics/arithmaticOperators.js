
//fun to add two nums
function addNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let sum = num1 + num2;
    document.getElementById("pResult").innerHTML = "Sum = " +sum;
}

//fun to sub two nums
function subNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let sub = num1 - num2;
    document.getElementById("pResult").innerHTML = "Difference  = " +sub;
}

//fun to mul two nums
function mulNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let mul = num1 * num2;
    document.getElementById("pResult").innerHTML = "Product = " +mul;
}

//fun to div two nums
function divNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let div = num1 / num2;
    document.getElementById("pResult").innerHTML = "Quotient  = " +div;
}

//fun to mod two nums
function modNums(x,y){
    let num1 = Number(x);
    let num2 = Number(y);
    let mod = num1 % num2;
    document.getElementById("pResult").innerHTML = "Remainder  = " +mod;
}

//fun to increment a num
function incNum(x){
    let num1 = Number(x);
    num1++;
    document.getElementById("pResult").innerHTML = "Increment = " + num1;
}

//fun to decrement a num
function deNum(x){
    let num1 = Number(x);
    num1--;
    document.getElementById("pResult").innerHTML = "Decrement = " + num1;
}
