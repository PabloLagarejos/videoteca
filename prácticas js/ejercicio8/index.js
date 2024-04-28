var ejercicio=document.getElementsByClassName("color");

for (let elemento of ejercicio){
    elemento.addEventListener("mouseleave",colorear);
}
 

 

function colorear(){
 
    var red=0; 
    var green=0;
    var blue=0;
    red=Math.floor(Math.random()*255);
    green=Math.floor(Math.random()*255);
    blue=Math.floor(Math.random()*255);
    this.style.backgroundColor="rgb("+red+","+green+","+blue+")";

}
 