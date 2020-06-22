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
app.get("/profesores/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM teachers WHERE teacher_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesor', resultado: result };
    response.send(respuesta);
    })
});
app.get("/profesores", function (request, response) {
    let sql = "SELECT * FROM teachers";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesores', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/profesores", function (request, response) {
    let params = new Array('null', 'Jose', 'Saez')
    let sql = "INSERT INTO teachers (teacher_id, first_name, last_name) VALUES ( ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Profesor a Ingresar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Profesor Ingresado', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/profesores/:id", function (request, response) {
    let params = new Array('Hernan','Roca')
    var id = request.params.id;
    let sql = "UPDATE teachers SET first_name = ?, last_name = ? WHERE teacher_id ="+id;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesor Modificado', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/profesores/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM teachers WHERE teacher_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Profesor ${id} borrado`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(9000);