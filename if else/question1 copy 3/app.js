var character = prompt("Enter a character");

if (character.length == 1){
    if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
        document.getElementById("result").innerText = "True";       
    } else {
        document.getElementById("result").innerText = "False";
    }
} else {
    alert("Please enter only one character")
}