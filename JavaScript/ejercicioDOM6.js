function insertarFila()
{
    var caracterUsuario;
    var numeroUsuario;
    var tabla=null;
    var fila=null;
    var celda1=null;
    var celda2=null;

    caracterUsuario=prompt("Introduzca elemento: ");
    numeroUsuario=parseInt(prompt("Introduzca numero: "));

    tabla=document.createElement('table');
    fila=tabla.insertRow(0);

    celda1=fila.insertCell(0);
    celda2=fila.insertCell(1);

    celda1.innerHTML=caracterUsuario;
    celda2.innerHTML=numeroUsuario;

    document.body.appendChild(tabla)
}
 