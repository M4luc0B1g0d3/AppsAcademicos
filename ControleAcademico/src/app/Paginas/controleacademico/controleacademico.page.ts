import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-controleacademico',
  templateUrl: './controleacademico.page.html',
  styleUrls: ['./controleacademico.page.scss'],
})
export class ControleacademicoPage implements OnInit {
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
              text: 'Sair'
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
