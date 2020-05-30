/**
 * Ver lista de puesto
 */
$(function () {
	var tablaBody = $("tbody");

	$.ajax({
		url: "http://localhost:3000/puesto/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			tablaBody.empty();

			for (let i = 0; i < res.response.length; i++) {
				console.log(res.response[i].Descripcion);
				tablaBody.append(`<tr>
                    <td class="mdl-data-table__cell--non-numeric">${res.response[i].IdPuesto}</td>
                    <td>${res.response[i].Descripcion}</td>
                    
                    <td>
                        
                        <div class="dropdown dropright">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/puesto/actualizar/id=${res.response[i].IdPuesto}">Editar</a>
                                <a class="dropdown-item" href="#" onclick="eliminarPuesto(${res.response[i].IdPuesto});">Eliminar</a>
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
 * Agregar un nuevo puesto
 */
$(function () {
	$("#btnPuesto").click(function () {
		var descripcion = $("#descripcion").val();
		$.ajax({
			url: "http://localhost:3000/puesto/insert",
			data: {
				descripcion: descripcion
			},
			type: "POST",
			success: function (res) {
				$(location).attr('href',"/puesto");
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
function eliminarPuesto(valor) {
	$.ajax({
		url: "http://localhost:3000/puesto/delete/" + valor,
		data: {},
		type: "PUT",
		success: function (res) {
			$(location).attr('href',"/puesto");
		},
		error: function (err) {
			console.log(err);
		},
	});
}
