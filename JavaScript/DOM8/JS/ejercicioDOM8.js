function cambiarParrafo()
{
    var arrayLista=null;
    var parrafo=null;
    var tabla=null;
    var fila=null;
    var celda=null;
     

    arrayLista=document.getElementById("central").getElementsByTagName("li");

    parrafo=document.getElementById("derecha");
     
    parrafo.innerHTML="<table id='tablaDerecha' border='1px'> </table>";

    tabla=document.getElementById("tablaDerecha");

  

    for(i=0;i<arrayLista.length;i++)
    {
        fila=tabla.insertRow(0);
        celda=fila.insertCell(0);
        celda.innerHTML=arrayLista[i].innerHTML;
    }

    

}