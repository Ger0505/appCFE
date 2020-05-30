const ingresar = () => {
	$.ajax({
		url: "urldatos",
		data: {
			usuario: "",
			password: "",
		},
		type: "GET",
		contentType: "application/json; charset=UTF-8",
		dataType: "json",
		success: function (res) {
			if (res.response[0].loggin === "true") {
				$.get({
					url: "http://localhost:3001/...",
					data: res.response,
					type: "GET",
					contentType: "application/json; charset=UTF-8",
					dataType: "json",
					success: function (res) {},
					error: function (error) {
						console.log("error: " + error);
					},
				});
			}
		},
		error: function (error) {
			console.log("error: " + error);
		},
	});
};

$(() => {
	$("buttonlogin").click();
});
