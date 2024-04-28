 function cargarDatos(){
   let objetoAjax=new XMLHttpRequest();
   let urlServidor='http://localhost:3000/listaBicis';
   objetoAjax.open("GET",urlServidor,true);
   objetoAjax.send();
   objetoAjax.onreadystatechange=gestionarDatos;
 }

 function gestionarDatos(){
    
   if((this.readyState==4)&&(this.status==200)){
     listaObjetos=JSON.parse(this.responseText);
     for(let i=0;i<listaObjetos.length;i++){
       let cajaDiv=document.createElement("div");
       cajaDiv.id="caja";
       let imagen=document.createElement("img");
       let parrafo=document.createElement("p");
       parrafo.innerHTML=(listaObjetos[i].bastidor)+"--"+(listaObjetos[i].marca);
       imagen.src=listaObjetos[i].imagen;
       imagen.width=500;
       imagen.height=400;
       cajaDiv.appendChild(imagen);
       cajaDiv.appendChild(parrafo);
      document.body.appendChild(cajaDiv);
     }
   }
 }