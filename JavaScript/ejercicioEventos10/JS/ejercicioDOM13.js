  
var listaParrafo=document.getElementsByClassName("parrafos");
for (let elemento of listaParrafo){
  
   elemento.addEventListener('mouseleave',cambiarTamanio);
 
} 
  
function cambiarTamanio(){
  var tamanio=0;
  tamanio=Math.floor((Math.random()*(100))+15);
  this.style.fontSize=(tamanio+"px");
  this.removeEventListener('mouseleave',cambiarTamanio);
}
 
 

    

    
     
     

    

  

    
    

 