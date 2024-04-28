package expresiones;
import java.util.Scanner;
public class Piloto{
	private String DNIpiloto;
	private String nombrePiloto;
	private String apellidoPiloto;
	private String rankingPiloto;
	private int puntuacionPiloto;
	
	public Piloto(){
		DNIpiloto="00000000X";
		nombrePiloto="Anonimo";
		apellidoPiloto="Solo";
		rankingPiloto="0";
		puntuacionPiloto=0;
	}
	public Piloto(String DNI,String nombre,String apellido, String ranking, int puntuacion){
		DNIpiloto=DNI;
		nombrePiloto=nombre;
		apellidoPiloto=apellido;
		rankingPiloto=ranking;
		puntuacionPiloto=puntuacion;
	}
	public void setDNI(String DNIInput){
		DNIpiloto=DNIInput;
	}
	public void setNombre(String nombreIntput){
		nombrePiloto=nombreIntput;
	}
	public void setApellido(String apellidoIntput){
		apellidoPiloto=apellidoIntput;
	}
	public void setRanking(String rankingIntput){
		rankingPiloto=rankingIntput;
	}
	public void setPuntuacion(int puntuacionIntput){
		puntuacionPiloto=puntuacionIntput;
	}
	public void mostrarInfo() {
		System.out.println("\\----------*---------//");
		System.out.println("DNI: "+DNIpiloto);
		System.out.println("Nombre: "+nombrePiloto);
		System.out.println("Apellido: "+apellidoPiloto);
		System.out.println("Ranking: "+rankingPiloto);
		System.out.println("Puntos: "+puntuacionPiloto);
		System.out.println("//----------*---------\\");
	}
	public String getRankingPiloto() {
		return rankingPiloto;
	}
	public String getDNIpiloto(){
		return DNIpiloto;
	}
	public String getNombrepiloto(){
		return nombrePiloto;
	}
	public int getPuntuacionPiloto(){
		return puntuacionPiloto;
	}
	}
