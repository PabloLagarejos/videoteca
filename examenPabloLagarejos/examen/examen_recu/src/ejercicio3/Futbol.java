package ejercicio3;

public class Futbol extends Deporte_online {
	
	String mombreEstadio="";
	double mediaEspecT=0;
	
	Futbol(String idEventoIn,String nombreEventoIn,int duracionEventoIn,String nombreEstIn,double mediaIn){
		super(idEventoIn,nombreEventoIn,duracionEventoIn);
		this.mombreEstadio=nombreEstIn;
		this.mediaEspecT=mediaIn;
	}
}
