import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioPage } from './calendario.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage,
  },
  // {
    // path: 'notas',
    // loadChildren: () => import('../notas/notas.module').then(m => m.NotasPageModule)
  // },
  // {
    // path: 'controleacademico',
    // loadChildren: () => import('../controleacademico/controleacademico.module').then(m => m.ControleacademicoPageModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioPageRoutingModule {}
