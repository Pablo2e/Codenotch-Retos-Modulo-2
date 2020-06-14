//var fs = require('fs');
//creo la clase Imdb
class Imdb {
    //creo el constructor
    constructor(arrayMovie) {
        this.peliculas = arrayMovie;
    }

    contructor() {
        this.peliculas = [];
    }

    addMovie(movie) {
        this.peliculas.push(movie);
    }

    getMovie(titulo) {
        var movie
        for (let i in this.peliculas){
            if(this.peliculas[i].title === titulo) {
                movie = this.peliculas[i]
            }
        }
        return (movie)
    }
/*    escribirEnFicheroJSON(nombreFichero) {
        var result = "";
        result = JSON.stringify(this.peliculas);
        return fs.writeFileSync(nombreFichero, result);
    };
    obtenerInstanciaIMDB(nombreFichero) {
        var lectura = fs.readFileSync(nombreFichero, 'utf8');
        var final = new Imdb(JSON.parse(lectura));
        return final;
    };
 */   
    print() {
        //return ("Aquí van las pelis en la base de datos")
        let imdbStr = "Tienes " + this.peliculas.length + " pelis guardadas en IMDB: \n"
        for (let i in this.peliculas){
            imdbStr += this.peliculas[i].title + "<br>"
        }
        return (imdbStr)
        
       //return (this.peliculas[0].title)
    }
}

module.exports = Imdb