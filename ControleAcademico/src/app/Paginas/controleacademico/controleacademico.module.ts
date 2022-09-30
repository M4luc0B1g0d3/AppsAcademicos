import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { ControleacademicoPageRoutingModule } from './controleacademico-routing.module';

import { ControleacademicoPage } from './controleacademico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleacademicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ControleacademicoPage]
})
export class ControleacademicoPageModule {}
