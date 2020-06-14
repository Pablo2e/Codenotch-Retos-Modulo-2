class Movie {
    //creo el constructor
    constructor(title, releaseYear, nationality, genre, foto, language, plataform, isMCU, mainCharacterName, actors, director, writer, producer, distributor ) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.foto = foto;
        this.language= language
        this.plataform= plataform
        this.isMCU= isMCU
        this.mainCharacterName= mainCharacterName
        this.actors= actors
        this.director= director
        this.writer= writer
        this.producer= producer
        this.distributor= distributor
    /* public actors: Professional[]
    public director: Professional
    public writer: Professional  */
    }
    getFoto(){
        return (this.foto)
    }
    printActors(){
        let actS=""
        for (let i in this.actors){
            actS+= this.actors[i].print()+"<br>"
        }
        return (actS)
    }
    print() {
        return("Titulo de la pelicula: "+ this.title +"<br>"+
        "Año de lanzamiento: "+ this.releaseYear +"<br>"+
        "Nacionalidad de la pelicula: "+ this.nationality +"<br>"+
        "Genero de la pelicula: "+ this.genre +"<br>"+
        "Link a la foto de caratula: "+ this.foto +"<br>"+
        "Idioma de la pelicula: " +this.language +"<br>"+
        "Plataforma donde se emite: "+ this.plataform +"<br>"+
        "¿Es del Universo Marvel?: "+ this.isMCU +"<br>"+
        "Nombre del/la protagonista: "+ this.mainCharacterName+"<br>"+
        "Actores: "+ this.printActors() +
        "Director: "+ this.director.name +"<br>"+
        "Escritor: "+ this.writer.print()+"<br>"+
        "Nombre del productor: "+ this.producer+ "<br>"+
        "Distribuidora: "+ this.distributor);
    }   
}

module.exports = Movie