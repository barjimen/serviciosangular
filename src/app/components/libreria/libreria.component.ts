import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';
import { ServiceComics } from '../../services/service.comics'; //Recuperamos el servcicio

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.css' //Inyectamos el servicio para poder recuperarlo
})
export class LibreriaComponent implements OnInit{
  public comics !: Array<Comic>;
  public favorito !: string;

  @ViewChild("cajanombre") cajaNombre !: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion !: ElementRef;
  @ViewChild("cajaimagen") cajaImagen !: ElementRef;



  constructor(private _service: ServiceComics){}
  
  ngOnInit(): void{
    this.comics = this._service.getComics()
  }

    seleccionarFavorito(event: any): void
    {
      this.favorito = "Comic favorito: " + event;
      console.log("Dato:" + event)
    }

    nuevoComic(){
        let nombre = this.cajaNombre.nativeElement.value;
        let imagen = this.cajaImagen.nativeElement.value;
        let descripcion = this.cajaDescripcion.nativeElement.value;
        let comicNew = new Comic(nombre, imagen, descripcion)
        this.comics.push(comicNew);
    }
}
