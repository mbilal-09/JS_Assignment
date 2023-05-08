var userPassword = "user123";
var password = prompt("Enter your password");


if (password == userPassword) {
    alert("Correct! The password you entered matches the original password")
} else if (password == "") {
    alert("Please enter your password")
} else {
    alert("Incorrect password")
}