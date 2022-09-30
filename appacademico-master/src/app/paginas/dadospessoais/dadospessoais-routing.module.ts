import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadospessoaisPage } from './dadospessoais.page';

const routes: Routes = [
  {
    path: '',
    component: DadospessoaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadospessoaisPageRoutingModule {}
