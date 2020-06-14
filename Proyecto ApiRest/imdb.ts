/* •	Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie 
•	Con un único atributo publico denominado películas que es un array de objetos de la clase Movie */
// importo la clase Movie
import { Movie } from "./movie"

const fs = require('fs')
export class Imdb {
    public peliculas: Movie[]
    //creo el constructor
    constructor(arrayMovie: Movie[]) {
        this.peliculas = arrayMovie
    }
    escribirEnFicheroJSON(nombreFichero: string) {
        let result = ""
        result = JSON.stringify(this.peliculas)// pasa a string el objeto pasado 
        return fs.writeFileSync(nombreFichero, result); //escribe el string
    }
    obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        let lectura: string = fs.readFileSync(nombreFichero, 'utf8');//leo el fichero y lo convierto a texto
        let final: Imdb = new Imdb(JSON.parse(lectura));//creo un objeto del string leido en lectura
        return final;
    }
}

