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
    let pelicula_id = request.body.pelicula_id
    let titulo = request.body.titulo
    let año_lanzamiento = request.body.año_lanzamiento
    let nacionalidad = request.body.nacionalidad
    let idioma = request.body.idioma
    let plataforma = request.body.plataforma
    let esMCU = request.body.esMCU
    let nombre_protagonista = request.body.nombre_protagonista
    let productora_id = request.body.productora_id
    let distribuidora = request.body.distribuidora
    let genero = request.body.genero
    let params = [pelicula_id, titulo, año_lanzamiento, nacionalidad, idioma, plataforma, esMCU, nombre_protagonista, productora_id, distribuidora, genero]
    let sql = `INSERT INTO pelicula (pelicula_id, titulo, año_lanzamiento, nacionalidad, idioma, plataforma, esMCU, nombre_protagonista, productora_id, distribuidora, genero) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
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
    let pelicula_id = request.body.pelicula_id
    let params = [profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto]
    let sql = `INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let valor = result.insertId
            let params2 = [valor, pelicula_id]
            let sql2 = `INSERT INTO profesionales_pelicula (profesional_id, pelicula_id) VALUES (?,?)`; 
            connection.query(sql2, params2, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Nuevo Actor Ingresado', resultado: result };
                response.send(respuesta2);    
                } 
            })
        }
    })
});
app.post("/pelicula/director", function (request, response) {
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
    let pelicula_id = request.body.pelicula_id
    let params = [profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto]
    let sql = `INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let valor = result.insertId
            let params2 = [valor, pelicula_id]
            let sql2 = `INSERT INTO profesionales_pelicula (profesional_id, pelicula_id) VALUES (?,?)`; 
            connection.query(sql2, params2, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Nuevo Director Ingresado', resultado: result };
                response.send(respuesta2);    
                } 
            })
        }
    })
});
app.post("/pelicula/guionista", function (request, response) {
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
    let pelicula_id = request.body.pelicula_id
    let params = [profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto]
    let sql = `INSERT INTO profesional (profesional_id, nombre, edad, genero, peso, altura, color_pelo, color_ojos, raza, retirado, nacionalidad, n_oscars, profesion, foto) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let valor = result.insertId
            let params2 = [valor, pelicula_id]
            let sql2 = `INSERT INTO profesionales_pelicula (profesional_id, pelicula_id) VALUES (?,?)`; 
            connection.query(sql2, params2, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Nuevo Guionista Ingresado', resultado: result };
                response.send(respuesta2);    
                } 
            })
        }
    })
});
//Put
 app.put("/peliculas", function (request, response) {
    let pelicula_id = request.body.pelicula_id
    let titulo = request.body.titulo
    let año_lanzamiento = request.body.año_lanzamiento
    let nacionalidad = request.body.nacionalidad
    let idioma = request.body.idioma
    let plataforma = request.body.plataforma
    let esMCU = request.body.esMCU
    let nombre_protagonista = request.body.nombre_protagonista
    let productora_id = request.body.productora_id
    let distribuidora = request.body.distribuidora
    let genero = request.body.genero
    let params = [titulo, año_lanzamiento, nacionalidad, idioma, plataforma, esMCU, nombre_protagonista, productora_id, distribuidora, genero, pelicula_id]
    let sql = `UPDATE pelicula SET titulo=?, año_lanzamiento=?, nacionalidad=?, idioma=?, plataforma=?, esMCU=?, nombre_protagonista=?, productora_id=?, distribuidora=?, genero=? WHERE pelicula_id =?`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            console.log(result)
        } 
    var respuesta = { error: false, codigo: 200, Mensaje: 'Pelicula Modificada', resultado: result };
    response.send(respuesta);
    })
}); 
//Delete
app.delete("/peliculas", function (request, response) {
    let pelicula_id = request.body.pelicula_id;
    let params = pelicula_id
    let sql = `DELETE FROM profesionales_pelicula WHERE pelicula_id=?`; 
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let sql2 = `DELETE FROM pelicula WHERE pelicula_id =?`;
            connection.query(sql2, params, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Pelicula y sus relaciones borradas', resultado: result };
                response.send(respuesta2);    
                } 
            })    
        }
    })
});
app.delete("/pelicula/actor", function (request, response) {
    let profesional_id = request.body.profesional_id;
    let pelicula_id = request.body.pelicula_id;
    let params = [profesional_id, pelicula_id]
    let sql = `DELETE FROM profesionales_pelicula WHERE profesional_id =? AND pelicula_id=?`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let sql2 = `DELETE FROM profesional WHERE profesional_id=?`; 
            connection.query(sql2, params, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Actor borrado', resultado: result };
                response.send(respuesta2);    
                } 
            })    
        }
    })
});
app.delete("/pelicula/director", function (request, response) {
    let profesional_id = request.body.profesional_id;
    let pelicula_id = request.body.pelicula_id;
    let params = [profesional_id, pelicula_id]
    let sql = `DELETE FROM profesionales_pelicula WHERE profesional_id =? AND pelicula_id=?`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let sql2 = `DELETE FROM profesional WHERE profesional_id=?`; 
            connection.query(sql2, params, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Director borrado', resultado: result };
                response.send(respuesta2);    
                } 
            })    
        }
    })
});
app.delete("/pelicula/guionista", function (request, response) {
    let profesional_id = request.body.profesional_id;
    let pelicula_id = request.body.pelicula_id;
    let params = [profesional_id, pelicula_id]
    let sql = `DELETE FROM profesionales_pelicula WHERE profesional_id =? AND pelicula_id=?`;
    connection.query(sql, params, function(err, result){
        if (err){
            console.log(err)
        }else{
            let sql2 = `DELETE FROM profesional WHERE profesional_id=?`; 
            connection.query(sql2, params, function(err, resultado){
                if (err){
                    console.log(err)
                }else{
                    console.log(resultado)
                var respuesta2 = { error: false, codigo: 200, Mensaje: 'Guionista borrado', resultado: result };
                response.send(respuesta2);    
                } 
            })    
        }
    })
});


app.listen(1200);