var ages = [10,20,18,21];
document.write(ages + "<br><br>");

var b = ages.filter(checkAdult);

document.write(b+"<br><br>");

function checkAdult(age){
    return age >= 18;
}
