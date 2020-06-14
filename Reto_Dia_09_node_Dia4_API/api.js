"use strict";
/* RETOS Reto 1:
• Crea un API REST para la clase profesional de vuestra aplicación IMDB
• Con todos los verbos HTTP
• Que reciban información por la petición y la devuelvan por la respuesta.
Reto 2: Utilizar Postman y lanza peticiones con:
1. ‘GET’ 2. ‘POST’ 3. ‘PUT’ 4. ‘DELETE’
hacia el API REST creada en el ejercicio anterior y comprueba su funcionamiento.*/
exports.__esModule = true;
var professional_1 = require("./professional");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var profesional = null;
app.get('/', function (request, response) {
    var respuesta = { error: false, codigo: 200, Mensaje: 'Punto de inicio' };
    response.send(respuesta);
});
app.get('/profesional', function (request, response) {
    if (profesional === null) {
        response.send('Profesional no creado');
    }
    else {
        //console.log(profesional.toString())
        //response.send(profesional.toString())
        response.send(profesional);
        //response.send(profesional.printJson())
    }
});
app.post('/profesional', function (request, response) {
    profesional = new professional_1.Professional(request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession, request.body.photo);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Profesional', resultado: profesional };
    response.send(respuesta);
});
app.put('/profesional', function (request, response) {
    profesional.name = request.body.name;
    profesional.age = request.body.age;
    profesional.genre = request.body.genre;
    profesional.weight = request.body.weight;
    profesional.height = request.body.height;
    profesional.hairColor = request.body.hairColor;
    profesional.eyeColor = request.body.eyeColor;
    profesional.race = request.body.race;
    profesional.isRetired = request.body.isRetired;
    profesional.nationality = request.body.nationality;
    profesional.oscarsNumber = request.body.oscarsNumber;
    profesional.profession = request.body.profession;
    profesional.photo = request.body.photo;
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesional Actualizado', resultado: profesional };
    response.send(respuesta);
});
app["delete"]('/profesional', function (request, response) {
    profesional = null;
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesional Borrado' };
    response.send(respuesta);
});
app.use(function (req, res, next) {
    var respuesta = { error: true, codigo: 404, Mensaje: 'Url no encotrada' };
    res.status(404).send(respuesta);
});
app.listen(2000);
/* let actor1 = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg")
let actor2 = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "http//:foto.jpg", "http//:foto.jpg")
let actor3 = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg")
let actor4 = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg")
let actor5 = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg")

console.log(actor1.name) */ 
