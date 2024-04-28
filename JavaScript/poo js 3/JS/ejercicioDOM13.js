 function cargarDatos(){
   let objetoAjax=new XMLHttpRequest();
   let urlServidor='http://localhost:3000/lista_peliculas';
   objetoAjax.open("GET",urlServidor,true);
   objetoAjax.send();
   objetoAjax.onreadystatechange=gestionarDatos;
 }

 function gestionarDatos(){
    
   if((this.readyState==4)&&(this.status==200)){
     listaObjetos=JSON.parse(this.responseText);
     for(let i=0;i<listaObjetos.length;i++){
       let cajaDiv=document.getElementById("central");
       let titulo=document.createElement("h3");
       let imagen=document.createElement("img");
       let parrafo=document.createElement("p");
       titulo.innerHTML=(lista_peliculas[i].title);
       parrafo.innerHTML=(lista_peliculas[i].info.plot);
       imagen.src=lista_peliculas[i].image_url;
        
       cajaDiv.appendChild(imagen);
       cajaDiv.appendChild(parrafo);
      document.body.appendChild(cajaDiv);
     }
   }
 }