var integer = +prompt("Enter any nagetive integer");

document.getElementById("result").innerText = "Number : " + integer;

document.getElementById("result1").innerText = "Round off value : " + Math.round(integer);
document.getElementById("result2").innerText = "Floor value : " + Math.floor(integer);
document.getElementById("result3").innerText = "Ceil value : " + Math.ceil(integer);