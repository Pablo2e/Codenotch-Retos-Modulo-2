const mongoose = require('mongoose');

let Profile = mongoose.Schema

const UserSchema = new Profile({
    name: String,
    surname: String,
    dateOfBirth: String,
    comments: String,
    rol: {
        type: String,
        enum: ['Admin','User']
    }
})



module.exports = mongoose.model("Profile", UserSchema, "Usuario")