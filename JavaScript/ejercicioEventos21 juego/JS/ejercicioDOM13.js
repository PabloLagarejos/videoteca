var intervalo=null;
var listaDiv=document.getElementsByClassName("div_drop");
var listaImg=document.getElementsByClassName("img_drag");
(function(){  
  window.addEventListener("load",inicializar); 
})();
function inicializar(){
 document.addEventListener("load",function(){
  intervalo=setInterval(desordenarFotos,1000);
  clearInterval(intervalo);
 });
}
function desordenarFotos(){

  for(let i=0;i<listaImg.length;i++){
    listaImg[i]=listaImg[Math.floor(Math.random)*listaImg.length];
  }
} 
function incrustarImagen(){
   
} 
 
    
     
     

    

  

    
    

 