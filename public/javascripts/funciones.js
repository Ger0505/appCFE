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
        array.push($("#id").val());
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
                'id':array[0],
                'nombre':array[1],
                'ape1':array[2],
                'ape2':array[3],
                'usu':array[4],
                'pass':array[5],
                'puesto':array[6],
                'dep':array[7]
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

/*------TAREAS--------------------------------------------------------------------------------*/

/**
 * Mostrar Tareas (Responsable)
 */
$(function(){
    $('#btn').click(function(){
        var tablaBody = $("#table tbody");
        $.ajax({
            url: 'http://localhost:3000/tarea/list',
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                tablaBody.empty();
                for (let i = 0; i < res.response.length; i++) {
                    tablaBody.append('<tr>');
                    tablaBody.append('<td>' +res.response[i].titulo+'</td>')
                    tablaBody.append('<td>' +res.response[i].descripcion+'</td>')
                    tablaBody.append('<td>' +res.response[i].fechainicio+'</td>')
                    tablaBody.append('<td>' +res.response[i].fechafin+'</td>')
                    tablaBody.append('<td>' +res.response[i].responsable+'</td>') //Cambiar modelo
                    tablaBody.append('<td>' +res.response[i].colaborador+'</td>') //Cambiar modelo
                    tablaBody.append('<td>' +res.response[i].status+'</td>') //Cambiar modelo
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
 * Información de una tarea
 */
$(function(){
    $('#btn').click(function(){
        var id_tarea = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/tarea/get/'+id_tarea,
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                $('#titulo').val(res.response[0].titulo);
                $('#descripcion').val(res.response[0].descripcion);
                $('#fechaInicio').val(res.response[0].fechainicio);
                $('#fechaFin').val(res.response[0].fechafin);
                $('#responsable').val(res.response[0].responsable);
                $('#colaborador').val(res.response[0].colaborador);
                $('#status').val(res.response[0].status);
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Agregar una nueva tarea
 */
$(function(){
    $('#btn').click(function(){
        var array = [];
        array.push($("#titulo").val());
        array.push($("#descripcion").val());
        array.push($("#fechaInicio").val());
        array.push($("#fechaFin").val());
        array.push($("#responsable").val());
        array.push($("#colaborador").val());
        array.push($("#status").val());

        $.ajax({
            url: 'http://localhost:3000/tarea/insert',
            data: {
                'titulo':array[0],
                'descripcion':array[1],
                'fechaInicio':array[2],
                'fechaFin':array[3],
                'responsable':array[4],
                'colaborador':array[5],
                'status':array[6]
            },
            type: 'POST',
            success: function(res){
                console.log("Tarea agregada correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Actualizar tarea
 */
$(function(){
    $('#btn').click(function(){
        var array = [];
        array.push($("#id").val());
        array.push($("#titulo").val());
        array.push($("#descripcion").val());
        array.push($("#fechaInicio").val());
        array.push($("#fechaFin").val());
        array.push($("#responsable").val());
        array.push($("#colaborador").val());
        array.push($("#status").val());

        $.ajax({
            url: 'http://localhost:3000/tarea/update',
            data: {
                'id':array[0],
                'titulo':array[1],
                'descripcion':array[2],
                'fechaInicio':array[3],
                'fechaFin':array[4],
                'responsable':array[5],
                'colaborador':array[6],
                'status':array[7]
            },
            type: 'PUT',
            success: function(res){
                console.log("Tarea actualizada correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Eliminar tarea
 */
$(function(){
    $('#btn').click(function(){
        
        var id_tarea = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/tarea/delete/'+id_tarea,
            data: {},
            type: 'PUT',
            success: function(res){
                console.log("Tarea eliminada correctamente")
            },
            error: function(error){
                console.log(error)
            }
        });
    });
});

/*------COMENTARIOS--------------------------------------------------------------------------------*/

/**
 * Mostrar Comentarios
 */
$(function(){
    $('#btn').click(function(){
        var tablaBody = $("#table tbody");
        $.ajax({
            url: 'http://localhost:3000/comentarios/list',
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                tablaBody.empty();
                for (let i = 0; i < res.response.length; i++) {
                    tablaBody.append('<tr>');
                    tablaBody.append('<td>' +res.response[i].comentario+'</td>')
                    tablaBody.append('<td>' +res.response[i].fecha+'</td>')
                    tablaBody.append('<td>' +res.response[i].titulo+'</td>')
                    tablaBody.append('<td>' +res.response[i].colaborador+'</td>')
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
 * Información de una tarea
 */
$(function(){
    $('#btn').click(function(){
        var id_com = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/comentarios/get/'+id_com,
            data: {},
            type: 'GET',
            contentType: 'application/json; charset=UTF-8',
            dataType : 'json',
            success: function(res){
                $('#comentario').val(res.response[0].titulo);
                $('#fecha').val(res.response[0].descripcion);
                $('#titulo').val(res.response[0].fechainicio);
                $('#colaborador').val(res.response[0].fechafin);
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Agregar un nuevo comentario
 */
$(function(){
    $('#btn').click(function(){
        var array = [];
        array.push($("#comentario").val());
        array.push($("#fecha").val());
        array.push($("#tarea").val());
        array.push($("#colaborador").val());

        $.ajax({
            url: 'http://localhost:3000/comentarios/insert',
            data: {
                'comentario':array[0],
                'fecha':array[1],
                'tarea':array[2],
                'colaborador':array[3]
            },
            type: 'POST',
            success: function(res){
                console.log("Comentario agregado correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Actualizar comentario
 */
$(function(){
    $('#btn').click(function(){
        var array = [];
        array.push($("#idComentario").val());
        array.push($("#comentario").val());
        array.push($("#fecha").val());
        array.push($("#tarea").val());
        array.push($("#colaborador").val());

        $.ajax({
            url: 'http://localhost:3000/comentarios/update',
            data: {
                'idComentario':array[0],
                'comentario':array[1],
                'fecha':array[2],
                'tarea':array[3],
                'colaborador':array[4]
            },
            type: 'PUT',
            success: function(res){
                console.log("Comentario actualizado correctamente");
            },
            error: function(error){
                console.log("error: "+error);
            }
        });
    });
});

/**
 * Eliminar comentario
 */
$(function(){
    $('#btn').click(function(){
        
        var id_com = $('#txtID').val();

        $.ajax({
            url: 'http://localhost:3000/tarea/delete/'+id_com,
            data: {},
            type: 'PUT',
            success: function(res){
                console.log("Comentario eliminado correctamente")
            },
            error: function(error){
                console.log(error)
            }
        });
    });
});