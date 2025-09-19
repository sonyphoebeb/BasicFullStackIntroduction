// Helper: get user input
function getText() {
  return document.getElementById("sampleInput").value;
}

// /g flag
function flagGlobal() {
  let result = getText().match(/hello/g);
  document.getElementById("globalResult").innerHTML = result || "No match";
}

// /i flag
function flagIgnoreCase() {
  let result = getText().match(/hello/i);
  document.getElementById("ignoreCaseResult").innerHTML = result || "No match";
}

// /m flag
function flagMultiline() {
  let regex = /^Hello/m;
  let result = getText().match(regex);
  document.getElementById("multilineResult").innerHTML = result || "No match";
}

// match()
function useMatch() {
  let result = getText().match(/Hello/g);
  document.getElementById("matchResult").innerHTML = result || "No match";
}

// matchAll()
function useMatchAll() {
  let result = [...getText().matchAll(/hello/gi)];
  document.getElementById("matchAllResult").innerHTML =
    result.length ? result.map(r => r[0]).join(", ") : "No match";
}

// replace()
function useReplace() {
  let result = getText().replace(/hello/gi, "Hi");
  document.getElementById("replaceResult").innerHTML = result;
}

// search()
function useSearch() {
  let result = getText().search(/world/);
  document.getElementById("searchResult").innerHTML =
    result >= 0 ? `Found at index ${result}` : "Not found";
}

// split()
function useSplit() {
  let result = getText().split(/\s+/);
  document.getElementById("splitResult").innerHTML = result.join(" | ");
}

// test()
function useTest() {
  let regex = /\d+/;
  let result = regex.test(getText());
  document.getElementById("testResult").innerHTML = result;
}

// exec()
function useExec() {
  let regex = /\d+/;
  let result = regex.exec(getText());
  document.getElementById("execResult").innerHTML =
    result ? result[0] : "No match";
}
