//It will help to display every objects in array.
var obj = {
    fname : "Srinu",
    lname : "Reddy",
    Age : 21,
    email : "abc@gmail.com"
};
for(var key in obj){
    document.write(key + " : "+obj[key]+"<br>");
}