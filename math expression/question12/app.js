var radius = 25;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * (radius * radius);

document.getElementById("result").innerText = "Radius of a circle: " + radius;
document.getElementById("result1").innerText = "The circumferernce is: " + circumference;
document.getElementById("result2").innerText = "The area is: " + area;

// you can also do the above code by the method given below

// document.write("Radius of a circle: " + radius);
// document.write("<br> The circumferernce is: " + circumference);
// document.write("<br> The area is: " + area);