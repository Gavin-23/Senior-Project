import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StaffLoginPage } from './staff-login.page';
var routes = [
    {
        path: '',
        component: StaffLoginPage
    }
];
var StaffLoginPageModule = /** @class */ (function () {
    function StaffLoginPageModule() {
    }
    StaffLoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [StaffLoginPage]
        })
    ], StaffLoginPageModule);
    return StaffLoginPageModule;
}());
export { StaffLoginPageModule };
//# sourceMappingURL=staff-login.module.js.map