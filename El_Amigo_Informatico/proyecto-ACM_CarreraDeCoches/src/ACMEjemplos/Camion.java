package ACMEjemplos;
import java.util.Scanner;


import acm.program.*;
import acm.graphics.*;
import java.awt.*;
import java.lang.Thread;

public class Camion extends GCompound{
	private GOval rueda1;
	private GOval rueda2;
	private GRect cuerpo1;
	private GRect cuerpo2;
	private GLabel dorsalCoche;
	private GLabel DNIpiloto;


	private static double FACTOR_AJUSTE_RUEDA=0.1;
	private static double FACTOR_AJUSTE_CUERPO1_ANCHO=0.4;
	private static double FACTOR_AJUSTE_CUERPO1_ALTO=0.3;
	private static double FACTOR_AJUSTE_CUERPO2=0.2;

	
	Camion(double ancho, double alto,String dorsalCoche1,String DNIpilotoInput){
		cuerpo1=new GRect(ancho*FACTOR_AJUSTE_CUERPO1_ANCHO,alto*FACTOR_AJUSTE_CUERPO1_ALTO);
		cuerpo2=new GRect(ancho*FACTOR_AJUSTE_CUERPO2,alto*FACTOR_AJUSTE_CUERPO2);
		rueda1= new GOval(ancho*FACTOR_AJUSTE_RUEDA,alto*FACTOR_AJUSTE_RUEDA);
		rueda2= new GOval(ancho*FACTOR_AJUSTE_RUEDA,alto*FACTOR_AJUSTE_RUEDA);
		dorsalCoche=new GLabel(dorsalCoche1);
		DNIpiloto=new GLabel(DNIpilotoInput);
		cuerpo1.setFilled(true);
		cuerpo2.setFilled(true);
		rueda1.setFilled(true);
		rueda1.setColor(Color.black);
		rueda2.setFilled(true);
		rueda2.setColor(Color.black);
		add(cuerpo1);
		add(dorsalCoche,(FACTOR_AJUSTE_CUERPO1_ANCHO*ancho/2),(alto*FACTOR_AJUSTE_CUERPO1_ALTO/2));
		add(cuerpo2,(((FACTOR_AJUSTE_CUERPO2*ancho*1.5))),FACTOR_AJUSTE_CUERPO2*100);
		add(rueda1,(((FACTOR_AJUSTE_CUERPO2*ancho*1.7))),FACTOR_AJUSTE_CUERPO2*250);
		add(rueda2,(((FACTOR_AJUSTE_CUERPO2*ancho)/2.5)),FACTOR_AJUSTE_CUERPO2*250);
	}
	
	public void ColorCuerpo(String color){
		switch(color) {
		case "rojo":
			cuerpo1.setColor(Color.RED);
			break;
		case "azul":
			cuerpo1.setColor(Color.BLUE);
			break;
		case "verde":
			cuerpo1.setColor(Color.GREEN);
			break;
		case "negro":
			cuerpo1.setColor(Color.BLACK);
			break;
		case "naranja":
			cuerpo1.setColor(Color.ORANGE);
			break;
		case "rosa":
			cuerpo1.setColor(Color.PINK);
			break;
		case "amarillo":
			cuerpo1.setColor(Color.YELLOW);
			break;
		}
	}
		
	public void colorCabeza(String color){
		switch(color) {
		case "rojo":
			cuerpo2.setColor(Color.RED);
			break;
		case "azul":
			cuerpo2.setColor(Color.BLUE);
			break;
		case "verde":
			cuerpo2.setColor(Color.GREEN);
			break;
		case "negro":
			cuerpo2.setColor(Color.BLACK);
			break;
		case "naranja":
			cuerpo2.setColor(Color.ORANGE);
			break;
		case "rosa":
			cuerpo2.setColor(Color.PINK);
			break;
		case "amarillo":
			cuerpo2.setColor(Color.YELLOW);
			break;
		}
	}
	public GLabel getDorsal(){
		return dorsalCoche; 
	}
}

	


