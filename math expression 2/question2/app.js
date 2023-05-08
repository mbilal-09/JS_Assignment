var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

// document.write("a = " + a);
// document.write("<br> b = " + b);
// document.write("<br> result = " + result);

document.getElementById("result").innerText = "a = " + a;
document.getElementById("result1").innerText = "b = " + b;
document.getElementById("result2").innerText = "result = " + result;

// you can also do the above code by the method given below

// document.write("a = " + a);
// document.write("<br> b = " + b);
// document.write("<br> result = " + result);