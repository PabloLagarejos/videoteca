function mostrarDado() 
{
     /*Realiza una app que tenga una caja de texto y un botón, en la caja de
texto se puede poner un número del uno al seis. En función del número
elegido se mostrará la url del dado correspondiente. La app admite
que se ponga “6” o “seis”. Las imágenes necesarias se almacenan en un
subdirectorio images de la aplicación.*/  
     
    var textoDado=document.getElementById("dado");
    var imagen=document.getElementById("imagenDado");
    var url="";
  
    switch(textoDado.value)
    {
        case "1":
        case "uno":  
            url="img/uno.PNG";
            break;
        case "2":
        case "dos":
            url="img/dos.PNG";
            break;
        case "3": 
        case "tres":
            url="img/tres.PNG";
            break;
        case "4": 
        case "cuatro":
            url="img/cuatro.PNG";
            break;
        case "5": 
        case "cinco":
            url="img/cinco.PNG";
            break;
            case "6": 
        case "seis":
            url="img/seis.PNG";
            break;
        default:
            alert("ese numero no está en el dado");
    }
         
         
        //imagen.parentNode.removeChild(imagen);
        imagen.src= url;
        document.body.appendChild(imagen);

   
}
 

    
     
     

    

  

    
    

 