  
window.onload=function(){
  document.getElementById("cajaImagen").addEventListener("click",mostrarImagen);
}
 
function mostrarImagen(accion){
  var xDiv;
  var yDiv;
  var imagenGrande=null;
  var xDiv=accion.offsetX;
  var yDiv=accion.offsetY;
  imagenGrande=document.createElement("img");
  imagenGrande.src="img/paisaje.jpg";

  document.getElementById("cajaInfo-X").value=xDiv;
  document.getElementById("cajaInfo-Y").value=yDiv;

  document.getElementById("container").appendChild(imagenGrande);

 }

    

    
     
     

    

  

    
    

 