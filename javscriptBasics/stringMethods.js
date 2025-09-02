
// Raw String
function rawStringMethod() {
    let str1 = String.raw`Hello\nSony`;
    let str2 = String.raw`Hi\tSony`;
    document.getElementById("rawResult").innerHTML = str1 + "<br>" + str2;
}
