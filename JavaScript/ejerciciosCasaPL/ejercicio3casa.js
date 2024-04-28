/*. Realizar un programa que escriba por consola los números del x al 1 con un bucle do 
while, leyendo x por teclado*/

function MostrarCadena()
{
    var numeroUsuario;
    numeroUsuario=parseInt(prompt("Introduzca un numero"));

    do{
       console.log(numeroUsuario);
        numeroUsuario=numeroUsuario-1;
    }
    while(numeroUsuario!=0)
}