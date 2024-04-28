function insertarTabla()
{
     /*Tenemos un html con dos listas  en el div central, cada lista tiene el mismo número de Items. Una de ellas tienen el nombre de los juegos: 
Fornite
Terraria.
Monster Hunter World.
Destiny 2.
Counter Strike: Global Offensive
La otra tiene codificado si el juego es o no violento junto a la edad recomendada con la siguiente codificación
V-16
NV-10
V-18
NV-12
V-17
Cada elemento de una listas se corresponde con uno  de la otra. 
Por ejemplo 2. 
Terraria se corresponde con 2.NV-10. 
La primera lista tiene asociado el id "nombreJuegos" y la segunda el id "catalogacionJuegos"
Cuando se pulse un botón se debe crear una tabla en el div de la derecha con dos columnas, 
en la primera está el nombre del juego (primera lista) 
y en la otra la codificación de si es o no violento junto a la edad (segunda lista), 
NO deben aparecer los juegos violentos (los que su codificación empieza por V). 
Por ejemplo la tabla de la derecha debería quedar de la siguiente forma: 


Terraria	NV-10
Destini 2	NV-12
*/
     
     //no soy capaz de leer el html desde javaScript ya que os array vienen encriptados como html 
     
     var arrayNombreJuegos=null;
     var arrayCatalogacionJuegos=null;
     var parrafo=null;
     var tabla=null;
     var fila=null;
     var celda=null;
     var celda2=null;
     
     
     arrayNombreJuegos=document.getElementById("nombreJuegos").getElementsByTagName("li");
     arrayCatalogacionJuegos=document.getElementById("catalogacionJuegos").getElementsByTagName("li");
     parrafo=document.getElementById("derecha");
     parrafo.innerHTML="<table id='tablaDerecha' border='1px'> </table>";

     tabla=document.getElementById("tablaDerecha");

      
      

      
     for(let i=0;i<arrayNombreJuegos.length;i++){
          if(i%2!=0){      
               fila=tabla.insertRow(0);
               celda=fila.insertCell(0);
               celda.innerHTML=arrayNombreJuegos[i].innerHTML;
               celda2=fila.insertCell(1);
               celda2.innerHTML=arrayCatalogacionJuegos[i].innerHTML;
          }
       
     } 
}
 

    

    
     
     

    

  

    
    

 