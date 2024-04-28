var imagen=document.getElementById("imagen");
imagen.addEventListener("click",mostrarImagen);
imagen.addEventListener("mousemove",gestionarImagen);


function mostrarImagen(punto){
    var X=punto.offsetX;
    var Y=punto.offsetY;
    var fuente=this.src;
    var imagenGrande=null;

    document.getElementById("cajaInfo-X").value=X;
    document.getElementById("cajaInfo-Y").value=Y;

    imagenGrande=document.createElement("img");
    imagenGrande.src=fuente;
    imagenGrande.id="imagenG"

    document.getElementById("container").appendChild(imagenGrande);
}
function gestionarImagen(punto){
    var X=punto.offsetX;
    var Y=punto.offsetY;

    document.getElementById("cajaInfo-X").value=X;
    document.getElementById("cajaInfo-Y").value=Y;

    var trozoImagen=document.getElementById("imagenG");
    trozoImagen.style.top = ("-" + (Y*3) + "px"); 
    trozoImagen.style.left = ("-" + (X*4) + "px"); 



}