import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewCalendarPage } from './view-calendar.page';
import { NgCalendarModule } from 'ionic2-calendar';
var routes = [
    {
        path: '',
        component: ViewCalendarPage
    }
];
var ViewCalendarPageModule = /** @class */ (function () {
    function ViewCalendarPageModule() {
    }
    ViewCalendarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                NgCalendarModule
            ],
            declarations: [ViewCalendarPage]
        })
    ], ViewCalendarPageModule);
    return ViewCalendarPageModule;
}());
export { ViewCalendarPageModule };
//# sourceMappingURL=view-calendar.module.js.map