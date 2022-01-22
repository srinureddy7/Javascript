//contains
//It checks whether the element is there or not.

var parentElement = document.getElementById("test");
var target = document.getElementById("abc");

var find = parentElement.contains(target);
console.log(find);
//if there is any id named "abc" in the child class then it return true otherwise flase will be returned.


