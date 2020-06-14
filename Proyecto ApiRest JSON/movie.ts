import { Professional } from "./professional"
const fs = require('fs')

//Crear una clase que se llame Movie con los siguientes atributos públicos
export class Movie {
    private title: string
    private releaseYear: number
    private actors: Professional[]
    private nationality: string
    private director: Professional
    private writer: Professional
    private language: string
    private plataform: string
    private isMCU: string
    private mainCharacterName: string
    private producer: string
    private distributor: string
    private genre: string
//creo el constructor
    constructor(title: string, releaseYear: number, nationality: string, genre: string) {
        this.title = title
        this.releaseYear = releaseYear
        this.nationality = nationality
        this.genre = genre
    }
//Getters y Setters
//Title
    public getTitle():string {
        return this.title;
    }
    public setTitle(title) {
        this.title = title;
    }
//releaseYear
    public  getReleaseYear():number {
    return this.releaseYear;
    }
	public setReleaseYear(releaseYear) {
    this.releaseYear = releaseYear;
    }
//Actors
    public getActors():Professional[]{
        return this.actors;
    }
    public setActors(actors){
        this.actors = actors;
    }
//Nationality
    public getNationality():string {
        return this.nationality;
    }
	public setNationality(nationality) {
        this.nationality = nationality;
    }
//Director
    public getDirector():Professional{
        return this.director;
    }
    public setDirector(director){
        this.director = director;
    }
//Writer
    public getWriter():Professional{
        return this.writer;
    }
    public setWriter(writer){
        this.writer = writer;
    }
//language
    public getLanguage():string {
        return this.language;
    }
	public setLanguage(language) {
        this.language = language;
    }
//plataform
    public getPlatform():string {
        return this.plataform;
    }
	public setPlatform(plataform) {
        this.plataform = plataform;
    }
//isMCU
    public getIsMCU():string {
        return this.isMCU;
    }
	public setIsMCU(isMCU) {
        this.isMCU = isMCU;
    }
//mainCharacterName
    public getMainChName():string {
        return this.mainCharacterName;
    }
	public setMainChName(mainCharacterName) {
        this.mainCharacterName = mainCharacterName;
    }
//producer
    public getProducer():string {
        return this.producer;
    }
	public setProducer(producer) {
        this.producer = producer;
    }
//distributor
    public getDistributor():string {
        return this.distributor;
    }
	public setDistributor(distributor) {
        this.distributor = distributor;
    }
//Genre
    public getGenre():string {
        return this.genre;
    }
	public setGenre(genre) {
    this.genre = genre;
}
//METODOS
    public toString():string {
        return(`Title: ${this.title} \n Release Year: ${this.releaseYear} \n Nationality: ${this.nationality} \n Genre: ${this.genre}`)
    }
    escribirEnFicheroJSON(nombreFichero: string) {
        let result = ""
        result = JSON.stringify(this)// pasa a string el objeto pasado 
        return fs.writeFileSync(nombreFichero, result); //escribe el string
    }
    /* obtenerInstanciaIMDB(nombreFichero: string): Movie {
        let lectura: string = fs.readFileSync(nombreFichero, 'utf8');//leo el fichero y lo convierto a texto
        let final: Movie = new Movie()
        final=(JSON.parse(lectura));//creo un objeto del string leido en lectura
        return final;
    } */
    /* public toString():string {
        return(`Name: ${this.name} \n Age: ${this.genre} \n Weight: ${this.genre} \n Height: ${this.weight} \n Color of the hair: ${this.hairColor} \n Color of the eyes: ${this.eyeColor} \n Race: ${this.race} \n Is retired?: ${this.isRetired} \n Nationality: ${this.nationality} \n Number of Oscars: ${this.oscarsNumber} \n Profession: ${this.profession} \n photo: ${this.photo}`)
    } */
}


