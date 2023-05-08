var deserts = ["cake", "apple pie", "cookie", "chips", "patties"];

var order = prompt("Welcome to ABC Bakery. What do you want to order sir/maam").toLocaleLowerCase();
var yes = true;

for (let i = 0; i < deserts.length; i++) {
    if (deserts[i] == order) {
        alert(deserts[i] + " is available at index " + i + " in our bakery");
        yes = false;
    }
}

if (yes) {
    alert("We are sorry " + order + " is not available in our bakery")
}

// varinteger = +prompt("Enter any positive integer");

// document.getElementById("result").innerText = "Number : " + integer;

// document.getElementById("result1").innerText = "Round off value : " + Math.round(integer);
// document.getElementById("result2").innerText = "Floor value : " + Math.floor(integer);
// document.getElementById("result3").innerText = "Ceil value : " + Math.ceil(integer);