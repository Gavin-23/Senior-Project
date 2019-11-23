import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ngOnInit = function () {
        console.log(this.tabs);
        this.tabs.select("event-list");
    };
    tslib_1.__decorate([
        ViewChild('tabs'),
        tslib_1.__metadata("design:type", IonTabs)
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: './tabs.page.html',
            styleUrls: ['./tabs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map