var imagen=document.getElementById("imagen");
imagen.addEventListener("click",mostrarImagen);


function mostrarImagen(evento){
    var X=evento.offsetX;
    var Y=evento.offsetY;
    var fuente=this.src;
    var imagenGrande=null;


    document.getElementById("cajaInfo-X").value=X;
    document.getElementById("cajaInfo-Y").value=Y;

    imagenGrande=document.createElement("img");
    imagenGrande.src=fuente;

    imagenGrande.id="imagenGrande"
    /*imagenGrande.style.left("-"+(X*4)+"px");
    imagenGrande.style.top("-"+(Y*3)+"px");*/
    document.getElementById("container").appendChild(imagenGrande);
    var trozo=document.getElementById("imagenGrande");
    trozo.style.left("-"+(X*4)+"px");
    trozo.style.top("-"+(Y*3)+"px"); 
}