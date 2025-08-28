function normalCompare(a, b) {
    const result = document.getElementById("result");
    if (a == b) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function strictCompare(a, b) {
    const result = document.getElementById("result");
    if (a === b) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function notEqualCompare(a, b) {
    const result = document.getElementById("result");
    if (a != b) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function strictNotEqualCompare(a, b) {
    const result = document.getElementById("result");
    if (a !== b) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function greaterCompare(a, b) {
    const result = document.getElementById("result");
    if (Number(a) > Number(b)) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function lessCompare(a, b) {
    const result = document.getElementById("result");
    if (Number(a) < Number(b)) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function greaterEqualCompare(a, b) {
    const result = document.getElementById("result");
    if (Number(a) >= Number(b)) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}

function lessEqualCompare(a, b) {
    const result = document.getElementById("result");
    if (Number(a) <= Number(b)) {
        result.textContent = "true";
    } else {
        result.textContent = "false";
    }
}
