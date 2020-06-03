/**
 * Ver lista del selects (Colaborador y Status)
 */
$(function () {
	var selectColaborador = $("#colaborador");
	var selectStatus = $("#status");

	$.ajax({
		url: "http://localhost:3000/colaborador/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectColaborador.empty();
			selectColaborador.append(
				`<option value="" disabled="" selected="">COLABORADOR</option>`
			);

			for (let i = 0; i < res.response.length; i++) {
				selectColaborador.append(
					`<option value="${res.response[i].IdColaborador}">${res.response[i].Nombre} ${res.response[i].Apellido1} ${res.response[i].Apellido2}</option>`
				);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
	$.ajax({
		url: "http://localhost:3000/status/list",
		data: {},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			selectStatus.empty();
			selectStatus.append(
				`<option value="" disabled="" selected="">STATUS</option>`
			);

			for (let i = 0; i < res.response.length; i++) {
				selectStatus.append(
					`<option value="${res.response[i].IdStatus}">${res.response[i].Nombre}</option>`
				);
			}
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
});

/**
 * Agregar una nueva tarea
 */
$(function () {
	$("#btnTarea").click(function () {
		var titulo = $("#titulo").val();
		var colaborador = $("#colaborador").val();
		var responsable = sessionStorage.getItem("id");
		var status = $("#status").val();
		var fechaFin = $("#fechaFin").val();
		var descripcion = $("#descripcion").val();
		if (fieldvalidations(colaborador, fechaFin, titulo, status)) {
			$.ajax({
				url: "http://localhost:3000/tarea/insert",
				data: {
					titulo: titulo,
					colaborador: colaborador,
					responsable: responsable,
					status: status,
					fechaFin: fechaFin,
					descripcion: descripcion
				},
				type: "POST",
				success: function (res) {
					var dfechas = [];
					var dcomentarios = [];
					$(".fecha").each(function (index) {
						var element = $(this); // <-- en la variable element tienes tu elemento
						dfechas.push(element.text());
					});
					$(".comentario").each(function (index) {
						var element = $(this); // <-- en la variable element tienes tu elemento
						dcomentarios.push(element.text());
					});

					for (let i = 0; i < dfechas.length; i++) {
						agregarComentario(responsable, dcomentarios[i], dfechas[i]);
					}
					$(location).attr("href", "/tarea");
				},
				error: function (error) {
					console.log("error: " + error);
				}
			});
		} else {
			alert("Datos vacios, rellenelos por favor");
		}
	});
});

const fieldvalidations = (colaborador, fechaFin, titulo, status) => {
	alert(fechaFin);
	return (
		colaborador !== "COLABORADOR" &&
		fechaFin !== "" &&
		titulo !== "" &&
		status !== "STATUS"
	);
};

/**
 * Agregar un nuevo comentario
 */
var agregarComentario = function (colaborador, comentario, fecha) {
	$.ajax({
		url: "http://localhost:3000/comentarios/insert",
		data: {
			colaborador: colaborador,
			comentario: comentario,
			fecha: fecha
		},
		type: "POST",
		success: function (res) {},
		error: function (error) {
			console.log("error: " + error);
		}
	});
};

/**
 *  Agregar en la interfaz un div de Comentario
 */
$(function () {
	$("#btnAgregar").click(function () {
		var comments = $(".comentario-container");
		var fullName =
			sessionStorage.getItem("name") +
			" " +
			sessionStorage.getItem("apellidopat") +
			" " +
			sessionStorage.getItem("apellidomat");
		var text = $("#comentario").text();
		var now = new Date(Date.now());
		var formatted =
			now.getFullYear() +
			"-" +
			toDigital(now.getMonth()) +
			"-" +
			toDigital(now.getDay()); //+ " "+
		// toDigital(now.getHours()) + ":" + toDigital(now.getMinutes()) + ":" + toDigital(now.getSeconds());

		var divComment = $(`
        <section class="comentario-container">
            <span class="nameColaborador">${fullName}</span><br>
            <span class="fecha">${formatted}</span>
            <hr/>
            <div class="comentario">
                ${text}
            </div>
        </section>`);

		if (comments.length != 0) {
			divComment.insertBefore(comments[0]);
		} else {
			$("#comments-section").append(divComment);
		}

		$("#comentario").text("");
	});
});

/**
 * Poner un 0 si el número es menor a 10
 * @param {*} num
 */
function toDigital(num) {
	return num < 10 ? "0" + num : num;
}

function init() {
	var btnArchivo = document.getElementById("btnArchivo");
	btnArchivo.addEventListener(
		"click",
		function (e) {
			e.preventDefault();
		},
		false
	);
}

window.addEventListener("load", init, false);
