var nickUsuario=null;
var puntuacionUsuario=0;
var myDiv=null;
var Usuario=null;
var nodoTexto=null;

nickUsuario=prompt("Diga su Nickname: ");
anadirFila(nickUsuario,puntuacionUsuario);


function crearCamino(){
    
    var numeroUsuario=document.getElementById("casillas");
    par=document.getElementById("principal");
    impar=document.getElementById("principal");
    var url="";
    for(let i=1;i<=numeroUsuario.value;i++){
        var imagen=document.createElement('img');
        if(i%2==0){
            url="img/cuadrosPares.jpg";
            imagen.id="casilla_"+i;
            imagen.height=200;
            imagen.width=200;
            imagen.src=url;
            par.appendChild(imagen);
        }
        else{
            imagen.id="casilla_"+i;
            url="img/cuadrosImpares.jpg";
            imagen.height=200;
            imagen.width=200;
            imagen.src=url;
            impar.appendChild(imagen);
        }
    }  
}
 function anadirFila(nombre,puntuacion){
    var tabla=null;
    var fila=null;
    var celda1=null;
    var celda2=null;
    tabla=document.getElementById("tablaJuego"); 
    fila=tabla.insertRow(0);
    celda1=fila.insertCell(0);
    celda2=fila.insertCell(1);
    celda1.innerHTML=nombre;
    celda2.innerHTML=puntuacion;
} 
function valorDado(){
    var numeroDado=0;
    numeroDado=Math.floor ((Math.random() * 6)+1);
    return numeroDado;
}

function tirarDado(){
var valorNumeroDado=null;
var url="";
var imagen=document.getElementById("imagenDado");
//var valorDado = Math.floor ((Math.random() * 6)+1);
valorNumeroDado=valorDado();
    switch(valorNumeroDado){
        case 1:
            url="img/uno.PNG";
            break;
        case 2:
            url="img/dos.PNG";
            break;
        case 3:
            url="img/tres.PNG";
            break;
        case 4:
            url="img/cuatro.PNG";
            break;
        case 5:
            url="img/cinco.PNG";
            break;
        case 6:
            url="img/seis.PNG";
            break;
        default:
            alert("error");
    }
    imagen.src=url;    
}