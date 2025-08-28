// 1. Using Quotes
function usingQuotes() {
    let str1 = "Hello There!";      // double quotes
    let str2 = 'JavaScript Rocks'; // single quotes
    document.getElementById("pQuotes").innerHTML = str1 + "<br>" + str2;
  }
  
  // 2. Template Strings
  function templateStrings() {
    let name = "Sony";
    let course = "JavaScript";
    let message = `Hello ${name}, welcome to ${course}!`; // template string
    document.getElementById("pTemplate").innerHTML = message;
  }
  
  // 3. String Length
  function stringLength() {
    let text = "JavaScript";
    document.getElementById("pLength").innerHTML = 
      "Length of '" + text + "' is: " + text.length;
  }
  
  // 4. Escape Characters
  function escapeCharacters() {
    let text = "Hello World!\nWelcome to JavaScript.";
    document.getElementById("pEscape").innerHTML = text;
  }
  
  // 5. Strings as Objects
  function stringObjects() {
    let str1 = "Hello";               // primitive string
    let str2 = new String("Hello");   // string object
    document.getElementById("pObjects").innerHTML = 
      "Type of str1: " + (typeof str1) + "<br>" +
      "Type of str2: " + (typeof str2);
  }
  
  // 6. == vs ===
  function compareStrings() {
    let x = "Hello";
    let y = new String("Hello");
  
    let result1 = (x == y);   // true, values are same
    let result2 = (x === y);  // false, types are different
  
    document.getElementById("pCompare").innerHTML = 
      "x == y : " + result1 + "<br>" +
      "x === y : " + result2;
  }
  