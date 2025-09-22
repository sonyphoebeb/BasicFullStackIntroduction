function testRegex() {
    const select = document.getElementById("regexSelect");
    const pattern = select.value;
    const inputText = document.getElementById("testInput").value;

    try {
        const regex = new RegExp(pattern, "g");
        const matches = inputText.match(regex);

        if (matches) {
            document.getElementById("output").innerHTML =
                `<p class="match">✅ Matches Found: ${matches.join(", ")}</p>`;
        } else {
            document.getElementById("output").innerHTML =
                `<p class="no-match">❌ No Match Found</p>`;
        }
    } catch (err) {
        document.getElementById("output").innerHTML =
            `<p class="no-match">⚠️ Invalid Regex: ${err.message}</p>`;
    }
}

function fillSample() {
    const select = document.getElementById("regexSelect");
    const sample = select.options[select.selectedIndex].getAttribute("data-sample");
    document.getElementById("testInput").value = sample;
}
