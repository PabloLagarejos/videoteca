<?php
/*    • Realizar un programa que maneje dos arrays, 
en el primero se tendrán los precios netos de una compra de productos 
y en el otro array se tendrá el iva(7, 16 o 21) aplicados a cada uno de los
 productos del array de los productos.
Se pide, que se calcule el precio final del carro de la compra, 
donde para calcular el precio final de cada producto se utilice una función 
en la que se calcule el precio bruto del producto, es decir, el precio más el iva aplicado.
Al mostrar el resultado, se mostrará un desglose del coste de cada producto con su IVA 
y su precio bruto, y al final el coste final.

Ejemplo:
Array_productos[12,23,43,25,34]
Array_IVA[7,16,21,21,7]
Lo se que mostrará por pantalla.
LISTADO DE PRODUCTOS
PRECIO  NETO 
IVA 
PRECIO BRUTO
12
7
12,84
23
16
26,68
43
21
52,03
25
21
30,25
34
7
36,38

TOTAL COMPRA: 158,18 €*/

$arrayPrecios=[12,23,43,25,34];
$arrayIva=[7,16,21,21,7];
$arrayPreciosFinales=[];
$preciosFinales=0;
$total=0;
for($i=0;$i<count($arrayPrecios) ;$i++){
    $preciosFinales=($arrayPrecio[$i]*$arrayIva[$i]/100)+$arrayPrecio[$i];
    array_push($arrayPreciosFinales,$preciosFinales);
    print($preciosFinales);
}
foreach($arrayPreciosFinales as $preciosFinales){
    $total=$total+$preciosFinales;
   
}
print($total);


?>