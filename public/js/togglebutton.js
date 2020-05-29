const activar = function (event) {
	if (event.currentTarget.className === "botonestoolbox ") {
		event.currentTarget.className += "botonestoolbox-selected";
	} else {
		event.currentTarget.className =
			event.currentTarget.className.split(" ")[0] + " ";
	}
};
