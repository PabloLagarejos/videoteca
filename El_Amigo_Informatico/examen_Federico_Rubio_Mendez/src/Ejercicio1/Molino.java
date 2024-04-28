package Ejercicio1;
import java.util.Scanner;
public class Molino{
	/**
	 * @author Federico Rubio Mendez
	 * @version 1.0
	 **/
	private boolean movimiento;
	private double potencia;
	private double velocidadMin;
	private double longitud;
	private double latitud;
	private int a�oFabricacion;
	
	/**
	 *  * @apiNote se les da un valor por defecto a las variables a traves de un constructor vacio
	 */
	Molino(){
	movimiento=false;
	potencia=0.0;
	velocidadMin=0.0;
	longitud=0.0;
	latitud=0.0;
	a�oFabricacion=0;
}
/**
 * 
 * @param inputMovimiento
 * @param inputPotencia
 * @param inputVelocidadMin
 * @param inputLongitud
 * @param inputLatitud
 * @param inputA�oFabricacion
 * @apiNote se les da un valor a las variables a traves de un constructor
 */
Molino(boolean inputMovimiento, double inputPotencia, double inputVelocidadMin,double inputLongitud, double inputLatitud,int inputA�oFabricacion){
	movimiento=inputMovimiento;
	potencia=inputPotencia;
	velocidadMin=inputVelocidadMin;
	longitud=inputLongitud;
	latitud=inputLatitud;
	a�oFabricacion=inputA�oFabricacion;
	}
/**
 * 
 * @param inputMolino
 * @apiNote es un valor de entrada para generar un objeto copia similar a el a traves de un constructor
 */
Molino(final Molino inputMolino){
	movimiento=inputMolino.movimiento;
	potencia=inputMolino.potencia;
	velocidadMin=inputMolino.velocidadMin;
	longitud=inputMolino.longitud;
	latitud=inputMolino.latitud;
	a�oFabricacion=inputMolino.a�oFabricacion;
	
}
/**
 * @param inputMovimiento
 * @return
 */
public boolean setMovimiento(boolean inputMovimiento){
	movimiento=inputMovimiento;
	return movimiento;
}
/**
 * @param inputPotencia
 * @return
 */
public double setPotencia(double inputPotencia){
	potencia=inputPotencia;
	return potencia;
}
/**
 * @param inputVelocidadMin
 * @return
 */
public double setVelocidadMin(double inputVelocidadMin){
	velocidadMin=inputVelocidadMin;
	return velocidadMin;
}
/**
 * @param inputLongitud
 * @return
 */
public double setLongitud(double inputLongitud){
	longitud=inputLongitud;
	return longitud;
}
/**
 * @param inputLatitud
 * @return
 */
public double setLatitud(double inputLatitud){
	latitud=inputLatitud;
	return latitud;
}
/**
 * @param inputA�oFabricacion
 * @return
 */
public int setA�oFabricacion(int inputA�oFabricacion){
	a�oFabricacion=inputA�oFabricacion;
	return a�oFabricacion;	
}
/**
 * @implNote metodo para imprimir informacion de un molino
 */
public void mostrarInformacion() {
	System.out.println("*---------*---------*");
	if(movimiento==true){
		System.out.println("Estado: En movimiento");
	}
	else {
		System.out.println("Estado: Parado");
		
	}
	System.out.println("Potencia: "+potencia);
	System.out.println("Velocidad Minima: "+velocidadMin);
	System.out.println("Cordenadas: "+longitud+latitud);
	System.out.println("A�o de fabricacion: "+a�oFabricacion);
	System.out.println("*---------*---------*");
}
/**
 * metordo para encender un molino
 */
public void encenderMolino(){
	if(movimiento=true) {
		System.out.println("Error al encender molino, este ya esta en funcionamiento");
	}
	else {
		setMovimiento(true);
	}
}
/**
 * metodo para apagar un molin0
 */
public void apagarMolino(){
	if(movimiento=false) {
		System.out.println("Error al encender molino, este ya esta apagado");
	}
	else {
		setMovimiento(false);
	}
}
}
