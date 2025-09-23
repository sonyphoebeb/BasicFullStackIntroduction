function testRegex(pattern, flag) {
    const input = document.getElementById("userInput").value;
    let regex;
    try {
      regex = new RegExp(pattern, flag);
    } catch (e) {
      document.getElementById("result").innerHTML = `❌ Invalid RegExp`;
      return;
    }
  
    let result = regex.exec(input);
    let matchFound = result ? JSON.stringify(result) : "No match";
  
    document.getElementById("result").innerHTML =
      `Pattern: /${pattern}/${flag}<br>
       Input: "${input}"<br>
       Match: <b>${matchFound}</b>`;
  
    document.getElementById("explanation").innerHTML = getExplanation(flag);
  }
  
  function getExplanation(flag) {
    switch (flag) {
      case "g": return "🔎 <b>/g</b> → Global search: Finds <i>all</i> matches instead of stopping at the first.";
      case "i": return "🔤 <b>/i</b> → Ignore case: Case-insensitive matching.";
      case "m": return "📄 <b>/m</b> → Multiline: ^ and $ match start/end of each line.";
      case "s": return "☑️ <b>/s</b> → DotAll: '.' matches newline characters too.";
      case "u": return "🌍 <b>/u</b> → Unicode support: Handles Unicode characters properly.";
      case "v": return "✨ <b>/v</b> → Unicode v: Upgrade of /u flag with better Unicode matching (2025).";
      case "y": return "📌 <b>/y</b> → Sticky search: Matches from lastIndex only.";
      case "d": return "📍 <b>/d</b> → Indices: Captures start & end positions of matches (2022).";
      default: return "ℹ️ Unknown flag.";
    }
  }
  