  
window.onload=function(){
  document.getElementById("contenedorCentral").addEventListener ("drop",hacerDrop);
  document.getElementById("contenedorCentral").addEventListener("dragover",controlarDrag);
  document.getElementById("enlace").addEventListener("dragstart",empezarDrag);
}

function controlarDrag(evento ){
  evento.preventDefault();
  
}  
function empezarDrag(evento){
  evento.dataTransfer.setData("text",evento.target.id);
}
function hacerDrop(evento){
  evento.preventDefault();
  var Data=evento.dataTransfer.getData("text");
  evento.target.appendChild(document.getElementById(Data));
}
    
     
     

    

  

    
    

 