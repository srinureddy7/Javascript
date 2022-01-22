//Use capture : 
//parameters specifies in eventlistener : 
//addEventListener(event,function,useCapture); 
//use capture may have only 2 values either true or false.


document.querySelector("#INNER").addEventListener('click',function(){
    alert("inner div");
},true);
document.querySelector("#OUTER").addEventListener('click',function(){
    alert("outer div");
},true);

