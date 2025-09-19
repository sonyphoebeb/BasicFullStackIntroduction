const text = "Hello hello HELLO world 123";

// /g flag
function flagGlobal() {
  let result = text.match(/hello/g);
  document.getElementById("globalResult").innerHTML = result;
}

// /i flag
function flagIgnoreCase() {
  let result = text.match(/hello/i);
  document.getElementById("ignoreCaseResult").innerHTML = result;
}

// /m flag
function flagMultiline() {
  let multiText = "Hello\nHello\nHELLO";
  let regex = /^Hello/m;
  let result = multiText.match(regex);
  document.getElementById("multilineResult").innerHTML = result;
}

// match()
function useMatch() {
  let result = text.match(/Hello/g);
  document.getElementById("matchResult").innerHTML = result;
}

// matchAll()
function useMatchAll() {
  let result = [...text.matchAll(/hello/gi)];
  document.getElementById("matchAllResult").innerHTML =
    result.map(r => r[0]).join(", ");
}

// replace()
function useReplace() {
  let result = text.replace(/hello/gi, "Hi");
  document.getElementById("replaceResult").innerHTML = result;
}

// search()
function useSearch() {
  let result = text.search(/world/);
  document.getElementById("searchResult").innerHTML = result;
}

// split()
function useSplit() {
  let result = text.split(/\s+/);
  document.getElementById("splitResult").innerHTML = result.join(" | ");
}

// test()
function useTest() {
  let regex = /\d+/;
  let result = regex.test(text);
  document.getElementById("testResult").innerHTML = result;
}

// exec()
function useExec() {
  let regex = /\d+/;
  let result = regex.exec(text);
  document.getElementById("execResult").innerHTML = result[0];
}
