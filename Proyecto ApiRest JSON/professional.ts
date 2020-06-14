const fs = require ('fs')

export class Professional {
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: string;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;
    public photo: string;
    //Implementación del método constructor
    constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: string, nationality: string, oscarsNumber: number, profession: string, photo: string) {
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
        this.photo = photo;
    }
    //Método propio imprimir valor atributos
    public printJson() {
        return JSON.stringify(this, null,2)
    }
    public toString():string {
        return(`Name: ${this.name} \n Age: ${this.genre} \n Weight: ${this.genre} \n Height: ${this.weight} \n Color of the hair: ${this.hairColor} \n Color of the eyes: ${this.eyeColor} \n Race: ${this.race} \n Is retired?: ${this.isRetired} \n Nationality: ${this.nationality} \n Number of Oscars: ${this.oscarsNumber} \n Profession: ${this.profession} \n photo: ${this.photo}`)
    }
    escribirEnFicheroJSON(nombreFichero: string) {
        let result = ""
        result = JSON.stringify(this)// pasa a string el objeto pasado 
        return fs.writeFileSync(nombreFichero, result); //escribe el string
    }
    /* obtenerInstanciaIMDB(nombreFichero: string): Professional {
        let lectura: string = fs.readFileSync(nombreFichero, 'utf8');//leo el fichero y lo convierto a texto
        let final: Professional = new Professional
        final=(JSON.parse(lectura));//creo un objeto del string leido en lectura
        return final;
    } */
}


