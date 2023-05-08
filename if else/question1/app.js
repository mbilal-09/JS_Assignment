var character = 10;

if (typeof(character) == "number") {
    document.getElementById("result").innerText = "Given character is number";
} else if (typeof(character) == "string") {
    if (character == character.toLocaleUpperCase()) {
        document.getElementById("result").innerText = "Given character is uppercase alphabet";
    } else if (character == character.toLocaleLowerCase()) {
        document.getElementById("result").innerText = "Given character is lowercase alphabet";
    } else {
        document.getElementById("result").innerText = "Oops! something wrong";
    }
} else {
    document.getElementById("result").innerText = "Oops! something wrong";
}