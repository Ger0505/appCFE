/**
 * Mostrar colaboradores
 */
$(function(){
    $('#btn').click(function(){
        var tablaBody = $("#table tbody");
        $.ajax({
            url: 'http://localhost:3000/colaborador/list',
            //data: {'datoBuscar':dato,'orden':'ASC'},
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                tablaBody.empty();
                for (let i = 0; i < res.response.length; i++) {
                    tablaBody.append('<tr>');
                    tablaBody.append('<td>' +res.response[i].nombre+'</td>')
                    tablaBody.append('<td>' +res.response[i].apellido1+'</td>')
                    tablaBody.append('<td>' +res.response[i].apellido2+'</td>')
                    tablaBody.append('<td>' +res.response[i].usuario+'</td>')
                    tablaBody.append('<td>' +res.response[i].puesto+'</td>')
                    tablaBody.append('<td>' +res.response[i].departamento+'</td>')
                    tablaBody.append('<td>' +res.response[i].fechaalta+'</td>')
                    tablaBody.append('</tr>');
                }
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Información de un colaborador
 */
$(function(){
    $('#btn').click(function(){
        var id_col = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/colaborador/get/'+id_col,
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                $('#nombre').val(res.response[0].nombre);
                $('#ape1').val(res.response[0].apellido1);
                $('#ape2').val(res.response[0].apellido2);
                $('#usu').val(res.response[0].usuario);
                $('#pass').val(res.response[0].password);
                $('#puesto').val(res.response[0].puesto);
                $('#dep').val(res.response[0].departamento);
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Agregar un nuevo colaborador
 */
$(function(){
    $('#btn').click(function(){
        var array = [];
        array.push($("#nombre").val());
        array.push($("#ape1").val());
        array.push($("#ape2").val());
        array.push($("#usu").val());
        array.push($("#pass").val());
        array.push($("#puesto").val());
        array.push($("#dep").val());

        $.ajax({
            url: 'http://localhost:3000/colaborador/insert',
            data: {
                'nombre':array[0],
                'ape1':array[1],
                'ape2':array[2],
                'usu':array[3],
                'pass':array[4],
                'puesto':array[5],
                'dep':array[6]
            },
            type: 'POST',
            success: function(res){
                console.log("Colaborador agregado correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Actualizar colaborador
 */
$(function(){
    $('#btn').click(function(){
        var array = [];
        array.push($("#nombre").val());
        array.push($("#ape1").val());
        array.push($("#ape2").val());
        array.push($("#usu").val());
        array.push($("#pass").val());
        array.push($("#puesto").val());
        array.push($("#dep").val());

        $.ajax({
            url: 'http://localhost:3000/colaborador/update',
            data: {
                'nombre':array[0],
                'ape1':array[1],
                'ape2':array[2],
                'usu':array[3],
                'pass':array[4],
                'puesto':array[5],
                'dep':array[6]
            },
            type: 'PUT',
            success: function(res){
                console.log("Colaborador actualizado correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Eliminar colaborador
 */
$(function(){
    $('#btn').click(function(){
        
        var id_col = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/colaborador/delete/'+id_col,
            data: {},
            type: 'PUT',
            success: function(res){
                console.log("Colaborador eliminado correctamente")
            },
            error: function(error){
                console.log(error)
            }
        });
    });
});