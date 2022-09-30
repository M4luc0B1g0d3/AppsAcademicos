import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Platform} from '@ionic/angular';

import { NotasPage } from './notas.page';

const routes: Routes = [
  {
    path: '',
    component: NotasPage
  },
  // {
    // path: 'calendario',
    // loadChildren: () => import('../calendario/calendario.module').then(m => m.CalendarioPageModule)
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
export class NotasPageRoutingModule {}
