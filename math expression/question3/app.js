var num = 5;
document.getElementById("result").innerText = "Value after variable declaration is: " + num;

num = 20;
document.getElementById("result1").innerText = "Initial value: " + num;

num++;
document.getElementById("result2").innerText = "Value after increment is: " + num;

num += 7;
document.getElementById("result3").innerText = "Value after addition is: " + num;

num--;
document.getElementById("result4").innerText = "Value after decrement is: " + num;

num = num % 3;
document.getElementById("result5").innerText = "The remainder is : " + num;


// you can also do the above code by the method given below

// document.write("Value after variable declaration is: " + num);
// document.write("Initial value: " + num);
// document.write("<br> Value after increment is: " + num);
// document.write("Value after addition is: " + num);
// document.write("Value after decrement is: " + num);
// document.write("The remainder is : " + num);