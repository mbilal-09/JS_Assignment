var totalMarks = 850;
var studentMarks = 800;
var percentage = Math.round((studentMarks * 100) / totalMarks);

document.write("Total marks: " + totalMarks);
document.write("<br> Student marks: " + studentMarks);
document.write("<br> Percentage " + percentage + "%");

document.getElementById("result").innerText = "Total marks: " + totalMarks;
document.getElementById("result1").innerText = "Student marks: " + studentMarks;
document.getElementById("result2").innerText = "Percentage " + percentage + "%";

// you can also do the above code by the method given below

// document.write("Total marks: " + totalMarks);
// document.write("<br> Student marks: " + studentMarks);
// document.write("<br> Percentage " + percentage + "%");