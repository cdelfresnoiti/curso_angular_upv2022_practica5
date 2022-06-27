import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadoBusqueda } from '../models/resultado-busqueda';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuariosObservable(): Observable<ResultadoBusqueda> {
    return this.httpClient.get<ResultadoBusqueda>('users?page=2');
  }

  addNuevoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>('users', usuario);
  }

  isLogged(): boolean {
    const autenticado = localStorage.getItem('autenticado') ?? '';
    if (autenticado === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
