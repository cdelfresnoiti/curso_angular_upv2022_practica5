import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { ListadoComponent } from './components/listado/listado.component';

const routes: Routes = [
  { path: 'usuarios', component: ListadoComponent },
  {
    path: 'usuarios/:id',
    component: DetalleUsuarioComponent,
  },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
