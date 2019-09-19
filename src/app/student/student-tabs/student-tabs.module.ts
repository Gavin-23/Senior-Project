import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentTabsRoutingModule } from './student-tabs.rounter.module'
import { Routes, RouterModule } from '@angular/router';
import { StudentTabsPage } from './student-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: StudentTabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentTabsRoutingModule,
    RouterModule.forChild(routes)

  ],
  declarations: [StudentTabsPage]
})
export class StudentTabsPageModule {}
