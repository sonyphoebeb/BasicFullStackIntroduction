// Collect sample text
function getText() {
  return document.getElementById("sampleInput").value;
}

// Collect flags dynamically from checkboxes
function getFlags() {
  let flags = "";
  if (document.getElementById("flagG").checked) flags += "g";
  if (document.getElementById("flagI").checked) flags += "i";
  if (document.getElementById("flagM").checked) flags += "m";
  if (document.getElementById("flagS").checked) flags += "s";
  if (document.getElementById("flagU").checked) flags += "u";
  if (document.getElementById("flagY").checked) flags += "y";
  return flags || "g"; // default global
}

// Helper to build RegExp
function buildRegex(inputId) {
  let pattern = document.getElementById(inputId).value;
  try {
    return new RegExp(pattern, getFlags());
  } catch {
    alert("Invalid regex: " + pattern);
    return null;
  }
}

// Methods
function useMatch() {
  let regex = buildRegex("matchPattern");
  if (!regex) return;
  let result = getText().match(regex);
  document.getElementById("matchResult").innerHTML = result || "No match";
}

function useMatchAll() {
  let regex = buildRegex("matchAllPattern");
  if (!regex) return;
  let result = [...getText().matchAll(regex)];
  document.getElementById("matchAllResult").innerHTML =
    result.length ? result.map(r => r[0]).join(", ") : "No match";
}

function useReplace() {
  let regex = buildRegex("replacePattern");
  if (!regex) return;
  let replacement = document.getElementById("replaceText").value || "***";
  let result = getText().replace(regex, replacement);
  document.getElementById("replaceResult").innerHTML = result;
}

function useSearch() {
  let regex = buildRegex("searchPattern");
  if (!regex) return;
  let result = getText().search(regex);
  document.getElementById("searchResult").innerHTML =
    result >= 0 ? `Found at index ${result}` : "Not found";
}

function useSplit() {
  let regex = buildRegex("splitPattern");
  if (!regex) return;
  let result = getText().split(regex);
  document.getElementById("splitResult").innerHTML = result.join(" | ");
}

function useTest() {
  let regex = buildRegex("testPattern");
  if (!regex) return;
  let result = regex.test(getText());
  document.getElementById("testResult").innerHTML = result;
}

function useExec() {
  let regex = buildRegex("execPattern");
  if (!regex) return;
  let result = regex.exec(getText());
  document.getElementById("execResult").innerHTML =
    result ? JSON.stringify(result) : "No match";
}
