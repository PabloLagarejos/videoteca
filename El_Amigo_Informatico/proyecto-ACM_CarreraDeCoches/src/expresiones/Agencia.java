package expresiones;
import java.util.Scanner;
public class Agencia{
	static Scanner lectorEntrada; 
		private String DNIAgencia;
		private String nombreAgencia;
		private Piloto piloto1;
		private Piloto piloto2;
		private Piloto piloto3;
		private Banco banco1;
		private Cuenta cuenta1;
		private Cuenta cuenta2;
		private Cuenta cuenta3;
		private double presupuesto;
		
	public Agencia(){
		DNIAgencia="5454636W";
		nombreAgencia="Ibai Llanos Co";
		piloto1=new Piloto("36497887Z","Antonio","Antunez","1",0);
		piloto2=new Piloto("12536554X","Paco","Peña","2",0);
		piloto3=new Piloto("34251618Y","Ramiro","Repollez","3",0);
		cuenta1= new Cuenta(0,"Antonio","36497887Z",1234);
		cuenta2= new Cuenta(0, "Paco", "Peña", 4567);
		cuenta3= new Cuenta(0,"Ramiro","Repollez",6789);
		presupuesto=10000;
		Banco banco1=new Banco(presupuesto,cuenta1,cuenta2,cuenta3);
	}
	public void mostrarInfo() {
		System.out.println(DNIAgencia);
		System.out.println(nombreAgencia);
		piloto1.mostrarInfo();
		piloto2.mostrarInfo();
		piloto3.mostrarInfo();
	}
	public void actualizarRanking() {
		if(piloto2.getPuntuacionPiloto()>piloto1.getPuntuacionPiloto()){
			piloto1.setRanking("2");
			piloto2.setRanking("1");
		}
		else if(piloto3.getPuntuacionPiloto()>piloto1.getPuntuacionPiloto()) {
			piloto3.setRanking("1");
			piloto1.setRanking("2");
			piloto2.setRanking("3");
		}
	}
	public void cabiarPuntuacion(int inputPuntuacion1,int inputPuntuacion2,int inputPuntuacion3){
		piloto1.setPuntuacion(inputPuntuacion1);
		piloto2.setPuntuacion(inputPuntuacion2);
		piloto3.setPuntuacion(inputPuntuacion3);
	}
	public void obtenerPiloto(Piloto inputPiloto){
		inputPiloto.getDNIpiloto();
	}
	public void actualizarSaldo(double saldo1,double saldo2,double saldo3) {
		cuenta1.setSaldo(saldo1);
		cuenta2.setSaldo(saldo2);
		cuenta3.setSaldo(saldo3);
	}
	public void ObtenerRankingPiloto(Piloto inputPiloto){
		inputPiloto.getDNIpiloto();
	}
	public String obtenerRankingPiloto1() {
		String ranking=piloto1.getRankingPiloto();
		return ranking;
	}
	public String obtenerRankingPiloto2() {
		String ranking=piloto2.getRankingPiloto();
		return ranking;
	}
	public String obtenerRankingPiloto3() {
		String ranking=piloto3.getRankingPiloto();
		return ranking;
	}
	public void cambiarPuntuacionPiloto(Piloto inputPiloto,int inputPuntuacion){
		inputPiloto.setPuntuacion(inputPuntuacion);
	}
	public String obtenerDNIpiloto1(){
		String DNIPiloto1=piloto1.getDNIpiloto();
		return DNIPiloto1;
	}
	public String obtenerDNIpiloto2(){
		String DNIPiloto2=piloto2.getDNIpiloto();
		return DNIPiloto2;
	}
	public String obtenerDNIpiloto3(){
		String DNIPiloto3=piloto3.getDNIpiloto();
		return DNIPiloto3;
	}
	public void mostrarInfoBanco() {
		cuenta1.mostrarInfo();
		cuenta2.mostrarInfo();
		cuenta3.mostrarInfo();
	}

	}

