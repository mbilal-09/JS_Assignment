var snacks = "cookies";
var currentAge = 18;
var estimatedAge = 50;
var snacksPerDay = 5;
var totalSnacksForLife = ((estimatedAge - currentAge) * 365.5) * snacksPerDay;

document.getElementById("result").innerText = "Favourite Snack: " + snacks;
document.getElementById("result1").innerText = "Current Age: " + currentAge;
document.getElementById("result2").innerText = "Estimated Age: " + estimatedAge;
document.getElementById("result3").innerText = "Amount of snacks per day: " + snacksPerDay;
document.getElementById("result4").innerText = "You will need " + totalSnacksForLife + " to last you until the ripe old age of " + estimatedAge;

// you can also do the above code by the method given below

// document.write("Favourite Snack: " + snacks);
// document.write("<br> Current Age: " + currentAge);
// document.write("<br> Estimated Age: " + estimatedAge);
// document.write("<br> Amount of snacks per day: " + snacksPerDay);
// document.write("<br> You will need " + totalSnacksForLife + " to last you until the ripe old age of " + estimatedAge);