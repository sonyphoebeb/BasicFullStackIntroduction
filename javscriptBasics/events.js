// onclick
function displayDate() {
    document.getElementById("pclick").innerHTML = Date();
}

// ondblclick
function showMyName() {
    document.getElementById("pdblclick").innerHTML="Hello, My name is Sony!";
}

// onmouseover & onmouseout
function hoverIn() {
    alert("You mouseovered");
}
function hoverOut() {
    document.getElementById("pMouseout").innerHTML="Hello";
}

// onkeydown & onkeyup
function keyUp(event) {
    document.getElementById("keyEvent").innerHTML = "Key Up: " + event.key;
}
function keyDown(event) {
    document.getElementById("keyEvent").innerHTML = "Key Down: " + event.key;
}

// onchange
function showChange() {
    let techStack = document.getElementById("technologies").value;
    document.getElementById("ptechStack").innerHTML = "You selected: " + techStack;
}

// onfocus & onblur
function focusIn() {
    document.getElementById("myInput").style.background = "lightgreen";
}
function focusOut() {
    document.getElementById("myInput").style.background = "lightblue";
}

// oninput
function showInput() {
    let myValue = document.getElementById("myOnInput").value;
    document.getElementById("pInput").innerHTML = myValue;
}

// onsubmit
function handleSubmit() {
    alert("Form Submitted!");
    return false; // prevent page reload
}

// onload
window.onload = function() {
    alert("✅ Page Loaded Successfully!");
}

// onresize
window.onresize = function() {
    console.log("🔄 Browser window resized!");
}
