package examen;

import java.util.Scanner;

public class ejercicio3 {
	
static Scanner lectorEntrada;
	
	public static void main (String[] args) {
		
		lectorEntrada = new Scanner (System.in);
		
		String ciudades="";
		int contador=0;
		do {
		System.out.println("Escriba el nombre de una ciudad para contar ciudades o la palabra salir para terminar: ");
		ciudades=lectorEntrada.next();
		contador+=1;
		ciudades=ciudades.toUpperCase();
		System.out.println("Ha escrito usted: "+ciudades);
		}
		while(!(ciudades.equals("SALIR")));
		System.out.println("Ha escrito usted "+(contador-1)+" ciudades");
	}
}
