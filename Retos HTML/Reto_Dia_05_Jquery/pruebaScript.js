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
            actS+= this.actors[i].print()+"\n"
        }
        return (actS)
    }
    print() {
        return("Titulo de la pelicula: "+ this.title +"\n"+
        "Año de lanzamiento: "+ this.releaseYear +"\n"+
        "Nacionalidad de la pelicula: "+ this.nationality +"\n"+
        "Genero de la pelicula: "+ this.genre +"\n"+
        "Link a la foto de caratula: "+ this.foto +"\n"+
        "Idioma de la pelicula: " +this.language +"\n"+
        "Plataforma donde se emite: "+ this.plataform +"\n"+
        "¿Es del Universo Marvel?: "+ this.isMCU +"\n"+
        "Nombre del/la protagonista: "+ this.mainCharacterName+"\n"+
        "Actores: "+ this.printActors() +"\n"+
        "Director: "+ this.director.name +"\n"+
        "Escritor: "+ this.writer.print()+"\n"+
        "Nombre del productor: "+ this.producer+ "\n"+
        "Distribuidora: "+ this.distributor +"\n");
    };
    
}

datosSev=()=>{
    alert(seven.print())
}
datosSil=()=>{
    alert(lamb.print())
}
datosMat=()=>{
    alert(matilda.print())
}

agregarPeli=()=>{
    let titulo= $("#inputTitulo").val()
    let anio= $("#inputAnio").val()
    let nacionalidad= $("#inputNacionalidad").val()
    let genero= $("#inputGenero").val()
    let foto= $("#inputFoto").val()
    let language= $("#inputIdioma").val()
    let plataform= $("#inputPlataforma").val()
    let isMCU= $("#inputIsMcu").val()
    let mainCharacterName= $("#inputNombreProta").val()
    let producer= $("#inputProductor").val()
    let distributor= $("#inputDistribuidor").val()
    alert("Has agregado: "+"\n"+
    "Titulo de la pelicula: "+titulo+"\n"+
    "Año de lanzamiento: "+anio+"\n"+
    "Nacionalidad de la pelicula: "+nacionalidad+"\n"+
    "Genero de la pelicula: "+genero+"\n"+
    "Link a la foto de caratula: "+foto+"\n"+
    "Idioma de la pelicula: "+language+"\n"+
    "Plataforma donde se emite: "+plataform+"\n"+
    "¿Es del Universo Marvel?: "+isMCU+"\n"+
    "Nombre del/la protagonista: "+mainCharacterName+"\n"+
    "Nombre del productor: "+producer+"\n"+
    "Distribuidora: "+distributor+"\n")
}
agregarActor=()=>{
    let name= $("#inputName").val()
    let age= $("#inputEdad").val()
    let genre= $("#inputGeneroA").val()
    let weight= $("#inputPeso").val()
    let height= $("#inputAltura").val()
    let hairColor= $("#inputPelo").val()
    let eyeColor= $("#inputOjos").val()
    let race= $("#inputRaza").val()
    let isRetired= $("#inputRetirado").val()
    let nationality= $("#inputNacionalidadA").val()
    let oscarsNumber= $("#inputOscar").val()
    let profession= $("#inputProfesion").val()
    let foto= $("#inputFotoA").val()
    alert("Has agregado: "+"\n"+
    "Nombre actor/actriz: "+name+"\n"+
    "Edad: "+age+"\n"+
    "Genero: "+genre+"\n"+
    "Peso: "+weight+"\n"+
    "Altura: "+height+"\n"+
    "Color de pelo: "+hairColor+"\n"+
    "Color de ojos: "+eyeColor+"\n"+
    "Raza: "+race+"\n"+
    "¿Esta retirado/a? Si o No: "+isRetired+"\n"+
    "Nacionalidad: "+nationality+"\n"+
    "Oscars ganados: "+oscarsNumber+"\n"+
    "Profesión: "+profession+"\n"+
    "Link a su foto de cara: "+foto+"\n"
    )
}
agregarDirector=()=>{
    let name= $("#inputNameD").val()
    let age= $("#inputEdadD").val()
    let genre= $("#inputGeneroD").val()
    let weight= $("#inputPesoD").val()
    let height= $("#inputAlturaD").val()
    let hairColor= $("#inputPeloD").val()
    let eyeColor= $("#inputOjosD").val()
    let race= $("#inputRazaD").val()
    let isRetired= $("#inputRetiradoD").val()
    let nationality= $("#inputNacionalidadD").val()
    let oscarsNumber= $("#inputOscarD").val()
    let profession= $("#inputProfesionD").val()
    let foto= $("#inputFotoD").val()
    alert("Has agregado: "+"\n"+
    "Nombre Director/a: "+name+"\n"+
    "Edad: "+age+"\n"+
    "Genero: "+genre+"\n"+
    "Peso: "+weight+"\n"+
    "Altura: "+height+"\n"+
    "Color de pelo: "+hairColor+"\n"+
    "Color de ojos: "+eyeColor+"\n"+
    "Raza: "+race+"\n"+
    "¿Esta retirado/a? Si o No: "+isRetired+"\n"+
    "Nacionalidad: "+nationality+"\n"+
    "Oscars ganados: "+oscarsNumber+"\n"+
    "Profesión: "+profession+"\n"+
    "Link a su foto de cara: "+foto+"\n"
    )
}
agregarProductor=()=>{
    let name= $("#inputNameP").val()
    let age= $("#inputEdadP").val()
    let genre= $("#inputGeneroP").val()
    let weight= $("#inputPesoP").val()
    let height= $("#inputAlturaP").val()
    let hairColor= $("#inputPeloP").val()
    let eyeColor= $("#inputOjosP").val()
    let race= $("#inputRazaP").val()
    let isRetired= $("#inputRetiradoP").val()
    let nationality= $("#inputNacionalidadP").val()
    let oscarsNumber= $("#inputOscarP").val()
    let profession= $("#inputProfesionP").val()
    let foto= $("#inputFotoP").val()
    alert("Has agregado: "+"\n"+
    "Nombre Productor/a: "+name+"\n"+
    "Edad: "+age+"\n"+
    "Genero: "+genre+"\n"+
    "Peso: "+weight+"\n"+
    "Altura: "+height+"\n"+
    "Color de pelo: "+hairColor+"\n"+
    "Color de ojos: "+eyeColor+"\n"+
    "Raza: "+race+"\n"+
    "¿Esta retirado/a? Si o No: "+isRetired+"\n"+
    "Nacionalidad: "+nationality+"\n"+
    "Oscars ganados: "+oscarsNumber+"\n"+
    "Profesión: "+profession+"\n"+
    "Link a su foto de cara: "+foto+"\n"
    )
}
//Clases
//creo la clase Professional
class Professional{
    //Implementación del método constructor
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, foto) {
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
        this.foto = foto;
    }
    //Método propio imprimir valor atributos
    print() {
        return("Name: " + this.name + " \n Age: " + this.genre + " \n Weight: " + this.genre + " \n Height: " + this.weight + " \n Color of the hair: " + this.hairColor + " \n Color of the eyes: " + this.eyeColor + " \n Race: " + this.race + " \n Is retired?: " + this.isRetired + " \n Nationality: " + this.nationality + " \n Number of Oscars: " + this.oscarsNumber + " \n Profession: " + this.profession + " \nFoto: " + this.foto);
    };
 }
var fs = require('fs');
//creo la clase Imdb
class Imdb {
    //creo el constructor
    constructor(arrayMovie) {
        this.peliculas = arrayMovie;
    }
    escribirEnFicheroJSON(nombreFichero) {
        var result = "";
        result = JSON.stringify(this.peliculas);
        return fs.writeFileSync(nombreFichero, result);
    };
    obtenerInstanciaIMDB(nombreFichero) {
        var lectura = fs.readFileSync(nombreFichero, 'utf8');
        var final = new Imdb(JSON.parse(lectura));
        return final;
    };
    
} 
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
    let daniDV = new Professional("Danny DeVito", 75, "Hombre", 81, 152, "Cano", "Marrones", "Caucasico", "No", "EEUU", 0, "Director", "https://es.wikipedia.org/wiki/Danny_DeVito#/media/Archivo:Danny_DeVito_by_Gage_Skidmore_3.jpg")
    var robinS = new Professional("Robin Swicord", 68, "Mujer", 55, 163, "Castaño", "Azules", "Caucasica", "No", "EEUU", 0, "Escritora", "https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/15691_173x230.jpg")
    var actores = new Array(maraW, rheaP)
    var matilda = new Movie("Matilda", 1998, "EE.UU", "Infantil", "https://pics.filmaffinity.com/matilda-770869214-large.jpg" ,"Ingles", "Cine", "No" ,"Mara Wilson", actores, daniDV, robinS,"Danny DeVito","TriStar Pictures")
    //IMBD
    var peliculas = new Imdb ([seven, matilda, lamb])
        
console.log(matilda.print())

