package expresiones;
import java.util.Scanner;

public class Banco{
	private double Presupuesto;
	private Cuenta cuenta1;
	private Cuenta cuenta2;
	private Cuenta cuenta3;
	
	
	
	Banco(double inputPresupuesto,Cuenta cuentaInput1,Cuenta cuentaInput2,Cuenta cuentaInput3){
		Presupuesto=inputPresupuesto;
		cuenta1=cuentaInput1;
		cuenta2=cuentaInput2;
		cuenta3=cuentaInput3;
	}

	public void actualizarSaldo1(double inputSaldo){
		cuenta1.setSaldo(inputSaldo);
	}
	public void actualizarSaldo2(double inputSaldo){
		cuenta2.setSaldo(inputSaldo);
	}
	public void actualizarSaldo3(double inputSaldo){
		cuenta3.setSaldo(inputSaldo);
	}
	public void mostrarInformacionBanco() { 
		System.out.println("Presupuesto: "+Presupuesto);
		cuenta1.mostrarInfo();
		cuenta2.mostrarInfo();
		cuenta3.mostrarInfo();	
	}
	}
