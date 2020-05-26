const contenedor = document.getElementsByClassName("contenedor")[0].children;
const nav = document.getElementById("tabs").children;

function mostrarDiv(event, opcion) {
	for (let index = 0; index < contenedor.length; index++) {
		if (opcion === contenedor[index].id) {
			contenedor[index].style.display = "initial";
		} else {
			contenedor[index].style.display = "none";
		}
	}
	for (let index = 0; index < nav.length; index++) {
		nav[index].className = "";
	}
	event.currentTarget.className += "tabs";
}
