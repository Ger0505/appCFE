var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/tarea", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/tareas/agregarTarea.html"));
});

router.get("/colaborador", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/colaborador/colaborador.html"));
});

router.get("/departamento", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/departamento/departamento.html"));
});

router.get("/puesto", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/puesto/puesto.html"));
});

router.get("/status", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../views/status/status.html"));
});

module.exports = router;
