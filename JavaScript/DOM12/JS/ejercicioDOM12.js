function borrarDivs()
{
        /*  En el código https://codepen.io/jluis_b/pen/ZEOygqW modifica el botón y el
código asociado para que al pulsarlo se eleminen aquellos div que tienen
asociada la clase “internoImPar”*/

     
    var arrayImpar=null;
     
    arrayImpar=document.getElementById("central").getElementsByClassName("internoImPar");

    while(arrayImpar.lenght>0)
    {
        arrayImpar[0].parentNode.removeChild(arrayImpar[0]);
    }
   
}
 

    

    
     
     

    

  

    
    

 