import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoBusqueda } from '../models/resultado-busqueda';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuariosObservable(): Observable<ResultadoBusqueda> {
    return this.httpClient.get<ResultadoBusqueda>(
      'https://reqres.in/api/users?page=2'
    );
  }
}
