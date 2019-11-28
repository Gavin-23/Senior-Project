(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-tabs-student-tabs-module"],{

/***/ "./src/app/student/student-tabs/student-tabs.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/student/student-tabs/student-tabs.module.ts ***!
  \*************************************************************/
/*! exports provided: StudentTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTabsPageModule", function() { return StudentTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_tabs_rounter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-tabs.rounter.module */ "./src/app/student/student-tabs/student-tabs.rounter.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-tabs.page */ "./src/app/student/student-tabs/student-tabs.page.ts");








var routes = [
    {
        path: '',
        component: _student_tabs_page__WEBPACK_IMPORTED_MODULE_7__["StudentTabsPage"]
    }
];
var StudentTabsPageModule = /** @class */ (function () {
    function StudentTabsPageModule() {
    }
    StudentTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _student_tabs_rounter_module__WEBPACK_IMPORTED_MODULE_5__["StudentTabsRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_tabs_page__WEBPACK_IMPORTED_MODULE_7__["StudentTabsPage"]]
        })
    ], StudentTabsPageModule);
    return StudentTabsPageModule;
}());



/***/ }),

/***/ "./src/app/student/student-tabs/student-tabs.page.html":
/*!*************************************************************!*\
  !*** ./src/app/student/student-tabs/student-tabs.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs #StudentTabs>\n\t<ion-tab-bar slot=\"bottom\">\n\t\t<ion-tab-button tab=\"view-event\">\n\t\t\t<ion-icon name=\"ios-list-box\"></ion-icon>\n\t\t\t<ion-label>View Event</ion-label>\n\t\t</ion-tab-button>\n\n\t\t<ion-list>\n\t\t\t<ion-item *ngFor=\"let n of scheduled\">\n\t\t\t\t<ion-label text-wrap>\n\t\t\t\t\t{{n.id}} - {{n.title}}\n\t\t\t\t\t<p>Trigger: {{n.trigger | json}}</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\n\t\t<ion-tab-button tab=\"view-calendar\">\n\t\t\t<ion-icon name=\"calendar\"></ion-icon>\n\t\t\t<ion-label>View Calendar</ion-label>\n\t\t</ion-tab-button>\n\t</ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/student/student-tabs/student-tabs.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/student/student-tabs/student-tabs.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC10YWJzL3N0dWRlbnQtdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/student/student-tabs/student-tabs.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/student/student-tabs/student-tabs.page.ts ***!
  \***********************************************************/
/*! exports provided: StudentTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTabsPage", function() { return StudentTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var StudentTabsPage = /** @class */ (function () {
    function StudentTabsPage() {
    }
    StudentTabsPage.prototype.ngOnInit = function () {
        console.log(this.tabs);
        this.tabs.select("view-event");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('StudentTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"])
    ], StudentTabsPage.prototype, "tabs", void 0);
    StudentTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-tabs',
            template: __webpack_require__(/*! ./student-tabs.page.html */ "./src/app/student/student-tabs/student-tabs.page.html"),
            styles: [__webpack_require__(/*! ./student-tabs.page.scss */ "./src/app/student/student-tabs/student-tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentTabsPage);
    return StudentTabsPage;
}());



/***/ }),

/***/ "./src/app/student/student-tabs/student-tabs.rounter.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/student/student-tabs/student-tabs.rounter.module.ts ***!
  \*********************************************************************/
/*! exports provided: StudentTabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentTabsRoutingModule", function() { return StudentTabsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-tabs.page */ "./src/app/student/student-tabs/student-tabs.page.ts");




var routes = [
    {
        path: '',
        component: _student_tabs_page__WEBPACK_IMPORTED_MODULE_3__["StudentTabsPage"],
        children: [
            { path: 'view-event', loadChildren: 'src/app/student/view-event/view-event.module#ViewEventPageModule' },
            { path: 'view-calendar', loadChildren: 'src/app/student/view-calendar/view-calendar.module#ViewCalendarPageModule' }
        ]
    }
];
var StudentTabsRoutingModule = /** @class */ (function () {
    function StudentTabsRoutingModule() {
    }
    StudentTabsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StudentTabsRoutingModule);
    return StudentTabsRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=student-student-tabs-student-tabs-module.js.map