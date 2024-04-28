class Guitarra{
  constructor(tipo,marca,imagen){
    this.tipo=tipo;
    this.marca=marca;
    this.imagen=imagen;
  }
  getTipo(){
    return this.tipo;
  }
  getImagen(){
    return this.imagen;
  }
  getMarca(){
    return this.marca;
  }

  mostrarInfo(){
    return "tipo de guitarra: "+this.tipo+"/marca: "+this.marca+"/imagen: "+this.imagen;
  }

}
var arrayGuitarras=[];

function guardarGuitarras(){
  let tipo=document.getElementById("categoria").value;
  let marca=document.getElementById("marca").value;
  let imagen=document.getElementById("foto").value;

  let guitarraIn=new Guitarra(tipo,marca,imagen);
  arrayGuitarras.push(guitarraIn);
}

function imprimirGuitarras(){
   
    for(let elemento of arrayGuitarras){
      construirGuitarras(elemento);
    }
}
  function construirGuitarras(guitarra){
  let tipoIn=guitarra.getTipo();
  let marcaIn=guitarra.getMarca();
  let imagenIn=guitarra.getImagen();

  let miDiv=document.getElementById("divGuit");

  let tipo=document.createElement("h3");
  let marca=document.createElement("h1");
  let imagen=document.createElement("img");

  let nodoTipo=document.createTextNode(tipoIn);
  let nodoMarca=document.createTextNode(marcaIn);

  tipo.appendChild(nodoTipo);
  marca.appendChild(nodoMarca);

  imagen.src=imagenIn;
  imagen.height=400  ;
  imagen.width=400  ;
  
  miDiv.appendChild(marca);
  miDiv.appendChild(tipo);
  miDiv.appendChild(imagen);
}


 
 
    