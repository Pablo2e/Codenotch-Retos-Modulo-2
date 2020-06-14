const mongoose = require('mongoose');

let ProfileSV= mongoose.Schema;

const UserSchema = new ProfileSV({
    name: String,
    surname: String,
    dateOfBirth: String,
    comments: String,
    rol: String
})

module.exports = mongoose.model("Profile", UserSchema, "Perfil")