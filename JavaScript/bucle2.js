function mostrarTablaMultiplicar(){
    var numero;
    resultado=0;
    numero=parseInt(prompt("qué tabla de multiplicar desea conocer?"))
    resultadoSalida="";
    stringResultado="";
    for(i=0;i<=10;i++)
    {
        stringResultado=i+" X "+numero;
        resultado=stringResultado+" = "+numero*i;
        resultadoSalida=resultadoSalida+"\n"+resultado
    }
    alert(resultadoSalida)
}