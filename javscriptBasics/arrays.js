// Initial array
let techStack  = ["HTML", "CSS", "JavaScript", "React"];
document.getElementById("myArray").textContent = techStack ;

// Basic
function showArray() {
  document.getElementById("result").textContent = techStack ;
}

function arrayLength() {
  document.getElementById("result").textContent = "Length: " + techStack .length;
}

function getFirst() {
  document.getElementById("result").textContent = "First: " + techStack [0];
}

function getLast() {
  document.getElementById("result").textContent = "Last: " + techStack [techStack .length - 1];
}

// Modify
function addItem() {
  let item = document.getElementById("newItem").value;
  if (item) techStack .push(item);
  document.getElementById("myArray").textContent = techStack ;
}

function removeItem() {
    techStack .pop();
  document.getElementById("myArray").textContent = techStack ;
}

function shiftItem() {
    techStack .shift();
  document.getElementById("myArray").textContent = techStack ;
}

function unshiftItem() {
  let item = document.getElementById("newItem").value;
  if (item) techStack .unshift(item);
  document.getElementById("myArray").textContent = techStack ;
}

// Methods
function joinItems() {
  document.getElementById("result").textContent = techStack .join(" - ");
}

function toStringItems() {
  document.getElementById("result").textContent = techStack .toString();
}

function sortItems() {
    techStack .sort();
  document.getElementById("myArray").textContent = techStack ;
}

function reverseItems() {
    techStack .reverse();
  document.getElementById("myArray").textContent = techStack ;
}

// Loops
function forLoop() {
  let text = "";
  for (let i = 0; i < techStack .length; i++) {
    text += techStack [i] + " ";
  }
  document.getElementById("result").textContent = text;
}

function forEachLoop() {
  let text = "";
  techStack .forEach(function(item) {
    text += item + " ";
  });
  document.getElementById("result").textContent = text;
}
 