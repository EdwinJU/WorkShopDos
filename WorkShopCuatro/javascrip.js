$(document).ready(function(){    
    
    $('#btnSave').click(function(){        
        var user = {
                name: $('#nombre').val(),
                lastname: $('#apellido').val(),
                phone:$('#telefono').val()
               
          };
var users = JSON.parse(localStorage.getItem('users'));
if(!users){
users= [];

}
         users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
     
     });

});


$(document).ready(function(){    
    
    $('#btnSave').click(function(){        
    var user = {
                name: $('#nombre').val(),
                lastname: $('#apellido').val(),
                phone:$('#telefono').val()
               
          };
var users = JSON.parse(sessionStorage.getItem('users'));
if(!users){
users= [];

}
         users.push(user);
        sessionStorage.setItem('users', JSON.stringify(users));
     
     });

});

 $(document).ready(function(){    
    $('#btnDelete').click(function(){                
                                                   
     
     var users = JSON.parse(localStorage.getItem('users'));
       
       users.pop(); 
           localStorage.setItem('users', JSON.stringify(users));


    });   
});
 