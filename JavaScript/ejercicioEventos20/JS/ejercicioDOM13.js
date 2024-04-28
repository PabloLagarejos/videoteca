 var intervalo=null; 
 var contador=0; 
(function(){
   window.addEventListener("load",inicializar); 
})();

function inicializar(){
  document.getElementById("principal").addEventListener("click",function(){
    intervalo=setInterval(lanzarCuenta,1000);
  });
}

function lanzarCuenta(){
  contador+=1;
  
  var texto=document.getElementById("principal");
  texto.innerHTML="TIEMPO: "+contador;
  
  crearDiv("caja","clase_caja","juego");
   
  if(contador>=6){
    clearInterval(intervalo);
  }

}  

function crearDiv(idDiv,clase,divCont){
  var miDiv=document.createElement("div");
  miDiv.id=idDiv;
  miDiv.classList.add(clase);
  document.getElementById(divCont).appendChild(miDiv);
  
}
 
    
     
     

    

  

    
    

 