import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomePage }];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
