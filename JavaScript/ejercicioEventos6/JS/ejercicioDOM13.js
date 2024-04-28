  
var rgbRed=0;
var rgbGreen=0;
var rgbBlue=0;
var cajaPrincipal=null;
var texto=document.createElement("h2");
var nodoTexto="";



cajaPrincipal=document.getElementsByClassName("coloreable");
for (let elemento of cajaPrincipal){
  
   elemento.addEventListener('mouseleave',cambiarColor);
 
} 
  
function cambiarColor(){
  rgbRed=Math.floor((Math.random()*(255)));
  rgbGreen=Math.floor((Math.random()*(255)));
  rgbBlue=Math.floor((Math.random()*(255)));

  this.style.backgroundColor="rgb("+rgbRed+","+rgbGreen+","+rgbBlue+")"
}
 
 

    

    
     
     

    

  

    
    

 