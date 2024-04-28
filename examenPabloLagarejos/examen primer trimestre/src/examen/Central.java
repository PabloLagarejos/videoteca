package examen;

import java.util.Scanner;

public class Central {
	
	static Scanner lectorEntrada;
	public static void main (String[] args) {
		lectorEntrada = new Scanner (System.in);
		
		Molino molino1=new Molino();
		Molino molino2=new Molino(00001,"off",23.6,2.4,"280N,120S",2014);
		 
		
		int opcionUsuario;
		String onOffMolino;
	    do
	    {
	    	System.out.println("Qué opción deseas?:\n"
	    			+ "1.Crear nuevo molino\n"
	    			+ "2.Arrancar o parar el molino\n"
	    			+ "3.Mostrar informacion del molino\n"
	    			+ "4.Salir del Sistema");
	    	opcionUsuario=lectorEntrada.nextInt();
	    	switch(opcionUsuario) {
	    		case 1:
	    			crearMolino(molino1);
	    			break;
		    	case 2:
		    		System.out.println("Elija una opción:\n"
		    				+ "1.Arrancar\n"
		    				+ "2.Parar");
		    		onOffMolino=lectorEntrada.next();
		    		if(onOffMolino.equals("1")) {
		    			arrancarMolino(molino1,molino2);
		    		}
		    		else if(onOffMolino.equals("2")) {
		    			pararMolino(molino1,molino2);
		    		}
		    		else {
		    			System.out.println("Esa opción deja igual el estado de los molinos");
		    		}
		    		break;
		    	case 3:
		    		molino1.mostrarInfo();
		    		molino2.mostrarInfo();
		    		break;
		    	  
	    	}
	    }
	    while(opcionUsuario!=4);
	    System.out.println("Hasta pronto");
	    lectorEntrada.close();
	}
	private static void crearMolino(Molino inMolino) {
		 int idMol ;
		 String estadoMol ;
		 double potenciaMol ;
		 double velocidadMol ;
		 String coordenadasMol ;
		 int anoMol ;
		 System.out.println("Introduzca el id del Molino: ");
		 idMol=lectorEntrada.nextInt();
		 inMolino.setId(idMol);
		 System.out.println("introduzca el estado del molino on/off: ");
		 estadoMol=lectorEntrada.next();
		 inMolino.setEstado(estadoMol);
		 System.out.println("introduzca la potencia del molino: ");
		 potenciaMol=lectorEntrada.nextDouble();
		 inMolino.setPotencia(potenciaMol);
		 System.out.println("introduzca la velocidad minima del molino: ");
		 velocidadMol=lectorEntrada.nextDouble();
		 inMolino.setVelocidad(velocidadMol);
		 System.out.println("introduzca las coordenadas del molino: ");
		 coordenadasMol=lectorEntrada.next();
		 inMolino.setCoordenadas(coordenadasMol);
		 System.out.println("Introduzca el año del Molino: ");
		 anoMol=lectorEntrada.nextInt(); 
		 inMolino.setAno(anoMol);
	}
	private static void arrancarMolino(Molino molinoIn1,Molino molinoIn2) {
		String opcionUsuario;
		System.out.println("Qué molino desea arrancar 1 ó 2?");
		opcionUsuario=lectorEntrada.next();
		if (opcionUsuario.equals("1")) {
			molinoIn1.molinoOn();
		}
		else if(opcionUsuario.equals("2")) {
			molinoIn2.molinoOn();
		}
		else {
			System.out.println("Los molinos no cambian su estado:");
		}
	}
	private static void pararMolino(Molino molinoIn1,Molino molinoIn2) {
		String opcionUsuario;
		System.out.println("Qué molino desea arrancar 1 ó 2?");
		opcionUsuario=lectorEntrada.next();
		if (opcionUsuario.equals("1")) {
			molinoIn1.molinoOff();
		}
		else if(opcionUsuario.equals("2")) {
			molinoIn2.molinoOff();
		}
		else {
			System.out.println("Los molinos no cambian su estado:");
		}
	}
}
