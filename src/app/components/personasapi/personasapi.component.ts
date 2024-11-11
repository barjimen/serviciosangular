import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrl: './personasapi.component.css'
})
export class PersonasapiComponent {
  public personas !: Array<Persona>;
  constructor(private _service: ServicePersonas){
    this.personas = new Array<Persona>();
  }

  ngOnInit(): void{
    this._service.getPersonas().subscribe(Response => {
      console.log("leyendo");
      this.personas = Response;
    })
  }
}
