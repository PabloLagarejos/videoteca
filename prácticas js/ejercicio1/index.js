var imagen=document.getElementById("imagen");

imagen.addEventListener("mouseover",mostrarh1);
imagen.addEventListener("mouseout",quitarh1);

function mostrarh1(){   
    var cabecera=document.createElement("h1");
    var nodotexto=document.createTextNode("Hola que tal");
    cabecera.appendChild(nodotexto);
    cabecera.id="paquitar";
    document.body.appendChild(cabecera);
}
function quitarh1(){
    var cabecera=document.getElementById("paquitar");
    cabecera.parentNode.removeChild(cabecera);
}