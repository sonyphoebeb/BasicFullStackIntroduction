
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

// String Template Literal Method
function templateLiteralMethod(name) {
        let inputName = `Hi, ${name}!`;
        document.getElementById("literalResult").innerHTML = inputName; 
}

// Multi Line String Method
function multiLineString() {
    let inputMultiLineString = `This is line 1 
                                This is line 2 
                                This is line 3`;
    document.getElementById("multiLineResult").innerHTML = inputMultiLineString.replace(/\n/g, "<br>"); 
}

// New String Method
function stringNewStringMethods(input) {
    debugger;
    document.getElementById("resultNewString").innerHTML = new String(input);
}

// String String New String
function stringStringNewStringMethods(input) {
    document.getElementById("resultStringNew").innerHTML = new String(input).toUpperCase();
}

// String String String Literal
function stringStringStringLiteralStringMethods(input) {
    document.getElementById("resultTripleLiteral").innerHTML = `Hi, ${input}, triple literal!`;
}

// String String String Template
function stringStringStringTemplateStringMethods(input) {
    document.getElementById("resultTripleTemplate").innerHTML = `Template triple: ${input} ${input}`;
}

// String String String Escape
function stringStringStringEscapeStringMethods(input) {
    document.getElementById("resultTripleEscape").innerHTML = escape(input) + " (triple escape)";
}

// String String String Unescape
function stringStringStringUnescapeStringMethods(input) {
    document.getElementById("resultTripleUnescape").innerHTML = unescape(input) + " (triple unescape)";
}

// String String String Eval
function stringStringStringEvalStringMethods(input) {
    try {
        document.getElementById("resultTripleEval").innerHTML = eval(input);
    } catch {
        document.getElementById("resultTripleEval").innerHTML = "Invalid triple eval!";
    }
}
 // String String String New String
function stringStringStringNewStringMethods(input) {
    document.getElementById("resultTripleNewString").innerHTML = new String(input).toLowerCase();
}