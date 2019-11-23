import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentTabsPage } from './student-tabs.page';
var routes = [
    {
        path: '',
        component: StudentTabsPage,
        children: [
            { path: 'view-event', loadChildren: 'src/app/student/view-event/view-event.module#ViewEventPageModule' },
            { path: 'view-calendar', loadChildren: 'src/app/student/view-calendar/view-calendar.module#ViewCalendarPageModule' }
        ]
    }
];
var StudentTabsRoutingModule = /** @class */ (function () {
    function StudentTabsRoutingModule() {
    }
    StudentTabsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], StudentTabsRoutingModule);
    return StudentTabsRoutingModule;
}());
export { StudentTabsRoutingModule };
//# sourceMappingURL=student-tabs.rounter.module.js.map