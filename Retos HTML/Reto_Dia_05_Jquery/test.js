const Professional = require('./js/Professional.js')
const Movie = require('./js/Movie.js')
const Imdb = require('./js/Imdb.js')

var jodieF = new Professional("Jodie Foster", 57, "Mujer", 58, 160, "Rubio", "Verdes", "Caucasica", "No", 
        "EEUU", 2, "Actriz", "https://es.wikipedia.org/wiki/Jodie_Foster#/media/Archivo:Jodie_Foster_C%C3%A9sars_2011_2_(cropped).jpg")

//console.log(jodieF.print())

var pelis = require('./initScript')

console.log(pelis.matilda.print())
console.log(pelis.seven.print())
console.log(pelis.lamb.print())
