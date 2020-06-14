"use strict";
exports.__esModule = true;
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var actor1 = new professional_1.Professional("Julia Roberts", 40, "female", 60, 170, "brown", "blue", "caucasian", "no", "USA", 2, "actress", "http//:foto.jpg");
var actor2 = new professional_1.Professional("Halle Berry", 30, "female", 57, 174, "black", "brown", "african-american", "yes", "Canadian", 2, "actress", "http//:foto.jpg");
var actor3 = new professional_1.Professional("Paul Williams", 30, "male", 80, 170, "brown", "blue", "caucasian", "yes", "USA", 2, "actor", "http//:foto.jpg");
var actor4 = new professional_1.Professional("Mario Guevara", 30, "male", 80, 180, "brown", "blue", "hispanic", "yes", "Mexican", 2, "actor", "http//:foto.jpg");
var actor5 = new professional_1.Professional("Xing Xung", 25, "male", 80, 180, "black", "brown", "asian", "yes", "China", 0, "actor", "http//:foto.jpg");
var director = new professional_1.Professional("Pedro Almodovar", 70, "male", 90, 167, "white", "brown", "hispanic", "no", "Spanish", 1, "director", "http//:foto.jpg");
var writer = new professional_1.Professional("Alan Ball", 50, "male", 70, 177, "white", "brown", "caucasian", "no", "USA", 3, "writer", "http//:foto.jpg");
//var arrayPro:Professional[]= new Array()
//arrayPro=[actor1, actor2, actor3, actor4, actor5]
var arrayAct = new Array();
arrayAct = [actor1, actor2, actor3, actor4, actor5];
var pNueva = new movie_1.Movie("Seven", 1998, "EE.UU", "Thriller");
pNueva.setActors(arrayAct);
pNueva.setDirector(director);
pNueva.setWriter(writer);
var seven = new movie_1.Movie("Seven", 1995, "EE.UU", "Crime");
var lamb = new movie_1.Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler");
var matilda = new movie_1.Movie("Matilda", 1998, "EE.UU", "Infantil");
var arrayMov = new Array();
arrayMov = [seven, lamb, matilda];
