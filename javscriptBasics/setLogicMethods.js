// Define two sets
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 4, 5, 6]);

// Display sets
window.onload = function () {
  document.getElementById("setA").textContent = [...setA].join(", ");
  document.getElementById("setB").textContent = [...setB].join(", ");
};

// union()
function showUnion() {
  let result = setA.union(setB);
  document.getElementById("result").textContent = "Union: " + [...result].join(", ");
}

// difference()
function showDifference() {
  let result = setA.difference(setB);
  document.getElementById("result").textContent = "Difference (A - B): " + [...result].join(", ");
}

// intersection()
function showIntersection() {
  let result = setA.intersection(setB);
  document.getElementById("result").textContent = "Intersection: " + [...result].join(", ");
}

// isDisjointFrom()
function showIsDisjoint() {
  let result = setA.isDisjointFrom(setB);
  document.getElementById("result").textContent = "Is Disjoint? " + result;
}

// isSubsetOf()
function showIsSubset() {
  let result = setA.isSubsetOf(setB);
  document.getElementById("result").textContent = "Is A subset of B? " + result;
}

// isSupersetOf()
function showIsSuperset() {
  let result = setA.isSupersetOf(setB);
  document.getElementById("result").textContent = "Is A superset of B? " + result;
}

// symmetricDifference()
function showSymDiff() {
  let result = setA.symmetricDifference(setB);
  document.getElementById("result").textContent = "Symmetric Difference: " + [...result].join(", ");
}
