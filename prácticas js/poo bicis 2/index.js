class bicicleta{
    constructor(marca,color,imagen){
        this.marca=marca;
        this.color=color;
        this.imagen=imagen;
    }
    getImagen(){
        return this.imagen;
    }
    getMarca(){
        return this.marca;
    }
    mostrarInfo(){
        return "Color: "+this.color+"; Marca: "+this.marca;
    }
}
var arrayBicis=new Array();
var bici1=new bicicleta("Orbea","azul","https://www.recambiosanchez.com/2989-thickbox_default/bicicleta-orbea-oiz-m10-2021-doble-suspension-carbono.jpg");
var bici2=new bicicleta("BH","roja","https://www.mtbpro.es/sites/default/files/fotosprincipales/bh-reschen_0018.jpg");
arrayBicis.push(bici1);
arrayBicis.push(bici2);

for(elemento of arrayBicis){
    mostrarBici(elemento);
}


 

function mostrarBici(biciIn){
    var miDiv=document.getElementById("bicis");
    var imagen=document.createElement("img");
    var texto=document.createElement("h3");
    nodoTexto=document.createTextNode(biciIn.mostrarInfo());
    imagen.src=biciIn.getImagen();
    miDiv.appendChild(imagen);
    texto.appendChild(nodoTexto);
    miDiv.appendChild(texto);
}