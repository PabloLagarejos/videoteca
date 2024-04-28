function hacerArray()
{
    var listaEquipos="";
    var arrayEquipos=null;
    var boton=null;
    var miDiv=null;

    miDiv=document.getElementById("elemento");

    listaEquipos=prompt("ponga la lista de equipos: ");
    arrayEquipos=listaEquipos.split(",");

    for(elemento of arrayEquipos)
    {
        boton=document.createElement("BUTTON");

        boton.innerHTML= elemento;
        document.body.appendChild(boton);
    }

}