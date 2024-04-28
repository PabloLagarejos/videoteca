function cambiarColores()
{
    /*Coge el código compartido en codepen: https://
codepen.io/jluis_b/pen/VwawoOx incluye dos
botones, al pulsar uno de ellos se debe cambiar el
fondo y el color del font…de todos los párrafos, al
pulsar el otro se debe dejar como estaba.
*/  
     

    var listaParrafos=null;
    listaParrafos=document.getElementsByTagName("p");
    for (let elemento of listaParrafos){

    
    elemento.classList.add('cambiarColores');
}
}
 
function volverColores()
{
    var listaParrafos=null;
    listaParrafos=document.getElementsByTagName("p");
    for (let elemento of listaParrafos){

        elemento.classList.remove('cambiarColores');
        
    }
}
 

    
     
     

    

  

    
    

 