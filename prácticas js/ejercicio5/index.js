var opcion=document.getElementById("opciones") ;
 
opcion.addEventListener("change",elegir);
 

function elegir(){
     
    var imagen=document.getElementById("imagen");

    switch(opcion.value){
        case "playa":
            imagen.src="https://static5.depositphotos.com/1038117/449/i/600/depositphotos_4492489-stock-photo-sea-and-coconut-palm.jpg";
            break;
        case "montana":
            imagen.src="https://concepto.de/wp-content/uploads/2018/08/monta%C3%B1as-e1533762816593.jpg";
            break;
        case "ciudad":
            imagen.src="https://s03.s3c.es/imag/_v0/770x420/0/a/1/600x400_La-ciudad-de-Tokio-con-el-monto-Fuji-al-fondo-iStock.jpg";
            break;
        default:
            console.log("opcion erronea");
    }

    
     
}
        
 