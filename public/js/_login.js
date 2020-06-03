const ingresar = () => {
	const password = $("#pass").val();
	const user = $("#userName").val();
	if (validarLoggin(user, password)) {
		$.ajax({
			url: "http://localhost:3000/colaborador/loggin",
			data: {
				usuario: user,
				password: password
			},
			type: "POST",
			success: function (res) {
				$.ajax({
					url: "http://localhost:3001/validacion",
					data: res.response[res.response.length - 1],
					type: "POST",
					success: function (res) {
						sessionStorage.setItem("name", res.name);
						sessionStorage.setItem("id", res.id);
						sessionStorage.setItem("apellidopat", res.apellidopat);
						sessionStorage.setItem("apellidomat", res.apellidomat);
						sessionStorage.setItem("deparment", res.deparment);
						sessionStorage.setItem("puesto", res.puesto);
						if (res.puesto !== "Trabajador" && res.puesto !== "Empleado") {
							window.location = "http://localhost:3001/tarea";
						} else {
							window.location = "http://localhost:3001/tablatarea";
						}
					},
					error: function (error) {
						alert(`error: ${error.status}\n${error.responseJSON.msg}`);
					}
				});
			},
			error: function (error) {
				console.log("error: " + error);
			}
		});
	} else {
		alert("Datos vacios, rellenelos por favor");
	}
};

function validarLoggin(user, password) {
	return user !== "" && password !== "";
}

$(() => {
	$("#SingIn").click(ingresar);
});
