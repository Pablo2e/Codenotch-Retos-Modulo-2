let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/codenotchMD4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

var referencias=[]
//Creo los modelos ----------------------------------
const AutorSchema = new mongoose.Schema({
    nombre: String,
    nacionalidad: String,
})
let Autor = mongoose.model("Autor", AutorSchema, 'Autores')

const CancionSchema = new mongoose.Schema({
    titulo: String,
    año: Number,
    autores: [{type: mongoose.Schema.Types.ObjectId, ref: "Autor"}]
})
let Cancion = mongoose.model("Canción", CancionSchema, 'Canciones')


//Creo los autores y los salvo ---------------------------------------
/* let autor = new Autor({nombre: "Jhonny Rotten", nacionalidad: 'UK'})
autor.save(guardarReferencia)
let autor2 = new Autor({nombre: "Glen Matlock", nacionalidad: 'UK'})
//autor2.save(guardarReferencia)
autor2.save(function(err, res){
    if(err)
        console.log('Error: '+ err)
    else{
        console.log('Metodo realizado correctamente')
        //console.log(res)
        referencias.push(res._id)
        //Creo la canción y la salvo
        let cancion = new Cancion({titulo: "God Save The Queen", año: 1977, autores: referencias})
        cancion.save(checkRespuesta) 
    }
}) */
//Creo la canción y la salvo
/* let cancion = new Cancion({titulo: "God Save The Queen", año: 1977, autores: referencias})
cancion.save(function(err, res){
    if(err)
        console.log('Error: '+ err)
    else{
        console.log('Metodo realizado correctamente')
        console.log(res)
    }
}) */

Cancion.findOne({titulo: "God Save The Queen"})
    .populate('autores')
    .exec((err, cancion)=>{
        if(err){
            console.log(err)
            process.exit(-1)       
        }
        console.log(`La canción ${cancion.titulo} tiene ${cancion.autores.length} y son ${cancion.autores[0]} y ${cancion.autores[1]}`)
})

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
        referencias.push(res._id)
    }
}
