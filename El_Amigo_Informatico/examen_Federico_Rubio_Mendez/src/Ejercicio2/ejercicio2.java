package Ejercicio2;
import java.util.Scanner;
public class ejercicio2{
	static Scanner lectorEntrada;
public static void main(String[]args){
	boolean salir=false;
	int numeroUsuario1,numeroUsuario2,resultado;
	String RespuestaUsuario;
	do {
		numeroUsuario1=pedirNumeroUsuario();
		numeroUsuario2=pedirNumeroUsuario();
		resultado=multipicarDosNumeros(numeroUsuario1,numeroUsuario2);
		System.out.println("El resultado de la multiplicacion es: "+resultado);
		salir=comprobarDivisible5(resultado);
		RespuestaUsuario=preguntaUsuario();
		if(RespuestaUsuario.equals("n")){
			salir=true;
		}
	}
	while(!(salir));
	}
	public static String preguntaUsuario(){
		lectorEntrada=new Scanner(System.in);
		String respuesta;
		System.out.println("Desea Continuar? s/n");
		respuesta=lectorEntrada.next();
		return respuesta;
	}
	public static int pedirNumeroUsuario(){
		lectorEntrada=new Scanner(System.in);
		int inputNumero;
		System.out.println("Introduce un numero: ");
		inputNumero=lectorEntrada.nextInt();
		return inputNumero;
	}
	public static int multipicarDosNumeros(int inputNumero1,int inputNumero2){
		int multiplicacion;
		multiplicacion=inputNumero1*inputNumero2;
		return multiplicacion;	
	} 
	public static boolean comprobarDivisible5(int inputNumero){
		boolean divisibilidad;
		if(inputNumero%5==0){
			divisibilidad=true;
		}
		else {
			divisibilidad=false;
		}
		return divisibilidad;
		
	}
}