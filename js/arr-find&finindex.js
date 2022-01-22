var ages = [10,2,18,21];
document.write(ages + "<br><br>");

//var b = ages.find(checkAdult);
//here find() returns the actual value

var b = ages.findIndex(checkAdult);

//here findIndex() returns the index value where the condition satisfies.

document.write(b+"<br><br>");

function checkAdult(age){
    return age >= 18;
}
