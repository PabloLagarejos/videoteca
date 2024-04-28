package examen;

public class Molino {
	/**
	 * @author Pablo Lagarejos Tricas
	 * @version 1.0
	 **/
	private int idMolino;
	private String estadoMolino;
	private double potenciaMolino;
	private double velocidadMinimaMolino;
	private String coordenadasMolino;
	private int anoMolino;
	/**
	 *  * @apiNote constructor vacio.
	 */
	public Molino(){
		idMolino=0;
		estadoMolino="";
		potenciaMolino=0.0;
		velocidadMinimaMolino=0.0;
		coordenadasMolino="";
		anoMolino=0;	
	}
	/**
	 *  * @apiNote constructor con par�metros.
	 */
	public Molino(int id,String estado,double potencia,double velocidadMinima,String coordenadas,int ano){
		idMolino=id;
		estadoMolino=estado;
		potenciaMolino=potencia;
		velocidadMinimaMolino=velocidadMinima;
		coordenadasMolino=coordenadas;
		anoMolino=ano;	
	}
	/**
	 * @implNote informacion de un molino.
	 */
	public void mostrarInfo(){
		System.out.println("..........................");
		System.out.println("ID del molino: "+idMolino);
		System.out.println("Estado del molino ON/OFF: "+estadoMolino);
		System.out.println("Potencia del molino: "+potenciaMolino);
		System.out.println("Velocidad minima del molino para generar potencia: "+velocidadMinimaMolino);
		System.out.println("Coordenadas de situaci�n del molino: "+coordenadasMolino);
		System.out.println("A�o de fabricaci�n del molino: "+anoMolino);
		System.out.println("...........................");
	}
	/**
	 * @implNote metodo para arrancar un molino si no est� funcionando.
	 */
	public void molinoOn() {
		
		if (estadoMolino.equals("off")) {
			estadoMolino="on";
			System.out.println("Arrancando...");
		}
		else {
			System.out.println("El molino ya estaba arrancado.");
		}
	}
	/**
	 * @implNote metodo para apagar un molino si no est� ya apagado.
	 */
	public void molinoOff() {
		if (estadoMolino.equals("on")) {
			estadoMolino="off";
			System.out.println("Apagando...");
		}
		else {
			System.out.println("El molino ya estaba apagado.");
		}
	}
	/**
	 * @implNote conseguir Id.
	 */
	public int getId() {
		return idMolino;
	}
	/**
	 * @implNote enviar nueva Id.
	 */
	public void setId(int nuevoId) {
		idMolino=nuevoId;
	}
	/**
	 * @implNote conseguir Estado.
	 */
	public String getEstado() {
		return estadoMolino;
	}
	/**
	 * @implNote enviar nuevo Estado.
	 */
	public void setEstado(String nuevoEstado) {
		estadoMolino=nuevoEstado;
	}
	/**
	 * @implNote conseguir Potencia.
	 */
	public double getPotencia() {
		return potenciaMolino;
	}
	/**
	 * @implNote enviar nueva Potencia.
	 */
	public void setPotencia(double nuevoPotencia) {
		potenciaMolino=nuevoPotencia;
	}
	/**
	 * @implNote conseguir Velocidad Minima.
	 */
	public double getVelociad() {
		return velocidadMinimaMolino;
	}
	/**
	 * @implNote enviar nueva Velocidad m�nima.
	 */
	public void setVelocidad(double nuevoVelocidad) {
		velocidadMinimaMolino=nuevoVelocidad;
	}
	/**
	 * @implNote conseguir Coordenadas.
	 */
	public String getCoordenadas() {
		return coordenadasMolino;
	}
	/**
	 * @implNote enviar nuevas coordenadas.
	 */
	public void setCoordenadas(String nuevoCoordenadas) {
		coordenadasMolino=nuevoCoordenadas;
	}
	/**
	 * @implNote conseguir A�o.
	 */
	public int getAno() {
		return anoMolino;
	}
	/**
	 * @implNote enviar nuevo A�o de fabricaci�n.
	 */
	public void setAno(int nuevoAno) {
		anoMolino=nuevoAno;
	}
}