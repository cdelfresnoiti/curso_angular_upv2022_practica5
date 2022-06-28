import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  usuarioId = 0;
  usuario = new Usuario();
  myForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      avatar: new FormControl(),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (typeof id === 'string') {
      this.usuarioId = +id;
      this.usuariosService.getUser(this.usuarioId).subscribe((ret) => {
        this.usuario = ret.data;
        this.myForm.get('nombre')?.setValue(this.usuario.first_name);
        this.myForm.get('apellidos')?.setValue(this.usuario.last_name);
        this.myForm.get('email')?.setValue(this.usuario.email);
        this.myForm.get('avatar')?.setValue(this.usuario.avatar);
      });
    }
  }

  modificarUsuario() {
    console.log(this.myForm.value);
  }
}
