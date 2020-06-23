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
app.get("/alumnos/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM students WHERE student_id ="+id;
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
app.post("/alumnos", function (request, response) {
    let sql = `INSERT INTO students (student_id, first_name, last_name, group_id, año_ingreso) VALUES(${request.body.student_id},"${request.body.first_name}","${request.body.last_name}",${request.body.group_id},${request.body.año_ingreso})`; 
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Alumno a Ingresar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Alumno Nuevo Ingresado', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/alumnos", function (request, response) {
    let sql = `UPDATE students SET first_name = "${request.body.first_name}", last_name = "${request.body.last_name}", group_id = ${request.body.group_id}, año_ingreso = ${request.body.año_ingreso} WHERE student_id = ${request.body.student_id}`;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Alumno corregido', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/alumnos", function (request, response) {
    let sql = `DELETE FROM students WHERE student_id = ${request.body.student_id}`;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Dato a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Alumno borrado`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(9000);