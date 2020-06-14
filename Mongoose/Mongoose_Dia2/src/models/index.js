let mongoose = require('mongoose');
let UserId = require('./UserIDValidation');
let Profile = require('./ProfileValidation');
let credentials = require('./credentialsValidation')
mongoose.connect('mongodb://localhost:27017/codenotchMG', {useNewUrlParser: true, useUnifiedTopology: true})

/* //UserID
let usuario1 = new UserId({
    login: 'User1',
    password: 'Usuario1'
})
let usuario2 = new UserId({
    login: 'Usuario2',
    password: 'User1'
})
usuario1.save(checkRespuesta)
usuario2.save(checkRespuesta)

//Profile
const p1 = new Profile({
    name: 'perfil1',
    surname: 'apellido',
    dateOfBirth: '20/11/20',
    comments: 'Perfil Nº1',
    rol: 'Admin'
})
const p2 = new Profile({
    name: 'perfil1',
    surname: 'apellido',
    dateOfBirth: '20/11/20',
    comments: 'Perfil Nº2',
    rol: 'Usuario'
})
p1.save(checkRespuesta)
p2.save(checkRespuesta) */

//credentials
const cred1 = new credentials({
    address: 'Gran Via 1',
    phone: '654321987',
    email: 'juan@juan.es'
})
const cred2 = new credentials({
    address: 'Gran Via 2',
    phone: '654321987',
    email: 'Juan@juan@.com'
})
cred1.save(checkRespuesta)
cred2.save(checkRespuesta)

function checkRespuesta(err, res){
    if(err){
        console.log('Error: '+err)
    }else{
        console.log('Modelo guardado correctamente')
        mongoose.disconnect()
    }
}