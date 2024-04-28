/* Desarrollar un algoritmo que nos calcule el cuadrado de los n primeros números pares, 
pidiendo n al usuario*/

function MostrarCuadradoPares()
{
    var cuadrado=0;
    var contadorPares=0;
    var numeros=0;
    var numeroPares=0;
    numeroPares=parseInt(prompt("Introduzca el numero de pares a realizar el cuadrado: "));

    while(contadorPares<=numeroPares)
    {
        if(numeros%2==0)
        {
            cuadrado=numeros*numeros;
            console.log(cuadrado); 
            contadorPares=contadorPares+1
        }
        numeros=numeros+1;
    }
}