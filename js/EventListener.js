//javascript events

var element = document.getElementById("header").onclick = abc;

function abc(){
    document.getElementById("header").style.background = "green";
}

//DOM addEventListener() Method
//here no need to write "on" before events 
var dem;
dem = document.getElementById("sidebar").addEventListener("click",def);
dem = document.getElementById("header").addEventListener("mouseenter",efg);
this.style.border = "10px solid red";
function efg(){
    document.getElementById("header").style.border = "10px solid red";
}
function def(){
    document.getElementById("sidebar").style.background = "green";
}



//Remove EventListener
//syntax : element.removeEventListener("ondblclick",functionName);
document.getElementById("header").addEventListener('click',xyz);
function xyz(){
    document.getElementById("header").removeEventListener('click',abc);
}