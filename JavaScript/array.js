
var series=["Tronos","Oceans","Baki","V","Spartacus","Seven","DeathNote"]
function Mostrarposicion()
{
    do
    {
        var numOrden=1;
        numOrden=parseInt(prompt("Qué numero desea conocer empezando ?"))
        if (numOrden<series.length)
        {
            alert("En la posicion "+numOrden+" está el elemento: "+series [numOrden-1]);
        }
        else
        {
            alert("no existe esta posición")
        }
        opcionUsuario=prompt("Desea usted continuar? s/n")
         
    }
    while(opcionUsuario.localeCompare("s")==0)
}