
var myLib = require("./funciones");
let mongoose = require('mongoose');
let user = require('./user');
let photo = require('./photos');
mongoose.connect('mongodb://localhost:27017/codenotchMG', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/foto', function (request, response) {
    myLib.subirFoto(request.body.nUsuario, request.body.urlFoto, request.body.titulo, request.body.descripcion, response)
    /* var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Foto Agregada'};
    response.send(respuesta); */
});
app.get('/fotos/:id', function (request, response) {
    var id = request.params.id;
    myLib.obtenerFoto(`usuario${id}`, response)
});
app.put('/user/follower/:id', function (request, response) {
    var id = request.params.id;
    myLib.seguir(`Usuario${id}`, 'usuario2', response)
    /* var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Seguidor Agregado'};
    response.send(respuesta); */
});
app.put('/user/unfollower/:id', function (request, response) {
    var id = request.params.id;
    myLib.dejarDeSeguir(`Usuario${id}`, 'usuario2', response)
   /*  var respuesta = { error: false, codigo: 200, Mensaje: 'Seguidor Borrado'};
    response.send(respuesta); */
});
//Delete
app.delete('/user/foto/:id', function (request, response) {
    var id = request.params.id;
    myLib.eliminarFoto(`usuario${id}`, 'Paisaje', response)
   /*  var respuesta = { error: false, codigo: 200, Mensaje: 'Foto Borrada' };
    response.send(respuesta); */
});
app.delete('/user/fotos/:id', function (request, response) {
    var id = request.params.id;
    myLib.eliminarTodasLasFotos(`usuario${id}`, response)
    /* var respuesta = { error: false, codigo: 200, Mensaje: 'Fotos Borradas' };
    response.send(respuesta); */
})

app.listen(1000); 


