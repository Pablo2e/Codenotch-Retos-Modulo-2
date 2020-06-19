var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: null,
    database: 'ejerciciodia2'
});
connection.connect(function(error){
    if(error)
        console.log(error)
    else
        console.log('Conexión correcta')
});
//Get
app.get("/alumnos", function (request, response) {
    let sql = "SELECT * FROM students";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Alumnos', resultado: result };
    response.send(respuesta);
    })
});
//Post
/* app.post('/pelicula', function (request, response) {
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
    arrayMov.push(pNueva);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Pelicula Agregada', resultado: pNueva };
    response.send(respuesta);
}); */
//Put
/* app.put('/pelicula/:id', function (request, response) {
    var id = request.params.id;
    arrayMov[id - 1].setTitle(request.body.title),
        arrayMov[id - 1].setReleaseYear(request.body.releaseYear),
        arrayMov[id - 1].setNationality(request.body.nationality),
        arrayMov[id - 1].setActors(request.body.actors),
        arrayMov[id - 1].setDirector(request.body.director),
        arrayMov[id - 1].setWriter(request.body.writer),
        arrayMov[id - 1].setLanguage(request.body.language),
        arrayMov[id - 1].setPlatform(request.body.platform),
        arrayMov[id - 1].setIsMCU(request.body.isMCU),
        arrayMov[id - 1].setMainChName(request.body.mainCharacterName),
        arrayMov[id - 1].setProducer(request.body.producer),
        arrayMov[id - 1].setDistributor(request.body.distributor),
        arrayMov[id - 1].setGenre(request.body.genre);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Pelicula Actualizada', resultado: arrayMov[id - 1] };
    response.send(respuesta);
}); */
//Delete
/* app["delete"]('/pelicula/:id', function (request, response) {
    var id = request.params.id;
    arrayMov.splice((id - 1), 1);
    var respuesta = { error: false, codigo: 200, Mensaje: 'Pelicula Borrada' };
    response.send(respuesta);
}); */

app.listen(9000);