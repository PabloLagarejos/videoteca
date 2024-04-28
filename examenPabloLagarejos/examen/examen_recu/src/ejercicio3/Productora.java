package ejercicio3;

 import java.util.Scanner;

import java.util.ArrayList;
import java.util.Iterator;
 
public class Productora {
	
		static Scanner Teclado;
		public static void main(String[]Args) {
			ArrayList<Deporte_online>listaDeportes=new ArrayList<Deporte_online>();
			Teclado=new Scanner(System.in);
			
			
			int opcionUsuario=0;
			 
			while(opcionUsuario!=6) {
				System.out.println("Elija una opcion:\n"
						+ "1.Insertar deportes:"
						+ "2.Borrar deportes"
						+ "3.Mostrar Info"
						+ "4.Coste deporte"
						+ "5.Influencia Futbol/Dron"
						+ "6.Salir");
				opcionUsuario=Teclado.nextInt();
				
				 
				switch(opcionUsuario) {
				case 1:
					insertar (ArrayList<Deporte_online>listaDeportes);
					break;
				case 2:
					borrar(ArrayList<Deporte_online>listaDeportes);
					break;
				case 3:
					mostrarInfo(ArrayList<Deporte_online>listaDeportes);
					break;
				case 4:
					mostrarCoste();
					break;
				case 5:
					mostrarInfluencia();
					break;
				case 6:
					System.out.println("Adios");
					break;
				default:
				System.out.println("Errrorrr!!!!");
				}
				 
			}
			
		}
		public void insertar(ArrayList<Deporte_online>listaDeportes) {
			int opcionUsu=0;
			System.out.println("Desea crear 1.futbol o 2.drones");
			opcionUsu=Teclado.nextInt();
			
			if(opcionUsu==1) {
				String idUsu;
				String nombreUsu;
				int duracionUsu;
				String estadioUsu;
				double media;
				
				System.out.println("Diga el ID");
				idUsu=Teclado.next();
				System.out.println("Diga el Nombre");
				nombreUsu=Teclado.next();
				System.out.println("Diga la duracion");
				duracionUsu=Teclado.nextInt();
				System.out.println("Diga el estadio");
				estadioUsu=Teclado.next();
				System.out.println("Diga media espectadores");
				media=Teclado.nextDouble();
				
				Futbol deporte=new Futbol(idUsu,nombreUsu,duracionUsu,estadioUsu,media);
				
				listaDeportes.add(deporte);
			}
			else if(opcionUsu==1) {
				String idUsu;
				String nombreUsu;
				int duracionUsu;
				int numEspec;
				System.out.println("Diga el ID");
				idUsu=Teclado.next();
				System.out.println("Diga el Nombre");
				nombreUsu=Teclado.next();
				System.out.println("Diga la duracion");
				duracionUsu=Teclado.nextInt();
				System.out.println("Diga el numero de espectadores");
				numEspec=Teclado.nextInt();
				
				Dron dronIn=new Dron(idUsu,nombreUsu,duracionUsu,numEspec);
				
				listaDeportes.add(dronIn);
			}
			else {
				System.out.println("Opcion incorrecta");
			}
			
			public void borrar(ArrayList<Deporte_online>listaDeportes) {
				String idUsuario=0;
				
				Deporte_online deporte;
				Iterator<Deporte_online>miIterador=listaDeportes.iterator();
				while((miIterador.hasNext()& miIterador!=null)) {
					deporte=miIterador.next();
							if(((Deporte_online)deporte).idEvento.equals(idUsuario)){
								miIterador.remove();
								System.out.println("elemento Borrado");
							}
				}
				
				
				
			}
			public void mostrarInfo(ArrayList<Deporte_online>listaDeportes) {
				 for (Deporte_online deporte:listaDeportes) {
					 deporte.toString();
				 }
			
		}
}

