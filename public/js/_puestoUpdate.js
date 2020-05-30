/**
 * Get Puesto
 */
$(function () {
	var id = getParameters("id");

	$.ajax({
		url: "http://localhost:3000/puesto/get/"+id,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			$("#descripcion").val(res.response[0].Descripcion);
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
});

/**
 * Actualizar Puesto
 */
$(function () {
	$("#btnActualizar").click(function () {
		var id = getParameters("id");
		var descripcion = $("#descripcion").val();

		$.ajax({
			url: "http://localhost:3000/puesto/update",
			data: {
				id: id,
				descripcion: descripcion
			},
			type: "PUT",
			success: function (res) {
				$(location).attr('href',"/puesto");
			},
			error: function (error) {
				console.log("error: " + error);
			},
		});
	});
});