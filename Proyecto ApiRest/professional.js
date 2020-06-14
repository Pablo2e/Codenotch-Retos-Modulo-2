"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var fs = require('fs');
var Professional = /** @class */ (function () {
    //Implementación del método constructor
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
    Professional.prototype.getName = function () {
        return this.name;
    };
    Professional.prototype.setName = function (name) {
        this.name = name;
    };
    Professional.prototype.getAge = function () {
        return this.age;
    };
    Professional.prototype.setAge = function (age) {
        this.age = age;
    };
    Professional.prototype.getGenre = function () {
        return this.genre;
    };
    Professional.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Professional.prototype.getWeight = function () {
        return this.weight;
    };
    Professional.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    Professional.prototype.getHeight = function () {
        return this.height;
    };
    Professional.prototype.setHeight = function (height) {
        this.height = height;
    };
    Professional.prototype.getHairColor = function () {
        return this.hairColor;
    };
    Professional.prototype.setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };
    Professional.prototype.getEyeColor = function () {
        return this.eyeColor;
    };
    Professional.prototype.setEyeColor = function (eyeColor) {
        this.eyeColor = eyeColor;
    };
    Professional.prototype.getRace = function () {
        return this.race;
    };
    Professional.prototype.setRace = function (race) {
        this.race = race;
    };
    Professional.prototype.getIsRetired = function () {
        return this.isRetired;
    };
    Professional.prototype.setIsRetired = function (isRetired) {
        this.isRetired = isRetired;
    };
    Professional.prototype.getNationality = function () {
        return this.nationality;
    };
    Professional.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Professional.prototype.getOscarsNumber = function () {
        return this.oscarsNumber;
    };
    Professional.prototype.setOscarsNumber = function (oscarsNumber) {
        this.oscarsNumber = oscarsNumber;
    };
    Professional.prototype.getProfession = function () {
        return this.profession;
    };
    Professional.prototype.setProfession = function (profession) {
        this.profession = profession;
    };
    Professional.prototype.getPhoto = function () {
        return this.photo;
    };
    Professional.prototype.setPhoto = function (photo) {
        this.photo = photo;
    };
    //Método propio imprimir valor atributos
    Professional.prototype.printJson = function () {
        return JSON.stringify(this, null, 2);
    };
    Professional.prototype.toString = function () {
        return ("Name: " + this.name + " \n Age: " + this.genre + " \n Weight: " + this.genre + " \n Height: " + this.weight + " \n Color of the hair: " + this.hairColor + " \n Color of the eyes: " + this.eyeColor + " \n Race: " + this.race + " \n Is retired?: " + this.isRetired + " \n Nationality: " + this.nationality + " \n Number of Oscars: " + this.oscarsNumber + " \n Profession: " + this.profession + " \n photo: " + this.photo);
    };
    Professional.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var result = "";
        result = JSON.stringify(this); // pasa a string el objeto pasado 
        return fs.writeFileSync(nombreFichero, result); //escribe el string
    };
    return Professional;
}());
exports.Professional = Professional;
