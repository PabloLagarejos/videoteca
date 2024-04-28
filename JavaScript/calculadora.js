function activarCalculadora()
{



let numero1=0;
let numero2=0;
let operacion=0;
let resultado=0;

numero1=parseInt(prompt("Introduzca un número")) 
numero2=parseInt(prompt("Introduzca otro número")) 
operacion=parseInt(prompt("Qué operación desea realizar: 1-sumar, 2-restar, 3-multiplicar, 4-dividir")) 

switch(operacion)
{
    case 1:
        resultado=numero1+numero2;
        alert("la suma es: "+resultado);
    break;

    case 2:
        resultado=numero1-numero2;
        alert("la resta es: "+resultado);
    break;

    case 3:
        resultado=numero1*numero2;
        alert("la multiplicacion es: "+resultado);
    break;

    case 4:
        resultado=numero1/numero2;
        alert("la division es: "+resultado);
    break;

    default:
        alert("la operación es erronea");
}
}