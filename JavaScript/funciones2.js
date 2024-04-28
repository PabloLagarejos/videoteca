
var dni;
var tamano;
dni=prompt("Introduce tu DNI: ");

function EscribirDni(){
    tamano=dni.length;
    resultado=dni.charAt(tamano-1);
    alert(resultado);
}