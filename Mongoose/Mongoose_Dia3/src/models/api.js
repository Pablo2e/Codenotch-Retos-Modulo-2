
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
    myLib.subirFoto(request.body.nUsuario, request.body.urlFoto, request.body.titulo, request.body.descripcion)
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Foto Agregada'};
    response.send(respuesta);
});
app.get("/fotos", function (request, response) {
    let salida=myLib.obtenerFoto('usuario2')
    var respuesta = { error: false, codigo: 200, salida  };
    response.send(respuesta);
});
app.put('/user/follower', function (request, response) {
    myLib.seguir('Usuario', 'usuario2')
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Seguidor Agregado'};
    response.send(respuesta);
});
app.put('/user/unfollower', function (request, response) {
    myLib.dejarDeSeguir('Usuario', 'usuario2')
    var respuesta = { error: false, codigo: 200, Mensaje: 'Seguidor Borrado'};
    response.send(respuesta);
});
//Delete
app.delete('/foto', function (request, response) {
    myLib.eliminarFoto('usuario1', 'Paisaje')
    var respuesta = { error: false, codigo: 200, Mensaje: 'Foto Borrada' };
    response.send(respuesta);
});
app.delete('/fotos', function (request, response) {
    myLib.eliminarTodasLasFotos('usuario2')
    var respuesta = { error: false, codigo: 200, Mensaje: 'Fotos Borradas' };
    response.send(respuesta);
})

app.listen(1000); 


