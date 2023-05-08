var celsius = 30;
var CToF = (celsius * 9/5) + 32;

var fahrenheit = 95;
var FToC = (fahrenheit - 32) * 5/9;


document.getElementById("result").innerText = celsius + " C is " + CToF + " F";
document.getElementById("result1").innerText = fahrenheit + " F is " + FToC + " C";

// you can also do the above code by the method given below

// document.write(celsius + " C is " + CToF + " F");
// document.write(fahrenheit + " F is " + FToC + " C");