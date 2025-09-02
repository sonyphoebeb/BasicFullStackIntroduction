
// Raw String
function rawStringMethod() {
    let str1 = String.raw`Hello\nSony`;
    let str2 = String.raw`Hi\tSony`;
    document.getElementById("rawResult").innerHTML = str1 + "<br>" + str2;
}

// FromCodePoint
function fromCodePointStringMethod(inputUnicode) {
    try{
        let inputNum = String.fromCodePoint(inputUnicode);
        document.getElementById("unicodeResult").innerHTML = inputNum;
    }catch(e){
        document.getElementById("unicodeResult").innerHTML = "U have entered invalid unicode";
    }
   
}

// Escape
function escapeStringMethod(inputString) {
    let escapeResultString = escape(inputString);
    document.getElementById("escapeResult").innerHTML = escapeResultString;
}

// Unescape
function unEscapeStringMethod(inputString) {
    let unEscapeResultString = unescape(inputString);
    document.getElementById("escapeResult").innerHTML = unEscapeResultString;
}

// Eval
function evalStringMethod(inputStr) {
    try{
        let evalResultString = eval(inputStr);
        document.getElementById("evalResult").innerHTML = evalResultString;
    }catch(e){
        document.getElementById("evalResult").innerHTML = "Invalid expression!";
    }
    
}
