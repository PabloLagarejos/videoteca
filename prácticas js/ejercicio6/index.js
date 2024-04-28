var cuenta=document.getElementById("contar") ;
var nocuenta=document.getElementById("nocontar") ;

cuenta.addEventListener("click",contando);
nocuenta.addEventListener("click",nocontando);

var texto1=document.getElementById("el1");
var texto2=document.getElementById("el2");
var numClick=0;
function contando(){    
    numClick++;
    texto1.innerHTML="numero de click:"+numClick;
}      
 function nocontando(){
      cuenta.removeEventListener("click",contando);
      texto2.innerHTML="Se acabo el contar";
 }