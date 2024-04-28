  
var paisaje=document.getElementById("paisaje");
  
paisaje.addEventListener("change",function(){
      elegirPaisaje(paisaje.value);
});
function elegirPaisaje(imagenPaisaje){
   
  var url="";
  var imagen=null;

  switch(imagenPaisaje){
    case "montaña":
    url="img/montana.jpg";
    break;
    case "playa":
    url="img/playa.jpg";
    break;
    case "ciudad":
    url="img/ciudad.jpg";
    break;
    default:
    alert("opción erronea");
  }
  imagen=document.getElementById("foto");
 
  if(imagen!=null){
    imagen.parentNode.removeChild(imagen);
  }
  imagen=document.createElement("img");
  imagen.src=url;
  imagen.id="foto";
  document.getElementById("cajaImagen").appendChild(imagen);
}

 
 
 

    

    
     
     

    

  

    
    

 