 
function insertarCabecera()
{
    var opcionUsuario;
    var myDiv=null;
    var cabecera=document.createElement("H1");
    var nodoTexto=document.createTextNode("Hola chavales");
    const continua="si";
    opcionUsuario=prompt("Quiere usted insertar cabecera?: ");

    while(opcionUsuario.localeCompare(continua)=0)
    {
        cabecera.appendChild(nodoTexto);
        myDiv=document.getElementById("divCentral2");
        myDiv.appendChild(cabecera);
        opcionUsuario=prompt("Quiere usted insertar cabecera?: ");
    }
}
 
 