var num1 = +prompt("Enter number 1");
var num2 = +prompt("Enter number 2");

var subtract = num1 - num2;

document.getElementById("result").innerText = "Subtract of " + num1 + " and " + num2 + " is " + subtract;
document.getElementById("result1").innerText = "Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2;
document.getElementById("result2").innerText = "Division of " + num1 + " and " + num2 + " is " + num1 / num2;
document.getElementById("result3").innerText = "Modulus of " + num1 + " and " + num2 + " is " + num1 % num2;

// you can also do the above code by the method given below

// document.write("Subtract of " + num1 + " and " + num2 + " is " + subtract);
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2);
// document.write("Division of " + num1 + " and " + num2 + " is " + num1 / num2);
// document.write("Modulus of " + num1 + " and " + num2 + " is " + num1 % num2);