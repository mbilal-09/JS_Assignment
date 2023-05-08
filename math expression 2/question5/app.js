var subject1 = prompt("Enter Subject 1");
var subject1Marks = +prompt("Enter " + subject1 + " Marks");

var subject2 = prompt("Enter Subject 2");
var subject2Marks = +prompt("Enter " + subject2 + " Marks");

var subject3 = prompt("Enter Subject 3");
var subject3Marks = +prompt("Enter " + subject3 + " Marks");

var marks = 100;

var subject1Percentage = (subject1Marks * 100) / marks;
var subject2Percentage = (subject2Marks * 100) / marks;
var subject3Percentage = (subject3Marks * 100) / marks;

var totalMarks = 300;
var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (obtainedMarks * 100) / totalMarks

document.getElementById("subject1").innerText = subject1;
document.getElementById("subject1Marks").innerText = subject1Marks;
document.getElementById("subject1Percentage").innerText = subject1Percentage;

document.getElementById("subject2").innerText = subject2;
document.getElementById("subject2Marks").innerText = subject2Marks;
document.getElementById("subject2Percentage").innerText = subject2Percentage;

document.getElementById("subject3").innerText = subject3;
document.getElementById("subject3Marks").innerText = subject3Marks;
document.getElementById("subject3Percentage").innerText = subject3Percentage;

document.getElementById("totalMarks").innerText = totalMarks;
document.getElementById("obtainedMarks").innerText = obtainedMarks;
document.getElementById("totalPercentage").innerText = percentage;