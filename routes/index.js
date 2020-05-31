var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.post("/validacion", function (req, res, next) {
	let isLogin = parseInt(req.body.login);
	if (isLogin) {
		req.session.name = req.body.Nombre;
		req.session.idCol = parseInt(req.body.IdColaborador);
		req.session.apellidopat = req.body.Apellido1;
		req.session.apellidomat = req.body.Apellido2;
		req.session.deparment = req.body.Departamento;
		req.session.puesto = req.body.Puesto;
		res.json({
			name: req.session.name,
			id: req.session.idCol,
			apellidopat: req.session.apellidopat,
			apellidomat: req.session.apellidomat,
			deparment: req.session.deparment,
			puesto: req.session.puesto
		});
	} else {
		res.redirect("/");
	}
	//res.sendFile(path.join(__dirname, "../views/tareas/tarea.html"));
});

router.get("/tarea", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/tarea.html"));
});

router.get("/tarea/insert", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/agregarTarea.html"));
});

router.get("/tarea/prueba", function (req, res, next) {
	res.sendFile(path.join(__dirname, "../views/tareas/pruebaTarea.html"));
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

router.get("/tablatarea",function(req,res,next){
	res.sendFile(path.join(__dirname,"../views/tareas/tabla_tarea.html"));	
});

module.exports = router;
