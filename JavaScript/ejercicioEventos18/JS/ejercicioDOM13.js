var divOrigen=null;  
window.onload=function(){
  var listaDivs=document.getElementsByClassName("div_drop");
  var listaImg=document.getElementsByClassName("img_drag");

  for(let elemento of listaImg){
    document.getElementById(elemento.id).addEventListener("dragstart",empezarDrag);
  }
  for(let elemento of listaDivs){
    document.getElementById(elemento.id).addEventListener ("drop", hacerDrop);
    document.getElementById(elemento.id).addEventListener("dragover",controlarDrag);
  }
   

   
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
    
     
     

    

  

    
    

 