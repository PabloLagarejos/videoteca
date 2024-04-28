package examen;

import java.util.Scanner;

public class ejercicio2 {
	

	static Scanner lectorEntrada;
	
	public static void main (String[] args) {
		
		lectorEntrada = new Scanner (System.in);
		int numeroUsuario1;
		int numeroUsuario2;
		int resultado;
		String opcionUsuario;
		do {
		System.out.println("introduzaca un numero: ");
		numeroUsuario1=lectorEntrada.nextInt();
		System.out.println("introduzaca otro numero: ");
		numeroUsuario2=lectorEntrada.nextInt();
		
		resultado=multiplicar(numeroUsuario1,numeroUsuario2);
		System.out.println("El resultado de la multipllicación es: "+resultado);
		System.out.println("Desea usted terminar?s/n: ");
		opcionUsuario=lectorEntrada.next(); 
		}
		while(opcionUsuario.equals("n")&&(divisible(resultado)==false));
		
		System.out.println("Hasta pronto");
	    lectorEntrada.close();
	}
	public static int multiplicar(int numero1,int numero2) {
		
		 int multiplicacion;
		 
		 multiplicacion=numero1*numero2;
		 
		 return multiplicacion;
	}	
	
	public static boolean divisible(int numero) {
		boolean resultado;
		if(numero%5==0) {
			resultado=true;
		}
		else {
			resultado=false;
		}
		return resultado;
	}
}
