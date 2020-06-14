/* 2.	API REST de una película (Sin Profesional).
Teniendo en cuenta la definición de película de los ejercicios anteriores pero sin incluir las propiedades de tipo Profesional,  hacer un API REST de una película con los siguientes endpoints.
•	GET /pelicula. Obtiene los datos de una película
•	POST /pelicula. Crea una nueva película
•	PUT /pelicula. Actualiza los datos de una película.
•	DEL /película. Elimina la película
 3.	API REST de una película (Con Profesional) 
Modificar el  API anterior para incluir un array de profesionales (actores) y el profesional director y guionista. 
Esta nueva API tendrá los mismos endpoint que la anterior pero mostrará también la información relativa a los profesionales. 
Además incluirá nuevos endpoints.
•	GET /pelicula/actor?id=8. Devuelve los datos relativos al actor con ese id.
•	GET /pelicula/director. Devuelve los datos relativos al director de la pelicula.
•	GET /pelicula/guionista. Devuelve los datos relativos al guionista de la pelicula.
•	POST /pelicula/actor. Añade un nuevo actor a la lista de actores de la película.
•	POST /pelicula/director. Crea un director de la película
•	POST /pelicula/guionista. Crea un guionista de la película
•	PUT /pelicula/actor. Modifica los datos de un actor.
•	PUT /pelicula/director. Modifica los datos del director.
•	PUT /pelicula/guionista. Modifica los datos del guionista.
•	DEL /pelicula/actor. Eliminar al actor de la lista de actores.
•	DEL /pelicula/director. Elimina al director
•	DEL /pelicula/guionista. Elimina al guionista de la pelicula */

import { Movie } from "./movie";
import { Professional } from "./professional";


const express = require ('express');
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


var aNuevo:Professional=null
var pNueva:Movie = null
//GET
app.get('/', function(request,response){
    let respuesta = {error: false, codigo: 200, Mensaje: 'Punto de inicio'};
    response.send(respuesta)
});
//----------------------------------------------------------------------------------------
//ApiRest 2 sin profesionales
//Get
app.get("/pelicula", function(request, response){
    let respuesta = {error: false, codigo: 200, Array: arrayMov};
    response.send(respuesta)
})
//Post
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
    arrayMov.push(pNueva)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nueva Pelicula Agregada', resultado: pNueva};
    response.send(respuesta)
});
//Put
app.put('/pelicula/:id', function(request,response){
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
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Actualizada', resultado: arrayMov[id-1]};
    response.send(respuesta)
});
//Delete
app.delete('/pelicula/:id', function(request, response){
    let id= request.params.id;
    arrayMov.splice((id-1), 1);
    let respuesta = {error: false, codigo: 200, Mensaje: 'Pelicula Borrada'};
    response.send(respuesta)
});
//-----------------------------------------------------------------------------------------
//ApiRest 3 con profesionales
//Get 
 app.get('/pelicula/actor/:id', function(request, response){
    let id= request.params.id;
    let respuesta=null
    if(id>=1 && id<=arrayAct.length){
        let actor=arrayAct[id-1];
        respuesta = {error: false, codigo: 200, Professional: actor};
    }else{
        respuesta = {error: true, codigo: 404, Mensaje: 'Actor no encontrado'};
    }
    response.send(respuesta)
});
app.get('/pelicula/director', function(request,response){
    let respuesta=null
    respuesta = {error: false, codigo: 200, Array: arrayDir};
    //respuesta = {error: false, codigo: 200, Professional: pNueva.getDirector()};
    response.send(respuesta) 
});
app.get('/pelicula/guionista', function(request,response){
    let respuesta=null
    respuesta = {error: false, codigo: 200, Array: arrayGui};
    response.send(respuesta) 
});
app.get('/pelicula/actores', function(request,response){
    let respuesta=null
    respuesta = {error: false, codigo: 200, Array: arrayAct};
    response.send(respuesta) 
});
//POST
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
    let nDirector=new Professional(
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
    arrayDir.push(nDirector)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Director Agregado', resultado: nDirector};
    response.send(respuesta)
});
app.post('/pelicula/guionista', function(request,response){
    let nWriter=new Professional(
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
    arrayGui.push(nWriter)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Guionista Agregado', nWriter};
    response.send(respuesta)
});
//PUT 
app.put('/pelicula/actor/:id', function(request, response){
    let id= request.params.id;
        arrayAct[id-1].setName(request.body.name),
        arrayAct[id-1].setAge(request.body.age),
        arrayAct[id-1].setGenre(request.body.genre),
        arrayAct[id-1].setWeight(request.body.weight),
        arrayAct[id-1].setHeight(request.body.height),
        arrayAct[id-1].setHairColor(request.body.hairColor),
        arrayAct[id-1].setEyeColor(request.body.eyeColor),
        arrayAct[id-1].setRace(request.body.race),
        arrayAct[id-1].setIsRetired(request.body.isRetired),
        arrayAct[id-1].setNationality(request.body.nationality),
        arrayAct[id-1].setOscarsNumber(request.body.oscarsNumber),
        arrayAct[id-1].setProfession(request.body.profession),
        arrayAct[id-1].setPhoto(request.body.photo)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Actor Actualizado'};
    response.send(respuesta)
});
app.put('/pelicula/director/:id', function(request, response){
    let id= request.params.id;
        arrayDir[id-1].setName(request.body.name),
        arrayDir[id-1].setAge(request.body.age),
        arrayDir[id-1].setGenre(request.body.genre),
        arrayDir[id-1].setWeight(request.body.weight),
        arrayDir[id-1].setHeight(request.body.height),
        arrayDir[id-1].setHairColor(request.body.hairColor),
        arrayDir[id-1].setEyeColor(request.body.eyeColor),
        arrayDir[id-1].setRace(request.body.race),
        arrayDir[id-1].setIsRetired(request.body.isRetired),
        arrayDir[id-1].setNationality(request.body.nationality),
        arrayDir[id-1].setOscarsNumber(request.body.oscarsNumber),
        arrayDir[id-1].setProfession(request.body.profession),
        arrayDir[id-1].setPhoto(request.body.photo)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Director Actualizado'};
    response.send(respuesta)
});
app.put('/pelicula/guionista/:id', function(request, response){
    let id= request.params.id;
        arrayGui[id-1].setName(request.body.name),
        arrayGui[id-1].setAge(request.body.age),
        arrayGui[id-1].setGenre(request.body.genre),
        arrayGui[id-1].setWeight(request.body.weight),
        arrayGui[id-1].setHeight(request.body.height),
        arrayGui[id-1].setHairColor(request.body.hairColor),
        arrayGui[id-1].setEyeColor(request.body.eyeColor),
        arrayGui[id-1].setRace(request.body.race),
        arrayGui[id-1].setIsRetired(request.body.isRetired),
        arrayGui[id-1].setNationality(request.body.nationality),
        arrayGui[id-1].setOscarsNumber(request.body.oscarsNumber),
        arrayGui[id-1].setProfession(request.body.profession),
        arrayGui[id-1].setPhoto(request.body.photo)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Guionista Actualizado'};
    response.send(respuesta)
});
//DELETE
app.delete('/pelicula/actor/:id', function(request, response){
    let id= request.params.id;
    arrayAct.splice((id-1), 1);
    let respuesta = {error: false, codigo: 200, Mensaje: 'Actor Borrado'};
    response.send(respuesta)
});
app.delete('/pelicula/director/:id', function(request, response){
    let id= request.params.id;
    arrayDir.splice((id-1), 1);
    let respuesta = {error: false, codigo: 200, Mensaje: 'Director Borrado'};
    response.send(respuesta)
});
app.delete('/pelicula/guionista/:id', function(request, response){
    let id= request.params.id;
    arrayGui.splice((id-1), 1);
    let respuesta = {error: false, codigo: 200, Mensaje: 'Escritor Borrado'};
    response.send(respuesta)
});

app.listen(5000)




//Profesionales
let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress", "http//:foto.jpg")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg")
let actor5: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg")
let director: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg")
let writer: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer", "http//:foto.jpg")
let arrayAct:Professional[]= new Array()
arrayAct=[actor1, actor2, actor3, actor4, actor5]
let arrayDir:Professional[]= new Array()
arrayDir=[director]
let arrayGui:Professional[]= new Array()
arrayGui=[writer]
//Películas
//var pNueva:Movie=new Movie("Seven", 1995, "EE.UU", "Crime")
var peliBase: Movie = new Movie("Seven", 1998, "EE.UU", "Thriller")
peliBase.setActors(arrayAct)
peliBase.setDirector(director)
peliBase.setWriter(writer)
let arrayMov:Movie[]= new Array()
arrayMov=[peliBase]

