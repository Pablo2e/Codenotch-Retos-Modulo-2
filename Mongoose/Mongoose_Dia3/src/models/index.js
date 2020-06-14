let mongoose = require('mongoose');
let user = require('./user');

mongoose.connect('mongodb://localhost:27017/codenotchMG', {useNewUrlParser: true, useUnifiedTopology: true})

 //UserID
let usuario1 = new photo({
    name: 'Usuario',
    surname: 'Uno',
    dateOfBirth: '21/11/12',
    comments: 'No',
    rol: 'Admin',
    address: 'Calle 1',
    phone: '123456789',
    email: 'usuario@usuario.com',
    login: 'Usuario1',
    password: '1234',
    follow: ''
})
let usuario2 = new user({
    name: 'Usuario',
    surname: 'Uno',
    dateOfBirth: '21/11/12',
    comments: 'No',
    rol: 'Usuario',
    address: 'Calle 1',
    phone: '123456789',
    email: 'usuario@usuario.com',
    login: 'Usuario1',
    password: '1234',
    follow: ''
})

usuario1.save(checkRespuesta)
usuario2.save(checkRespuesta)

function checkRespuesta(err, res){
    if(err){
        console.log('Error: '+err)
    }else{
        console.log('Modelo guardado correctamente')
        mongoose.disconnect()
    }
}