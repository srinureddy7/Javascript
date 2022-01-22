//createElement and createTextNode 
//these methods helps to create new elements and texts in js.

//to create a new paragraph element : 
// var newElement = document.createElement("p");//it will show the paragraph created.
// console.log(a);

// var newElement = document.createElement("h2");//it will show the heading created.
// var newText = document.createTextNode("Hey there keep rocking.");
// var newComment = document.createComment("this is comment");
// console.log(newElement);
// console.log(newText);
// console.log(newComment);


//DOM Append Methods : 
//basic append methods in Js : appendChild && insertBefore 
//we will append 2 variables : 

// var newElement = document.createElement("h2");//it will show the heading created.
// var newText = document.createTextNode("Hey there keep rocking.");
// newElement.appendChild(newText);
// console.log(newElement);

//to show the append text in document : 
//appended text shows always at bottom of the document.

// var newElement = document.createElement("h1");//it will show the heading created.
// var newText = document.createTextNode("Hey there keep rocking.");
// newElement.appendChild(newText);
// document.getElementById("test").appendChild(newElement);
// console.log(newElement);


//to display the text as per our need: 
// var newElement = document.createElement("h1");//it will show the heading created.
// var newText = document.createTextNode("Hey there keep rocking.");
// newElement.appendChild(newText);
// var target = document.getElementById("test");
// target.insertBefore(newElement,target.childNodes[0]);
// console.log(newElement);


//insertAdjacent Methods : 
//insertAdjacentElement, insertAdjacentHTML, insertAdjacentText : 
//these methods not only appends also creates.
//so no need to create and append separately, everything we can do at once in this method.

//insertAdjacentElement creats an element & appends as well.
//insertAdjacent positions : beforebegin, afterbegin, beforeend, afterend

// var newElement = document.createElement("h1");
// var newText = document.createTextNode("Hey there keep rocking.");
// newElement.appendChild(newText);
// var target = document.getElementById("test");
// target.insertAdjacentElement("beforebegin",newElement);


//without using previous long lengthy code.
var target = document.getElementById("test");
var newElement = "<h1>Hey this is a message.</h1>";
target.insertAdjacentHTML("beforeend",newElement);



