/*Realiza un programa javascript que pida al usuario
un texto, pregunte al usuario si quiere concatenarlo
en la salida, en caso afirmativo lo concatenará y
volverá a preguntar. Ver función concat y operador
“+”*/


function concatenar(){
     
    const concatenaSi="s";
    var concatena="";
    var texto="";
    var textoFinal="";

    texto=prompt("Introduzca un texto: ");
    concatena=prompt("Desea concatenarlo?: s/n ");

    while (concatena.localeCompare(concatenaSi)==0)
    {
        textoFinal=textoFinal.concat(texto);
        texto=prompt("Introduzca un texto: ");
        concatena=prompt("Desea concatenarlo?: s/n ");
    }
    

    alert("la serie de palabras es: "+textoFinal);
}