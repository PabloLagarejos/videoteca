   
(function(){  
   window.addEventListener("load",inicializar); 
})();
function inicializar(){
  document.getElementById("principal").addEventListener("click",function(){
    setTimeout(cambiarColores,3000);
  });
}
function cambiarColores( ){
  var listaDiv=document.getElementsByClassName("divInterno");
  for(let elemento of listaDiv){
    var rojo=Math.floor(Math.random()*255);
    var verde=Math.floor(Math.random()*255);
    var azul=Math.floor(Math.random()*255);

    elemento.style.backgroundColor="rgb("+rojo+","+verde+ ","+azul+")";
  }  
  
}  
 
    
     
     

    

  

    
    

 