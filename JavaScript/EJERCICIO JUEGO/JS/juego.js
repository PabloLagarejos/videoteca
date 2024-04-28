var nickUsuario="";
var puntuacionUsuario=0;
var dado=0;
var acumulado=0;
var numeroCasillas=document.getElementById("casillas");
nickUsuario=prompt("Diga su Nickname: ");
dado=valorDado();

while(dado>0){
    recorrerCamino(dado,acumulado);
    acumulado=acumulado+dado;
}


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
function recorrerCamino(numeroDado,numeroInicio){
    var premio=0;
    var numeroCasillas=document.getElementById("casillas");
    var numeroAcumulado=0;
    var casilla=null;
    var castigoOPremio=0;
    var valorCasilla=null;
    var valorPremioCastigo=0;

    castigoOPremio=Math.floor((Math.random()*1));
    numeroAcumulado=numeroInicio+numeroDado;
    valorPremioCastigo=numeroAleatorio();

    for(let i=1;i<numeroCasillas.value;i++){
        if(i==numeroAcumulado){
            casillaImagen=getElementById("casill_"+numeroAcumulado);
            if (castigoOPremio==0){
                imagenPremio(valorPremioCastigo,casillaImagen);
                premio=premio(valorPremioCastigo);
            }
            else{
                imagenPremio(valorPremioCastigo,casillaImagen);
                premio=castigo(valorPremioCastigo);
            }
            return premio;
        }
    }

}

function numeroAleatorio(){
    var eleccion=1;
    eleccion=Math.floor((Math.random()*3)+1);
    return eleccion;
}

function imagenPremio(numeroAzar,elemento){
    var casilla=null;
    var url="";
    casilla=getElementById("casill_"+numero);
    switch(numeroAzar){
        case 1:
            url="img/premios/premio+1.jpg";
            break;
        case 2:
            url="img/premios/premio+5.jpg";
            break;
        case 3:
            url="img/premios/premio+10.jpg";
            break;
        default:
            alert("error");
    }
    casilla.src=url;
    elemento.appendChild(casilla);
}

function premio(numeroAzar){
    var premio=0;
    var arrayPremio=[1,5,10];
     ;
    switch(numeroAzar){
        case 1:
            premio=arrayPremio[0];
            break;
        case 2:
            premio=arrayPremio[1];
            break;
        case 3:
            premio=arrayPremio[2];
        default:
            alert("error");
    }
    return premio;
}
 
function imagenCastigo(numeroAzar,elemento){
    var casilla=null;
    var url="";
    casilla=getElementById("casill_"+numero);
     
    switch(numeroAzar){
        case 1:
            url="img/castigos/pierdes-1.jpg";
            break;
        case 2:
            url="img/premios/pierdes-5.png";
            break;
        case 3:
            url="img/premios/empiezas.png";
            break;
        default:
            alert("error");
    }
    casilla.src=url;
    elemento.appendChild(casilla);
}
function castigo(numeroAzar){
    var castigo=0;
    var arrayCastigo=[-1,-5,];
     
     
    switch(numeroAzar){
        case 1:
            castigo=arrayCastigo[0];
            break;
        case 2:
            castigo=arrayCastigo[1];
            break;
        case 3:
            numeroCasilla=0;
        default:
            alert("error");
    }
    return castigo;
}
function valorDado(){
    var numeroDado=0;
    numeroDado=Math.floor ((Math.random() * 6)+1);
    return numeroDado;
}

function tirarDado(dadoIn){
var valorNumeroDado=null;
var url="";
var imagen=document.getElementById("imagenDado");
valorNumeroDado=dadoIn;
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