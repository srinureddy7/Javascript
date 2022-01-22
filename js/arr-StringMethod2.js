//replace() function in string
//this will replace the item on a given place of string.

var l = "Hello there Hello People Hello";
var k = l.replace("Hello","Ram");
document.write(k);

//by using "g" globally we can replace all the element.

document.write("<br><br>");
var a = "Hello there Hello People Hello";
var b = a.replace(/Hello/g,"Ram");
document.write(b);

//trim() function in javascript
//this is used to remove spaces from string before and after

document.write("<br><br>");
var c = "                 Srinu                  ";
var d = c.trim();
//alert(d);

//charAt() function in javascript
//it helps to find the character in the place of particular index.

var e = "Hello there Hello People Hello";
var f=e.charAt(4);
document.write(f);
document.write("<br><br>");

//charCodeAt() function in javascript.
//displays the unicode of the character at particular index.

var g = "Hello there Hello People Hello";
var h=e.charCodeAt(4);
document.write(h);
document.write("<br><br>");

//fromCharCode() function in javascript
//this will display the value of character 

var i = String.fromCharCode(65);
document.write(i);
document.write("<br><br>");

//concat() function in string
//it helps to concatinate two strings.

var j = "Hello Mister";
var l = j.concat("Welcome here")
document.write("<br>"+l);
document.write("<br><br>");

//split() function in string
//split will divide a string and makes every character into an array.

var k ="Hello";
var m = k.split("l");
document.write(m);
document.write("<br><br>");

//repeat() function in javascript
//it helps to repeat the string as per the parameter.

var n ="Hello";
var o = n.repeat(3);
document.write(o);
document.write("<br><br>");

//slice() function in string
//it is same like array slice function it helps to pick one string from group of strings in an array.

var p = 'hello there is no pen';
var q = p.slice(3,8);
document.write(q);
document.write("<br><br>");

//substr() function in string
//it is also works like a slice

var r = 'hello there is no pen';
var s = r.substr(3,8);
document.write(s);
document.write("<br><br>");

//substring() function in string
//it is also work like a slice function 

var t = 'hello there is no pen';
var u = t.substring(1,4);
document.write(u);
document.write("<br><br>");

//toString() function makes a value into string

var v = 12334;
var w = v.toString();
document.write(w);
document.write("<br><br>");

//valueOf() function in string
 var x = "srinu is my name";
 var y = x.valueOf();
 document.write(y);
 


