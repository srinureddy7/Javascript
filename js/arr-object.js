//objects in array

var a = {
    fname : "Srinu",
    lname : "Reddy",
    age : 18,
    mail : "abc@gmail.com",
    Movie : ["Orange","Dhoom","Zanzeer"],
    Salary : function (){
        return 25000;
    },
    FullName : function(){
        return this.fname + " "+this.lname;
    }
}
//document.write(a);

console.log(a);
console.log(a.fname);
document.write(a.lname);
document.write("<br>"+a.Movie[1]);
document.write("<br>");
document.write(a.Salary());
document.write("<br>"+a.FullName());