var colors = ["yellow", "green"];
document.getElementById("result").innerText = colors;

var startColor = prompt("Which color do you want to add to the beginning of array");
colors.unshift(startColor);
document.getElementById("result1").innerText = colors;

var endColor = prompt("Which color do you want to add to the end of array");
colors.push(endColor);
document.getElementById("result2").innerText = colors;

colors.unshift("red", "purple");
document.getElementById("result3").innerText = colors;

colors.shift();
document.getElementById("result4").innerText = colors;

colors.pop()
document.getElementById("result5").innerText = colors;

var addColorIndex = prompt("At which index you want to display a color");
var addColorName = prompt("Which color you want to display at " + addColorIndex);
colors.splice(addColorIndex, 0, addColorName);
document.getElementById("result6").innerText = colors;

var deleteIndex = +prompt("At which index you want to delete color(s)");
var deleteNumber = +prompt("How many colors you want to delete");
colors.splice(deleteIndex, deleteNumber);
document.getElementById("result7").innerText = colors;