const mongoose = require('mongoose');

let credentialsSV= mongoose.Schema;

const UserSchema = new credentialsSV({
    address: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("credentials", UserSchema, "Credenciales")