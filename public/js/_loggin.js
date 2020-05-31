const ingresar = () => {
	$.ajax({
		url: "http://localhost:3000/colaborador/loggin",
		data: {
			usuario: "Kribrick",
			password: "123"
		},
		type: "POST",
		success: function (res) {
			$.ajax({
				url: "http://localhost:3001/validacion",
				data: res.response[res.response.length - 1],
				type: "POST",
				success: function (res) {
					console.log(res);
					// sessionStorage.setItem("name", res);
					// sessionStorage.setItem("id", req.session.id);
					// sessionStorage.setItem("apellidopat", req.session.apellidopat);
					// sessionStorage.setItem("apellidomat", req.session.apellidomat);
					// sessionStorage.setItem("deparment", req.session.deparment);
					// sessionStorage.setItem("puesto", req.session.puesto);
					// window.location = "http://localhost:3001/tarea";
				},
				error: function (error) {
					console.log("error: " + error);
				}
			});
		},
		error: function (error) {
			console.log("error: " + error);
		}
	});
};

$(() => {
	$("#SingIn").click(ingresar);
});
