package expresiones;
import java.util.Scanner;
public class Cuenta{
	private double saldo;
	private String nombreCliente;
	private String DNICliente;
	private int numeroCuenta;
	
	Cuenta(){
		saldo=0.0;
		nombreCliente="Anonimo";
		DNICliente="00000000X";
		numeroCuenta=000000000;
	}
	Cuenta(double inputSaldo,String inputNombreCliente, String InputDNICliente,int inputNumeroCuenta){
		saldo=inputSaldo;
		nombreCliente=inputNombreCliente;
		DNICliente=InputDNICliente;
		numeroCuenta=inputNumeroCuenta;
	}
	public void setSaldo(double inputSaldo) {
		saldo=inputSaldo;
	}
	public void setNombreCliente(String inputNombreCliente){
		nombreCliente=inputNombreCliente;
	}
	public void setDNICliente(String InputDNICliente){
		DNICliente=InputDNICliente;
	}
	public void setNumeroCuenta(int inputNumeroCuenta){
		numeroCuenta=inputNumeroCuenta;
	}
	public void mostrarInfo(){
		System.out.println("-------------------");
		System.out.println("Saldo: "+saldo);
		System.out.println("Titular: "+nombreCliente);
		System.out.println("DNI: "+DNICliente);
		System.out.println("Numero Cuenta: "+numeroCuenta);
		System.out.println("-------------------");
	}
}
