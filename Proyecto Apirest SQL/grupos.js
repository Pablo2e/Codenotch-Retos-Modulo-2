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
app.get("/grupos/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM groups WHERE group_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Grupo a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Grupo', resultado: result };
    response.send(respuesta);
    })
});
app.get("/grupos", function (request, response) {
    let sql = "SELECT * FROM groups";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Datos a mostrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Grupos', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/grupos", function (request, response) {
    let sql = "INSERT INTO groups (group_id, name) VALUES ( null, 'codenotch_OTOÑO_2021')";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Grupo a Ingresar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Grupo Ingresado', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/grupos/:id", function (request, response) {
    var id = request.params.id;
    let sql = "UPDATE groups SET name = 'codenotch_otoño_2021' WHERE group_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Grupo a modificar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Grupo Modificado', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/grupos/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM groups WHERE group_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log('Grupo a borrar')
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Grupo ${id} borrado`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(9000);