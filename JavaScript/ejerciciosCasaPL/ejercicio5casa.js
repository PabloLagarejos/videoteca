/* Escribe por consola los x números impares que siguen a un número dado, leídos 
ambos por teclado*/

function MostrarImpares()
{
    var contador=0;
    var numeroUsuario;
    var numeroImpares;

    numeroUsuario=parseInt(prompt("Introduzca un numero"));
    numeroImpares=parseInt(prompt("Introduzca los impares que desee conocer: "));

    do{
        numeroUsuario=numeroUsuario+1;
        if(numeroUsuario%2!=0)
        {
            contador=contador+1;
            console.log(numeroUsuario);

        }
    }
    while(contador<numeroImpares)
}
