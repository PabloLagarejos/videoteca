function insertarImagenes()
{
        /* Sobre la base html adjunta (https://codepen.io/jluis_b/pen/ZEOygqW), realizar un programa javascript
que tenga almacenadas 6 imágenes (dos tipos diferentes) en dos arrays, cuando se pulse un botón se
mostrará cada una de ellas en cada uno de los divs de la base html. Las de tipo 1 irán a los divs de la
clase internoPar, mientras que las de tipo 2 irán a los divs de la clase . Utilizar bucles*/

    var arrayPar=null;
    var arrayImpar=null;

    var imagenesPares=["https://live.staticflickr.com/6031/6350805837_08b3279ae9_n.jpg",
    "https://live.staticflickr.com/7433/9331726263_0bb69320c1_b.jpg",
    "https://live.staticflickr.com/7259/7655022536_9d51e82f39_b.jpg"];
    var imagenesImpares=["https://live.staticflickr.com/7794/27078024981_be6c23439a_n.jpg",
    "https://live.staticflickr.com/65535/49669822126_a5897cf3ec_n.jpg",
    "https://live.staticflickr.com/7691/27128071565_841cd43d88_n.jpg"];

    arrayPar=document.getElementById("central").getElementsByClassName("internoPar");
    arrayImpar=document.getElementById("central").getElementsByClassName("internoImPar");

    for(let i=0;i<imagenesPares.length;i++)
    { 
        arrayPar[i].innerHTML="<img src="+imagenesPares[i]+ " width=300 height=200>";
         
    }  
    for(let i=0;i<imagenesImpares.length;i++)
    {
        arrayImpar[i].innerHTML="<img src="+imagenesImpares[i]+" width=300 height=200>";
    } 
   
}
 

    

    
     
     

    

  

    
    

 