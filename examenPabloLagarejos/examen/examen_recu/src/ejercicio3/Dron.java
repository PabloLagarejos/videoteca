package ejercicio3;

public class Dron extends Deporte_online {
	
	  int numeroPartic;
	
	

	Dron(String idEventoIn,String nombreEventoIn,int duracionEventoIn,int numeroParticIn){
		
		super(idEventoIn,nombreEventoIn,duracionEventoIn);
		this.numeroPartic=numeroParticIn;
		
	}
	Dron(){
		
	}
	public int getNumeroPartic() {
		return numeroPartic;
	}

	public void setNumeroPartic(int numeroPartic) {
		this.numeroPartic = numeroPartic;
	}
	
	public double mostrarInfluencia(){
		 double influencia=0;
		 influencia=this.numeroPartic*0.50;
		 return influencia; 
	 }
	public String toString() {
		String cadena="------Drones--------\n";
		cadena=cadena+super.toString()+"\n";
		cadena=cadena+"Numero de particicpantes: "+this.numeroPartic+"\n";
		cadena=cadena+"-----------------------------------------\n";
		return cadena;
		
	}
}
