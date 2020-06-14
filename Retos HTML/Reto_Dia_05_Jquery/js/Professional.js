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
        return("Nombre: " + this.name +"<br>"+  
        "Edad: " + this.age +"<br>"+
        "Genero: " + this.genre +"<br>"+
        "Peso: " + this.weight +"<br>"+
        "Altura: " + this.height +"<br>"+
        "Color de pelo: " + this.hairColor +"<br>"+
        "Color de ojos: " + this.eyeColor +"<br>"+
        "Raza: " + this.race +"<br>"+
        "Está retirado?: " + this.isRetired +"<br>"+
        "Nacionalidad: " + this.nationality +"<br>"+
        "Oscars: " + this.oscarsNumber +"<br>"+
        "Profesión: " + this.profession+"<br>"+
        "Foto: " + this.foto+"<br>");
    }
 }

 module.exports = Professional