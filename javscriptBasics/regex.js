// Helpers
function getText() {
  return document.getElementById("sampleInput").value;
}

function getPattern(flags = "g") {
  let pattern = document.getElementById("patternInput").value;
  try {
    return new RegExp(pattern, flags);
  } catch (e) {
    alert("Invalid regex pattern!");
    return null;
  }
}

// Flags
function flagGlobal() {
  let regex = getPattern("g");
  if (!regex) return;
  let result = getText().match(regex);
  document.getElementById("globalResult").innerHTML = result || "No match";
}

function flagIgnoreCase() {
  let regex = getPattern("i");
  if (!regex) return;
  let result = getText().match(regex);
  document.getElementById("ignoreCaseResult").innerHTML = result || "No match";
}

function flagMultiline() {
  let regex = getPattern("m");
  if (!regex) return;
  let result = getText().match(regex);
  document.getElementById("multilineResult").innerHTML = result || "No match";
}

// Methods
function useMatch() {
  let regex = getPattern("g");
  if (!regex) return;
  let result = getText().match(regex);
  document.getElementById("matchResult").innerHTML = result || "No match";
}

function useMatchAll() {
  let regex = getPattern("gi");
  if (!regex) return;
  let result = [...getText().matchAll(regex)];
  document.getElementById("matchAllResult").innerHTML =
    result.length ? result.map(r => r[0]).join(", ") : "No match";
}

function useReplace() {
  let regex = getPattern("gi");
  if (!regex) return;
  let replacement = document.getElementById("replaceInput").value || "***";
  let result = getText().replace(regex, replacement);
  document.getElementById("replaceResult").innerHTML = result;
}

function useSearch() {
  let regex = getPattern();
  if (!regex) return;
  let result = getText().search(regex);
  document.getElementById("searchResult").innerHTML =
    result >= 0 ? `Found at index ${result}` : "Not found";
}

function useSplit() {
  let regex = getPattern();
  if (!regex) return;
  let result = getText().split(regex);
  document.getElementById("splitResult").innerHTML = result.join(" | ");
}

function useTest() {
  let regex = getPattern();
  if (!regex) return;
  let result = regex.test(getText());
  document.getElementById("testResult").innerHTML = result;
}

function useExec() {
  let regex = getPattern();
  if (!regex) return;
  let result = regex.exec(getText());
  document.getElementById("execResult").innerHTML =
    result ? result[0] : "No match";
}
