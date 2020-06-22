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
app.get("/productoras/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM productora WHERE productora_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Productora', resultado: result };
    response.send(respuesta);
    })
});
app.get("/productoras", function (request, response) {
    let sql = "SELECT * FROM productora";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Productoras', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/productoras", function (request, response) {
    let params = new Array('null', 'Columbia', '1950', 'EEUU')
    let sql = "INSERT INTO productora (productora_id, nombre, año_creacion, pais_origen) VALUES ( ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Productora Ingresada', resultado: result };
    response.send(respuesta);
    })
});
//Put
app.put("/productoras/:id", function (request, response) {
    let params = new Array('Nikkei', '2000', 'Japon')
    var id = request.params.id;
    let sql = "UPDATE productora SET nombre= ?, año_creacion= ?, pais_origen= ? WHERE productora_id ="+id;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Productora Modificada', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/productoras/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM productora WHERE productora_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Productora ${id} borrada`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(1100);