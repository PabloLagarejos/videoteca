 
function encender(){
    var bombilla=document.getElementById("bombillaOff");
    bombilla.id="bombillaOn";
    bombilla.src="img/encender.png";
    document.body.div.appendChild(bombilla);
}
function apagar(){
    var bombilla=document.getElementById("bombillaOn");
    bombilla.id="bombillaOff";
    bombilla.src="img/apagar.png";
    document.body.div.appendChild(bombilla);
}
