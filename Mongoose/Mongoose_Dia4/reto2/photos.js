const mongoose = require('mongoose');
let user = require('./user');

let photo= mongoose.Schema;

const UserSchema = new photo({
    nUsuario: String,
    urlFoto: String,
    titulo: String,
    descripcion: String
})

module.exports = mongoose.model("photo", UserSchema, "foto")