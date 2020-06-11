/**
 * Ver lista del selects (Puesto y Departamento)
 */
$(function () {
	var selectPuesto = $("#puesto");
	var selectDepartamento = $("#departamento");
	////// Puestos
	$.ajax({
		url: "http://localhost:3000/puesto/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectPuesto.empty();
			selectPuesto.append(
				`<option value="" disabled="" selected="">DEPARTAMENTO</option>`
			);

			for (let i = 0; i < res.response.length; i++) {
				selectPuesto.append(
					`<option value="${res.response[i].IdDepartamento}">${res.response[i].Descripcion}</option>`
				);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});	
	////// Departamentos	
	let url =
		sessionStorage.getItem("puesto") === "Jefe de Departamento"
			? "http://localhost:3000/departamento/getdesc/" +
			  sessionStorage.getItem("deparment")
			: "http://localhost:3000/departamento/list";

	$.ajax({
		url: url,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectDepartamento.empty();
			selectDepartamento.append(
				`<option value="" disabled="" selected="">DEPARTAMENTO</option>`
			);

			for (let i = 0; i < res.response.length; i++) {
				selectDepartamento.append(
					`<option value="${res.response[i].IdDepartamento}">${res.response[i].Descripcion}</option>`
				);
			}
			getColaborador();
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
});

/**
 * Get Colaborador
 */
var getColaborador = function () {
	var id = getParameters("id");

	$.ajax({
		url: "http://localhost:3000/colaborador/get/" + id,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			$("#nombre").val(res.response[0].Nombre);
			$("#apellido1").val(res.response[0].Apellido1);
			$("#apellido2").val(res.response[0].Apellido2);
			$("#puesto").val(res.response[0].IdPuesto);
			$("#departamento").val(res.response[0].IdDepartamento);
			$("#usuario").val(res.response[0].Usuario);
			$("#password").val(res.response[0].Password);
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
};

/**
 * Actualizar Colaborador
 */
$(function () {
	$("#btnActualizar").click(function () {
		var id = getParameters("id");
		var nombre = $("#nombre").val();
		var apellido1 = $("#apellido1").val();
		var apellido2 = $("#apellido2").val();
		var departamento = $("#departamento").val();
		var puesto = $("#puesto").val();
		var usuario = $("#usuario").val();
		var password = $("#password").val();
		var rpassword = $("#rpassword").val();

		if (password != rpassword) {
			return;
		}

		$.ajax({
			url: "http://localhost:3000/colaborador/update",
			data: {
				id: id,
				nombre: nombre,
				apellido1: apellido1,
				apellido2: apellido2,
				departamento: departamento,
				puesto: puesto,
				usuario: usuario,
				password: password
			},
			type: "PUT",
			success: function (res) {
				$(location).attr("href", "/colaborador");
			},
			error: function (error) {
				console.log("error: " + error);
			}
		});
	});
});
