 


function insertarTabla(){
      var miDiv=null;
      var elemento=null;
      var nodo=null;
        var div="";
      var opcionUsuario="n";
    
    
      while(opcionUsuario.localeCompare("s")!=0){
        elemento=document.createElement("h1");
        nodo=document.createTextNode("hola chicos");
        elemento.appendChild(nodo);
        div=prompt("elije un div: notas/notas2/notas3");
        miDiv=document.getElementById(div);
        miDiv.appendChild(elemento);
        opcionUsuario=prompt("Quiere acabar?");
      }



}