 window.onload=inicializar; 
var numeroClicks=0;
var texto="";
var nodoTexto=null;
var mostrarSuma=null;
var sumar=null;
function inicializar(){
document.getElementById("miDiv1").addEventListener("click",contar);

document.getElementById("miDiv2").addEventListener("click",function(){
  document.getElementById("miDiv1").removeEventListener("click",contar); 
  alert("ya no se suman más clicks");
});
} 
function contar(){
  if(mostrarSuma!=null){
    mostrarSuma.parentNode.removeChild(mostrarSuma);
  }
  
  mostrarSuma=document.createElement("h2");
  sumar=document.getElementById("suma");
  numeroClicks+=1;
  texto="Lleva  usted: "+numeroClicks;
  mostrarSuma.id="contador";
  nodoTexto=document.createTextNode(texto);
  mostrarSuma.appendChild(nodoTexto);
  sumar.appendChild(mostrarSuma);
}
 
 
 

    

    
     
     

    

  

    
    

 