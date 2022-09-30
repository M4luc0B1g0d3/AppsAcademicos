import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular'
import {Platform} from '@ionic/angular';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {
  private platform: Platform;
  

  constructor(public controleAcademicoController: ActionSheetController) { }
  close(){
    this.platform.backButton.subscribe( () => {
      navigator['app'].exitApp();
      })
  }
  async presentControleAcademico() {
    const controleAcademico = await this.controleAcademicoController.create(
      {
        header: '2021-2',
        cssClass: 'my-custom-class',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Agosto'
          },
          {
            text: 'Setembro'
          },
          {
            text: 'Outubro'
          },
          {
            text: 'Novembro'
          },
          {
            text: 'Dezembro'
          },
            {
          text: 'Sair',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          }
        ]
      }
    );
    await controleAcademico.present();

    const { role } = await controleAcademico.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    }
  ngOnInit() {
  }

}
