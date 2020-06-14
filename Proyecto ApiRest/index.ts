import { Movie } from "./movie";
import { Professional } from "./professional";
/* import {apiRestprofesionales} from "./apiRestprofesionales" */


//Profesionales Pelicula
let actor1: Professional = new Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg")
let actor2: Professional = new Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress", "http//:foto.jpg")
let actor3: Professional = new Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg")
let actor4: Professional = new Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg")
let actor5: Professional = new Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg")
let director: Professional = new Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg")
let writer: Professional = new Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer", "http//:foto.jpg")
var arrayAct:Professional[]= new Array()
arrayAct=[actor1, actor2, actor3, actor4, actor5]
let arrayDir:Professional[]= new Array()
arrayDir=[director]
let arrayGui:Professional[]= new Array()
arrayGui=[writer]
var peliBase: Movie = new Movie("Seven", 1998, "EE.UU", "Thriller")
peliBase.setActors(arrayAct)
peliBase.setDirector(director)
peliBase.setWriter(writer)
let arrayMov:Movie[]= new Array()
arrayMov=[peliBase]
//Peliculas
let seven: Movie = new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb: Movie = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
let matilda: Movie = new Movie("Matilda", 1998, "EE.UU", "Infantil")
let arrayMovs:Movie[]= new Array()
arrayMovs=[seven, lamb, matilda]

