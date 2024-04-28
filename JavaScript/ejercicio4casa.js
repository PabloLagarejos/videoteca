/* Escribe por consola los 10 números pares que siguen a un número dado, leído por 
teclado*/
function MostrarPares()
{
    var contador=0;
    var numeroUsuario;
    numeroUsuario=parseInt(prompt("Introduzca un numero"));

    do{
        numeroUsuario=numeroUsuario+1
        if  (numeroUsuario%2==0)
        {
            contador=contador+1;
            console.log(numeroUsuario);
        }
    }
    while(contador<10)

}