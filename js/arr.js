var ages = [10,15,18,20];
document.write(ages + "<br><br>");

// some or every.
//var b = ages.some(checkAdult);
var b = ages.every(checkAdult);

document.write(b+"<br>");
function checkAdult(age){
return age >= 10;
}

document.write("<br><br>");

//some() function in array

var d = [10,20,30,40,50];

var e = d.some(checkAdult);
document.write(e);
function checkAdult(age){
    return age>20;
}