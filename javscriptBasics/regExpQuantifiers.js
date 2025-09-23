function testRegex(pattern) {
    const input = document.getElementById("userInput").value;
    const regex = new RegExp(pattern);
    const result = regex.test(input);
  
    document.getElementById("result").innerHTML =
      `Pattern: <b>${pattern}</b><br>
       Input: "${input}"<br>
       Match Found? <span style="color:${result ? 'green' : 'red'}">${result}</span>`;
  }
  