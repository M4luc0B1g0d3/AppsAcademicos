import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular'


@Component({
  selector: 'app-appacad01',
  templateUrl: './appacad01.page.html',
  styleUrls: ['./appacad01.page.scss'],
})

export class Appacad01Page implements OnInit {

//  exitApp(){
//    navigator[‘app’].exitApp();
//  }
constructor(private platform: Platform) { }
close(){
  this.platform.backButton.subscribe( () => {
    navigator['app'].exitApp();
    })
}

  

  componentes: Componente[] = [
    {
      icone: 'imagem',
      nome: 'Dados Pessoais',
      link: '/dadospessoais'
    },
    {
      icone:'imagem',
      nome: 'Financeiro',
      link: '/financeiro'
    },
    {
      icone:'imagem',
      nome: 'Notas',
      link: '/notas'
    },
  ]


  ngOnInit() {
  }

}

interface Componente{
  icone: string;
  nome: string;
  link: string;
}
