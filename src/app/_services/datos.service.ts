import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(public http: HttpClient) { }

  libro(ciudad: string) : Observable<any>{//aqui, en lugar de <any> se puede indicar una clase

    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get<any>(url, { observe: 'response' });
    }

}



