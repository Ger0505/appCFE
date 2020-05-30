/**
 * Ver lista de departamento
 */
$(function () {
	var tablaBody = $("tbody");

	$.ajax({
		url: "http://localhost:3000/departamento/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			tablaBody.empty();

			for (let i = 0; i < res.response.length; i++) {
				console.log(res.response[i].Descripcion);
				tablaBody.append(`<tr>
                    <td class="mdl-data-table__cell--non-numeric">${res.response[i].IdDepartamento}</td>
                    <td>${res.response[i].Descripcion}</td>
                    
                    <td>
                        
                        <div class="dropdown dropright">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/departamento/actualizar/id=${res.response[i].IdDepartamento}">Editar</a>
                                <a class="dropdown-item" href="#" onclick="eliminarDepartamento(${res.response[i].IdDepartamento});">Eliminar</a>
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
 * Agregar un nuevo departamento
 */
$(function () {
	$("#btnDepartamento").click(function () {
		var descripcion = $("#descripcion").val();
		$.ajax({
			url: "http://localhost:3000/departamento/insert",
			data: {
				descripcion: descripcion
			},
			type: "POST",
			success: function (res) {
				$(location).attr('href',"/departamento");
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
function eliminarDepartamento(valor) {
	$.ajax({
		url: "http://localhost:3000/departamento/delete/" + valor,
		data: {},
		type: "PUT",
		success: function (res) {
			$(location).attr('href',"/departamento");
		},
		error: function (err) {
			console.log(err);
		},
	});
}
