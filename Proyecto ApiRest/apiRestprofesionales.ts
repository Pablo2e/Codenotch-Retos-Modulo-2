/*1.	API REST de un conjunto de profesionales.
Tomando como base el API REST desarrollada en el reto, desarrollar una nueva API REST con los siguientes endpoints:
•	GET /profesionales?id=5. Obtiene los datos del profesional con el id pasado por parámetro.
•	GET /profesionales. Obtiene toda la lista de profesionales.
•	POST /profesionales. Añade un nuevo profesional en la lista de profesionales.
•	PUT /profesionales. Modifica los datos de un profesional
•	DEL /profesionales. Elimina a un profesional de la lista.
*/

import { Professional } from "./professional"


const express = require ('express');
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


var pNuevo:Professional=null

app.get('/', function(request,response){
    let respuesta = {error: false, codigo: 200, Mensaje: 'Punto de inicio'};
    response.send(respuesta)
});
  
app.get("/profesionales/:id", function(request, response){
    let id= request.params.id;
    let respuesta=null
    if(id>=1 && id<=arrayPro.length){
        respuesta = {error: false, codigo: 200, Professional: arrayPro[id-1]};
    }else{
        respuesta = {error: true, codigo: 404, Mensaje: 'Profesional no encontrado'};
    }
    response.send(respuesta)
});

app.get('/profesionales', function(request,response){
    response.send(arrayPro)
});

app.post('/profesionales', function(request,response){
    pNuevo=new Professional(
        request.body.name, 
        request.body.age ,
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
        request.body.photo)
    arrayPro.push(pNuevo)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Profesional Agregado', resultado: pNuevo};
    response.send(respuesta)
});

app.put('/profesionales/:id', function(request, response){
    let id= request.params.id;
    arrayPro[id-1].name= request.body.name;
    arrayPro[id-1].age= request.body.age;
    arrayPro[id-1].genre= request.body.genre;
    arrayPro[id-1].weight= request.body.weight;
    arrayPro[id-1].height= request.body.height;
    arrayPro[id-1].hairColor= request.body.hairColor;
    arrayPro[id-1].eyeColor= request.body.eyeColor;
    arrayPro[id-1].race= request.body.race;
    arrayPro[id-1].isRetired= request.body.isRetired;
    arrayPro[id-1].nationality= request.body.nationality;
    arrayPro[id-1].oscarsNumber= request.body.oscarsNumber;
    arrayPro[id-1].profession= request.body.profession;
    arrayPro[id-1].photo= request.body.photo;
    //arrayPro.push(pNuevo)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Profesional Actualizado', resultado: arrayPro[id-1]};
    response.send(respuesta)
});

app.delete('/profesionales/:id', function(request, response){
    let id= request.params.id;
    pNuevo=arrayPro[id-1];
    arrayPro.splice((id-1), 1);
    //arrayPro.push(pNuevo)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Profesional Borrado',pNuevo};
    response.send(respuesta)
});

app.use( function(req, res, next){
    let respuesta = {error: true, codigo: 404, Mensaje: 'Url no encotrada'};
    res.status(404).send(respuesta)
})

app.listen(5000)

/* var arrayPro:Professional[]= new Array()
module.exports= {apiRestprofesionales} */

/* function escribirEnFicheroJSON(array, nombreFichero) {
    let result = ""
    result = JSON.stringify(array, null, 2)// pasa a string el objeto pasado 
    fs.writeFileSync(nombreFichero, result); //escribe el string 
}
let lectura: string = fs.readFileSync(ficheroPro, 'utf8');//leo el fichero y lo convierto a texto
let arrayPro:Professional[]=(JSON.parse(lectura));//creo un objeto del string leido en lectura */
var p1 = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg")
var p2 = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "http//:foto.jpg", "http//:foto.jpg")
var p3 = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg")
var p4 = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg")
var p5 = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg")
let arrayPro:Professional[]= new Array()
arrayPro=[p1, p2, p3, p4, p5]