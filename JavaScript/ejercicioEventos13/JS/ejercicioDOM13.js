  
window.onload=function(){
  document.getElementById("cajaImagen").addEventListener("click",mostrarImagen);
  document.getElementById("cajaImagen").addEventListener("mouseover",mostrarDetalle);
}
 
function mostrarImagen(accion){

  var xDiv;
  var yDiv;
  var imagenGrande=null;
  var xDiv=accion.offsetX;
  var yDiv=accion.offsetY;
  imagenGrande=document.createElement("img");
  imagenGrande.src="img/paisaje.jpg";
  imagenGrande.id="imagenGrande";
  document.getElementById("cajaInfo-X").value=xDiv;
  document.getElementById("cajaInfo-Y").value=yDiv;
  document.getElementById("container").appendChild(imagenGrande);
    
 }

function mostrarDetalle(accion){

  removeEventListener("click",mostrarImagen);

  var xDiv;
  var yDiv;
  var imagenGrande=null;
  var xDiv=accion.offsetX;
  var yDiv=accion.offsetY;

  document.getElementById("cajaInfo-X").value=xDiv;
  document.getElementById("cajaInfo-Y").value=yDiv;
  
  imagenGrande=document.getElementById("imagengrande");

  imagenGrande.style.top=("-"+(yDiv*3)+"px");
  imagenGrande.style.left=("-"+(xDiv*3)+"px");

}   

    
     
     

    

  

    
    

 