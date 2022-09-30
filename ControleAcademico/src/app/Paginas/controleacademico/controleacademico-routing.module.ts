import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControleacademicoPage } from './controleacademico.page';

const routes: Routes = [
  {
    path: '',
    component: ControleacademicoPage,
  },
      // {
      // path: 'calendario',
      // loadChildren: () => import('../calendario/calendario.module').then(m => m.CalendarioPageModule)
    // },
    // {
      // path: 'notas',
      // loadChildren: () => import('../notas/notas.module').then(m => m.NotasPageModule)
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControleacademicoPageRoutingModule {}
