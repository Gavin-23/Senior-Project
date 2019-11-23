import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventListPage } from './event-list.page';
var routes = [
    {
        path: '',
        component: EventListPage
    }
];
var EventListPageModule = /** @class */ (function () {
    function EventListPageModule() {
    }
    EventListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EventListPage]
        })
    ], EventListPageModule);
    return EventListPageModule;
}());
export { EventListPageModule };
//# sourceMappingURL=event-list.module.js.map