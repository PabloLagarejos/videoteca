  var arrayJuegos=[];
  
  
  /*var juego1={nombre:"gtav",compania:"rockstar"}
  var juego2={nombre:"macario",compania:"geroma"}

  arrayJuegos.push(juego1);
  arrayJuegos.push(juego2);

  for(let elemento of arrayJuegos){
    console.log("mi juego es: "+elemento.nombre+ " y su compania es: "+elemento.compania);
  }*/
  function array(){
    var nombre=document.getElementById("nombre").value;
    var compa=document.getElementById("compania").value;

    var juego={"nombre":""+ nombre+"", "compania":""+compa+""}
    arrayJuegos.push(juego);


  }
  function mostrar(){
    for(let elemento of arrayJuegos){
      var mostrarInfo=document.getElementById("juegos");
      var tipo=document.createElement("h3");
      var texto=document.createTextNode("El nombre del juego es: "+elemento.nombre+" y la compañia es: "+elemento.compania);
      tipo.appendChild(texto);
      mostrarInfo.appendChild(tipo);
      document.body.appendChild(mostrarInfo);

    }
  }