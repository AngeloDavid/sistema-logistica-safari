import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MpChangePwdPage } from './mp-change-pwd.page';

const routes: Routes = [
  {
    path: '',
    component: MpChangePwdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MpChangePwdPage]
})
export class MpChangePwdPageModule {}
