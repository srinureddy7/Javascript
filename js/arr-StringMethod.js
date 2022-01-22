//string length
var str = "Hey There Hello Everyone";
var a = str.length;
document.write(a);
document.write("<br><br>");


//lowercase and uppercase
//toLowerCase() and toUpperCase()

var str = "Hey There Hello Everyone";
var b = str.toLowerCase();
document.write(b);
document.write("<br><br>");

var c = str.toUpperCase();
document.write(c);
document.write("<br><br>");

//includes() function

var str = "Hey There Hello Everyone";
var d = str.includes("Hello");
document.write(d);
document.write("<br><br>");

//startsWith() && endsWith()

var str = "Hey There Hello Everyone";
var e = str.startsWith("Hey");
document.write(e);
document.write("<br><br>");

var str = "Hey There Hello Everyone";
var e = str.endsWith("Everyone");
document.write(e);
document.write("<br><br>");

//search() function in string

var str = "Hey There Hello Everyone";
var f = str.search("Everyone");
document.write(f);
document.write("<br><br>");

//match() function in string
//match function finds the element and makes an array.
//here g for globally it's advance javascript concept.

var str = "Hey There is Hello Everyone is";
var h = str.match(/is/g);
document.write(h);
document.write("<br><br>");

//indexOf() && lastIndexOf() in String

var str = "Hey There Hello Everyone";
var i = str.indexOf("Hello");
var j =lastIndexOf();
document.write(j)
document.write(i);
document.write("<br><br>");

//practice

document.write("<br><br>");
function sum(a,b){
    document.write(a+b);
}
sum(10,20);

document.write("<br><br>");

//replace() function in string
//this is used to replace the value in a particular place.

var l = "Hello there Hello People Hello";
var k = l.replace("Ram","Hello");
document.write(k);


