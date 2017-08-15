
var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
users = [];
}

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
        loadUsers();
     
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
        loadUsers();
     
     });

});

 $(document).ready(function(){    
   $('#btnDelete').click(function(){                
                                                   
     
     var users = JSON.parse(localStorage.getItem('users'));
       
       users.pop(); 
           localStorage.setItem('users', JSON.stringify(users));


    });   
});



function loadUsers() {

  // read users from localstorage
  // loop users

  var user_html = "";
  for (var i = 0; i < users.length; i++) {
    // add users to the table
    var u = users[i];
    user_html = user_html + "<tr><td>"+u.name+"</td><td>"+
    u.lastname +"</td><td>"+u.phone;
  }

  $('#users_table').html(user_html);

}