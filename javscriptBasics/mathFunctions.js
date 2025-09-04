// Get input numbers from text field
function getNumbers() {
    let input = document.getElementById("numInput").value.trim();
    return input ? input.split(",").map(Number) : [];
}

// Print result in resultBox
function showResult(text) {
    document.getElementById("resultBox").textContent = text;
}

// ---------------- Separate Functions ----------------

// abs
function mathAbs() {
    let nums = getNumbers();
    if (nums.length === 0) return showResult("Enter a number!");
    showResult(nums.map(n => `Math.abs(${n}) = ${Math.abs(n)}`).join("\n"));
}

// acos
function mathAcos() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.acos(${n}) = ${Math.acos(n)}`).join("\n"));
}

// acosh
function mathAcosh() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.acosh(${n}) = ${Math.acosh(n)}`).join("\n"));
}

// asin
function mathAsin() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.asin(${n}) = ${Math.asin(n)}`).join("\n"));
}

// asinh
function mathAsinh() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.asinh(${n}) = ${Math.asinh(n)}`).join("\n"));
}

// atan
function mathAtan() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.atan(${n}) = ${Math.atan(n)}`).join("\n"));
}

// atan2
function mathAtan2() {
    let nums = getNumbers();
    if (nums.length < 2) return showResult("Enter y,x values (2 numbers)!");
    showResult(`Math.atan2(${nums[0]}, ${nums[1]}) = ${Math.atan2(nums[0], nums[1])}`);
}

// atanh
function mathAtanh() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.atanh(${n}) = ${Math.atanh(n)}`).join("\n"));
}

// cbrt
function mathCbrt() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.cbrt(${n}) = ${Math.cbrt(n)}`).join("\n"));
}

// ceil
function mathCeil() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.ceil(${n}) = ${Math.ceil(n)}`).join("\n"));
}

// clz32
function mathClz32() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.clz32(${n}) = ${Math.clz32(n)}`).join("\n"));
}

// cos
function mathCos() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.cos(${n}) = ${Math.cos(n)}`).join("\n"));
}

// cosh
function mathCosh() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.cosh(${n}) = ${Math.cosh(n)}`).join("\n"));
}

// exp
function mathExp() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.exp(${n}) = ${Math.exp(n)}`).join("\n"));
}

// expm1
function mathExpm1() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.expm1(${n}) = ${Math.expm1(n)}`).join("\n"));
}

// floor
function mathFloor() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.floor(${n}) = ${Math.floor(n)}`).join("\n"));
}

// fround
function mathFround() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.fround(${n}) = ${Math.fround(n)}`).join("\n"));
}

// log
function mathLog() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.log(${n}) = ${Math.log(n)}`).join("\n"));
}

// log10
function mathLog10() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.log10(${n}) = ${Math.log10(n)}`).join("\n"));
}

// log1p
function mathLog1p() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.log1p(${n}) = ${Math.log1p(n)}`).join("\n"));
}

// log2
function mathLog2() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.log2(${n}) = ${Math.log2(n)}`).join("\n"));
}

// max
function mathMax() {
    let nums = getNumbers();
    showResult(`Math.max(${nums}) = ${Math.max(...nums)}`);
}

// min
function mathMin() {
    let nums = getNumbers();
    showResult(`Math.min(${nums}) = ${Math.min(...nums)}`);
}

// pow
function mathPow() {
    let nums = getNumbers();
    if (nums.length < 2) return showResult("Enter x,y values!");
    showResult(`Math.pow(${nums[0]}, ${nums[1]}) = ${Math.pow(nums[0], nums[1])}`);
}

// random
function mathRandom() {
    showResult(`Math.random() = ${Math.random()}`);
}

// round
function mathRound() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.round(${n}) = ${Math.round(n)}`).join("\n"));
}

// sign
function mathSign() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.sign(${n}) = ${Math.sign(n)}`).join("\n"));
}

// sin
function mathSin() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.sin(${n}) = ${Math.sin(n)}`).join("\n"));
}

// sinh
function mathSinh() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.sinh(${n}) = ${Math.sinh(n)}`).join("\n"));
}

// sqrt
function mathSqrt() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.sqrt(${n}) = ${Math.sqrt(n)}`).join("\n"));
}

// tan
function mathTan() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.tan(${n}) = ${Math.tan(n)}`).join("\n"));
}

// tanh
function mathTanh() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.tanh(${n}) = ${Math.tanh(n)}`).join("\n"));
}

// trunc
function mathTrunc() {
    let nums = getNumbers();
    showResult(nums.map(n => `Math.trunc(${n}) = ${Math.trunc(n)}`).join("\n"));
}

// constants
function showConstants() {
    let constants = `
  Math.E = ${Math.E}
  Math.LN2 = ${Math.LN2}
  Math.LN10 = ${Math.LN10}
  Math.LOG2E = ${Math.LOG2E}
  Math.LOG10E = ${Math.LOG10E}
  Math.PI = ${Math.PI}
  Math.SQRT1_2 = ${Math.SQRT1_2}
  Math.SQRT2 = ${Math.SQRT2}
    `;
    showResult(constants);
}
