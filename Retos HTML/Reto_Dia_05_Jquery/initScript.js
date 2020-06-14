const Professional = require('./js/Professional.js')
const Movie = require('./js/Movie.js')
const Imdb = require('./js/Imdb.js')

//Seven
var bradP = new Professional("Brad Pitt", 56, "Hombre", 78, 180, "Rubio", "Azules", "Caucasico", "No", "EEUU", 2, "Actor", "https://es.wikipedia.org/wiki/Brad_Pitt#/media/Archivo:Brad_Pitt_2019_by_Glenn_Francis.jpg")
var morganF = new Professional("Morgan Freeman", 82, "Hombre", 79, 188, "Cano", "Marrones", "Afroamericano", "No", "EEUU", 1, "Actor", "https://es.wikipedia.org/wiki/Morgan_Freeman#/media/Archivo:Academy_Award-winning_actor_Morgan_Freeman_narrates_for_the_opening_ceremony_(26904746425)_(cropped).jpg")
var davidF = new Professional("David Fincher", 57, "Hombre", 78, 170, "Rubio", "Azules", "Caucasico", "No", "EEUU", 0, "Director", "https://es.wikipedia.org/wiki/David_Fincher#/media/Archivo:David_Fincher_(2012)_3.jpg")
var andrewW = new Professional("Andrew Kevin Walker", 56, "Hombre", 83, 174, "Rubio", "Azules", "Caucasico", "No", "EEUU", 0, "Escritor", "https://m.media-amazon.com/images/M/MV5BZTU1OGUyYTktZjgxNi00MDMyLTkyZGYtMWQ2OTg2N2U1OWRkXkEyXkFqcGdeQXVyODYzNDkyMDA@._V1_SY1000_SX1000_AL_.jpg")
var actores = new Array(bradP, morganF)
var seven = new Movie("Seven", 1995, "EE.UU", "Crime","https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg","Ingles", "Cine", "No" ,"Brad Pitt", actores, davidF, andrewW,"New Line Cinema","New Line Cinema")
//Silence
var jodieF = new Professional("Jodie Foster", 57, "Mujer", 58, 160, "Rubio", "Verdes", "Caucasica", "No", "EEUU", 2, "Actriz", "https://es.wikipedia.org/wiki/Jodie_Foster#/media/Archivo:Jodie_Foster_C%C3%A9sars_2011_2_(cropped).jpg")
var anthonyH = new Professional("Anthony Hopkins", 82, "Hombre", 79, 175, "Cano", "Marrones", "Caucasico", "No", "EEUU", 1, "Actor", "https://es.wikipedia.org/wiki/Anthony_Hopkins#/media/Archivo:AnthonyHopkins10TIFF.jpg")
var jonathanD = new Professional("Jonathan Demme", 73, "Hombre", 83, 175, "Rubio", "Verdes", "Caucasico", "Si", "EEUU", 1, "Director", "https://es.wikipedia.org/wiki/Jonathan_Demme#/media/Archivo:Jonathan_Demme_May_2015.jpg")
var thomasH = new Professional("Thomas Harris", 80, "Hombre", 80, 170, "Cano", "Negros", "Caucasico", "No", "EEUU", 1, "Escritor", "https://m.media-amazon.com/images/M/MV5BMTYyNzI1MTMzMl5BMl5BanBnXkFtZTgwMzI5NjE1MTI@._V1_SY1000_CR0,0,665,1000_AL_.jpg")
var actores = new Array(jodieF, anthonyH)
var lamb = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler", "https://pics.filmaffinity.com/the_silence_of_the_lambs-767447992-large.jpg", "Ingles", "Cine", "No" ,"Jodie Foster", actores, jonathanD, thomasH,"Kennet Uff","Orion")
//Matilda
var maraW = new Professional("Mara Wilson", 32, "Mujer", 55, 160, "Castaño", "Azules", "Caucasica", "No", "EEUU", 0, "Actriz", "https://es.wikipedia.org/wiki/Mara_Wilson#/media/Archivo:Mara_Wilson_by_Gage_Skidmore.jpg")
var rheaP = new Professional("Rhea Perlman", 72, "Mujer", 60, 152, "Castaño", "Marrones", "Caucasica", "No", "EEUU", 1, "Actriz", "https://es.wikipedia.org/wiki/Rhea_Perlman#/media/Archivo:RheaPerlmanAug2011.jpg")
var daniDV = new Professional("Danny DeVito", 75, "Hombre", 81, 152, "Cano", "Marrones", "Caucasico", "No", "EEUU", 0, "Director", "https://es.wikipedia.org/wiki/Danny_DeVito#/media/Archivo:Danny_DeVito_by_Gage_Skidmore_3.jpg")
var robinS = new Professional("Robin Swicord", 68, "Mujer", 55, 163, "Castaño", "Azules", "Caucasica", "No", "EEUU", 0, "Escritora", "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/15691_173x230.jpg")
var actores = new Array(maraW, rheaP)
var matilda = new Movie("Matilda", 1998, "EE.UU", "Infantil", "https://pics.filmaffinity.com/matilda-770869214-large.jpg" ,"Ingles", "Cine", "No" ,"Mara Wilson", actores, daniDV, robinS,"Danny DeVito","TriStar Pictures")

module.exports.matilda = matilda
module.exports.lamb = lamb
module.exports.seven = seven