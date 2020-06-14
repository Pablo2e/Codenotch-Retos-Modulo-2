"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var fs = require('fs');
//Crear una clase que se llame Movie con los siguientes atributos públicos
var Movie = /** @class */ (function () {
    //creo el constructor
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    //Getters y Setters
    //Title
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    //releaseYear
    Movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    //Actors
    Movie.prototype.getActors = function () {
        return this.actors;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    //Nationality
    Movie.prototype.getNationality = function () {
        return this.nationality;
    };
    Movie.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    //Director
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    //Writer
    Movie.prototype.getWriter = function () {
        return this.writer;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    //language
    Movie.prototype.getLanguage = function () {
        return this.language;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    //plataform
    Movie.prototype.getPlatform = function () {
        return this.plataform;
    };
    Movie.prototype.setPlatform = function (plataform) {
        this.plataform = plataform;
    };
    //isMCU
    Movie.prototype.getIsMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setIsMCU = function (isMCU) {
        this.isMCU = isMCU;
    };
    //mainCharacterName
    Movie.prototype.getMainChName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setMainChName = function (mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    };
    //producer
    Movie.prototype.getProducer = function () {
        return this.producer;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    //distributor
    Movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    //Genre
    Movie.prototype.getGenre = function () {
        return this.genre;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    //METODOS
    Movie.prototype.toString = function () {
        return ("Title: " + this.title + " \n Release Year: " + this.releaseYear + " \n Nationality: " + this.nationality + " \n Genre: " + this.genre);
    };
    Movie.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var result = "";
        result = JSON.stringify(this); // pasa a string el objeto pasado 
        return fs.writeFileSync(nombreFichero, result); //escribe el string
    };
    return Movie;
}());
exports.Movie = Movie;
