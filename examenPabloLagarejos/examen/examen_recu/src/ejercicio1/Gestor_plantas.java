package ejercicio1;

import java.util.Scanner;

public class Gestor_plantas {
	private static Planta[]ListaPlantas;
	static Scanner Teclado;
	public static void main(String[]Args) {
		Planta planta3=new Planta();
		ListaPlantas=new Planta[3];
		Teclado=new Scanner(System.in);
		int opcionUsuario=0;
		while(opcionUsuario!=6) {
		System.out.println("Elija una opcion:\n"
				+ "1.Insertar Planta con get/set"
				+ "2.insertar Planta constructor normal"
				+ "3.insertar Planta constructor copia"
				+ "4.comprobar dos objetos iguales"
				+ "5.Mostrar info objeto"
				+ "6.Salir");
		opcionUsuario=Teclado.nextInt();
		
			switch(opcionUsuario) {
			case 1:
				insertar1();
				break;
			case 2:
				insertar2();
				break;
			case 3:
				insertar3(planta3);
				break;
			case 4:
				comprobarIguales();
				break;
			case 5:
				for(Planta planta:ListaPlantas) {
					System.out.println(planta);
				}
				break;
			case 6:
				System.out.println("Adios");
				break;
			default:
			System.out.println("Errrorrr!!!!");
			}
		}
		
	}
	
	public static boolean comprobarIguales() {
		boolean iguales=false;
		String nombreComunUsu;
		String nombreSfiUsu;
		int anioUsu;
		
		System.out.println("Diga el nombre comun");
		nombreComunUsu=Teclado.next();
		
		System.out.println("Diga el nombre comun");
		nombreSfiUsu=Teclado.next();
		
		System.out.println("Diga el nombre comun");
		anioUsu=Teclado.nextInt();
		
		
		
		Planta plantaIn=new Planta(nombreComunUsu,nombreSfiUsu,anioUsu);
		
		for(int i=0;i<ListaPlantas.length;i++) {
			
			if((ListaPlantas[i]!=null)&&(ListaPlantas[i]instanceof Planta)){
				if(ListaPlantas[i].equals(plantaIn)) {
					iguales=true;
					System.out.println("hemos encontrado un elemento igual");
				}
				else {
					iguales=false;
				}
			}
			
		}
		return iguales;
	}
	public static boolean insertar1() {
		 
		boolean insertar=false;
		int contador=0;
		String nombreComunUsu;
		String nombreSfiUsu;
		int anioUsu;
		
		System.out.println("Diga el nombre comun");
		nombreComunUsu=Teclado.next();
		
		System.out.println("Diga el nombre comun");
		nombreSfiUsu=Teclado.next();
		
		System.out.println("Diga el nombre comun");
		anioUsu=Teclado.nextInt();
		
		
		
		Planta plantaIn=new Planta();
		
		plantaIn.setNombreComun(nombreComunUsu);
		plantaIn.setNombreCientifico(nombreSfiUsu);
		plantaIn.setAnio(anioUsu);
		
		
		 while((!insertar)&(contador<ListaPlantas.length)) {
			 if(ListaPlantas[contador]==null) {
				 ListaPlantas[contador]=plantaIn;
				 insertar=true;
			 }
			 
		 }
		 return insertar;
		 
	}
	public static boolean insertar2() {
		 
		boolean insertar=false;
		int contador=0;
		String nombreComunUsu;
		String nombreSfiUsu;
		int anioUsu;
		
		System.out.println("Diga el nombre comun");
		nombreComunUsu=Teclado.next();
		 
		System.out.println("Diga el nombre comun");
		nombreSfiUsu=Teclado.next();
		 
		System.out.println("Diga el nombre comun");
		anioUsu=Teclado.nextInt();
		 
		Planta plantaIn=new Planta(nombreComunUsu,nombreSfiUsu,anioUsu);
		
		while((!insertar)&(contador<ListaPlantas.length)) {
			 if(ListaPlantas[contador]==null) {
				 ListaPlantas[contador]=plantaIn;
				 insertar=true;
			 }
			 
		 }
		 return insertar;
	}
	public static void insertar3(Planta plantaIn) {
		plantaIn=ListaPlantas[1];
	}
	
	
}
