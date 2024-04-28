package ejercicio1;

public class Planta {
	String nombreComun;
	String nombreCientifico;
	int anio;
	
	Planta(String nombreCo,String nombreSfi,int anioIn){
		
		 this.nombreComun=nombreCo;
		 this.nombreCientifico=nombreSfi;
		 this.anio=anioIn;
	}
	Planta(){
		this.nombreComun="" ;
		 this.nombreCientifico="" ;
		 this.anio=0 ;
	}
	
	public String toString() {
		String cadena="-------------Planta----------------\n";
		cadena=cadena+"Nombre com�n:"+nombreComun+"\n";
		cadena=cadena+"Nombre cientifico:"+nombreCientifico+"\n";
		cadena=cadena+"A�o:"+anio+"\n";
		cadena=cadena+"--------------------------------------\n";
		return cadena;
	}
	public boolean equals(Object objeto) {
		boolean igual=false;
		if((objeto!=null)&&(objeto instanceof Planta)){
			if(((Planta)objeto).nombreComun.equals(this.nombreComun)
					&&((Planta)objeto).nombreCientifico.equals(this.nombreCientifico)
					&&((Planta)objeto).anio==this.anio){
			igual=true;
		}
			else {
				igual=false;
			}
		}
		return igual;
	}

}
