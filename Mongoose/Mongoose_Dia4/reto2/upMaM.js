let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/codenotchMD4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

let arrayFotos=[]
const PhotoSchema = new mongoose.Schema({
    nUsuario: {type: mongoose.Schema.Types.ObjectId, ref: "Usuario"},
    urlFoto: String,
    titulo: String,
    descripcion: String
})
let Photo = mongoose.model("Foto", PhotoSchema, 'Fotos')

const UserSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: String,
    comments: String,
    rol: String,
    address: String,
    phone: String,
    email: String,
    login: String,
    password: String,
    follow: [{type: mongoose.Schema.Types.ObjectId, ref: "Usuario"}],
    photos: [{type: mongoose.Schema.Types.ObjectId, ref: "Foto"}]
})
let User = mongoose.model("Usuario", UserSchema, 'Usuarios')

//Creo los usuarios ---------------------------------------------
/* let usuario1 = new User({name: "Usuario1", surname: 'Uno', dateOfBirth: '21/11/12', comments: 'No', rol: 'Usuario', address: 'Calle 1', phone: '666111111',
    email: 'user@user.com',login: "Usuario1", password: '1234', follow: [],photos: []})
usuario1.save(checkRespuesta)
let usuario2 = new User({name: "Usuario2", surname: 'Uno', dateOfBirth: '21/11/12', comments: 'No', rol: 'Usuario', address: 'Calle 2', phone: '666222222',
    email: 'user@user.com',login: "Usuario2", password: '1234', follow: [],photos: []})
usuario2.save(checkRespuesta)
let usuario3 = new User({name: "Usuario3", surname: 'Uno', dateOfBirth: '21/11/12', comments: 'No', rol: 'Usuario', address: 'Calle 3', phone: '666333333',
    email: 'user@user.com',login: "Usuario3", password: '1234', follow: [],photos: []})
usuario3.save(checkRespuesta) */

//creo las peliculas --------------------------------------------
/* let foto1 = new Photo({nUsuario:'5ee7b4dc0d3fd834289ce0e2', urlFoto: 'http://foto1.jpg', titulo:'Paisaje', descripcion: 'Playa'})
foto1.save(checkRespuesta)
let foto2 = new Photo({nUsuario:"5ee7b4dc0d3fd834289ce0e2", urlFoto: 'http://foto2.jpg', titulo:'Paisaje', descripcion: 'Mar'})
foto2.save(checkRespuesta)
let foto3 = new Photo({nUsuario:"5ee7b4dc0d3fd834289ce0e2", urlFoto: 'http://foto3.jpg', titulo:'Paisaje', descripcion: 'Montaña'})
foto3.save(checkRespuesta)
let arrayFU1=[foto1,foto2,foto3]

let foto4 = new Photo({nUsuario:'5ee7b4dc0d3fd834289ce0e3', urlFoto: 'http://foto1.jpg', titulo:'Paisaje', descripcion: 'Playa'})
foto4.save(checkRespuesta)
let foto5 = new Photo({nUsuario:"5ee7b4dc0d3fd834289ce0e3", urlFoto: 'http://foto2.jpg', titulo:'Paisaje', descripcion: 'Mar'})
foto5.save(checkRespuesta)
let foto6 = new Photo({nUsuario:"5ee7b4dc0d3fd834289ce0e3", urlFoto: 'http://foto3.jpg', titulo:'Paisaje', descripcion: 'Montaña'})
foto6.save(checkRespuesta)
let arrayFU2=[foto4,foto5,foto6]

let foto7 = new Photo({nUsuario:'5ee7b4dc0d3fd834289ce0e4', urlFoto: 'http://foto1.jpg', titulo:'Paisaje', descripcion: 'Playa'})
foto7.save(checkRespuesta)
let foto8 = new Photo({nUsuario:"5ee7b4dc0d3fd834289ce0e4", urlFoto: 'http://foto2.jpg', titulo:'Paisaje', descripcion: 'Mar'})
foto8.save(checkRespuesta)
let foto9 = new Photo({nUsuario:"5ee7b4dc0d3fd834289ce0e4", urlFoto: 'http://foto3.jpg', titulo:'Paisaje', descripcion: 'Montaña'})
foto9.save(checkRespuesta)
let arrayFU3=[foto7,foto8,foto9] 
//Actualizo los usuarios con las fotos y los seguidores
User.updateOne({name: "Usuario1"}, {follow:['5ee7b4dc0d3fd834289ce0e3', '5ee7b4dc0d3fd834289ce0e4'],photos:[foto1,foto2,foto3]}, checkRespuesta)
User.updateOne({name: "Usuario2"}, {follow:['5ee7b4dc0d3fd834289ce0e2', '5ee7b4dc0d3fd834289ce0e4'],photos:[foto4,foto5,foto6]}, checkRespuesta)
User.updateOne({name: "Usuario3"}, {follow:['5ee7b4dc0d3fd834289ce0e2', '5ee7b4dc0d3fd834289ce0e3'],photos:[foto7,foto8,foto9]}, checkRespuesta)
 */

function checkRespuesta(err, res){
    if(err){
        console.log('Error: '+err)
    }else{
        console.log('Modelo guardado correctamente')
        //mongoose.disconnect()
    }
}
function guardarReferencia(err,res){
    if(err)
    console.log('Error: '+ err)
    else{
        console.log('Metodo realizado correctamente')
        arrayFotos.push(res._id)
    }
}


module.exports = mongoose.model("Foto", PhotoSchema, 'Fotos')
module.exports = mongoose.model("Usuario", UserSchema, 'Usuarios')