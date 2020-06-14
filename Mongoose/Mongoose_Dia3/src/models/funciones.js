let mongoose = require('mongoose');
let user = require('./user');
let photo = require('./photos');
mongoose.connect('mongodb://localhost:27017/codenotchMG', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

function subirFoto(usuario, url, titulo, descripcion, response){// le paso el objeto response para poder enviarlo a la api
    let fotoUsuario = new photo({
        nUsuario: `${usuario}`,
        urlFoto: `${url}`,
        titulo: `${titulo}`,
        descripcion: `${descripcion}`
    })
    fotoUsuario.save(function (err, res){
        if(err){
            response.send('Error')
        }else{
            response.send({error: false, codigo: 200, Mensaje: 'Nueva Foto Agregada', fotoUsuario})
        }
    })
    
}
function obtenerFoto(usuario, response){
    photo.find({nUsuario: usuario}, function(err,foto){
        if(err){
            response.send(err)
        } else {
            response.send(foto)
        }
    });
}   

function seguir(usuario1, usuario2, response){
    user.updateOne({name:usuario1}, {follow: usuario2},
        function(err,user){
            if(err)
                response.send('Error')
            else
                response.send({ error: false, codigo: 200, Mensaje: 'Nuevo Seguidor Agregado', user})
        }
    )
}
function dejarDeSeguir(usuario1, usuario2, response){
   user.updateOne({name:usuario1}, {follow: null},
        function(err,user){
            if(err)
                response.send('Error')
            else
                response.send({ error: false, codigo: 200, Mensaje: 'Seguidor Borrado', user})
            
        }
    ) 
}
function eliminarFoto(usuario, titulo, response){
     photo.deleteOne({nUsuario : usuario, titulo : titulo},
        function(err,foto){
            if(err)
                response.send('Error')
            else
                response.send({ error: false, codigo: 200, Mensaje: 'Foto Borrada', foto, usuario, titulo })
            
        }
    )
}
function eliminarTodasLasFotos(usuario, response){
    photo.deleteMany({nUsuario : usuario},
        function(err,foto){
            if(err)
                response.send('Error')
            else
                response.send({ error: false, codigo: 200, Mensaje: 'Fotos Borradas', foto, usuario })
            
        }
    )
}

function checkRespuesta(err, res){
    if(err){
        console.log('Error: '+err)
    }else{
        console.log('Modelo guardado correctamente')
        //mongoose.disconnect()
    }
}
module.exports = {subirFoto, obtenerFoto, seguir, dejarDeSeguir, eliminarFoto, eliminarTodasLasFotos, checkRespuesta}
/* let usuario1 = new user({
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
}) */

//subirFoto('usuario2', 'http://url1', 'Paisaje', 'Foto de Paisaje')
//obtenerFoto('usuario1')
//seguir('Usuario', 'usuario2')
//dejarDeSeguir('Usuario', usuario2)
//eliminarFoto('usuario1', 'Paisaje')
//eliminarTodasLasFotos('usuario2')



