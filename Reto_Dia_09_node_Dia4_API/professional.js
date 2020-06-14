"use strict";
exports.__esModule = true;
exports.Professional = void 0;
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
    //Método propio imprimir valor atributos
    Professional.prototype.printJson = function () {
        return JSON.stringify(this, null, 2);
    };
    Professional.prototype.toString = function () {
        return ("Name: " + this.name + " \n Age: " + this.genre + " \n Weight: " + this.genre + " \n Height: " + this.weight + " \n Color of the hair: " + this.hairColor + " \n Color of the eyes: " + this.eyeColor + " \n Race: " + this.race + " \n Is retired?: " + this.isRetired + " \n Nationality: " + this.nationality + " \n Number of Oscars: " + this.oscarsNumber + " \n Profession: " + this.profession + " \n photo: " + this.photo);
    };
    return Professional;
}());
exports.Professional = Professional;
