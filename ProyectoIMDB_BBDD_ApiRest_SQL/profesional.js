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
    let params = new Array('null', 'Jennifer Aniston', '50', 'Femenino', '60', '170', 'Rubio', 'Azules', 'Caucasico', 'No', 'EEUU', '0', 'Actriz',"http://foto1.jpg")
    let sql = "INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
app.put("/profesionales/:id", function (request, response) {
    let params = new Array('Megan Fox', '40', 'Femenino', '50', '160', 'Rubio', 'Azules', 'Caucasico', 'No', 'EEUU', '0', 'Actriz','http://foto1.jpg')
    var id = request.params.id;
    let sql = "UPDATE profesional SET nombre= ?, edad= ?, genero= ?, peso= ?, altura= ?, color_pelo= ?, color_ojos= ?, raza= ?, retirado= ?, nacionalidad= ?, n_oscars= ?, profesion= ?, foto= ? WHERE profesional_id ="+id;
    connection.query(sql, params, function(err, result){
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
app.delete("/profesionales/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM profesional WHERE profesional_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Profesional ${id} borrado`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(1000);