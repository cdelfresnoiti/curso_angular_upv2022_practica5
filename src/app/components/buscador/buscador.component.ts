import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  _termino = '';

  get termino() {
    return this._termino;
  }

  set termino(value: string) {
    this._termino = value;
    this.buscar();
  }

  autenticado = false;

  constructor() {}

  @Output() buscadorEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  buscar() {
    this.buscadorEvent.emit(this.termino);
  }

  login() {
    localStorage.setItem('autenticado', 'true');
    this.autenticado = true;
  }

  logout() {
    localStorage.setItem('autenticado', 'false');
    this.autenticado = false;
  }
}
