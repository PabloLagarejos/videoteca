 
function anadirParrafo(){
    var texto="";
    var parrafo=document.createElement("h1");
    texto=prompt("Introduzca un texto");
    parrafo.innerHTML=texto;
    document.body.appendChild(parrafo);
     
}
 