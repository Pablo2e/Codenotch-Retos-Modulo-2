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
    database: 'imdb'
});
connection.connect(function(error){
    if(error)
        console.log(error)
    else
        console.log('Conexión correcta')
});
//Get
app.get("/profesionales/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM profesional WHERE profesional_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesional', resultado: result };
    response.send(respuesta);
    })
});
app.get("/profesionales", function (request, response) {
    let sql = "SELECT * FROM profesional";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesionales', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/profesionales", function (request, response) {
    let sql = `INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES (${request.body.profesional_id}, "${request.body.nombre}", ${request.body.edad}, "${request.body.genero}", ${request.body.peso}, ${request.body.altura}, "${request.body.color_pelo}", "${request.body.color_ojos}", "${request.body.raza}", "${request.body.retirado}", "${request.body.nacionalidad}", ${request.body.n_oscars}, "${request.body.profesion}", "${request.body.foto}")`;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Profesional Ingresado', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/profesionales", function (request, response) {
    let sql = `UPDATE profesional SET nombre= "${request.body.nombre}", edad= ${request.body.edad}, genero= "${request.body.genero}", peso= ${request.body.peso}, altura= ${request.body.altura}, color_pelo= "${request.body.color_pelo}", color_ojos= "${request.body.color_ojos}", raza= "${request.body.raza}", retirado= "${request.body.retirado}", nacionalidad= "${request.body.nacionalidad}", n_oscars= ${request.body.n_oscars}, profesion= "${request.body.profesion}", foto= "${request.body.foto}" WHERE profesional_id =${request.body.profesional_id}`;
    connection.query(sql,  function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesional Modificado', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/profesionales", function (request, response) {
    let sql = `DELETE FROM profesional WHERE profesional_id =${request.body.profesional_id}`;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Profesional borrado`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(1000);