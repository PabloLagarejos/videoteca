 
function anadirElementos(){
    var h1=document.createElement("h1");
    var titulo="";
    var etiqueta=document.createElement("label");
    var boton=document.createElement("button"); 
    var nodoTexto=""; 
    etiqueta.innerHTML="pulsa aquí";
    document.body.appendChild(etiqueta);
    nodoTexto=document.createTextNode("sumar");
    boton.appendChild(nodoTexto);
    document.body.appendChild(boton);
    
    titulo=prompt("introduzaca un texto: ");
    h1.innerHTML=(titulo);
    document.body.appendChild(h1);
}  
function borrarElementos(){
    //Con innerHTML se sustituye lo que había
    document.body.innerHTML="<h1>Todo Borrado</h1>";
}
 
 