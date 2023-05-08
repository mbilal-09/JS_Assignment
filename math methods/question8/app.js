var num = Math.floor(Math.random() * 10);
var userInput = +prompt("Write a number between 1 and 10");

if (num == userInput) {
    document.getElementById("result").innerText = "Congratulations! you win"; 
} else {
    document.getElementById("result").innerText = "Try again! Good luck for the next time";
}