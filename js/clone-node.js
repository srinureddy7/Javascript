//cloneNode
//it helps to make clone of the nodes.

// var target = document.getElementById("list1").children[0];
// var copyElement = target.cloneNode(false);
// console.log(copyElement);
//if we give the false as an argument then it only display the elements not value.


// var target = document.getElementById("list1").children[0];
// var copyElement = target.cloneNode(true);
// console.log(copyElement);
//here it will display elements along with value in it.


var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);
console.log(copyElement);
document.getElementById("list2").appendChild(copyElement);
//here the copied element appended in another list.