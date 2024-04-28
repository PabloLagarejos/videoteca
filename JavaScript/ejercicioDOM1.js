function InsertarTextos()
{
    var textoUsuario="";
    var boton=document.createElement("BUTTON");
    var etiqueta=document.createElement("label");

    textoUsuario=prompt("introduzca texto:");


    boton.innerHTML= textoUsuario;
    document.body.appendChild(boton);

    
    etiqueta.innerHTML="<h1>";
    document.body.appendChild(etiqueta);

}