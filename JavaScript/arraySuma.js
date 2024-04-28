var elementos=[5,7,45,98,4,7,23]
function MostrarSuma()
{
    var numUsuario=0;
    numUsuario=parseInt(prompt("Introduzca un numero para sumar al array"));
    for (let i=0;i<=elementos.length-1;i++)
    {
        elementos[i]=elementos[i]+numUsuario;
    }
    for (let elemento of elementos)
    {
        console.log(elemento);
    }
}