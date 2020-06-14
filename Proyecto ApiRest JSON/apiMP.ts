/* 4.	API REST de un conjunto de películas 
Tomando como base el ejercicio anterior hacer una nueva API REST con los siguientes endpoints:
•	GET /peliculas?id = 2. Devuelve la pelicula con el id pasado por parámetro.
•	GET /peliculas. Devuelva todas las películas almacenadas
•	POST /peliculas. Añade una nueva pelicula en el array de películas
HACER•	PUT /peliculas. Actualiza una pelicula.
•	DEL /peliculas. Elimina una pelicula de la lista de películas.
*/

import { Movie } from "./movie";
import { Professional } from "./professional";
const fs = require ('fs')

const express = require ('express');
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const ficheroMov="peliculas.json"
const ficheroPro="profesionales.json"
const ficheroAct="actores.json"
var pNueva:Movie=null
var aNuevo:Professional=null
var dNuevo:Professional=null
var gNuevo:Professional=null
//GET
app.get('/', function(request,response){
    let respuesta = {error: false, codigo: 200, Mensaje: 'Punto de inicio'};
    response.send(respuesta)
});
//PELICULAS
//Get 
app.get("/peliculas/:id", function(request, response){
    let id= request.params.id;
    let respuesta=null
    if(id>=1 && id<=arrayMov.length){
        respuesta = {error: false, codigo: 200, Movie: arrayMov[id-1]};
    }else{
        respuesta = {error: true, codigo: 404, Mensaje: 'Pelicula no encontrada'};
    }
    response.send(respuesta)
});
app.get("/peliculas", function(request, response){
    let respuesta = {error: false, codigo: 200, Array: arrayMov};
    response.send(respuesta)
})
//Post 
app.post('/peliculas', function(request,response){
    pNueva=new Movie(
        request.body.title, 
        request.body.releaseYear,
        request.body.nationality, 
        request.body.genre 
    ) 
    pNueva.setActors(request.body.actors), 
    pNueva.setDirector(request.body.director), 
    pNueva.setWriter(request.body.writer), 
    pNueva.setLanguage(request.body.language), 
    pNueva.setPlatform(request.body.platform), 
    pNueva.setIsMCU(request.body.isMCU), 
    pNueva.setMainChName(request.body.mainCharacterName), 
    pNueva.setProducer(request.body.producer),  
    pNueva.setDistributor(request.body.distributor)
    //arrayMov.push(pNueva)
    escribirEnFicheroJSON(arrayMov, ficheroMov)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Agregada', resultado: pNueva};
    response.send(respuesta)
});
//Put
app.put('/peliculas/:id', function(request,response){
    let id= request.params.id;
    arrayMov[id-1].setTitle(request.body.title),
    arrayMov[id-1].setReleaseYear(request.body.releaseYear),
    arrayMov[id-1].setNationality(request.body.nationality), 
    arrayMov[id-1].setActors(request.body.actors),
    arrayMov[id-1].setDirector(request.body.director),
    arrayMov[id-1].setWriter(request.body.writer), 
    arrayMov[id-1].setLanguage(request.body.language), 
    arrayMov[id-1].setPlatform(request.body.platform), 
    arrayMov[id-1].setIsMCU(request.body.isMCU), 
    arrayMov[id-1].setMainChName(request.body.mainCharacterName), 
    arrayMov[id-1].setProducer(request.body.producer),  
    arrayMov[id-1].setDistributor(request.body.distributor), 
    arrayMov[id-1].setGenre(request.body.genre)
    escribirEnFicheroJSON(arrayMov, ficheroMov);
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Actualizada', resultado: pNueva};
    response.send(respuesta)
});
//Delete
app.delete('/peliculas/:id', function(request, response){
    let id= request.params.id;
    pNueva=arrayMov[id-1];
    arrayMov.splice((id-1), 1);
    escribirEnFicheroJSON(arrayMov, ficheroMov)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Borrada'};
    response.send(respuesta)
});
//ERROR
app.use( function(req, res, next){
    let respuesta = {error: true, codigo: 404, Mensaje: 'Url no encotrada'};
    res.status(404).send(respuesta)
})

app.listen(5000)

function escribirEnFicheroJSON(array, nombreFichero) {
    let result = ""
    result = JSON.stringify(array, null, 2)// pasa a string el objeto pasado 
    fs.writeFileSync(nombreFichero, result); //escribe el string 
}
let lecturaM: string = fs.readFileSync(ficheroMov, 'utf8');//leo el fichero y lo convierto a texto
let arrayMov:Movie[]=(JSON.parse(lecturaM));//creo un objeto del string leido en lectura
/*let lectura: string = fs.readFileSync(ficheroAct, 'utf8');//leo el fichero y lo convierto a texto
 let arrayAct:Professional[]=(JSON.parse(lectura));//creo un objeto del string leido en lectura

//Profesionales
let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress", "http//:foto.jpg")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg")
let actor8: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg")
let director2: Professional = new Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg")
let director1: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg")
let writer1: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer", "http//:foto.jpg")
//let arrayAct:Professional[]= new Array()
arrayAct=[actor1, actor2, actor3, actor4, actor8] */
/* //PELICULA
//Get 
app.get('/pelicula', function(request,response){
    if(pNueva===null){
        response.send('No hay nunguna pelicula creada aun')
        }else{
            //console.log(profesional.toString())
            response.send(pNueva)
        }
});
app.get("/pelicula/actor/:id", function(request, response){
    let id= request.params.id;
    id.toLowerCase()
    let respuesta=null
    if(id==='1'){
        respuesta = {error: false, codigo: 200, Movie: actor1.toString()};
    }else if(id==='2'){
        respuesta = {error: false, codigo: 200, Movie: actor2.toString()};
    }else if(id==='8'){
        respuesta = {error: false, codigo: 200, Movie: actor8.toString()};
    }
    response.send(respuesta)
});
app.get('/pelicula/actor', function(request,response){
    if(aNuevo===null){
            response.send('No hay nungun Actor creado aun')
        }else{
            response.send(aNuevo)
        }
});
app.get('/pelicula/director', function(request,response){
    if(dNuevo===null){
        response.send('No hay nungun Director creado aun')
    }else{
        response.send(dNuevo)
    }
});
app.get('/pelicula/guionista', function(request,response){
    if(gNuevo===null){
        response.send('No hay nungun Guionista creado aun')
    }else{
        response.send(gNuevo)
    }
});
//POST
app.post('/pelicula', function(request,response){
    pNueva=new Movie(
        request.body.title, 
        request.body.releaseYear,
        request.body.nationality, 
        request.body.genre 
    ) 
    pNueva.setActors(request.body.actors), 
    pNueva.setDirector(request.body.director), 
    pNueva.setWriter(request.body.writer), 
    pNueva.setLanguage(request.body.language), 
    pNueva.setPlatform(request.body.platform), 
    pNueva.setIsMCU(request.body.isMCU), 
    pNueva.setMainChName(request.body.mainCharacterName), 
    pNueva.setProducer(request.body.producer),  
    pNueva.setDistributor(request.body.distributor)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Pelicula Agregada', resultado: pNueva};
    response.send(respuesta)
});
app.post('/pelicula/actor', function(request,response){
    aNuevo=new Professional(
        request.body.name,
        request.body.age,
        request.body.genre,
        request.body.weight,
        request.body.height,
        request.body.hairColor,
        request.body.eyeColor,
        request.body.race,
        request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber,
        request.body.profession,
        request.body.photo
    )
    arrayAct.push(aNuevo) 
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Actor Agregado', resultado: aNuevo};
    response.send(respuesta)
});
app.post('/pelicula/director', function(request,response){
    dNuevo=new Professional(
        request.body.name,
        request.body.age,
        request.body.genre,
        request.body.weight,
        request.body.height,
        request.body.hairColor,
        request.body.eyeColor,
        request.body.race,
        request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber,
        request.body.profession,
        request.body.photo
    ) 
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Director Agregado', resultado: dNuevo};
    response.send(respuesta)
});
app.post('/pelicula/guionista', function(request,response){
    gNuevo=new Professional(
        request.body.name,
        request.body.age,
        request.body.genre,
        request.body.weight,
        request.body.height,
        request.body.hairColor,
        request.body.eyeColor,
        request.body.race,
        request.body.isRetired,
        request.body.nationality,
        request.body.oscarsNumber,
        request.body.profession,
        request.body.photo
    ) 
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Guionista Agregado', resultado: gNuevo};
    response.send(respuesta)
});
//PUT
app.put('/pelicula', function(request,response){
    pNueva.setTitle(request.body.title),
    pNueva.setReleaseYear(request.body.releaseYear),
    pNueva.setNationality(request.body.nationality), 
    pNueva.setActors(request.body.actors),
    pNueva.setDirector(request.body.director),
    pNueva.setWriter(request.body.writer), 
    pNueva.setLanguage(request.body.language), 
    pNueva.setPlatform(request.body.platform), 
    pNueva.setIsMCU(request.body.isMCU), 
    pNueva.setMainChName(request.body.mainCharacterName), 
    pNueva.setProducer(request.body.producer),  
    pNueva.setDistributor(request.body.distributor), 
    pNueva.setGenre(request.body.genre)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Actualizada', resultado: pNueva};
    response.send(respuesta)
});
app.put('/pelicula/actor', function(request,response){
    aNuevo=new Professional(
        aNuevo.name=request.body.name,
        aNuevo.age=request.body.age,
        aNuevo.genre=request.body.genre,
        aNuevo.weight=request.body.weight,
        aNuevo.height=request.body.height,
        aNuevo.hairColor=request.body.hairColor,
        aNuevo.eyeColor=request.body.eyeColor,
        aNuevo.race=request.body.race,
        aNuevo.isRetired=request.body.isRetired,
        aNuevo.nationality=request.body.nationality,
        aNuevo.oscarsNumber=request.body.oscarsNumber,
        aNuevo.profession=request.body.profession,
        aNuevo.photo=request.body.photo
    ) 
    let respuesta = {error: false, codigo: 200, Mensaje: 'Actor Actualizado', resultado: aNuevo};
    response.send(respuesta)
});
app.put('/pelicula/director', function(request,response){
    dNuevo=new Professional(
        dNuevo.name=request.body.name,
        dNuevo.age=request.body.age,
        dNuevo.genre=request.body.genre,
        dNuevo.weight=request.body.weight,
        dNuevo.height=request.body.height,
        dNuevo.hairColor=request.body.hairColor,
        dNuevo.eyeColor=request.body.eyeColor,
        dNuevo.race=request.body.race,
        dNuevo.isRetired=request.body.isRetired,
        dNuevo.nationality=request.body.nationality,
        dNuevo.oscarsNumber=request.body.oscarsNumber,
        dNuevo.profession=request.body.profession,
        dNuevo.photo=request.body.photo
    ) 
    let respuesta = {error: false, codigo: 200, Mensaje: 'Director Actualizado', resultado: dNuevo};
    response.send(respuesta)
});
app.put('/pelicula/guionista', function(request,response){
    gNuevo=new Professional(
        gNuevo.name=request.body.name,
        gNuevo.age=request.body.age,
        gNuevo.genre=request.body.genre,
        gNuevo.weight=request.body.weight,
        gNuevo.height=request.body.height,
        gNuevo.hairColor=request.body.hairColor,
        gNuevo.eyeColor=request.body.eyeColor,
        gNuevo.race=request.body.race,
        gNuevo.isRetired=request.body.isRetired,
        gNuevo.nationality=request.body.nationality,
        gNuevo.oscarsNumber=request.body.oscarsNumber,
        gNuevo.profession=request.body.profession,
        gNuevo.photo=request.body.photo
    ) 
    let respuesta = {error: false, codigo: 200, Mensaje: 'Guionista Actualizado', resultado: gNuevo};
    response.send(respuesta)
});
//DELETE
app.delete('/pelicula', function(request,response){
    pNueva=null
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Borrada'};
    response.send(respuesta)
});
app.delete('/pelicula/actor', function(request,response){
    aNuevo=null
    let respuesta = {error: false, codigo: 200, Mensaje: 'Actor Borrado'};
    response.send(respuesta)
});
app.delete('/pelicula/director', function(request,response){
    dNuevo=null
    let respuesta = {error: false, codigo: 200, Mensaje: 'Director Borrado'};
    response.send(respuesta)
});
app.delete('/pelicula/guionista', function(request,response){
    gNuevo=null
    let respuesta = {error: false, codigo: 200, Mensaje: 'Escritor Borrado'};
    response.send(respuesta)
}); */



/* let lecturaM: string = fs.readFileSync(ficheroMov, 'utf8');//leo el fichero y lo convierto a texto
let arrayMov:Movie[]=(JSON.parse(lecturaM));//creo un objeto del string leido en lectura
let lectura: string = fs.readFileSync(ficheroPro, 'utf8');//leo el fichero y lo convierto a texto
let arrayAct:Professional[]=(JSON.parse(lectura));//creo un objeto del string leido en lectura

 *//* //Películas
let seven: Movie = new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb: Movie = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
let matilda: Movie = new Movie("Matilda", 1998, "EE.UU", "Infantil")
//let arrayMov:Movie[]= new Array()
//arrayMov=[seven, lamb, matilda]
//Profesionales
let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress", "http//:foto.jpg")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg")
let actor8: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg")
let director2: Professional = new Professional("Alejandro Amenabar", 40, "male", 80, 175, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg")
let director1: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg")
let writer1: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer", "http//:foto.jpg")
//let arrayAct:Professional[]= new Array()
arrayAct=[actor1, actor2, actor3, actor4, actor8] */