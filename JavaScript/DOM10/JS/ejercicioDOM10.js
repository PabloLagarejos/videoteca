function insertarTabla()
{
        /* A partir del html y el css dados realizar un programa js que al pulsar un
    botón cree una tabla como la de la figura. En las filas pares se almacenan
    números impares correlativos y en las impares números pares
    correlativos. La tabla tendrá 8 filas y 10 columnas*/
    const numeroFilas=8;
    const numeroColumnas=10;

    var par=0;
    var impar=1;
    var tabla=null;
    var fila=null;
    var celda=null;
    var myDiv=null;
    
    myDiv=document.getElementById("asideArriba");
    myDiv.innerHTML="<table id:'tablaEjercicio' border:'1'></table>";
    tabla=document.getElementById("tablaEjercicio");

    for (let i=0;i<numeroFilas;i++)
    {
        fila=tabla.insertRow(-1);
        for(let j=0;j<numeroColumnas;j++)
        {
            celda=fila.insertCell(-1);
            if((i%2)==0)
            {  
                celda.innerHTML=par;
                par=par+2;
            }
            else
            {
   
                celda.innerHTML=impar;
                impar=impar+2;
            }
        }
    }    
}
 

    

    
     
     

    

  

    
    

 