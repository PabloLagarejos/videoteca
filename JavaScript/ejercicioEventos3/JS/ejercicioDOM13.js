 var numeroPulsaciones=0;
 document.getElementById("contar").addEventListener("click",contar);
 document.getElementById("noContar").addEventListener("click",function(){
                                                      document.getElementById("contar").removeEventListener("click",contar);
                                                   })

 function contar(){
   numeroPulsaciones+=1;
   alert (numeroPulsaciones);
 }
 

 
 

    

    
     
     

    

  

    
    

 