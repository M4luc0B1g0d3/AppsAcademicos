import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Appacad01Page } from './appacad01.page';

const routes: Routes = [
  {
    path: '',
    component: Appacad01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Appacad01PageRoutingModule {}
