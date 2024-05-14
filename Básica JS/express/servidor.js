var express = require("express");
var aplicacion = express();

aplicacion.get("/",inicio);
aplicacion.get("/cursos",cursos);

function inicio(peticion,resultado)
{
  resultado.send("Home algo");
}

function cursos(peticion,resultado)
{
  resultado.send("Cursos");
}

aplicacion.listen(8989);
