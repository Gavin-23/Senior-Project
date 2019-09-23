import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewCalendarPage } from './view-calendar.page';

import { NgCalendarModule } from 'ionic2-calendar';


const routes: Routes = [
  {
    path: '',
    component: ViewCalendarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [ViewCalendarPage]
})
export class ViewCalendarPageModule {}
