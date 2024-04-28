
var imagen=document.getElementById("imagen");
imagen.addEventListener("mouseover",ponerH1);
imagen.addEventListener("mouseout",quitarH1);

function ponerH1(){
    var rotulo=document.createElement("h1");
    var texto=document.createTextNode("Titulo texto");
    var myDiv=document.getElementById("divRotulo");
    rotulo.appendChild(texto);
    rotulo.id="cabecera";
    myDiv.appendChild(rotulo);
}

function quitarH1(){
    var rotulo=document.getElementById("cabecera");
    rotulo.parentNode.removeChild(rotulo);
   
}




function agrandarImagenes()
{
       
    imagen=document.getElementById("imagen");
    imagen.width=700;
    imagen.height=500;    
}
 

    

    
     
     

    

  

    
    

 