arrayCajas=document.getElementsByClassName("divInterno");

for (elemento of arrayCajas){
    elemento.addEventListener("mousemove",colorear);
}

function colorear(accion){
    var X=accion.offsetX;
    var Y=accion.offsetY;

    var coordenadas=document.getElementById("cajaCoords");
    coordenadas.value=("X: "+X+"/Y: "+Y);
    var color=window.getComputedStyle(this,null).getPropertyValue("background-color");
    document.getElementById("derecha").style.backgroundColor=color;
    var accionM=document.getElementById("cajaEvento");
    accionM.value=accion.type;
    var midiv=document.getElementById("cajaIdDivEvento");
    midiv.value=this.id;
}