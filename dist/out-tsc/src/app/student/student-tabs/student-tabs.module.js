import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentTabsRoutingModule } from './student-tabs.rounter.module';
import { RouterModule } from '@angular/router';
import { StudentTabsPage } from './student-tabs.page';
var routes = [
    {
        path: '',
        component: StudentTabsPage
    }
];
var StudentTabsPageModule = /** @class */ (function () {
    function StudentTabsPageModule() {
    }
    StudentTabsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                StudentTabsRoutingModule,
                RouterModule.forChild(routes)
            ],
            declarations: [StudentTabsPage]
        })
    ], StudentTabsPageModule);
    return StudentTabsPageModule;
}());
export { StudentTabsPageModule };
//# sourceMappingURL=student-tabs.module.js.map