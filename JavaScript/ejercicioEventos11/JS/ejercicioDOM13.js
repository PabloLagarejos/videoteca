  
var elementosH2=document.getElementsByClassName("h2");
var nodoH2;
 
for(let elemento of elementosH2){
  nodoH2=elemento;
  nodoH2.addEventListener("click",desplegar);
}

    
function desplegar(evento){
  var nodo=evento.target;
  if(nodo.getAttribute("class")=="mas"){
    nodo.setAttribute("class","menos");
  }
  else{
    nodo.setAttribute("class","mas");
  }
  if(nodo.nextElementSibling.getAttribute("class")=="cerrado"){
    nodo.nextElementSibling.getAttribute("class","abierto");
  }
  else{
    nodo.nextElementSibling.getAttribute("class","cerrado");
  }
}
    
     
     

    

  

    
    

 