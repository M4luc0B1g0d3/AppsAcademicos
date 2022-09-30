import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'appacad01',
    pathMatch: 'full'
  },
  {
    path: 'appacad01',
    loadChildren: () => import('./paginas/appacad01/appacad01.module').then( m => m.Appacad01PageModule)
  },
  {
    path: 'dadospessoais',
    loadChildren: () => import('./paginas/dadospessoais/dadospessoais.module').then( m => m.DadospessoaisPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./paginas/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'financeiro',
    loadChildren: () => import('./paginas/financeiro/financeiro.module').then( m => m.FinanceiroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
