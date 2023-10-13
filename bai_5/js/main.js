var image = document.getElementById("image");

var m = 0;

setInterval(function (){
   m += 15;
   image.style.transform = "rotate(" + m +"deg)";
}, 2000);