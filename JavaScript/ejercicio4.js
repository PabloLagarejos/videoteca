function realizarOferta(){
    var edad;
    var coche;
    var precio;
    const cocheSi="si";
    edad=parseInt(prompt("Introduzca su edad: "));
    coche=prompt("Tiene usted coche?: ");
    
    if ((edad>=18)&&(coche.localeCompare(cocheSi)==0))
    {
        precio=((edad*0.4)+50);
        alert("Tiene usted esta oferta: "+precio);
    }
    else
    {
        alert("No tiene ninguna oferta")

    }
     
 
}