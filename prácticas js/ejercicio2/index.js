var ejercicio=document.getElementById("ejercicio");
var parrafo=document.getElementById("parrafo");
ejercicio.addEventListener("mouseover",agrandar);
ejercicio.addEventListener("mouseout",reducir);

function agrandar(){
parrafo.classList.add("resaltado");
}
function reducir(){
parrafo.classList.remove("resaltado");
}