// Get numbers from input
function getNums() {
    let input = document.getElementById("numInput").value.trim();
    return input ? input.split(",").map(Number) : [];
  }
  
  // Display result
  function showResult(text) {
    document.getElementById("resultBox").textContent = text;
  }
  
  // --- Separate Math methods ---
  function mathAbs() { showResult("abs: " + Math.abs(getNums()[0])); }
  function mathAcos() { showResult("acos: " + Math.acos(getNums()[0])); }
  function mathAcosh() { showResult("acosh: " + Math.acosh(getNums()[0])); }
  function mathAsin() { showResult("asin: " + Math.asin(getNums()[0])); }
  function mathAsinh() { showResult("asinh: " + Math.asinh(getNums()[0])); }
  function mathAtan() { showResult("atan: " + Math.atan(getNums()[0])); }
  function mathAtan2() { let n=getNums(); showResult("atan2(y,x): " + Math.atan2(n[0],n[1])); }
  function mathAtanh() { showResult("atanh: " + Math.atanh(getNums()[0])); }
  function mathCbrt() { showResult("cbrt: " + Math.cbrt(getNums()[0])); }
  function mathCeil() { showResult("ceil: " + Math.ceil(getNums()[0])); }
  function mathClz32() { showResult("clz32: " + Math.clz32(getNums()[0])); }
  function mathCos() { showResult("cos: " + Math.cos(getNums()[0])); }
  function mathCosh() { showResult("cosh: " + Math.cosh(getNums()[0])); }
  function mathExp() { showResult("exp: " + Math.exp(getNums()[0])); }
  function mathExpm1() { showResult("expm1: " + Math.expm1(getNums()[0])); }
  function mathFloor() { showResult("floor: " + Math.floor(getNums()[0])); }
  function mathFround() { showResult("fround: " + Math.fround(getNums()[0])); }
  function mathLog() { showResult("log: " + Math.log(getNums()[0])); }
  function mathLog10() { showResult("log10: " + Math.log10(getNums()[0])); }
  function mathLog1p() { showResult("log1p: " + Math.log1p(getNums()[0])); }
  function mathLog2() { showResult("log2: " + Math.log2(getNums()[0])); }
  function mathMax() { showResult("max: " + Math.max(...getNums())); }
  function mathMin() { showResult("min: " + Math.min(...getNums())); }
  function mathPow() { let n=getNums(); showResult("pow(x,y): " + Math.pow(n[0],n[1])); }
  function mathRandom() { showResult("random: " + Math.random()); }
  function mathRound() { showResult("round: " + Math.round(getNums()[0])); }
  function mathSign() { showResult("sign: " + Math.sign(getNums()[0])); }
  function mathSin() { showResult("sin: " + Math.sin(getNums()[0])); }
  function mathSinh() { showResult("sinh: " + Math.sinh(getNums()[0])); }
  function mathSqrt() { showResult("sqrt: " + Math.sqrt(getNums()[0])); }
  function mathTan() { showResult("tan: " + Math.tan(getNums()[0])); }
  function mathTanh() { showResult("tanh: " + Math.tanh(getNums()[0])); }
  function mathTrunc() { showResult("trunc: " + Math.trunc(getNums()[0])); }
  
  // --- Math constants ---
  function showConstants() {
    let constants = `
  E = ${Math.E}
  LN2 = ${Math.LN2}
  LN10 = ${Math.LN10}
  LOG2E = ${Math.LOG2E}
  LOG10E = ${Math.LOG10E}
  PI = ${Math.PI}
  SQRT1_2 = ${Math.SQRT1_2}
  SQRT2 = ${Math.SQRT2}
    `;
    showResult(constants);
  }
  