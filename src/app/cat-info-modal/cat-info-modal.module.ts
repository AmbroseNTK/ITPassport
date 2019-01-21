import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatInfoModalPage } from './cat-info-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CatInfoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatInfoModalPage]
})
export class CatInfoModalPageModule {}
