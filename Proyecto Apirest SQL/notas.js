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
app.get("/notas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT mark FROM marks WHERE subject_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nota', resultado: result };
    response.send(respuesta);
    })
});
app.get("/notas", function (request, response) {
    let sql = "SELECT * FROM marks";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Datos a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Notas', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/notas", function (request, response) {
    let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES ( null, 16, 6, '2019-06-12',8)";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota a Ingresar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Nota Ingresada', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/notas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "UPDATE marks SET subject_id=5, date='2019-06-12', mark=3 WHERE mark_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota a modificar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nota Modificada', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/notas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM marks WHERE mark_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Nota a borrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Nota ${id} borrada`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(9000);