import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TabsPage } from './tabs.page';
var routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            { path: 'create-event', loadChildren: '../create-event/create-event.module#CreateEventPageModule' },
            { path: 'event-list', loadChildren: '../event-list/event-list.module#EventListPageModule' }
        ]
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());
export { TabsRoutingModule };
//# sourceMappingURL=tabs.rounter.module.js.map