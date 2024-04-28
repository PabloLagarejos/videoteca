function cambiarParrafo()
{
    /*A partir del html y el css dados realizar un programa js que al pulsar un botón vaya
preguntando al usuario si quiere añadir un nuevo item a la lista, en caso afirmativo le
pide el texto del item y lo añade a la lista. Se repite el proceso hasta que el usuario
diga “NO” (Sólo se pulsa una vez el botón). */


    var opcionUsuario="";
    var textoUsuario="";
    var contenido=null;
    var lista=null;

    
    opcionUsuario=prompt("Quiere añadir un nuevo item a la lista?: s/n");
    lista=document.getElementById("central2");
    

    while(opcionUsuario.localeCompare("s")==0)
    {
        textoUsuario=prompt("Ponga un texto: ");
        contenido=document.createElement("li");
        contenido.appendChild(document.createTextNode(textoUsuario));
        lista.appendChild(contenido);

        opcionUsuario=prompt("Quiere añadir un nuevo item a la lista?: s/n");
    }
 

    

    
     
     

    

  

    
    

}