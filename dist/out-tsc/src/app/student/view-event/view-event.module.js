import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ViewEventPage } from './view-event.page';
var routes = [
    {
        path: '',
        component: ViewEventPage
    }
];
var ViewEventPageModule = /** @class */ (function () {
    function ViewEventPageModule() {
    }
    ViewEventPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ViewEventPage]
        })
    ], ViewEventPageModule);
    return ViewEventPageModule;
}());
export { ViewEventPageModule };
//# sourceMappingURL=view-event.module.js.map