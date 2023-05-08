var greeting;
var hour = 13;

if (hour < 18) {
greeting = "Good day";
} else {
greeting = "Good evening";
}

document.getElementById("result").innerText = greeting;