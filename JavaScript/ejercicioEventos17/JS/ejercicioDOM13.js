var divOrigen=null;  
window.onload=function(){
  document.getElementById("container").addEventListener ("drop", hacerDrop);
  document.getElementById("container").addEventListener("dragover",controlarDrag);

  document.getElementById("container1").addEventListener ("drop", hacerDrop);
  document.getElementById("container1").addEventListener ("dragover",controlarDrag);

  document.getElementById("montania").addEventListener("dragstart",empezarDrag);
  document.getElementById("playa").addEventListener("dragstart",empezarDrag);
}

function controlarDrag(evento ){
  evento.preventDefault();
  
}  
function empezarDrag(evento){
  evento.dataTransfer.setData("text",evento.target.id);
  divOrigen=document.getElementById(evento.target.id).parentNode;
}
function hacerDrop(evento){
  evento.preventDefault();
  evento.target.innerHTML="";
  var Data=evento.dataTransfer.getData("text");
  evento.target.parentNode.appendChild(document.getElementById(Data));
  divOrigen.appendChild(evento.target);
}
    
     
     

    

  

    
    

 