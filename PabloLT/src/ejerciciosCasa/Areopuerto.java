package ejerciciosCasa;

import java.util.Scanner;

public class Areopuerto {
	//private static Avion avion1=null;
	//private static Avion avion2=null;
	 
	static Scanner lectorEntrada;
	
	public static void main (String[] args) {
		
	    lectorEntrada = new Scanner (System.in);
	    Avion avion1=new Avion();
	    Avion avion2=new Avion();
	    
	    crearAviones(avion1); //no puedo hacer funcionar el "crearAviones"
		crearAviones(avion2);
	    int opcionUsuario;
	    
	    do
	    {
	    	System.out.println("1-Echar queroseno a un avión. Se pide el identificador del avión y el número de litros de queroseno que se van a echar.\r\n"
	    			+ "2-Despegar el avión. Para que un avión pueda despegar es necesario que tenga al menos 50 litros de combustible, si tiene menos cuando se le indique que despegue dará un error.\r\n"
	    			+ "3-Aterrizar Avión. Se chequea si el avión está volando y se le indica que aterrice.\r\n"
	    			+ "4-Mostrar información del aeropuerto: Muestra información de los dos aviones\r\n"
	    			+ "5-Mostrar qué avión tiene más queroseno.\r\n"
	    			+ "6-Salir del sistema.");
	    	opcionUsuario=lectorEntrada.nextInt();
	    	switch(opcionUsuario) {
	    	case 1: 
	    		cargarCombustibleEnAvion(avion1,avion2);
	    		break;
	    	case 2:
	    		despegarAviones(avion1,avion2);
	    		break;
	    	case 3:
	    		aterrizarAviones(avion1,avion2);
	    		break;
	    	case 4:
	    		avion1.mostrarInfoAvion();
	    		avion2.mostrarInfoAvion();
	    		break;
	    	case 5:
	    		mostrarMayorCombustible(avion1,avion2);
	    		break;
	    	case 6:
	    		System.out.println("Adios");
	    	default:
				System.out.println("Esa opcion no existe");
	    	}
	    }
	    while(opcionUsuario!=6);
	    
	    lectorEntrada.close();
	}
	private static void cargarCombustibleEnAvion(Avion inavion1,Avion inavion2)
	{
		int idUsuario;
		int cargaUsuario;
		System.out.println("Diga el id del avion: ");
		idUsuario=lectorEntrada.nextInt();
		
		if(idUsuario==inavion1.getId()) {
			System.out.println("Cuanta carga quiere poner?: ");
			cargaUsuario=lectorEntrada.nextInt();
			inavion1.setEcharCombustible(cargaUsuario);
		}
		else if(idUsuario==inavion2.getId()) {
			System.out.println("Cuanta carga quiere poner?: ");
			cargaUsuario=lectorEntrada.nextInt();
			inavion2.setEcharCombustible(cargaUsuario);
		}
		else
			System.out.println("Ese avion no existe ");
		
		
	}
	private static void despegarAviones(Avion inavion1,Avion inavion2)
	{
		int idUsuario;
		System.out.println("Qué avion desea despegar?: ");
		idUsuario=lectorEntrada.nextInt();
		
		if(idUsuario==inavion1.getId())
		{
			if(inavion1.getCombustible()>50)
			{
				if(inavion1.getVueloOAterrizado()=="aterrizado")
				{
					inavion1.setVueloOAterrizado("vuelo");
				}
				else
				{
					System.out.println("Este avión ya está volando");
				}
			}
			else
			{
				System.out.println("No hay suficiente combustible");
			}
		}
		else if(idUsuario==inavion2.getId())
		{
			if(inavion2.getCombustible()>50)
			{
				if(inavion2.getVueloOAterrizado()=="aterrizado")
				{
					inavion2.setVueloOAterrizado("vuelo");
				}
				else
				{
					System.out.println("Este avión ya está volando");
				}
			}
			else
			{
				System.out.println("No hay suficiente combustible");
			}
		}
		else
		{
			System.out.println("no existe este avion");
		}
		
	}
	private static void aterrizarAviones(Avion inavion1,Avion inavion2)
	{
		int idUsuario;
		System.out.println("Qué avion desea aterrizar?: ");
		idUsuario=lectorEntrada.nextInt();
		if(idUsuario==inavion1.getId())
		{
			if(inavion1.getVueloOAterrizado()=="vuelo")
			{
				inavion1.setVueloOAterrizado("aterrizado");
			}
			else
			{
				System.out.println("Este avión ya está aterrizado");
			}
		}
		else if(idUsuario==inavion2.getId())
		{
		
			if(inavion2.getVueloOAterrizado()=="vuelo")
			{
				inavion2.setVueloOAterrizado("aterrizado");
			}
			else
			{
				System.out.println("Este avión ya está aterrizado");
			}
		}
		else
		{
			System.out.println("no existe este avion");
		}
		
		 
	}
	private static void mostrarMayorCombustible(Avion inavion1,Avion inavion2)
	{
		int combustible1;
		int combustible2;
		 combustible1=inavion1.getCombustible();
		 combustible2=inavion2.getCombustible();
		 
		 if (combustible1>combustible2)
		 {
			 System.out.println("EL avion1 tiene más combustible, aquí tiene su información");
			 inavion1.mostrarInfoAvion();
		 }
		 else
		 {
			 System.out.println("EL avion2 tiene más combustible, aquí tiene su información");
			 inavion2.mostrarInfoAvion();
		 }
	}
	/*private static void idUsuario(Avion inavion) {
		int id;
		System.out.println("introduzca el id del avion : ");
		id=lectorEntrada.nextInt();
		inavion.setId(id);
	}
	private static void nombreUsuario(Avion inavion) {
		String nombre;
		System.out.println("introduzca el nombre del avion : ");
		nombre=lectorEntrada.next();
		inavion.setNombre(nombre);
	}
	private static void combustibleUsuario(Avion inavion) {
		int combustible;
		System.out.println("introduzca los litros de combustible del avion : ");
		combustible=lectorEntrada.nextInt();
		inavion.setCombustible(combustible);
	}
	private static void pasajerosUsuario(Avion inavion) {
		int pasajeros;
		System.out.println("introduzca el numero de pasajeros del avion : ");
		pasajeros=lectorEntrada.nextInt();
		inavion.setCapacidadPasajeros(pasajeros);
	}
	private static void situacionUsuario(Avion inavion) {
		String  estado;
		System.out.println("introduzca el estado del avion : ");
		estado=lectorEntrada.next();
		inavion.setVueloOAterrizado( estado);
	}*/
	
	
	private static void crearAviones(Avion inavion) {
		int id;
		String nombre;
		int combustible;
		int pasajeros;
		String estado;
		System.out.println("introduzca el id del avion : ");
		id=lectorEntrada.nextInt();
		inavion.setId(id);
		System.out.println("introduzca el nombre del avion : ");
		nombre=lectorEntrada.next();
		inavion.setNombre(nombre);
		System.out.println("introduzca los litros de combustible del avion : ");
		combustible=lectorEntrada.nextInt();
		inavion.setCombustible(combustible);
		System.out.println("introduzca el numero de pasajeros del avion : ");
		pasajeros=lectorEntrada.nextInt();
		inavion.setCapacidadPasajeros(pasajeros);
		System.out.println("introduzca el estado del avion : ");
		estado=lectorEntrada.next();
		inavion.setVueloOAterrizado( estado);
		//inavion=new Avion(id,nombre,combustible,pasajeros,estado);
		
		 
		
		 /*idUsuario(inavion);
		 nombreUsuario(inavion);
		 combustibleUsuario(inavion);
		 pasajerosUsuario(inavion);
		 situacionUsuario(inavion);
		
		inavion=new Avion(idUsuario(inavion), nombreUsuario(inavion),combustibleUsuario(inavion),pasajerosUsuario(inavion),situacionUsuario(inavion));*/
		
		 
	}
	
}
