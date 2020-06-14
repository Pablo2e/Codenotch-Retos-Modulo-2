const mongoose = require('mongoose');

let credentials = mongoose.Schema

const UserSchema = new credentials({
    address: String,
    phone: {
        type: String,
        validate: [
            function(phone){
                return phone.length ===9;
                },
                'Te faltan o sobran numeros'               
        ]
    },
    email: String
})

UserSchema.pre('save', function(next){
    console.log('Middleware de entrada');
    let letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    let arroba="@";
    let punto=".";
    let correo=false;
    let contadorM=0
    let contadorA=0
    let contadorP=0
    for(i=0; i<this.email.length; i++){
        if (letras_mayusculas.indexOf(this.email.charAt(i),0)!=-1){
            contadorM++
        }
    }
    for(i=0; i<this.email.length; i++){
        if (arroba.indexOf(this.email.charAt(i),0)!=-1){
            contadorA++
        }
    }
    for(i=0; i<this.email.length; i++){
        if (punto.indexOf(this.email.charAt(i),0)!=-1){
            contadorP++
        }
    }
    if (this.email.charAt(this.email.length -1)==="m" && this.email.charAt(this.email.length -2)==="o" &&  this.email.charAt(this.email.length -3)==="c" && this.email.charAt(this.email.length -4)==="." || this.email.charAt(this.email.length -1)==="s" && this.email.charAt(this.email.length -2)==="e" &&  this.email.charAt(this.email.length -3)==="."){
        correo=true
    }
    if ( contadorM===0 && contadorA===1 && contadorP===1 && correo===true) {
        console.log('Formato correcto');
        next()
    }else{
        console.log('Formato incorrecto')
    }
})

module.exports = mongoose.model("credentials", UserSchema, "Usuario")