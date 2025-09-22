function testRegex() {
    let input = document.getElementById("userInput").value;
    let pattern = document.getElementById("patternSelect").value;
  
    try {
      let regex = new RegExp(pattern, "g"); // global search
      let matches = input.match(regex);
  
      if (matches) {
        document.getElementById("result").innerHTML =
          "✅ Match Found: " + matches.join(", ");
      } else {
        document.getElementById("result").innerHTML = "❌ No Match Found";
      }
    } catch (error) {
      document.getElementById("result").innerHTML = "⚠️ Invalid Regex Pattern";
    }
  }
  