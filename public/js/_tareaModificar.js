/**
 * Ver select de status
 */
$(function () {
	var selectColaborador = $("#colaborador");
    var selectStatus = $("#status");
    
	$.ajax({
		url: "http://localhost:3000/status/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectStatus.empty();
			selectStatus.append(`<option value="" disabled="" selected="">STATUS</option>`);

			for (let i = 0; i < res.response.length; i++) {
				selectStatus.append(`<option value="${res.response[i].IdStatus}">${res.response[i].Nombre}</option>`);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
});


/**
 * Ver información de tarea
 */
$(function () {
    let id = getParameters("id");
	$.ajax({
		url: "http://localhost:3000/tarea/get/"+id,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			$("#idTarea").text(res.response[0].IdTarea);
			$("#titulo").val(res.response[0].TItulo);
			$("#colaborador").val(res.response[0].Colaborador);
			$("#fechaFin").val(res.response[0].FechaFin);
			$("#actualStatus").val(res.response[0].Status);
			$("#descripcion").text(res.response[0].Descripcion);

			agregarComentarios(id);
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
});

/**
 * Ver información de tarea
 */
var agregarComentarios = function (id) {
	var divComment = $("#comments-section");
	$.ajax({
		url: "http://localhost:3000/comentarios/list/"+id,
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			for (let i = 0; i < res.response.length; i++) {
				var divComment = $(`
				<section class="comentario-container">
					<span class="nameColaborador">${res.response[i].Colaborador}</span><br>
					<span class="fecha">${res.response[i].Fecha}</span>
					<hr/>
					<div class="comentario">
						${res.response[i].Comentario}
					</div>
				</section>`);
				divComment.append(divComment);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
};