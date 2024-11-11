import { Component,OnInit  } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  standalone: true,
  providers: [ServicePersonas]
})
export class PersonasstandaloneComponent implements OnInit{
  public personas !: Array<Persona>;
  constructor(private _service: ServicePersonas){
    this.personas = new Array<Persona>();
  }

  ngOnInit(): void{
    this._service.getPersonasPromesa().then(response => {
      this.personas = response;
    })
    //this._service.getPersonas().subscribe(Response => {
      //console.log("leyendo");
      //this.personas = Response;
    }
}
