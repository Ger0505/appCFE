const ingresar = () => {
	const password = $("#pass").val();
	const user = $("#userName").val();
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
					window.location = "http://localhost:3001/tarea";
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
