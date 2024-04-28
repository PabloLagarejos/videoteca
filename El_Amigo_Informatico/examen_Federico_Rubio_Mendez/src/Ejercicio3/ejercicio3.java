package Ejercicio3;
import java.util.Scanner;
public class ejercicio3{
public static void main(String[]args){
	Scanner lectorEntrada= new Scanner(System.in);
	int contadorCiudades=0;
	String ciudadUsuario;
	boolean salir=false;
	
	do{
		System.out.println("Introduce el nombre de una ciudad o escribe salir para terminar el programa: ");
		ciudadUsuario=lectorEntrada.next();
		if(ciudadUsuario.equals("salir")||ciudadUsuario.equals("SALIR")) {
			salir=true;
		}
		else {
			System.out.println("Ciudad: "+ciudadUsuario);
			contadorCiudades+=1;
		}
	}
	while(!(salir));
	System.out.println("Numero Ciudades intrducidas: "+contadorCiudades);

	
}
}