import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ListadoComponent } from './components/listado/listado.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    ListadoComponent,
    DetalleUsuarioComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
