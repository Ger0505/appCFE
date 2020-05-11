/**
 * Mostrar Personas
 */
$(document).ready(function(){
    $.ajax({
        url:'http://localhost:3000/colaborador/listar',
        data:{},
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType:'json',
        success: function(res){
            console.log(res.response);
        },
        error: function(error){
            alert("Error");
            console.log("error: "+error);
        }
    })
});
