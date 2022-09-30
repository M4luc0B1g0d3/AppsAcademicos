import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'controleacademico',
    pathMatch: 'full'
  },
  {
    path: 'controleacademico',
    loadChildren: () => import('./Paginas/controleacademico/controleacademico.module').then( m => m.ControleacademicoPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./Paginas/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./Paginas/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./Paginas/notas/notas.module').then( m => m.NotasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
