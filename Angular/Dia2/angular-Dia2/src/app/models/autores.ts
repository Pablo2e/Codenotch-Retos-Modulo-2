export class Autor{
    public nombre:string
    public apellido:string
    public edad:number
    public bibiliografia: string[]

    constructor(nombre:string, apellido:string, edad:number, bibiliografia: string[]){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.bibiliografia=bibiliografia;
    }
    nombreCompleto():string{
        return this.nombre+" "+this.apellido;
    }
}