import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(public http: HttpClient) { }

  test():any{
    return true;
  }

  time() : Observable<any>{//aqui, en lugar de <any> se puede indicar una clase
    let url = "http://worldtimeapi.org/api/ip";
    let obs = this.http.get<any>(url, { observe: 'response' })
    return obs;
  }

}
