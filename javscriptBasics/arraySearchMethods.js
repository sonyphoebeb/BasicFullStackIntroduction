
//sample array
let socialMedia = ["Whatsapp", "Facebook", 'X', "Instagram", "Snapchat", "Pintrest", "Facebook"];
document.getElementById("showArrayResult").innerHTML = socialMedia;

//fun to return the index of an element
function arrayIndexOf() {
    document.getElementById("indexOfResult").innerHTML = socialMedia.indexOf("Whatsapp");
}

//fun to return the index of last element
function arrayLastIndexOf() {
    document.getElementById("lastIndexOfResult").innerHTML = socialMedia.lastIndexOf("Facebook");
}

//fun returns the T/F whether an element includes or not
function arrayIncludes() {
    document.getElementById("includesResult").innerHTML = socialMedia.includes("Snapchat");
}

//fun returns the starting num based on the fun condition
function arrayfind() {

    let numbers = [10, 50, 118, 69, 36, 45];
    document.getElementById("currentArray").innerHTML = "Current Array: " + numbers;

    function myFunction(value, index, array){
           return value > 50;
    }
    
    document.getElementById("findResult").innerHTML = numbers.find(myFunction);
}