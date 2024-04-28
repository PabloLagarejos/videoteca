function MostrarMayor(){
    numeroMayor=0;
    numeroUsuario=0;

    for(let i=0;i<=4;i++)
    {
        numeroUsuario=parseInt(prompt("introduzca un numero:.."));
        if (numeroUsuario > numeroMayor)
        {
            numeroMayor=numeroUsuario;
        }
    }
    alert("el numero mayor que ha introducido es el "+numeroMayor);

}