const mongoose = require('mongoose');

let UserIdnv= mongoose.Schema;

const UserSchema = new UserId({
    login: String,
    password: String
})

module.exports = mongoose.model("UserId", UserSchema, "Usuario")