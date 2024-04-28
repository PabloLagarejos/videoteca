/*Realizar un programa que escriba por consola los números del x al 1 con un bucle 
while, leyendo x por teclado*/

function MostrarCadena()
{
    var numeroUsuario;
    numeroUsuario=parseInt(prompt("Introduzca un numero"));
     

    while(numeroUsuario>0)
    {
        console.log(numeroUsuario);
        numeroUsuario=numeroUsuario-1;
    }

}