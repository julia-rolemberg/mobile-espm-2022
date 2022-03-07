import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cardapio } from './cardapio';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: Cardapio
  }
];

@NgModule({
  declarations: [Cardapio],
  imports:[CommonModule, RouterModule.forChild(routes)], 
  exports: [Cardapio]
})
export class PizzariaModule { }
