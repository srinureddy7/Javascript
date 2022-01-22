//classList() methods
//add () and remove()

//if i click on header then it will add another class.

var element;
document.getElementById("header").addEventListener("click", abc);
function abc() {
  //this method adds the new classes.
  //document.getElementById("header").classList.add("xyz");

  //document.getElementById("header").classList.remove("xyz");
  //This function removes the classes

  //document.getElementById("header").classList.toggle("xyz");
  //this also helps to toggle the classes in the js.
  //here everty time the second class willbe added and deleted at the same time on click.

  //item() method in js
  //syntax = item(index);
  //var a = document.getElementById("header").classList.item(1);
  //this will display the particular class at respective index.

  //contains() method in js
  //this will check whether the class is there or not.

  //var a = document.getElementById("header").classList;
  var a = document.getElementById("header").classList.contains("def");
  console.log(a);
}

//toggle() && length()
