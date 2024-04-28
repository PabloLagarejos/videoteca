var ejercicio=document.getElementById("ejercicio");

 
 
ejercicio.addEventListener("mousedown", function(){
    ejercicio.addEventListener("mouseleave",colorear);
});
ejercicio.addEventListener("dblclick",nocolorear);

function colorear(){
 
var red=0; 
var green=0;
var blue=0;
red=Math.floor(Math.random()*255);
green=Math.floor(Math.random()*255);
blue=Math.floor(Math.random()*255);
 
ejercicio.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}
 
function nocolorear(){
    ejercicio.removeEventListener("mouseleave",colorear);
}