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
    let profesional_id = request.body.profesional_id
    let nombre = request.body.nombre
    let edad = request.body.edad
    let genero = request.body.genero
    let peso = request.body.peso
    let altura = request.body.altura
    let color_pelo = request.body.color_pelo
    let color_ojos = request.body.color_ojos
    let raza = request.body.raza
    let retirado = request.body.retirado
    let nacionalidad = request.body.nacionalidad
    let n_oscars = request.body.n_oscars
    let profesion = request.body.profesion
    let foto = request.body.foto
    let params = [profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto]
    let sql = `INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(sql, params, function(err, result){
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
    let profesional_id = request.body.profesional_id
    let nombre = request.body.nombre
    let edad = request.body.edad
    let genero = request.body.genero
    let peso = request.body.peso
    let altura = request.body.altura
    let color_pelo = request.body.color_pelo
    let color_ojos = request.body.color_ojos
    let raza = request.body.raza
    let retirado = request.body.retirado
    let nacionalidad = request.body.nacionalidad
    let n_oscars = request.body.n_oscars
    let profesion = request.body.profesion
    let foto = request.body.foto
    let params = [nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto, profesional_id]
    let sql = `UPDATE profesional SET nombre=?, edad=?, genero=?, peso=?, altura=?, color_pelo=?, color_ojos=?, raza=?, retirado=?, nacionalidad=?, n_oscars=?, profesion=?, foto=? WHERE profesional_id =?`;
    connection.query(sql, params,  function(err, result){
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
    let profesional_id = request.body.profesional_id;
    let params = profesional_id
    let sql = `DELETE FROM profesional WHERE profesional_id =?`;
    connection.query(sql, params, function(err, result){
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