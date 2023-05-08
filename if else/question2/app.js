var num1 = +prompt("Enter number 1");
var num2 = +prompt("Enter number 2");

if (num1 > num2) {
       document.getElementById("result").innerText = num1 + " is greater than " + num2;
} else if (num1 < num2) {
       document.getElementById("result").innerText = num1 + " is greater than " + num2;
} else {
       document.getElementById("result").innerText = num1 + " and " + num2 + " are both equal"
}
