/**
 * Get Status
 */
$(function () {
	var id = getParameters("id");

	$.ajax({
		url: "http://localhost:3000/status/get/"+id,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			$("#nombre").val(res.response[0].Nombre);
			$("#descripcion").val(res.response[0].Descripcion);
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
});

/**
 * Actualizar Status
 */
$(function () {
	$("#btnActualizar").click(function () {
		var id = getParameters("id");
		var nombre = $("#nombre").val();
		var descripcion = $("#descripcion").val();

		$.ajax({
			url: "http://localhost:3000/status/update",
			data: {
				id: id,
				nombre: nombre,
				descripcion: descripcion
			},
			type: "PUT",
			success: function (res) {
				$(location).attr('href',"/status");
			},
			error: function (error) {
				console.log("error: " + error);
			},
		});
	});
});