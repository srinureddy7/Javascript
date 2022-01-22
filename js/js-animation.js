//  var a = 0;
//  setInterval(Anim, 1000);
//  function Anim() {
//     a = a + 10;
//     var target = document.getElementById("test4");
//     target.style.marginLeft = a + 'px';

//setTimeout
//It's a function helps to make animations at particular time.

var id = setTimeout(Anim,3000);
function Anim(){
    var target = document.getElementById("test2");
    target.style.width = "500px";//here the width will be increased after 3 seconds.
}
function stopAnimation(){
    clearTimeout(id);
}