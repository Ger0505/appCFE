const getParameters = (nombreParametro) => {
	let sPageURL = window.location.href;
	let sDeconstrucURL = sPageURL.split("/"),
		sParameterName,
		i;
	for (let index = 0; index < sDeconstrucURL.length; index++) {
		let sURLVariables = sDeconstrucURL[index].split("&");
		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split("=");
			if (sParameterName[0] === nombreParametro) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	}
	return true;
};
$(document).ready(() => {
	if (
		sessionStorage.getItem("puesto") == "Trabajador" ||
		sessionStorage.getItem("puesto") == "Empleado"
	) {
		$(".navLateral-body-tittle-menu").remove();
		$(".nav").remove();
	}

	// Aqui se inserta el código para meter los datos en el html
	// por ejemplo;
	// let h2 = $("#idStatus");
	// h2.append();
	// h2.innerHTML = `<h2>${id}</h2>`;
});
