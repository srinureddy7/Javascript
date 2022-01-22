//replaceChild && removeChild
//if we want to remove or replace any node by Javascript then these methods comes in handy.

// var newElement = document.createElement("li");
// var newText = document.createTextNode("New Element ");

// newElement.appendChild(newText);

// var target = document.getElementById("list");
// var oldElement = target.children[2];
// //here this index number specifies which value should be replaced.

//console.log(oldElement);
// target.replaceChild(newElement,oldElement);
//here new element will be replaced in the place of old element.

//----------------removeChild---------------

var target = document.getElementById("list");
var oldElement = target.children[2];
target.removeChild(oldElement);
//here the respective element will be removed from that place.
