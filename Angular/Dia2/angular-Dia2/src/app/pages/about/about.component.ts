import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/models/autores';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public autor1: Autor;
  public autor2: Autor;
  public autor3: Autor;
  public miClase: string;
  public miColor: string;
  public escondido: boolean;
  
  constructor() { //si quiero que aparezca directamente cuando se abra la pagina tiene que estar en el constructor los valores del autor1
    this.autor1 = new Autor("Stephen", "King", 72, ["La Niebla", "El Resplandor"])
    this.autor2 = new Autor("Dan", "Brown", 56, ["Ángeles y demonios", "El código Da Vinci"])
    this.autor3 = new Autor("George", "Martin", 71, ["Canción de hielo y fuego ", "Juego de tronos"])
    this.miClase="clase1";
    this.miColor="red";
    this.escondido=false;
   }
   
   nombreCompleto():string{
     return this.autor1.nombreCompleto();
   }

   enviar(nuevoNombre: HTMLInputElement){
     console.log(this.autor1.nombre);
     this.autor1.nombre=nuevoNombre.value;
     console.log(this.autor1.nombre);
   }

   enviar2(nuevoNombre: string){
    console.log(this.autor1.nombre);
    this.autor1.nombre=nuevoNombre;
    console.log(this.autor1.nombre);
  }
  enviarXautor(numero: string){numero
    if(numero==='1'){
      console.log(this.autor1.nombre);
    }else if(numero==='2'){
      console.log(this.autor2.nombre);
    }else if(numero==='3'){
      console.log(this.autor3.nombre);
    }
    
  }

  ngOnInit(): void {
  }

}
