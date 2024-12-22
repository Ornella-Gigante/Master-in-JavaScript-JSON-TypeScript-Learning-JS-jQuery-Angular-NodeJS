import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Provisión global para evitar problemas de inyección
})
export class PeticionesService {
  private url = 'https://reqres.in/api/users/2';

  constructor(private _http: HttpClient) {}

  getUser(): Observable<any> {
    return this._http.get(this.url); // Realiza una solicitud GET
  }
}
