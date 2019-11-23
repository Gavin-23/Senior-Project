import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { StudentLoginPage } from './student-login.page';
var routes = [
    {
        path: '',
        component: StudentLoginPage
    }
];
var StudentLoginPageModule = /** @class */ (function () {
    function StudentLoginPageModule() {
    }
    StudentLoginPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [StudentLoginPage]
        })
    ], StudentLoginPageModule);
    return StudentLoginPageModule;
}());
export { StudentLoginPageModule };
//# sourceMappingURL=student-login.module.js.map