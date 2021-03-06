let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/codenotchMD4', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const PinturaSchema = new mongoose.Schema({
    titulo: String,
    año: Number
})
let Pintura = mongoose.model("Pintura", PinturaSchema)

const PintorSchema = new mongoose.Schema({
    nombre: String,
    nacionalidad: String,
    pintura: {type: mongoose.Schema.Types.ObjectId, ref: "Pintura"}
})
let Pintor = mongoose.model("Pintor", PintorSchema)

let pintura = new Pintura({titulo: "Guernica", año: 1937})

pintura.save(function(err, res){
    if(err)
        console.log('Error: '+ err)
    else{
        console.log('Metodo realizado correctamente')
        console.log(res)
        let pintor = new Pintor({nombre: 'Pablo Picasso', nacionalidad: 'Española', pintura: res._id})
        pintor.save(checkRespuesta)
    }
})

Pintor.findOne({nombre: 'Pablo Picasso'})
    .populate('pintura')
    .exec((err, pintor)=>{
        if(err){
            console.log(err)
            process.exit(-1)       
        }
        console.log(`${pintor.nombre} ha pintado ${pintor.pintura.titulo}`)
})

function checkRespuesta(err, res){
    if(err){
        console.log('Error: '+err)
    }else{
        console.log('Modelo guardado correctamente')
        //mongoose.disconnect()
    }
}