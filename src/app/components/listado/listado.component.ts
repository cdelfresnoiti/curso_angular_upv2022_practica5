import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultadoBusqueda } from 'src/app/models/resultado-busqueda';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  usuariosOriginal: Usuario[];
  usuariosFiltrado: Usuario[];

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private usuariosService: UsuariosService
  ) {
    this.usuariosOriginal = [];
    this.usuariosFiltrado = [];
  }

  _termino = '';

  @Input() get termino(): string {
    return this._termino;
  }

  set termino(value: string) {
    this._termino = value;
    this.filtrar();
  }

  ngOnInit(): void {
    this.getUsuarios3();
  }

  getUsuarios3(): void {
    this.usuariosService.getUsuariosObservable().subscribe({
      next: (result) => {
        console.log(result);
        this.usuariosOriginal = result.data;
        this.usuariosFiltrado = this.usuariosOriginal;
      },
      error: (v) => {
        console.log(v);
      },
    });
  }

  getUsuarios1(): void {
    this.httpClient
      .get<ResultadoBusqueda>('https://reqres.in/api/users?page=2')
      .subscribe({
        next: (result) => {
          console.log(result);
          this.usuariosOriginal = result.data;
          this.usuariosFiltrado = this.usuariosOriginal;
        },
        error: (v) => {
          console.log(v);
        },
      });
  }

  getUsuarios2(): Observable<ResultadoBusqueda> {
    return this.httpClient.get<ResultadoBusqueda>(
      'https://reqres.in/api/users?page=2'
    );
  }

  filtrar(): void {
    this.usuariosFiltrado = [];

    for (const usuario of this.usuariosOriginal) {
      if (
        usuario.first_name.toLowerCase().indexOf(this.termino.toLowerCase()) >=
          0 ||
        usuario.last_name.toLowerCase().indexOf(this.termino.toLowerCase()) >= 0
      ) {
        this.usuariosFiltrado.push(usuario);
      }
    }
  }

  irDetalleUsuario(id: number) {
    this.router.navigate(['/usuarios', id]);
  }
}
