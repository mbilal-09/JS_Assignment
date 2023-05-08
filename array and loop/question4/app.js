var tableNum = +prompt("Enter Table Number");
var length = +prompt("Enter Table Length");

for (let i = tableNum; i <= tableNum; i++) {
    for (let j = 1; j <= length; j++) {
        document.write(i + " x " + j + " = " + i * j + "<br>");
    }
}