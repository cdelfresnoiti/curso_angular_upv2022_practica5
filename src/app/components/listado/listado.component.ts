import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  _termino = '';

  @Input() get termino(): string {
    return this._termino;
  }

  set termino(value: string) {
    this._termino = value;
    this.filtrar();
  }

  usuariosOriginal: any[];
  usuariosFiltrado: any[];

  constructor(private router: Router, private httpClient: HttpClient) {
    this.usuariosOriginal = [];
    this.usuariosFiltrado = [];
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.httpClient.get('https://reqres.in/api/users?page=2').subscribe({
      next: (result: any) => {
        console.log(result);
        this.usuariosOriginal = result.data;
        this.usuariosFiltrado = this.usuariosOriginal;
      },
      error: (v) => {
        console.log(v);
      },
    });
  }

  filtrar() {
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
