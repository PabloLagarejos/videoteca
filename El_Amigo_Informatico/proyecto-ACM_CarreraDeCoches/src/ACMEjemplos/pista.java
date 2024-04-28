package ACMEjemplos;

import java.util.Scanner;

import acm.program.*;
import expresiones.Agencia;
import expresiones.Piloto;
import expresiones.Cuenta;
import expresiones.Banco;
import acm.graphics.*;
import java.awt.*;
import java.lang.Thread;

public class pista extends GraphicsProgram{
	private static final int TIEMPO_PARADA=1;
	private static final int ANCHO_VENTANA=1000;
	private static final int ALTO_VENTANA=600;
	private static final int POSICION_INICIO=0;
	public void run(){
		Scanner lectorEntrada = new Scanner (System.in);
		setSize(ANCHO_VENTANA,ALTO_VENTANA);
		setBackground(Color.WHITE);
		double cont=0,cont2=0,cont3=0,saldo1=0,saldo2=0,saldo3=0;
		int puntuacionCoche1 =0,puntuacionCoche2 =0,puntuacionCoche3 =0;
		String colorCuerpo,colorCabeza,dorsalCoche1,dorsalCoche2,dorsalCoche3,DNIPrimerPiloto,DNISegundoPiloto,DNITercerPiloto;
		GLine meta;
		GImage bandera;
		Agencia agencia1=new Agencia();
		dorsalCoche1=agencia1.obtenerRankingPiloto1();
		dorsalCoche2=agencia1.obtenerRankingPiloto2();
		dorsalCoche3=agencia1.obtenerRankingPiloto3();
		DNIPrimerPiloto=agencia1.obtenerDNIpiloto1();
		DNISegundoPiloto=agencia1.obtenerDNIpiloto2();
		DNITercerPiloto=agencia1.obtenerDNIpiloto3();
		
		Camion Camion1=new Camion(200,200,dorsalCoche1,DNIPrimerPiloto);
		Camion Camion2=new Camion(200,200,dorsalCoche2,DNISegundoPiloto);
		Camion Camion3=new Camion(200,200,dorsalCoche3,DNITercerPiloto);
		meta=new GLine(ANCHO_VENTANA-120,0,ANCHO_VENTANA-120,ALTO_VENTANA);
		meta.setColor(Color.BLACK);
		add(meta);
		Camion1.ColorCuerpo("rojo");
		Camion1.colorCabeza("amarillo");
		Camion2.ColorCuerpo("verde");
		Camion2.colorCabeza("azul");
		Camion3.ColorCuerpo("naranja");
		Camion3.colorCabeza("rosa");
		add(Camion1,POSICION_INICIO,(ALTO_VENTANA/3)-100);
		add(Camion2,POSICION_INICIO,(ALTO_VENTANA/2)-50);
		add(Camion3,POSICION_INICIO,ALTO_VENTANA-200);
		bandera=new GImage("bandera.PNG");
		
		while(Camion1.getX()<(ANCHO_VENTANA-180)&&Camion2.getX()<(ANCHO_VENTANA-180)&&Camion3.getX()<(ANCHO_VENTANA-180)){
			moverCamion(Camion1,TIEMPO_PARADA,cont,90);
			moverCamion(Camion2,TIEMPO_PARADA,cont2,200);
			moverCamion(Camion3,TIEMPO_PARADA,cont3,320);
			cont+=Math.random();
			cont3+=Math.random();
			cont2+=Math.random();
			if(Camion1.getX()>(ANCHO_VENTANA-180)) {
				add(bandera,860,0);
				puntuacionCoche1=10;
				saldo1+=10000;
			}
			else if(Camion2.getX()>(ANCHO_VENTANA-180)){
				add(bandera,860,0);
				puntuacionCoche2=10;
				saldo2+=10000;
			}
			else if(Camion3.getX()>(ANCHO_VENTANA-180)){
				add(bandera,860,0);
				puntuacionCoche3=10;
				saldo3+=10000;
			}
			}
		
			
			agencia1.cabiarPuntuacion(puntuacionCoche1, puntuacionCoche2, puntuacionCoche3);
			agencia1.actualizarRanking();
			agencia1.actualizarSaldo(saldo1, saldo2, saldo3);
			agencia1.mostrarInfo();
			agencia1.mostrarInfoBanco();
				
	}
	private void moverCamion(Camion camionInput,int tiempoP,double contInput,int posicion) {
		camionInput.setLocation(contInput,(posicion+(30*Math.sin(contInput/40))));
		pause(tiempoP);
	}
	
}