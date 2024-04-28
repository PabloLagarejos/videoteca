package ejerciciosCasa;
/**
 * <h1>Práctica Aeropuerto</h1>
 * @author usuario pabloLagarejosTricas
 * @version 2.0
 * Clase Avion representa aviones creados desde el aeropuerto
 *
 */
public class Avion {
	private int id;
	private String nombre;
	private int combustible;
	private int capacidadPasajeros;
	private String vueloOAterrizado;
	
	
/**
 * Constructor, aparece vacio pues depende de variables que se introducirán desde Aeropuerto	 
 */	
	Avion()
	{
		
	}

	/*Avion (int  idAvion,String nombreAvion, int combustibleAvion, int capacidadPasajerosAvion, String vueloOAterrizadoAvion)
	 {
		 id=idAvion;
		 nombre=nombreAvion;
		 combustible=combustibleAvion;
		 capacidadPasajeros=capacidadPasajerosAvion;
		 vueloOAterrizado=vueloOAterrizadoAvion;
	 }
	 */
	
/**
 * El metodo mostrar información mostrará los atributos de los aviones creados
 */
	public void mostrarInfoAvion(){
		System.out.println("--------------");
		System.out.println("ID: "+id);
		System.out.println("NOMBRE: "+nombre);
		System.out.println("COMBUSTIBLE: "+combustible);
		System.out.println("NUMERO DE PASAJEROS: "+capacidadPasajeros);
		System.out.println("SITUACION: "+vueloOAterrizado);
		System.out.println("--------------");
	}
	/**
	 * 
	 * @return id
	 */
	public int getId() {
		return id;
	}
	/**
	 * 
	 * @param idEntrada
	 */
	public void setId(int idEntrada){
		 id = idEntrada;
	}
	/**
	 * 
	 * @return nombre
	 */
	public String getNombre()
	{
		return nombre;
	}
	/**
	 * 
	 * @param nombreEntrada
	 */
	public void setNombre(String nombreEntrada) {
		nombre=nombreEntrada;
	}
	/**
	 * 
	 * @return combustible
	 */
	public int getCombustible() {
		return combustible;
	}
	/**
	 * 
	 * @param combustibleEntrada
	 */
	public void setCombustible(int combustibleEntrada) {
		combustible=combustibleEntrada;
	}
	/**
	 * 
	 * @return capacidadPasajeros
	 */
	public int getCapacidadPasajeros() {
		return capacidadPasajeros;
	}
	/**
	 * 
	 * @param capacidadPasajerosEntrada
	 */
	
	public void setCapacidadPasajeros(int capacidadPasajerosEntrada) {
		 capacidadPasajeros=capacidadPasajerosEntrada;
	}
	/**
	 * 
	 * @return estado
	 */
	public String getVueloOAterrizado()
	{
		return vueloOAterrizado;
	}
	/**
	 * 
	 * @param nuevoEstado
	 */
	public void setVueloOAterrizado(String nuevoEstado)
	{
		vueloOAterrizado=nuevoEstado;
	}
	/**
	 * 
	 * @param cargaCombustible
	 */
	
	public void setEcharCombustible(int cargaCombustible) {
		
		combustible=combustible+cargaCombustible;	
	}
	 
	 
}
	 
	 
