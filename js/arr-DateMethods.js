//In date method we have to make object to work with date operations.

//to make date object we can do like: var now = new Date();

//Different date methods : 

var now = new Date();
document.write(now);
document.write("<br><br>");

//toDateString()
//this will produce simple date string.

var now = new Date();
document.write(now.toDateString());
document.write("<br><br>");

//all date get methods
//getDate(), getMonth(),getFullYear(), getDay()

document.write(now.getDate());
document.write("<br>");
document.write(now.getMonth());
document.write("<br>");
document.write(now.getDay());
document.write("<br>");
document.write(now.getFullYear());
document.write("<br><br>");

//getHours(), getMinutes(), getSeconds(), getMiliseconds

document.write(now.getHours());
document.write("<br>");
document.write(now.getMinutes());
document.write("<br>");
document.write(now.getSeconds());
document.write("<br>");
document.write(now.getMiliseconds());
document.write("<br><br>");

//all date set methods
//setDate() setMonth() setYear() setHours() setMinutes() setSeconds() setMiliseconds()

var a = new Date();
a.setFullYear(2020);
document.write(a);
