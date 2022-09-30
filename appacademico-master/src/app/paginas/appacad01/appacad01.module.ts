import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appacad01PageRoutingModule } from './appacad01-routing.module';

import { Appacad01Page } from './appacad01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appacad01PageRoutingModule
  ],
  declarations: [Appacad01Page]
})
export class Appacad01PageModule {}
