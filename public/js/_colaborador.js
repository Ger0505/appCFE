/**
 * Ver lista de colaborador
 */
$(function () {
	var tablaBody = $("tbody");

	$.ajax({
		url: "http://localhost:3000/colaborador/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			tablaBody.empty();

			for (let i = 0; i < res.response.length; i++) {
				console.log(res.response[i].Descripcion);
				tablaBody.append(`<tr>
                    <td class="mdl-data-table__cell--non-numeric">${res.response[i].Nombre}</td>
                    <td>${res.response[i].Apellido1}</td>
                    <td>${res.response[i].Apellido2}</td>
                    <td>${res.response[i].Puesto}</td>
                    <td>${res.response[i].Departamento}</td>
                    
                    <td>
                        
                        <div class="dropdown dropright">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/colaborador/actualizar/id=${res.response[i].IdColaborador}">Editar</a>
                                <a class="dropdown-item" href="#" onclick="eliminarColaborador(${res.response[i].IdColaborador});">Eliminar</a>
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
 * Agregar un nuevo colaborador
 */
$(function () {
	$("#btnColaborador").click(function () {
		var nombre = $("#nombre").val();
		var apellido1 = $("#apellido1").val();
		var apellido2 = $("#apellido2").val();
		var departamento = $("#departamento").val();
		var puesto = $("#puesto").val();
		var usuario = $("#usuario").val();
		var password = $("#password").val();
		var rpassword = $("#rpassword").val();

		if(password != rpassword){
			return;
		}

		$.ajax({
			url: "http://localhost:3000/colaborador/insert",
			data: {
				nombre:nombre,
				apellido1:apellido1,
				apellido2:apellido2,
				departamento:departamento,
				puesto:puesto,
				usuario:usuario,
				password:password
			},
			type: "POST",
			success: function (res) {
				$(location).attr('href',"/colaborador");
			},
			error: function (error) {
				console.log("error: " + error);
			},
		});
	});
});

/**
 * Eliminar colaborador
 */
function eliminarColaborador(valor) {
	$.ajax({
		url: "http://localhost:3000/colaborador/delete/" + valor,
		data: {},
		type: "PUT",
		success: function (res) {
			$(location).attr('href',"/colaborador");
		},
		error: function (err) {
			console.log(err);
		},
	});
}

/**
 * Ver lista del selects (Puesto y Departamento)
 */
$(function () {
	var selectPuesto = $("#puesto");
	var selectDepartamento = $("#departamento");

	$.ajax({
		url: "http://localhost:3000/puesto/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectPuesto.empty();
			selectPuesto.append(`<option value="" disabled="" selected="">PUESTO</option>`);

			for (let i = 0; i < res.response.length; i++) {
				selectPuesto.append(`<option value="${res.response[i].IdPuesto}">${res.response[i].Descripcion}</option>`);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
	$.ajax({
		url: "http://localhost:3000/departamento/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectDepartamento.empty();
			selectDepartamento.append(`<option value="" disabled="" selected="">DEPARTAMENTO</option>`);

			for (let i = 0; i < res.response.length; i++) {
				selectDepartamento.append(`<option value="${res.response[i].IdDepartamento}">${res.response[i].Descripcion}</option>`);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
});