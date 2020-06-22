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
app.get("/asignaturas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM subjects WHERE subject_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Grupo a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Asignatura', resultado: result };
    response.send(respuesta);
    })
});
app.get("/asignaturas", function (request, response) {
    let sql = "SELECT * FROM subjects";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Datos a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Asignatura', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/asignaturas", function (request, response) {
    let params = new Array('null', 'React')
    let sql = "INSERT INTO subjects (subject_id, title) VALUES ( ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Asignatura a Ingresar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Asignatura Ingresada', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/asignaturas/:id", function (request, response) {
    let params = new Array('SASS')
    var id = request.params.id;
    let sql = "UPDATE subjects SET title = ? WHERE subject_id ="+id;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Asignatura a modificar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Asignatura Modificada', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/asignaturas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM subjects WHERE subject_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Asignatura a borrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Asignatura ${id} borrada`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(9000);