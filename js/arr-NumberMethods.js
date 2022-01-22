//number() function in js
//number function will make the string into number

var a = "10";
var b = Number(a);
document.write(b+10);
document.write("<br><br>");

//parseInt() and parseFloat() in js
//this also modifies into respective format.

var c = "12.5";
var d = "20";
var e = parseInt(c);
var f = parseFloat(d);
document.write(e);
document.write("<br>");
document.write(f);
document.write("<br><br>");

//isFinite() and isInteger()
//isFinite() checks the number whether it's finite or not
//isInteger() checks the number whether it's integer or not.
/*
var g = 100;
var h = "frog";
var i = isFinite(g);
var j = isInteger(h);
document.write(i);
document.write("<br>");
document.write(j);
*/
//toFixed() and toPrecesion() in js
//this helps to fix the value upto the given parameter.

/*
var k = 5.56789;
var l = k.toFixed(3);
var m = k.toPrecesion(2);
document.write(l);
*/

var k = 5.56789;
var m = k.toPrecesion(2);
document.write(m);