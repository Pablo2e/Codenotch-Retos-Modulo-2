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
app.get("/peliculas", function (request, response) {
    let sql = "SELECT pelicula.pelicula_id, pelicula.titulo, pelicula.año_lanzamiento, pelicula.nacionalidad, pelicula.idioma, pelicula.plataforma, pelicula.esMCU, pelicula.nombre_protagonista, productora.nombre AS productora, pelicula.distribuidora, pelicula.genero FROM `pelicula` INNER JOIN productora ON (pelicula.productora_id = productora.productora_id)";
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Peliculas', resultado: result };
    response.send(respuesta);
    })
});
app.get("/peliculas/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT pelicula.pelicula_id, pelicula.titulo, pelicula.año_lanzamiento, pelicula.nacionalidad, pelicula.idioma, pelicula.plataforma, pelicula.esMCU, pelicula.nombre_protagonista, productora.nombre AS productora, pelicula.distribuidora, pelicula.genero FROM `pelicula` INNER JOIN productora ON (pelicula.productora_id = productora.productora_id) WHERE pelicula.pelicula_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Pelicula', resultado: result };
    response.send(respuesta);
    })
});
app.get("/pelicula/actor/Pelicula/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT profesional.profesional_id, profesional.nombre, profesional.edad, profesional.genero, profesional.peso, profesional.altura, profesional.color_pelo, profesional.color_ojos, profesional.raza, profesional.retirado, profesional.nacionalidad, profesional.n_oscars, profesional.profesion, profesional.foto FROM profesionales_pelicula INNER JOIN pelicula ON (profesionales_pelicula.pelicula_id = pelicula.pelicula_id) INNER JOIN profesional ON (profesionales_pelicula.profesional_id = profesional.profesional_id) WHERE profesional.profesion = 'Actor' AND pelicula.pelicula_id ="+id ;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Actores por Pelicula', resultado: result };
    response.send(respuesta);
    })
});
app.get("/pelicula/director/Pelicula/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT profesional.profesional_id, profesional.nombre, profesional.edad, profesional.genero, profesional.peso, profesional.altura, profesional.color_pelo, profesional.color_ojos, profesional.raza, profesional.retirado, profesional.nacionalidad, profesional.n_oscars, profesional.profesion, profesional.foto FROM profesionales_pelicula INNER JOIN pelicula ON (profesionales_pelicula.pelicula_id = pelicula.pelicula_id) INNER JOIN profesional ON (profesionales_pelicula.profesional_id = profesional.profesional_id) WHERE profesional.profesion = 'Director' AND pelicula.pelicula_id ="+id ;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Directores por Pelicula', resultado: result };
    response.send(respuesta);
    })
});
app.get("/pelicula/guionista/Pelicula/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT profesional.profesional_id, profesional.nombre, profesional.edad, profesional.genero, profesional.peso, profesional.altura, profesional.color_pelo, profesional.color_ojos, profesional.raza, profesional.retirado, profesional.nacionalidad, profesional.n_oscars, profesional.profesion, profesional.foto FROM profesionales_pelicula INNER JOIN pelicula ON (profesionales_pelicula.pelicula_id = pelicula.pelicula_id) INNER JOIN profesional ON (profesionales_pelicula.profesional_id = profesional.profesional_id) WHERE profesional.profesion = 'Guionista' AND pelicula.pelicula_id ="+id ;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Guionistas por Pelicula', resultado: result };
    response.send(respuesta);
    })
});
app.get("/pelicula/productora/Pelicula/:id", function (request, response) {
    var id = request.params.id;
    let sql = "SELECT * FROM productora INNER JOIN pelicula ON (productora.productora_id = pelicula.productora_id) WHERE pelicula.pelicula_id ="+id ;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Productora por Pelicula', resultado: result };
    response.send(respuesta);
    })
});
//Post
app.post("/peliculas", function (request, response) {
    let params = new Array('null', 'Minimo', '2020', 'Española', 'Español', 'Cine', 'No', 'Carlos Perez', '2', 'El Deseo', 'Comedia')
    let sql = "INSERT INTO pelicula (pelicula_id, titulo, año_lanzamiento, nacionalidad, idioma, plataforma, esMCU, nombre_protagonista, productora_id, distribuidora, genero) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nueva Pelicula Ingresada', resultado: result };
    response.send(respuesta);
    })
});
app.post("/pelicula/actor", function (request, response) {
    let params = new Array('null', 'Jennifer Aniston', '50', 'Femenino', '60', '170', 'Rubio', 'Azules', 'Caucasico', 'No', 'EEUU', '0', 'Actriz',"http://foto1.jpg")
    let sql = "INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Actor Ingresado', resultado: result };
    response.send(respuesta);
    })
});
app.post("/pelicula/director", function (request, response) {
    let params = new Array('null', 'Steven Spielverg', '70', 'Masculino', '90', '170', 'Rubio', 'Azules', 'Caucasico', 'No', 'EEUU', '2', 'Director',"http://foto1.jpg")
    let sql = "INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Director Ingresado', resultado: result };
    response.send(respuesta);
    })
});
app.post("/pelicula/guionista", function (request, response) {
    let params = new Array('null', 'María Hernandez', '50', 'Femenino', '60', '170', 'Rubio', 'Azules', 'Caucasico', 'No', 'España', '0', 'Guionista',"http://foto1.jpg")
    let sql = "INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Nuevo Guionista Ingresado', resultado: result };
    response.send(respuesta);
    })
});
//Put
 app.put("/peliculas/:id", function (request, response) {
    let params = new Array('Furtivos', '2020', 'Española', 'Español', 'Cine', 'No', 'Carlos Perez', '2', 'El Deseo', 'Comedia')
    var id = request.params.id;
    let sql = "UPDATE pelicula SET titulo=?, año_lanzamiento=?, nacionalidad=?, idioma=?, plataforma=?, esMCU=?, nombre_protagonista=?, productora_id=?, distribuidora=?, genero=? WHERE pelicula_id ="+id;
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
app.delete("/pelicula/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM pelicula WHERE pelicula_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Pelicula ${id} borrada`, resultado: result };
    response.send(respuesta);
    })
});
app.delete("/pelicula/actor/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM profesional WHERE profesional_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Actor ${id} borrado`, resultado: result };
    response.send(respuesta);
    })
});
app.delete("/pelicula/director/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM profesional WHERE profesional_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Director ${id} borrado`, resultado: result };
    response.send(respuesta);
    })
});
app.delete("/pelicula/guionista/:id", function (request, response) {
    var id = request.params.id;
    let sql = "DELETE FROM profesional WHERE profesional_id ="+id;
    connection.query(sql, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: `Guionista ${id} borrado`, resultado: result };
    response.send(respuesta);
    })
});

app.listen(1200);