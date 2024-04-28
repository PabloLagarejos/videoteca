function insertarImagen()
{
     /*Tenemos un html con varios DIV, algunos de ellos con la clase "imagenInterna". 
     Cuando se pulse un botón el programa va preguntando al usuario si quiere insertar una foto. 
     Si el usuario dice “SI” le pedirá la url de la foto (http://....jpg) y la insertará dentro 
     de uno de los div que pertenece a la clase indicada, se volverá a repetir la operación hasta 
     que todos los divs de la clase "imagenInterna" tengan 
     imagen o hasta que el usuario indique que no quiere continuar. Sólo se pulsa una vez el botón*/
     
      
     
     var urlImagenUsuario=null;
     var arrayDiv=null;
     var opcionUsuario="";
     var contador=0;
     arrayDiv=document.getElementById("central").getElementsByClassName("imagenInterna");
     opcionUsuario=prompt("Desea introducir una imagen en un Div?: ");
     //urlImagenUsuario=prompt("introduzca una url de una imagen para que sea insertada en el div: ");

     do{
          
          urlImagenUsuario=prompt("introduzca una url de una imagen para que sea insertada en el div: ");
          arrayDiv[contador].innerHTML="<img src="+urlImagenUsuario+" width=300 height=200>";
          opcionUsuario=prompt("Desea introducir una imagen en un Div?: ");
          contador+=1;
     }
     while((contador<arrayDiv.length) && (opcionUsuario.localeCompare("s")==0));

}
 

    

    
     
     

    

  

    
    

 