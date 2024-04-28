var textoEntrada;
var posicion;
var posicionA;

textoEntrada=prompt("Introduce un texto de entrada: ");
posicion=parseInt(prompt("Introduce un numero"));

function PedirTexto(){
    mayusculas=textoEntrada.toUpperCase();
    console.log(mayusculas);
}
function MedirTexto(){
    longitud=textoEntrada.length;
    console.log(longitud);
}
function MostrarLetraPosicion(){
    letraPosicion=textoEntrada.charAt(posicion);
    console.log(letraPosicion);
}
function MostrarPosicionA(){
    posicionA=textoEntrada.indexOf("a");
    console.log(posicionA);
}


