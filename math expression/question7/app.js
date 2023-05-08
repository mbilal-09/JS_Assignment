var item1Price = 750;
var item1Quantity = 4;
var item2Price = 550;
var item2Quantity = 9;
var shippingCharges = 150;

var total = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

document.getElementById("result").innerText = "Price of item 1 is " + item1Price;
document.getElementById("result1").innerText = "Quantity of item 1 is " + item1Quantity;
document.getElementById("result2").innerText = "Price of item 2 is " + item2Price;
document.getElementById("result3").innerText = "Quantity of item 2 is " + item2Quantity;
document.getElementById("result4").innerText = "Shipping charges " + shippingCharges;
document.getElementById("result5").innerText = "Total cost of your order is " + total;

// you can also do the above code by the method given below

// document.write("Price of item 1 is " + item1Price);
// document.write("Quantity of item 1 is " + item1Quantity);
// document.write("Price of item 2 is " + item2Price);
// document.write("Quantity of item 2 is " + item2Quantity);
// document.write("Shipping charges " + shippingCharges);
// document.write("Total cost of your order is " + total);