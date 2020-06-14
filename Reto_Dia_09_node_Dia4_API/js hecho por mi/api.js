/* RETOS
Reto 1:
• Crea un API REST para la clase profesional de vuestra aplicación IMDB 
• Con todos los verbos HTTP
• Que reciban información por la petición y la devuelvan por la respuesta.
Reto 2: 
UtilizarPostman y lanzapeticionescon:
1. ‘GET’ 2. ‘POST’ 3. ‘PUT’ 4. ‘DELETE’
haciael API REST creadaen el ejercicio anteriory compruebasufuncionamiento.*/
//var pro = require("./professional")
class Professional{
    //Implementación del método constructor
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, foto) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;
    }
    //Método propio imprimir valor atributos
    print() {
        return("Nombre: " + this.name +"<br>"+  
        "Edad: " + this.age +"<br>"+
        "Genero: " + this.genre +"<br>"+
        "Peso: " + this.weight +"<br>"+
        "Altura: " + this.height +"<br>"+
        "Color de pelo: " + this.hairColor +"<br>"+
        "Color de ojos: " + this.eyeColor +"<br>"+
        "Raza: " + this.race +"<br>"+
        "Está retirado?: " + this.isRetired +"<br>"+
        "Nacionalidad: " + this.nationality +"<br>"+
        "Oscars: " + this.oscarsNumber +"<br>"+
        "Profesión: " + this.profession+"<br>"+
        "Foto: " + this.foto+"<br>");
    }
 }

const express = require ('express');
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let profesional= null

app.get('/', function(request,response){
    let respuesta = {error: false, codigo: 200, Mensaje: 'Punto de inicio'};
    response.send(respuesta)
});

app.get('/profesional', function(request,response){
    response.send(profesional)
});

app.post('/profesional', function(request,response){
    profesional= new Professional(request.body.name, request.body.age ,request.body.genre, request.body.weight, request.body.height, request.body.eyeColor, request.body.race, request.body.isRetired, request.body.nationality, request.body.oscarsNumber, request.body.profession, request.body.foto)
    let respuesta = {error: false, codigo: 200, Mensaje: 'Nuevo Profesional', resultado: profesional};
    response.send(respuesta)
});

app.put('/profesional', function(request,response){
    profesional.name= request.body.name;
    profesional.age= request.body.age;
    profesional.genre= request.body.genre;
    profesional.weight= request.body.weight;
    profesional.height= request.body.height;
    profesional.hairColor= request.body.hairColor;
    profesional.eyeColor= request.body.eyeColor;
    profesional.race= request.body.race;
    profesional.isRetired= request.body.isRetired;
    profesional.nationality= request.body.nationality;
    profesional.oscarsNumber= request.body.oscarsNumber;
    profesional.profession= request.body.profession;
    profesional.foto= request.body.foto;
    let respuesta = {error: false, codigo: 200, Mensaje: 'Profesional Actualizado', resultado: profesional};
    response.send(respuesta)
});

app.delete('/profesional', function(request,response){
    profesional=null;
    let respuesta = {error: true, codigo: 200, Mensaje: 'Profesional Borrado'};
    response.send(respuesta)
});

app.use( function(req, res, next){
    let respuesta = {error: true, codigo: 404, Mensaje: 'Url no encotrada'};
    res.status(404).send(respuesta)
})

app.listen(3000)

/* let actor1 = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress")
let actor2 = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress")
let actor3 = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor")
let actor4 = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor")
let actor5 = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor")

console.log(actor1.name)  */