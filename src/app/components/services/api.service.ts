import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginResponse } from '../other/interfaces';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  api_url:string = 'http://localhost:3000'

  login(user: string, password: string): Observable<LoginResponse>
  {
    //password = btoa(password);
    console.log(`${this.api_url}/autenticacion/login`);
    return this._http.post<LoginResponse>(`${this.api_url}/api/usuarios/autenticacion/login`, {user:user, pass: password})
  }
}
