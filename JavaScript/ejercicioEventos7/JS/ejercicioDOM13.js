  
  var texto=document.getElementById("mensaje");
   
  texto.addEventListener("keyup",function(){

    var numeroLetras;
    var h1Solucion;

    numeroLetras=document.getElementById("mensaje").value.length;
    h1Solucion=document.getElementById("contenedor2");
    h1Solucion.innerHTML="el numero de letras es: "+numeroLetras;
  });

 
 
 

    

    
     
     

    

  

    
    

 