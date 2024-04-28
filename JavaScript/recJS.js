 /*Realiza un página web y un programa javascript que vaya
pidiendo al usuario una tupla parámetro,valor (separado por
comas) y lo convierta en una tabla de dos columnas con todos
los datos. Podría tratarse de los resultados de una jornada de
liga, la temperatura en diferentes ciudades… Nota. El
programa va pidiendo tupla a tupla y los va insertando.
Hacerlo para el caso de que no exista la tabla en el html y para
el caso de que sí exista y le añada filas
 */ 

function ejecutar(){
     var texUsu="";
     var arrayFila=[];
     var elemento=null;
     var miDiv=null;
     var fila=0;
     var celda1="";
     var celda2="";
     var opcionUsuario="s";
     var contador=0;
     miDiv=document.getElementById("id");
     elemento=document.createElement("table");
     
    
    while(opcionUsuario.localeCompare("s")==0){
        texUsu=prompt("tupla: ");
        arrayFila=texUsu.split(",");
        fila=elemento.insertRow(contador);
        celda1=fila.insertCell(0);
        celda2=fila.insertCell(1);
        celda1.innerHTML=arrayFila[0];
        celda2.innerHTML=arrayFila[1];
        opcionUsuario=prompt("continua?");
    }
    miDiv.appendChild(elemento);
}
