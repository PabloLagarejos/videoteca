package ejercicio3;

abstract class Deporte_online {
	String idEvento;
	String nombreEvento;
	int duracionEvento;
	
	Deporte_online(String idEventoIn,String nombreEventoIn,int duracionEventoIn){
		this.idEvento=idEventoIn;
		this.nombreEvento=nombreEventoIn;
		this.duracionEvento=duracionEventoIn;
	}
	Deporte_online(){
		this.idEvento="";
		this.nombreEvento="";
		this.duracionEvento=0;
	}
	public String getIdEvento() {
		return idEvento;
	}
	public void setIdEvento(String idEvento) {
		this.idEvento = idEvento;
	}
	public String getNombreEvento() {
		return nombreEvento;
	}
	public void setNombreEvento(String nombreEvento) {
		this.nombreEvento = nombreEvento;
	}
	public int getDuracionEvento() {
		return duracionEvento;
	}
	public void setDuracionEvento(int duracionEvento) {
		this.duracionEvento = duracionEvento;
	}
	abstract double mostrarInfluencia();
	public int mostrarCoste() {
		int coste=0;
		coste=this.duracionEvento*5;
		return coste;
	}
	public String toString() {
		String cadena="-----------------------------\n";
		cadena=cadena+"Id Evento: "+this.idEvento+"\n";
		cadena=cadena+"Nombre del Evento: "+this.nombreEvento+"\n";
		cadena=cadena+"Duración evento: "+this.duracionEvento+"\n";
		cadena=cadena+"-------------------------------\n";
		return cadena;
		
	}
}
