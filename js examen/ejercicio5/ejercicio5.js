 
function anadirParrafo(){
    var miDiv=null;
    var cabecera=document.createElement("h1");
    var nodoTexto=document.createTextNode("Nueva cabecera");
    var divElegido=prompt("En qué div desea añadir la cabecera?: ");
    cabecera.appendChild(nodoTexto);
    miDiv=document.getElementById(divElegido);
    miDiv.appendChild(cabecera);
}  
 
 