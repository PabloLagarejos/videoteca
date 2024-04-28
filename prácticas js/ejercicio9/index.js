var ejercicio=document.getElementsByClassName("tam");

for (let elemento of ejercicio){
    elemento.addEventListener("mouseleave",agrandar);
}
 

 

function agrandar(){
 
     
    this.style.fontSize=(Math.floor(Math.random()*255)+"px");

}
 