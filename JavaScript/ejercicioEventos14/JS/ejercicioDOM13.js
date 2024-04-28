  
window.onload=function(){
  var listaCajas=document.getElementsByClassName("divInterno");
  for(let caja of listaCajas){
    caja.addEventListener("mousemove",mostrarColor);
  }
}

function mostrarColor(eventoLanzado){

  let color = window.getComputedStyle(this,null).getPropertyValue("background-color");
  let cajaCoordenadas= document.getElementById("cajaCoords");
  let cajaEventoRaton= document.getElementById("cajaEvento");
  let cajaIndicada=document.getElementById("cajaIdDivEvento");
  let divAPintar=document.getElementById("derecha");

  let posicionXMouse=eventoLanzado.offsetX;
  let posicionYMouse=eventoLanzado.offsetY;
  
  cajaCoordenadas.value=("X es: "+posicionXMouse+"/ Y es: "+posicionYMouse);
  cajaEventoRaton.value=eventoLanzado.type;
  cajaIndicada.value=this.id;
  divAPintar.style.backgroundColor=color;
}  

    
     
     

    

  

    
    

 