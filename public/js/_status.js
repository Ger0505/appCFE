/**
 * Ver lista de status
 */
$(function () {
	var tablaBody = $("tbody");

	$.ajax({
		url: "http://localhost:3000/status/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			tablaBody.empty();

			for (let i = 0; i < res.response.length; i++) {
				console.log(res.response[i].Nombre);
				tablaBody.append(`<tr>
                    <td class="mdl-data-table__cell--non-numeric">${res.response[i].IdStatus}</td>
                    <td>${res.response[i].Nombre}</td>
                    <td>${res.response[i].Descripcion}</td>
                    
                    <td>
                        
                        <div class="dropdown dropright">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/status/actualizar/id=${res.response[i].IdStatus}">Editar</a>
                                <a class="dropdown-item" href="#" onclick="eliminarStatus(${res.response[i].IdStatus});">Eliminar</a>
                            </div>
                            </div>
                        </div>
                            
                    
                    </td>
                    
                </tr>`);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
});

/**
 * Agregar un nuevo status
 */
$(function () {
	$("#btnStatus").click(function () {
		var nombre = $("#nombre").val();
		var descripcion = $("#descripcion").val();

		$.ajax({
			url: "http://localhost:3000/status/insert",
			data: {
				nombre: nombre,
				descripcion: descripcion,
			},
			type: "POST",
			success: function (res) {
				$(location).attr('href',"/status");
			},
			error: function (error) {
				console.log("error: " + error);
			},
		});
	});
});

/**
 * Eliminar estudiante
 */
function eliminarStatus(valor) {
	$.ajax({
		url: "http://localhost:3000/status/delete/" + valor,
		data: {},
		type: "PUT",
		success: function (res) {
			$(location).attr('href',"/status");
		},
		error: function (error) {
			console.log(error);
		},
	});
}
