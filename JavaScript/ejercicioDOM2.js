function InsertarTextos()
{
    var miDiv=null;
    var nodoTexto=null;
    var textoUsuario="";
    var seguir="s";
    var divUsuario="";
    var parrafo=null;

    parrafo.appenChild(nodoTexto);

    while(seguir="s")
    {

    textoUsuario=prompt("introduzca un texto: ");
    divUsuario=prompt("introduzca el nombre del div: ");
    miDiv=document.getElementById(divUsuario);
    nodoTexto=document.createTextNode(textoUsuario);
    parrafo=document.createElement("p");
    miDiv.appendChild(divUsuario);

    seguir=prompt("desea seguir?");
    }

}