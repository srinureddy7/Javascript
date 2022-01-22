//parentElement
//This will help to show the parent element.

// var a = document.getElementById("inner").parentElement;
//console.log(a);

//This will show the parent of body element.
// var b = document.body.parentElement;
// console.log(b)

// //we can also make styling with the help of parentElement
// document.getElementById("inner").parentElement.style.background="red";

//parentNode
//there is not much difference in between parentElement and parentNode
//small difference is, if there is no parent then parentElement will return null & parentNode will return some values.

// document.getElementById("child-C").parentNode.style.background="blue";
// var a = document.getElementById("child-C").parentNode;

//parentNode will return some value :
// var a = document.getElementById("main").parentNode; //it will return some value i.e #document
// var b = document.getElementById("main").parentElement; //it will return null
// console.log(a);
// console.log(b);

//Children and childNodes : 

// var a = document.getElementById("outer").children; //this will return the children elements. 
// console.log(a);

//we can also specify which children we want to target : 

//var a = document.getElementById("inner").children[1]; 
//console.log(a);

//here also we can style the property : 
// document.getElementById("inner").children[1].style.background="green";
// var a = document.getElementById("inner").children[1]; 
// console.log(a);

// document.getElementById("inner").childNodes[1].style.background="green";
// var a = document.getElementById("inner").childNodes[1]; 
// console.log(a);
//difference between child and childNodes is childNodes returns the texts also.

//firstChild && lastChild methods : 
//firstChild , firstElementChild, lastChild, lastElementChild

// var a = document.getElementById("inner").firstElementChild.innerHTML;
// console.log(a);

// document.getElementById("inner").firstElementChild.style.background = "red";

//document.getElementById("outer").firstElementChild.style.background = "red";

// document.getElementById("inner").lastElementChild.style.background = "red";

//to see the first child of the inner division : 
// var a = document.getElementById("inner").firstChild;
// console.log(a);

//nextElementSibling , nextSibling , previousElementSibling , previousSibling

// var a = document.getElementById("child-C").nextElementSibling; //it will show the next sibling of the element.
// console.log(a);

// var a = document.getElementById("child-C").previousElementSibling.innerHTML; //it will show the previous sibling of the element.
// console.log(a);
//we can also make style using this methods.


//createElement && createTextNode :
//create methods in javascripts are basically : 

//1. createElement, 2. createTextNode, 3. createComment