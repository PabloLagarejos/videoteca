  var arrayJuegos=[];
  
  
  var juego1={nombre:"gtav",compania:"rockstar"}
  var juego2={nombre:"macario",compania:"geroma"}

  arrayJuegos.push(juego1);
  arrayJuegos.push(juego2);

  for(let elemento of arrayJuegos){
    console.log("mi juego es: "+elemento.nombre+ " y su compania es: "+elemento.compania);
  }
  