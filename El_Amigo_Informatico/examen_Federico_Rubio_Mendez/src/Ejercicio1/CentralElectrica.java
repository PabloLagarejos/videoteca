package Ejercicio1;
import java.util.Scanner;
public class CentralElectrica{
	static Scanner lectorEntrada;
public static void main(String[]args){
	boolean salir=false;
	int respuestaUsuario;
	Molino molino1=new Molino();
	Molino molino2=new Molino(true,1543.8,356.2,123.6,134.4,1964);

	do { mostrarMenu();
		respuestaUsuario=preguntaUsuario();
		switch(respuestaUsuario){
			case 1:
				darAltaMolino(molino1);
				break;
			case 2:
				arrancarPararMolino(molino1,molino2);
				break;
			case 3:
				molino1.mostrarInformacion();
				molino2.mostrarInformacion();
				break;
			case 4:
				salir=true;
				break;
			default:
				System.out.println("Opcion Erronea");
		}
	}
	while(!(salir));

}
private static void mostrarMenu() {
	System.out.println("1.Dar de alta un molino\n"
						+"2.Arrancar o detener molino\n"
						+"3.Mostrar informacion de los molinos\n"
						+"4.Salir");

	
}
private static int preguntaUsuario(){
	int respuestaUsuario;
	lectorEntrada=new Scanner(System.in);
	respuestaUsuario=lectorEntrada.nextInt();
	return respuestaUsuario;
	}
private static Molino darAltaMolino(Molino inputMolino){
	lectorEntrada=new Scanner(System.in);
	String Funcionamiento;
	boolean movimiento = false;
	double potencia,velocidadMin,longitud,latitud;
	int añoFabricacion;
	System.out.println("indica si el molino esta en funcionamiento: s/n");
	Funcionamiento=lectorEntrada.next();
	if(Funcionamiento.equals("s")){
		movimiento=true;
	}
	if(Funcionamiento.equals("s")){
		movimiento=true;
	}
	else if(Funcionamiento.equals("n")){
		movimiento=false;
	}
	else {
		System.out.println("error al introducir los datos");
	}
	inputMolino.setMovimiento(movimiento);
	System.out.println("Introduce la potencia del molino: ");
	potencia=lectorEntrada.nextDouble();
	inputMolino.setPotencia(potencia);
	System.out.println("Introduce la velocidad minima del molino: ");
	velocidadMin=lectorEntrada.nextDouble();
	inputMolino.setVelocidadMin(velocidadMin);
	System.out.println("Introduce la longitud a la que se encuenta el molino: ");
	longitud=lectorEntrada.nextDouble();
	inputMolino.setLongitud(longitud);
	System.out.println("Introduce la latitud a la que se encuenta el molino: ");
	latitud=lectorEntrada.nextDouble();
	inputMolino.setLatitud(latitud);
	System.out.println("Introduce el año de creacion del molino: ");
	añoFabricacion=lectorEntrada.nextInt();
	inputMolino.setAñoFabricacion(añoFabricacion);
	return inputMolino;
}
private static void arrancarPararMolino(Molino inputMolino1,Molino inputMolino2) {
	int opcionUsuario,seleccionUsuario;
	System.out.println("Selecione el primer molino o el segundo: ");
	opcionUsuario=lectorEntrada.nextInt();
	
	if(opcionUsuario==1){
		System.out.println("Selecione: \n"
					+"1.Encender molino\n"
					+"2.Apagar molino");
		seleccionUsuario=lectorEntrada.nextInt();
		if(seleccionUsuario==1) {
			inputMolino1.encenderMolino();
		}
		else if(seleccionUsuario==2) {
			inputMolino1.apagarMolino();
		}
		else {
			System.out.println("Error al introducir la opcion");
		}
	}
	else if(opcionUsuario==2){
		System.out.println("Selecione: \n"
				+"1.Encender molino\n"
				+"2.Apagar molino");
	seleccionUsuario=lectorEntrada.nextInt();
		if(seleccionUsuario==1) {
			inputMolino2.encenderMolino();
		}
		else if(seleccionUsuario==2) {
			inputMolino2.apagarMolino();
		}
		else {
			System.out.println("Error al introducir la opcion");
		}
		
	}
	else {
		System.out.println("Error al introducir la opcion");
	}
}

	
}