    
function Guardando(){        
       
        
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById("nombre").value;
        var apel = document.getElementById("apellido").value;
        var tel = document.getElementById("telefono").value;
        
        
        /*Guardando los datos en el LocalStorage*/
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apellido);
        localStorage.setItem("telefono", telefono);
        
       
        /*Limpiando los campos o inputs*/
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";
        
     
    };   
