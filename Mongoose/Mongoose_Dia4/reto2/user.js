const mongoose = require('mongoose');

let user= mongoose.Schema;

const UserSchema = new user({
    name: String,
    surname: String,
    dateOfBirth: String,
    comments: String,
    rol: {
        type: String,
        enum: ['Admin','User']
    },
    address: String,
    phone: String,
    email: String,
    login: String,
    password: String,
    follow: String
})

module.exports = mongoose.model("user", UserSchema, "usuario")