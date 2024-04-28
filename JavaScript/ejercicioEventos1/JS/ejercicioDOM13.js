 var imagen=document.getElementById("imagen");
 imagen.addEventListener("mouseover",ponerH1);
 imagen.addEventListener("mouseleave",quitarH1);
 function ponerH1(){
    var cabecera=document.createElement("h1");
    var nodoTexto=document.createTextNode("Hola");
    cabecera.appendChild(nodoTexto);
    cabecera.id="cabecera";
    document.getElementById("central").appendChild(cabecera);
 }
 function quitarH1(){
     cabecera=document.getElementById("cabecera");
     cabecera.parentNode.removeChild(cabecera);
 }
 

    

    
     
     

    

  

    
    

 