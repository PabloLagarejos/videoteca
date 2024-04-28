var ejercicio=document.getElementById("ejercicio");
 
/*ejercicio.addEventListener("mouseleave",colorear);
 

function colorear(){
 
var red=0; 
var green=0;
var blue=0;
red=Math.floor(Math.random()*255);
green=Math.floor(Math.random()*255);
blue=Math.floor(Math.random()*255);
 
ejercicio.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}*/
 var ejercicio=document.getElementById("ejercicio");
 ejercicio.addEventListener("mousedown",function(){
    setInterval(colorear,500);
 });
 ejercicio.removeEventListener("mosemove",parar);

 function colorear(){
     var R=0;
     var G=0;
     var B=0;

    R=Math.floor(Math.random()*256);
    G=Math.floor(Math.random()*256);
    B=Math.floor(Math.random()*256);

    ejercicio.style.backgroundColor="rgb("+R+","+G+","+B+")";

 }
 function parar(){
    clearInterval(colorear);
 }