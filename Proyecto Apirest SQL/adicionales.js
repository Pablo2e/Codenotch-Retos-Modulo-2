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
//Obten la nota media del id del alumno pasado por parámetro, elegir cualquiera de los dos formatos
app.get("/media/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT AVG(mark) FROM marks WHERE student_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota Media a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nota Media', resultado: result };
    response.send(respuesta);
    })
});
//Devuelve la lista de las asignaturas a la que están apuntadas el alumno del id pasado por parámetro
app.get("/apuntadas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT subjects.title FROM marks INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE student_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Asignatura que cursa el alumno indicado', resultado: result };
    response.send(respuesta);
    })
});
//Devuelve los nombres y apellidos de todos los alumnos y los nombres de las asignaturas a la que están apuntadas
app.get("/apuntadas", function (request, response) {
    let sql = "SELECT students.first_name, students.last_name, subjects.title FROM marks INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) INNER JOIN students ON (marks.student_id = students.student_id)";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Datos a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Alumnos y asignatura que cursan', resultado: result };
    response.send(respuesta);
    })
});
//Devuelve la lista de las asignaturas que imparte el profesor cuyo id es pasado por parámetro
app.get("/impartidas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT subjects.title FROM subject_teacher INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) WHERE teacher_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Asignaturas que imparte el Profesor especificado', resultado: result };
    response.send(respuesta);
    })
});
//Devuelve los nombres y apellidos de todos los profesores y los nombres de las asignaturas a la que imparten
app.get("/impartidas", function (request, response) {
    let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title FROM subject_teacher INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) RIGHT JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Datos a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Profesores y asignaturas que imparten', resultado: result };
    response.send(respuesta);
    })
});

app.listen(9000);