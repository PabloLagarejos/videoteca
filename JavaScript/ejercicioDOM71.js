function insertarFoto()
{ 
    var arrayParrafo=null;
    var foto=document.createElement('img');
     

    foto.src="https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia-770x413.jpg";

    arrayParrafo=document.getElementsByClassName('color');

    for( elemento of arrayParrafo)
    {
         elemento.appendChild(foto);
    }
}
