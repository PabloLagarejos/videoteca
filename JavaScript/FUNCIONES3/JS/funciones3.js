(function autoejecutable(){
 alert("lo primero que se ejecuta");
})();

function cambiarEstilo(){

    var duplaUsuario=null;
    var elemento;
    var estilo;
    var arrayTagUsuario;
    duplaUsuario=prompt("introduzca la dupla elemento, estilo separado por comas: ");

    arrayDupla=duplaUsuario.split(",");

    elemento=arrayDupla[0];
    estilo=arrayDupla[1];

    arrayTagUsuario=document.getElementsByTagName(elemento);

    switch(estilo){
        case "DISCRETO":
            for(var i=0;i<arrayTagUsuario.length;i++){
                cambiarEstilo(arrayTagUsuario[i],"DISCRETO");
                eliminarEstilo(arrayTagUsuario[i],"NORMAL");
                eliminarEstilo(arrayTagUsuario[i],"LLAMATIVO");
            }
        case "NORMAL":
            for(var i=0;i<arrayTagUsuario.length;i++){
                cambiarEstilo(arrayTagUsuario[i],"NORMAL");
                eliminarEstilo(arrayTagUsuario[i],"DISCRETO");
                eliminarEstilo(arrayTagUsuario[i],"LLAMATIVO");
            }
        case "LLAMATIVO":
            for(var i=0;i<arrayTagUsuario.length;i++){
                cambiarEstilo(arrayTagUsuario[i],"LLAMATIVO");
                eliminarEstilo(arrayTagUsuario[i],"NORMAL");
                eliminarEstilo(arrayTagUsuario[i],"DISCRETO");
            }
    }

    function cambiarEstilo(elementoUsuario,estiloUsuario){
         
        elementoUsuario.classList.add(estiloUsuario);
        
    }
    function eliminarEstilo(elementoUsuario,estiloUsuario){
         
        elementoUsuario.classList.remove(estiloUsuario);
        
    }

     
   

     


}
 