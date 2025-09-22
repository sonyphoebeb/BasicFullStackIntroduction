function loadSample() {
    let select = document.getElementById("patternSelect");
    let sample = select.options[select.selectedIndex].getAttribute("data-sample");
    document.getElementById("userInput").value = sample;
    document.getElementById("sampleText").innerHTML = "💡 Suggested Sample: " + sample;
}

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

// Load first sample on page load
window.onload = loadSample;
