var express = require("express");
var fs = require("fs");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
	req.session.destroy();
	res.sendFile(path.join(__dirname, "../views/index.html"));
});

const promesa = (JSON, req) => {
	return new Promise((resolve, reject) => {
		let isLogin = parseInt(JSON.login);
		if (isLogin) {
			req.session.name = req.body.Nombre;
			req.session.idCol = parseInt(req.body.IdColaborador);
			req.session.apellidopat = req.body.Apellido1;
			req.session.apellidomat = req.body.Apellido2;
			req.session.deparment = req.body.Departamento;
			req.session.puesto = req.body.Puesto;
			console.log(req.session.idCol);
			resolve({
				name: req.session.name,
				idCol: req.session.idCol,
				apellidopat: req.session.apellidopat,
				apellidomat: req.session.apellidomat,
				deparment: req.session.deparment,
				puesto: req.session.puesto
			});
		} else {
			reject({
				msg: "usuario no existente o invalido"
			});
		}
	});
};

router.post("/validacion", function (req, res, next) {
	promesa(req.body, req)
		.then((value) => {
			console.log(value.idCol);
			res.json({
				name: value.name,
				id: value.idCol,
				apellidopat: value.apellidopat,
				apellidomat: value.apellidomat,
				deparment: value.deparment,
				puesto: value.puesto
			});
		})
		.catch((err) => {
			res.status(400);
			res.json(err);
		});
	//res.sendFile(path.join(__dirname, "../views/tareas/tarea.html"));
});

router.get("/tarea", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/tarea.html"));
});

router.get("/tarea/insert", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/agregar_tarea.html"));
});

router.get("/tarea/details/:id", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/ver_tarea.html"));
});

router.get("/colaborador", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/colaborador/colaborador.html"));
});

router.get("/colaborador/actualizar/:id", function (req, res, next) {
	res.sendFile(
		path.join(__dirname, "../views/colaborador/actualizar_colaborador.html")
	);
});

router.get("/departamento", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/departamento/departamento.html"));
});

router.get("/departamento/actualizar/:id", function (req, res, next) {
	res.sendFile(
		path.join(__dirname, "../views/departamento/actualizar_departamento.html")
	);
});

router.get("/puesto", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/puesto/puesto.html"));
});

router.get("/puesto/actualizar/:id", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/puesto/actualizar_puesto.html"));
});

router.get("/status", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/status/status.html"));
});

router.get("/status/actualizar/:id", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/status/actualizar_status.html"));
});

router.get("/tablatarea", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/tabla_tarea.html"));
});

router.post("/fileupload", function (req, res) {
	let file = req.files.file;
	console.log(file.name);

	file.mv("./files/" + file.name, function (error) {
		if (error) return res.status(500).send({ message: error });

		// return res.status(200).send(
		// });
		location.href = "/tareas";
	});
});

module.exports = router;
