 class bicicleta{
     constructor(marcaIn,colorIn,imagenIn){
         this.marcaIn=marcaIn;
         this.colorIn=colorIn;
         this.imagenIn=imagenIn;
     }
     getImagen(){
         return this.imagenIn;
     }
     mostrarInfo(){
         return "La marca es: "+this.marcaIn+"/// El color es: "+this.colorIn;
     }

 }
var arrayBicis=new Array();
 


function enviarArray(){
    
    var marca=document.getElementById("marca").value;
    var color=document.getElementById("color").value;
    var imagen=document.getElementById("imagen").value;

    var bici=new bicicleta(marca,color,imagen);
    
    arrayBicis.push(bici);
 
}
function verArray(){
    for(let bici of arrayBicis){
        mostrarBici(bici);
    }
}
 

function mostrarBici(elemento){
    
    var miDiv=document.getElementById("bicis");
    var imagen=document.createElement("img");
    var texto=document.createElement("h3");
     
    nodoTexto=document.createTextNode(elemento.mostrarInfo());
    imagen.src=elemento.getImagen();
    imagen.width=300;
    imagen.height=200;
    miDiv.appendChild(imagen);
    texto.appendChild(nodoTexto);
    miDiv.appendChild(texto);
    
}