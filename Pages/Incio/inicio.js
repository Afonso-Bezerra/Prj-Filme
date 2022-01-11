document.addEventListener('DOMContentLoaded', () =>{
    var hora = new Date(); 
    document.getElementById('horas').innerHTML = hora.getHours()+' : '+hora.getMinutes();
})