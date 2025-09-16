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
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("addResult").innerHTML = "⚠ Please enter numbers!";
        return;
    }

    document.getElementById("addResult").innerHTML =
        "Result: " + MathUtil.add(a, b);
}

function useMultiply() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("multiplyResult").innerHTML = "⚠ Please enter numbers!";
        return;
    }

    document.getElementById("multiplyResult").innerHTML =
        "Result: " + MathUtil.multiply(a, b);
}

function showPI() {
    document.getElementById("piResult").innerHTML =
        "Value of PI: " + MathUtil.PI;
}
