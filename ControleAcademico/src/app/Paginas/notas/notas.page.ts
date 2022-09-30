import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  constructor(private platform: Platform) { }
close(){
  this.platform.backButton.subscribe( () => {
    navigator['app'].exitApp();
    })
}

  ngOnInit() {
  }

}
