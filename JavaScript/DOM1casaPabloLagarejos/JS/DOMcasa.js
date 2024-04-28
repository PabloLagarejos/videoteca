function cambiarEstilos()
{ 
    var arrayParrafos=document.getElementsByTagName("p");
    for(let i=0;i<arrayParrafos.length;i++){
          if(serPar(i)){
               arrayParrafos[i].classList.add("par");
          }
          else{
               arrayParrafos[i].classList.add("impar");
          }
    }
}
function serPar(numero){
     var par=false;
     if((numero+1)%2==0){
          par=true;
     }
     return par;
}

    

    
     
     

    

  

    
    

 