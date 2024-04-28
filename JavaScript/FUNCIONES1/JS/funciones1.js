function fabricarRecurso(){
var urlImagen="";
var textoCabecera="";
var filas=0;
var columnas=0;
var imagen=document.createElement('img');
var opcion=document.getElementById("opcionesUsuario");
var cabecera=document.createElement('h1');
var div =document.getElementById("select");
 
switch(opcion.value){
    case "crearImagen":
    urlImagen=prompt("introduzca la direccion de la imagen:");
    crearImagen(urlImagen,imagen,div);
        break;
    case "crearTabla":
        filas=parseInt(prompt("Cuantas filas?: "));
        columnas=parseInt(prompt("Cuantas columnas?: "));
        crearTabla(filas,columnas,div);
        break;
    case "crearCabecera":
        textoCabecera=prompt("introduzca el texto de la cabecera:");
        crearCabecera(textoCabecera,cabecera,div);
        break;
    default:
        alert("errorrrr!!!!");
}

}

function crearImagen(url,imagen,div){
    imagen.src=url;
    div.appendChild(imagen);
}
function crearCabecera(texto,cabecera,div){
    cabecera.appendChild(document.createTextNode(texto));

    //cabecera.innerHTML=texto;
    div.appendChild(cabecera);
}
function crearTabla(numFila, numColumna,div){

    var fila=null;
    var celda=null;
    var tabla=document.createElement('table');

    for(let i=0;i<numFila;i++){
        fila=tabla.insertRow(0);
        for(let j=0;j<numColumna;j++){
            celda=fila.insertCell(j);
            celda.innerHTML="X";
        }
    } 
    div.appendChild(tabla);
}