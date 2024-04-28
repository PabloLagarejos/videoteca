
function DividirEnDos(){
    var texto;
    var longitudEntreDos;
    var mitadPrimera;
    var segundaMitad;
    texto=prompt("Introduzca un texto: ")
     
    longitudEntreDos=(texto.length)/2;
    mitadPrimera=texto.substr(0,longitudEntreDos);
    segundaMitad=texto.substr(longitudEntreDos,texto.length);
     
    alert(mitadPrimera+"---"+segundaMitad);
 
}