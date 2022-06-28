import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  nuevo: Usuario = new Usuario();

  resultadoAdd: Usuario = new Usuario();

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {}

  addUsuario() {
    console.log(this.nuevo);
    if (
      this.nuevo.first_name !== '' &&
      this.nuevo.last_name !== '' &&
      this.nuevo.email !== '' &&
      this.nuevo.avatar !== ''
    ) {
      this.usuariosService.addNuevoUsuario(this.nuevo).subscribe((ret) => {
        console.log(ret);
        this.resultadoAdd = ret;
      });
    }
  }
}
