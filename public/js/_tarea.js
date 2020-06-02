/**
 * Ver lista de tarea
 */
$(function () {
	var tablaBody = $("tbody");
	var id = sessionStorage.getItem("id");
	$.ajax({
		url: "http://localhost:3000/tarea/list/" + id,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			tablaBody.empty();

			for (let i = 0; i < res.response.length; i++) {
				tablaBody.append(`<tr>
                    <td class="mdl-data-table__cell--non-numeric">${
											res.response[i].IdTarea
										}</td>
                    <td><a href="/tarea/details/id=${
											res.response[i].IdTarea
										}">${res.response[i].Titulo}</a></td>
                    <td>${res.response[i].Status}</td>
                    <td>${res.response[i].Colaborador}</td>
                    <td>${res.response[i].Responsable}</td>
                    
                    <td>
                        
                        <div class="dropdown dropright">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                
                            </button>
                            <div class="dropdown-menu">
								<a class="dropdown-item" href="/tarea/actualizar/id=${
									res.response[i].IdTarea
								}">${`${
					sessionStorage.getItem("puesto") == `Trabajador` ||
					sessionStorage.getItem("puesto") == `Empleado`
						? `Ver`
						: `Editar`
				}`}</a>
                            </div>
                            </div>
                        </div>
                            
                    
                    </td>
                    
                </tr>`);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
});
/**
 * Eliminar tarea
 */
function eliminarTarea(valor) {
	$.ajax({
		url: "http://localhost:3000/tarea/delete/" + valor,
		data: {},
		type: "PUT",
		success: function (res) {
			$(location).attr("href", "/tarea");
		},
		error: function (err) {
			console.log(err);
		}
	});
}
