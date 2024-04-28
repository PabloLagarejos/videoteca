function insertarParrafo()
{
    var texto=null;
    var parrafo=null;
    var nodoTexto=null;

    texto=document.getElementsByClassName('color');

    for(let elemento of texto)
    {
        parrafo=document.createElement("p");
        nodoTexto=document.createTextNode("Me gusta tu color");
        parrafo.appendChild(nodoTexto);
        elemento.appendChild(parrafo);
    }

    
}