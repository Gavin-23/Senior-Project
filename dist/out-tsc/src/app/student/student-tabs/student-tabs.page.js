import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
var StudentTabsPage = /** @class */ (function () {
    function StudentTabsPage() {
    }
    StudentTabsPage.prototype.ngOnInit = function () {
        console.log(this.tabs);
        this.tabs.select("view-event");
    };
    tslib_1.__decorate([
        ViewChild('StudentTabs'),
        tslib_1.__metadata("design:type", IonTabs)
    ], StudentTabsPage.prototype, "tabs", void 0);
    StudentTabsPage = tslib_1.__decorate([
        Component({
            selector: 'app-student-tabs',
            templateUrl: './student-tabs.page.html',
            styleUrls: ['./student-tabs.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StudentTabsPage);
    return StudentTabsPage;
}());
export { StudentTabsPage };
//# sourceMappingURL=student-tabs.page.js.map