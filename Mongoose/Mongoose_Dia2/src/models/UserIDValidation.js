const mongoose = require('mongoose');

let UserId = mongoose.Schema

const UserSchema = new UserId({
    login: {
        type: String,
        enum: ['User1','User2']
    },
    password: {
        type: String,
        validate: [
            function(password){
             return password.length >=6;
            },
            'La contraseña debe tener mas de 6 caracteres'
        ]
    }
})


module.exports = mongoose.model("UserId", UserSchema, "Usuario")