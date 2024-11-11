import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class ServicePersonas{
    constructor(private _http: HttpClient){}

    getPersonas(): Observable<any>{
        let urlApiPersonas = Global.urlApiPersonas;
        return this._http.get(urlApiPersonas);
    }

    getPersonasPromesa(): Promise<any> {
        let urlApiPersonas = Global.urlApiPersonas;
        let promise = new Promise((resolve) => {
            this._http.get(urlApiPersonas).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }
}