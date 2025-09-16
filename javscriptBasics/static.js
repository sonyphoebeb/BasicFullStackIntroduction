class MathUtil {
    static PI = 3.14159;
  
    static add(a, b) {
      return a + b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  }
  
  // Functions for buttons
  function useAdd() {
    document.getElementById("addResult").innerHTML = 
      "Result: " + MathUtil.add(10, 5);
  }
  
  function useMultiply() {
    document.getElementById("multiplyResult").innerHTML = 
      "Result: " + MathUtil.multiply(7, 3);
  }
  
  function showPI() {
    document.getElementById("piResult").innerHTML = 
      "Value of PI: " + MathUtil.PI;
  }
  