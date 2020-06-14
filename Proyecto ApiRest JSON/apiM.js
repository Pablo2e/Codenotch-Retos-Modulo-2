"use strict";
/* 2.	API REST de una película (Sin Profesional).
Teniendo en cuenta la definición de película de los ejercicios anteriores pero sin incluir las propiedades de tipo Profesional,  hacer un API REST de una película con los siguientes endpoints.
•	GET /pelicula. Obtiene los datos de una película
•	POST /pelicula. Crea una nueva película
•	PUT /pelicula. Actualiza los datos de una película.
•	DEL /película. Elimina la película
 3.	API REST de una película (Con Profesional)
Modificar el  API anterior para incluir un array de profesionales (actores) y el profesional director y guionista.
Esta nueva API tendrá los mismos endpoint que la anterior pero mostrará también la información relativa a los profesionales.
Además incluirá nuevos endpoints.
•	GET /pelicula/actor?id=8. Devuelve los datos relativos al actor con ese id.
•	GET /pelicula/director. Devuelve los datos relativos al director de la pelicula.
•	GET /pelicula/guionista. Devuelve los datos relativos al guionista de la pelicula.
•	POST /pelicula/actor. Añade un nuevo actor a la lista de actores de la película.
•	POST /pelicula/director. Crea un director de la película
•	POST /pelicula/guionista. Crea un guionista de la película
•	PUT /pelicula/actor. Modifica los datos de un actor.
•	PUT /pelicula/director. Modifica los datos del director.
•	PUT /pelicula/guionista. Modifica los datos del guionista.
•	DEL /pelicula/actor. Eliminar al actor de la lista de actores.
•	DEL /pelicula/director. Elimina al director
•	DEL /pelicula/guionista. Elimina al guionista de la pelicula */
exports.__esModule = true;
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var ficheroMov = "pelicula.json";
var ficheroAct = "actores.json";
//var pNueva:Movie=null
var aNuevo = null;
var dNuevo = null;
var gNuevo = null;
//GET
app.get('/', function (request, response) {
    var respuesta = { error: false, codigo: 200, Mensaje: 'Punto de inicio' };
    response.send(respuesta);
});
//----------------------------------------------------------------------------------------
//ApiRest 2 sin profesionales
//Get
app.get("/pelicula", function (request, response) {
    var respuesta = { error: false, codigo: 200, Movie: pNueva };
    response.send(respuesta);
});
//Post
app.post('/pelicula', function (request, response) {
    pNueva = new movie_1.Movie(request.body.title, request.body.releaseYear, request.body.nationality, request.body.genre);
    pNueva.setActors(request.body.actors),
        pNueva.setDirector(request.body.director),
        pNueva.setWriter(request.body.writer),
        pNueva.setLanguage(request.body.language),
        pNueva.setPlatform(request.body.platform),
        pNueva.setIsMCU(request.body.isMCU),
        pNueva.setMainChName(request.body.mainCharacterName),
        pNueva.setProducer(request.body.producer),
        pNueva.setDistributor(request.body.distributor);
    //arrayMov.push(pNueva);
    escribirEnFicheroJSON(pNueva, ficheroMov);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Pelicula Agregada', resultado: pNueva };
    response.send(respuesta);
});
//Put
app.put('/pelicula', function (request, response) {
    pNueva.setTitle(request.body.title),
        pNueva.setReleaseYear(request.body.releaseYear),
        pNueva.setNationality(request.body.nationality),
        pNueva.setActors(request.body.actors),
        pNueva.setDirector(request.body.director),
        pNueva.setWriter(request.body.writer),
        pNueva.setLanguage(request.body.language),
        pNueva.setPlatform(request.body.platform),
        pNueva.setIsMCU(request.body.isMCU),
        pNueva.setMainChName(request.body.mainCharacterName),
        pNueva.setProducer(request.body.producer),
        pNueva.setDistributor(request.body.distributor),
        pNueva.setGenre(request.body.genre);
    escribirEnFicheroJSON(pNueva, ficheroMov);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Pelicula Actualizada', resultado: pNueva };
    response.send(respuesta);
});
//Delete
app["delete"]('/pelicula', function (request, response) {
    pNueva = new movie_1.Movie(null, null, null, null);
    escribirEnFicheroJSON(pNueva, ficheroMov);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Pelicula Borrada', pNueva: pNueva };
    response.send(respuesta);
});
//-----------------------------------------------------------------------------------------
//ApiRest 3 con profesionales
//Get 
app.get('/pelicula/actor/:id', function (request, response) {
    var id = request.params.id;
    var respuesta = null;
    var arrayAct = pNueva.getActors();
    if (id >= 1 && id <= arrayAct.length) {
        var actor = arrayAct[id - 1];
        respuesta = { error: false, codigo: 200, Professional: actor };
    }
    else {
        respuesta = { error: true, codigo: 404, Mensaje: 'Actor no encontrado' };
    }
    response.send(respuesta);
});
app.get('/pelicula/director', function (request, response) {
    var respuesta = null;
    var direct = pNueva.getDirector();
    respuesta = { error: false, codigo: 200, Professional: direct };
    response.send(respuesta);
});
app.get('/pelicula/guionista', function (request, response) {
    var respuesta = null;
    var writer = pNueva.getWriter();
    respuesta = { error: false, codigo: 200, Professional: writer };
    response.send(respuesta);
});
//POST
app.post('/pelicula/actor', function (request, response) {
    aNuevo = new professional_1.Professional(request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession, request.body.photo);
    arrayAct.push(aNuevo);
    escribirEnFicheroJSON(arrayAct, ficheroAct);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Actor Agregado', resultado: aNuevo };
    response.send(respuesta);
});
app.post('/pelicula/director', function (request, response) {
    dNuevo = new professional_1.Professional(request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession, request.body.photo);
    pNueva.setDirector(dNuevo);
    escribirEnFicheroJSON(pNueva, ficheroMov);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Director Agregado', resultado: pNueva };
    response.send(respuesta);
});
app.post('/pelicula/guionista', function (request, response) {
    gNuevo = new professional_1.Professional(request.body.name, request.body.age, request.body.genre, request.body.weight, request.body.height, request.body.hairColor, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession, request.body.photo);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Guionista Agregado', resultado: gNuevo };
    response.send(respuesta);
});
//PUT //Arreglar
/* app.put('/pelicula/:id', function(request,response){
    let id= request.params.id;
    arrayMov[id-1].setTitle(request.body.title),
    arrayMov[id-1].setReleaseYear(request.body.releaseYear),
    arrayMov[id-1].setNationality(request.body.nationality),
    arrayMov[id-1].setActors(request.body.actors),
    arrayMov[id-1].setDirector(request.body.director),
    arrayMov[id-1].setWriter(request.body.writer),
    arrayMov[id-1].setLanguage(request.body.language),
    arrayMov[id-1].setPlatform(request.body.platform),
    arrayMov[id-1].setIsMCU(request.body.isMCU),
    arrayMov[id-1].setMainChName(request.body.mainCharacterName),
    arrayMov[id-1].setProducer(request.body.producer),
    arrayMov[id-1].setDistributor(request.body.distributor),
    arrayMov[id-1].setGenre(request.body.genre)
    escribirEnFicheroJSON(arrayMov, ficheroMov);
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Actualizada', resultado: pNueva};
    response.send(respuesta)
}); */
app.put('/pelicula/actor', function (request, response) {
    aNuevo = new professional_1.Professional(aNuevo.name = request.body.name, aNuevo.age = request.body.age, aNuevo.genre = request.body.genre, aNuevo.weight = request.body.weight, aNuevo.height = request.body.height, aNuevo.hairColor = request.body.hairColor, aNuevo.eyeColor = request.body.eyeColor, aNuevo.race = request.body.race, aNuevo.isRetired = request.body.isRetired, aNuevo.nationality = request.body.nationality, aNuevo.oscarsNumber = request.body.oscarsNumber, aNuevo.profession = request.body.profession, aNuevo.photo = request.body.photo);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Actor Actualizado', resultado: aNuevo };
    response.send(respuesta);
});
app.put('/pelicula/director', function (request, response) {
    dNuevo = new professional_1.Professional(dNuevo.name = request.body.name, dNuevo.age = request.body.age, dNuevo.genre = request.body.genre, dNuevo.weight = request.body.weight, dNuevo.height = request.body.height, dNuevo.hairColor = request.body.hairColor, dNuevo.eyeColor = request.body.eyeColor, dNuevo.race = request.body.race, dNuevo.isRetired = request.body.isRetired, dNuevo.nationality = request.body.nationality, dNuevo.oscarsNumber = request.body.oscarsNumber, dNuevo.profession = request.body.profession, dNuevo.photo = request.body.photo);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Director Actualizado', resultado: dNuevo };
    response.send(respuesta);
});
app.put('/pelicula/guionista', function (request, response) {
    gNuevo = new professional_1.Professional(gNuevo.name = request.body.name, gNuevo.age = request.body.age, gNuevo.genre = request.body.genre, gNuevo.weight = request.body.weight, gNuevo.height = request.body.height, gNuevo.hairColor = request.body.hairColor, gNuevo.eyeColor = request.body.eyeColor, gNuevo.race = request.body.race, gNuevo.isRetired = request.body.isRetired, gNuevo.nationality = request.body.nationality, gNuevo.oscarsNumber = request.body.oscarsNumber, gNuevo.profession = request.body.profession, gNuevo.photo = request.body.photo);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Guionista Actualizado', resultado: gNuevo };
    response.send(respuesta);
});
//DELETE
app["delete"]('/pelicula/actor', function (request, response) {
    aNuevo = null;
    var respuesta = { error: false, codigo: 200, Mensaje: 'Actor Borrado' };
    response.send(respuesta);
});
app["delete"]('/pelicula/director', function (request, response) {
    dNuevo = null;
    var respuesta = { error: false, codigo: 200, Mensaje: 'Director Borrado' };
    response.send(respuesta);
});
app["delete"]('/pelicula/guionista', function (request, response) {
    gNuevo = null;
    var respuesta = { error: false, codigo: 200, Mensaje: 'Escritor Borrado' };
    response.send(respuesta);
});
app.listen(5000);
function escribirEnFicheroJSON(array, nombreFichero) {
    var result = "";
    result = JSON.stringify(array, null, 2); // pasa a string el objeto pasado 
    fs.writeFileSync(nombreFichero, result); //escribe el string 
}
var lecturaM = fs.readFileSync(ficheroMov, 'utf8'); //leo el fichero y lo convierto a texto
var pNueva = (JSON.parse(lecturaM)); //creo un objeto del string leido en lectura
var lectura = fs.readFileSync(ficheroAct, 'utf8'); //leo el fichero y lo convierto a texto
var arrayAct = (JSON.parse(lectura)); //creo un objeto del string leido en lectura
//Profesionales
var actor1 = new professional_1.Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg");
var actor2 = new professional_1.Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress", "http//:foto.jpg");
var actor3 = new professional_1.Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg");
var actor4 = new professional_1.Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg");
var actor8 = new professional_1.Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg");
var director2 = new professional_1.Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg");
var director1 = new professional_1.Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg");
var writer1 = new professional_1.Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer", "http//:foto.jpg");
//let arrayAct:Professional[]= new Array()
arrayAct = [actor1, actor2, actor3, actor4, actor8];
