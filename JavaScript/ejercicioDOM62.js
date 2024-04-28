function insertarFila()
{
     
    var caracterUsuario=null;
    var tabla=null;
    var fila=null;
    var celda1=null;
    var celda2=null;
    var arrayElemento=[];

    caracterUsuario=prompt("Introduzca elementos separados por , : ");
    arrayElemento=caracterUsuario.split(",");
     

    tabla= document.getElementById('table');
    fila=tabla.insertRow(0);

    celda1=fila.insertCell(0);
    celda2=fila.insertCell(1);

    celda1.innerHTML=arrayElemento[0];
    celda2.innerHTML=arrayElemento[1];

    
}