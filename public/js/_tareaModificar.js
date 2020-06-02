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
 * Ver comentarios
 */
var agregarComentarios = function (id) {
	var divComentarios = $("#comments-section");
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
				divComentarios.append(divComment);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
};

/**
 *  Agregar un Comentario
 */
$(function () {
	$("#btnAgregar").click(function () {
		var comments = $(".comentario-container");
		var fullName = sessionStorage.getItem("name")+" "+sessionStorage.getItem("apellidopat")+" "+sessionStorage.getItem("apellidomat")
        var text = $("#comentario").text();
        var now = new Date(Date.now());
        var formatted = now.getFullYear() + "-" + toDigital(now.getMonth()) + "-" + toDigital(now.getDay());
		var idtarea = $("#idTarea").text();

		$.ajax({
			url: "http://localhost:3000/comentarios/insertComentario",
			data: {
				colaborador:sessionStorage.getItem("id"),
				comentario:text,
				fecha:formatted,
				idtarea:idtarea
			},
			type: "POST",
			success: function (res) {
				var divComment = $(`
				<section class="comentario-container">
					<span class="nameColaborador">${fullName}</span><br>
					<span class="fecha">${formatted}</span>
					<hr/>
					<div class="comentario">
						${text}
					</div>
				</section>`);

				if(comments.length != 0){
					divComment.insertBefore(comments[0]);
				}else{
					$("#comments-section").append(divComment);
				}
				$("#comentario").text("");
			},
			error: function (error) {
				console.log("error: " + error);
			},
		});
    });
});

/**
 * Cambiar Status de la Tarea
 */
$(function () {
	$("#btnTarea").click(function () {
		var idtarea = $("#idTarea").text();
		var status = $("#status").val();
		var statusName = $('select[id="status"] option:selected').text();
		var actualStatus = $("#actualStatus").val();
		if(actualStatus === statusName || statusName === 'STATUS' ){
			$(location).attr('href',"/tarea");
			return;
		}
		$.ajax({
			url: "http://localhost:3000/tarea/updateStatus",
			data: {
				status:status,
				id:idtarea
			},
			type: "PUT",
			success: function (res) {
				$(location).attr('href',"/tarea");
			},
			error: function (error) {
				console.log("error: " + error);
			},
		});
	});
});


/**
 * Poner un 0 si el número es menor a 10
 * @param {*} num 
 */
function toDigital(num){
	return num < 10 ? "0"+num:num;
}