import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniversidadePageRoutingModule } from './universidade-routing.module';

import { UniversidadePage } from './universidade.page';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    UniversidadePageRoutingModule
  ],
  declarations: [UniversidadePage]
})
export class UniversidadePageModule {}
