// 🔹 Utility class with static methods (all have params)
class MathUtil {
    static PI = 3.14159;

    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static divide(a, b) {
        if (b === 0) return "⚠ Cannot divide by zero!";
        return a / b;
    }
}

// 🔹 Helper: get input values
function getInputs() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    return { a, b };
}

// 🔹 Functions for UI buttons
function useAdd() {
    let { a, b } = getInputs();
    document.getElementById("addResult").innerHTML = "Result: " + MathUtil.add(a, b);
}

function useMultiply() {
    let { a, b } = getInputs();
    document.getElementById("multiplyResult").innerHTML = "Result: " + MathUtil.multiply(a, b);
}

function useSubtract() {
    let { a, b } = getInputs();
    document.getElementById("subtractResult").innerHTML = "Result: " + MathUtil.subtract(a, b);
}

function useDivide() {
    let { a, b } = getInputs();
    document.getElementById("divideResult").innerHTML = "Result: " + MathUtil.divide(a, b);
}

function showPI() {
    document.getElementById("piResult").innerHTML = "Value of PI: " + MathUtil.PI;
}
