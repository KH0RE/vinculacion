import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = 'http://localhost:3000';

  constructor(
    private http : HttpClient
  ) { }


    envio(body : any): Observable<Object>{

        return this.http.post<Object>(`${this.url}/envio`, body);
    }

}
