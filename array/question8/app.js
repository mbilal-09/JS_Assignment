var studentsName = ["Talha", "Hasnain", "Ahmed"];
var scores = [350, 450, 400];
var percentage = [70, 90, 80];

document.getElementById("result").innerText = "Score of " + studentsName[0] + " is " + scores[0] + ". Percentage: " + percentage[0] + "%";
document.getElementById("result1").innerText = "Score of " + studentsName[1] + " is " + scores[1] + ". Percentage: " + percentage[1] + "%";
document.getElementById("result2").innerText = "Score of " + studentsName[2] + " is " + scores[2] + ". Percentage: " + percentage[2] + "%";

// you can also do the above code by the method given below

// document.write("Score of " + studentsName[0] + " is " + scores[0] + ". Percentage: " + percentage[0] + "% <br>");
// document.write("Score of " + studentsName[1] + " is " + scores[1] + ". Percentage: " + percentage[1] + "% <br>");
// document.write("Score of " + studentsName[2] + " is " + scores[2] + ". Percentage: " + percentage[2] + "%");