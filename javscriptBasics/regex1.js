function testRegex() {
    let text = document.getElementById("textInput").value;
    let pattern = document.getElementById("patternInput").value;
  
    try {
      let regex = new RegExp(pattern, "g");
      let matches = text.match(regex);
  
      if (matches) {
        document.getElementById("result").innerHTML =
          `<b>✅ Matches found:</b> ${matches.join(", ")}`;
      } else {
        document.getElementById("result").innerHTML = "❌ No matches found.";
      }
    } catch (error) {
      document.getElementById("result").innerHTML = "⚠️ Invalid regex pattern.";
    }
  }
  
  function setPattern(pattern) {
    document.getElementById("patternInput").value = pattern;
  }
  