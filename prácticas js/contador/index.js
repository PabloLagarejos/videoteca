 var intervalo=null;
 contador=6;
var principal=document.getElementById("principal");
principal.addEventListener("click",function(){
    intervalo=setInterval(comenzarCuenta,1000);
});
function comenzarCuenta(){
    contador--;
    var texto=document.getElementById("contador");
    texto.innerHTML="<h1> Tiempo: "+contador+"</h1>";
    
    
    
    crearCaja();
    if(contador<=0){
        clearInterval(intervalo);
    }

}

function crearCaja(){
    var div=document.createElement("div");
    div.id="caja";
    div.classList.add("clase_caja");
    document.getElementById("juego").appendChild(div);
}