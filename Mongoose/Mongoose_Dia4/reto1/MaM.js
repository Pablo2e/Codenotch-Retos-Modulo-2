let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/codenotchMD4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

var referencias=[]
//Creo los modelos ----------------------------------
const AutorSchema = new mongoose.Schema({
    nombre: String,
    nacionalidad: String,
    canciones: [{type: mongoose.Schema.Types.ObjectId, ref: "Cancion"}]
})
let Autor = mongoose.model("Autor", AutorSchema, 'Autores')

const CancionSchema = new mongoose.Schema({
    titulo: String,
    año: Number,
    autores: [{type: mongoose.Schema.Types.ObjectId, ref: "Autor"}]
})
let Cancion = mongoose.model("Cancion", CancionSchema, 'Canciones')


//Creo los autores y los salvo ---------------------------------------
/* let autor = new Autor({nombre: "Jhonny Rotten", nacionalidad: 'UK', canciones:[]})
autor.save(guardarReferencia)
let autor2 = new Autor({nombre: "Glen Matlock", nacionalidad: 'UK', canciones:[]})
autor2.save(guardarReferencia)
let cancion = new Cancion({titulo: "God Save The Queen", año: 1977, autores: ['5ee770e755bd1a561cef8a15','5ee770e755bd1a561cef8a16']})
cancion.save(checkRespuesta) 
let cancion2 = new Cancion({titulo: "Anarchy in the UK", año: 1977, autores: ['5ee770e755bd1a561cef8a15','5ee770e755bd1a561cef8a16']})
cancion2.save(checkRespuesta) 
Autor.updateOne({nombre: "Jhonny Rotten"}, {canciones:['5ee775d6cc80da706886525e','5ee775d6cc80da706886525f']}, checkRespuesta)
Autor.updateOne({nombre: "Glen Matlock"}, {canciones:['5ee775d6cc80da706886525e','5ee775d6cc80da706886525f']}, checkRespuesta) */

/* Cancion.findOne({titulo: "God Save The Queen"})
    .populate('autores')
    .exec((err, cancion)=>{
        if(err){
            console.log(err)
            process.exit(-1)       
        }
        console.log(`La canción ${cancion.titulo} tiene ${cancion.autores.length} autores y son ${cancion.autores[0]} y ${cancion.autores[1]}`)
}) */
Autor.findOne({nombre: "Jhonny Rotten"})
    .populate('canciones')
    .exec((err, autor)=>{
        if(err){
            console.log(err)
            process.exit(-1)       
        }
        console.log(`El autor ${autor.nombre} tiene ${autor.canciones.length} canciones y son ${autor.canciones[0]} y ${autor.canciones[1]}`)
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