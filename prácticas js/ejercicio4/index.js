var ejercicio=document.getElementById("texto");
 
ejercicio.addEventListener("keyup",contar);
 

function contar(){
var numero=document.getElementById("texto").value.length;
 
document.getElementById("numero").innerHTML="el numero de caracteres es: "+numero;
}
 