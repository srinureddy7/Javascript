//foreach() in javascript.
//This is used for display value in an array.
var a = ["Sarah","Sheetal","Ravi","Friend","Raj"];
a.forEach(function(value,index){
    document.write(index + " : " + value+"<br>");
})
//Another way
a.forEach(loop);
function loop(value,index){
    document.write("<br>"+index + " : "+value);
}