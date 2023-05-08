var num = +prompt("Enter a number");

if (num > 0) {
    document.getElementById("result").innerText = num + " is positive";
} else if (num < 0) {
    document.getElementById("result").innerText = num + " is negative";
} else {
    document.getElementById("result").innerText = num + " is zero";
}
