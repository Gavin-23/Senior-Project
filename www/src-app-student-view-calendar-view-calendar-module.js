(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-student-view-calendar-view-calendar-module"],{

/***/ "./src/app/student/view-calendar/view-calendar.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/student/view-calendar/view-calendar.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewCalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCalendarPageModule", function() { return ViewCalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-calendar.page */ "./src/app/student/view-calendar/view-calendar.page.ts");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "./node_modules/ionic2-calendar/index.js");








var routes = [
    {
        path: '',
        component: _view_calendar_page__WEBPACK_IMPORTED_MODULE_6__["ViewCalendarPage"]
    }
];
var ViewCalendarPageModule = /** @class */ (function () {
    function ViewCalendarPageModule() {
    }
    ViewCalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"]
            ],
            declarations: [_view_calendar_page__WEBPACK_IMPORTED_MODULE_6__["ViewCalendarPage"]]
        })
    ], ViewCalendarPageModule);
    return ViewCalendarPageModule;
}());



/***/ }),

/***/ "./src/app/student/view-calendar/view-calendar.page.html":
/*!***************************************************************!*\
  !*** ./src/app/student/view-calendar/view-calendar.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Calendar</ion-title>\n    <!-- <ion-buttons fill=\"outline\" (click)=\"today()\">Today</ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Card for adding a new event -->\n  <ion-card>\n    <div *ngIf=\"!event.isEdit; else elseBlock\">\n      <ion-card-header tappable (click)=\"collapseCard = !collapseCard\">\n        <ion-card-title>New Event</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf=\"collapseCard\">\n        <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input type=\"text\" placeholder=\"Event Name\" [(ngModel)]=\"event.name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Location</ion-label>\n          <ion-input type=\"text\" placeholder=\"Location\" [(ngModel)]=\"event.location\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Description</ion-label>\n          <ion-textarea type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.description\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" color=\"secondary\"><strong>Time of Event</strong></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Start</ion-label>\n          <ion-datetime placeholder=\"Month/Day/Hour/minute\" displayFormat=\"MMM/DD/HH:mm\" pickerFormat=\"MMM/DD/HH:mm\"\n            [(ngModel)]=\"event.startTime\">\n          </ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>End</ion-label>\n          <ion-datetime placeholder=\"Month/Day/Hour/minute\" displayFormat=\"MMM/DD/HH:mm\" pickerFormat=\"MMM/DD/HH:mm\"\n            [(ngModel)]=\"event.endTime\">\n          </ion-datetime>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"floating\" color=\"secondary\"><strong>Color of Event</strong></ion-label>\n        </ion-item>\n        <ion-radio-group name=\"radio-group\" [(ngModel)]=\"event.color\">\n          <ion-item *ngFor=\"let item of radio_list\">\n            <ion-text color=\"{{item.color}}\">{{item.text}}</ion-text>\n            <ion-radio slot=\"end\" color=\"{{item.color}}\" value=\"{{item.value}}\" checked=\"{{item.checked}}\"\n              disabled=\"{{item.disabled}}\">\n            </ion-radio>\n          </ion-item>\n        </ion-radio-group> -->\n\n        <ion-button fill=\"outline\" expand=\"block\" color=\"success\" (click)=\"addEvent()\" [disabled]=\"event.title == ''\">Create\n        </ion-button>\n        <ion-button fill=\"outline\" expand=\"block\" color=\"warning\" (click)=\"collapseCard = !collapseCard\">Cancel\n        </ion-button>\n      </ion-card-content>\n    </div>\n\n    <ng-template #elseBlock>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                Edit\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-list>\n        <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input type=\"text\" placeholder=\"Event Name\" [(ngModel)]=\"event.EditName\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Location</ion-label>\n          <ion-input type=\"text\" placeholder=\"Location\" [(ngModel)]=\"event.EditLocation\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Description</ion-label>\n          <ion-textarea type=\"text\" placeholder=\"Description\" [(ngModel)]=\"event.EditDescription\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" color=\"secondary\"><strong>Time of Event</strong></ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>Start</ion-label>\n          <ion-datetime placeholder=\"Month/Day/Hour/minute\" displayFormat=\"MMM/DD/HH:mm\" pickerFormat=\"MMM/DD/HH:mm\"\n            [(ngModel)]=\"event.EditStart\">\n          </ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>End</ion-label>\n          <ion-datetime placeholder=\"Month/Day/Hour/minute\" displayFormat=\"MMM/DD/HH:mm\" pickerFormat=\"MMM/DD/HH:mm\"\n            [(ngModel)]=\"event.EditEnd\">\n          </ion-datetime>\n        </ion-item>\n\n        <!-- <ion-item>\n          <ion-label position=\"floating\" color=\"secondary\"><strong>Color of Event</strong></ion-label>\n        </ion-item>\n        <ion-radio-group name=\"radio-group\" [(ngModel)]=\"event.EditColor\">\n          <ion-item *ngFor=\"let item of radio_list\">\n            <ion-text color=\"{{item.color}}\">{{item.text}}</ion-text>\n            <ion-radio slot=\"end\" color=\"{{item.color}}\" value=\"{{item.value}}\" checked=\"{{item.checked}}\"\n              disabled=\"{{item.disabled}}\">\n            </ion-radio>\n          </ion-item>\n        </ion-radio-group> -->\n        \n      </ion-list>\n\n      <ion-card-content>\n        <ion-col>\n          <ion-button fill=\"outline\" color=\"dark\" size=\"small\" (click)=\"event.isEdit = false\">\n            Back\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button fill=\"outline\" color=\"success\" size=\"small\" (click)=\"EditPersonalEvent(event)\">\n            Update\n          </ion-button>\n        </ion-col>\n      </ion-card-content>\n    </ng-template>\n\n  </ion-card>\n\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-button fill=\"outline\" expand=\"block\" size=\"small\"\n        [color]=\"calendar.mode == 'month' ? 'primary' : 'secondary'\" (click)=\"changeMode('month')\">Month</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button fill=\"outline\" expand=\"block\" size=\"small\" [color]=\"calendar.mode == 'week' ? 'primary' : 'secondary'\"\n        (click)=\"changeMode('week')\">Week</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button fill=\"outline\" expand=\"block\" size=\"small\" [color]=\"calendar.mode == 'day' ? 'primary' : 'secondary'\"\n        (click)=\"changeMode('day')\">\n        Day</ion-button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"2\" text-left>\n      <ion-button fill=\"clear\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n\n    <ion-col text-align>\n      {{viewTitle}}\n    </ion-col>\n\n    <ion-col size=\"2\" text-right>\n      <ion-button fill=\"clear\" (click)=\"next()\">\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\n    (onEventSelected)=\"onEventSelected($event)\" (onTitleChanged)=\"onViewTitleChanged($event)\" startHour=\"1\" endHour=\"25\"\n    step=\"30\" startingDayWeek=\"1\">\n  </calendar>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/student/view-calendar/view-calendar.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/student/view-calendar/view-calendar.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".red {\n  background-color: white;\n  color: red;\n  border: 2px solid #835301;\n  border-radius: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Nlbmlvci1Qcm9qZWN0L3NyYy9hcHAvc3R1ZGVudC92aWV3LWNhbGVuZGFyL3ZpZXctY2FsZW5kYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3ZpZXctY2FsZW5kYXIvdmlldy1jYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MzUzMDE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/student/view-calendar/view-calendar.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/student/view-calendar/view-calendar.page.ts ***!
  \*************************************************************/
/*! exports provided: ViewCalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCalendarPage", function() { return ViewCalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic2-calendar/calendar */ "./node_modules/ionic2-calendar/calendar.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ViewCalendarPage = /** @class */ (function () {
    // userId: string;
    function ViewCalendarPage(alertCtrl, locale, navCtrl, user, alertController, router) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.navCtrl = navCtrl;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.selectedDate = new Date().toISOString();
        this.eventSource = [];
        this.viewTitle = '';
        this.event = {
            name: '',
            location: '',
            description: '',
            startTime: '',
            endTime: '',
            color: '',
            isEdit: false,
        };
        this.radio_list = [
            {
                id: '1',
                name: 'radio_list',
                value: 'black',
                text: 'Black',
                color: 'dark',
                disabled: false,
                checked: false,
            }, {
                id: '2',
                name: 'radio_list',
                value: 'green',
                text: 'Green',
                color: 'success',
                disabled: false,
                checked: true,
            }, {
                id: '3',
                name: 'radio_list',
                value: 'yellow',
                text: 'Yellow',
                color: 'warning',
                disabled: false,
                checked: true,
            }, {
                id: '4',
                name: 'radio_list',
                value: 'purple',
                text: 'Purple',
                color: 'tertiary',
                disabled: false,
                checked: true,
            }, {
                id: '5',
                name: 'radio_list',
                value: 'red',
                text: 'Red',
                color: 'danger',
                disabled: false,
                checked: true,
            },
        ];
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid;
    }
    ViewCalendarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.read_Personal().subscribe(function (data) {
            _this.eventSource = data.map(function (e) {
                console.log(e.payload.doc.data()['UID']);
                console.log(e.payload.doc.data()['UID']);
                return {
                    isCurrentUser: false,
                    id: e.payload.doc.id,
                    title: e.payload.doc.data()['Name'],
                    isEdit: false,
                    Name: e.payload.doc.data()['Name'],
                    Desc: e.payload.doc.data()['Description'],
                    Localtion: e.payload.doc.data()['Location'],
                    startTime: e.payload.doc.data()['StartTime'].toDate(),
                    endTime: e.payload.doc.data()['EndTime'].toDate(),
                    Color: e.payload.doc.data()['Color'],
                };
            });
            console.log("read event successfully!");
            // console.log(this.events[0].StartTime.getTime());
            // this.event =this.events;
            // console.log(this.event)
            // this.eventSource.push(event);
            // this.myCal.loadEvents();
        });
    };
    ViewCalendarPage.prototype.resetEvent = function () {
        this.event = {
            name: '',
            location: '',
            description: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString(),
            color: '',
            isEdit: false,
        };
    };
    ViewCalendarPage.prototype.addEvent = function () {
        var _this = this;
        if (this.event.name == "") {
            this.showAlert("Name empty!", "Please continue enter with the missing information!");
            console.log("Name empty!");
            console.log("show name empty alert");
        }
        else if (this.event.description == "") {
            this.showAlert("Description empty!", "Please continue enter with the missing information!");
            console.log("Description empty!");
            console.log("show description empty alert");
        }
        else {
            var eventCopy = {
                name: this.event.name,
                location: this.event.location,
                startTime: new Date(this.event.startTime),
                endTime: new Date(this.event.endTime),
                desc: this.event.description,
                color: this.event.color
            };
            this.userId = firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid;
            var record = {};
            record['Name'] = eventCopy.name;
            record['Description'] = eventCopy.desc;
            record['Location'] = eventCopy.location;
            record['StartTime'] = eventCopy.startTime;
            record['EndTime'] = eventCopy.endTime;
            record['Color'] = eventCopy.color;
            record['UID'] = this.userId;
            this.user.create_PersonalEvent(record).then(function (resp) {
                _this.event.name = "";
                _this.event.description = "";
                _this.event.location = "";
                _this.event.startTime = "";
                _this.event.endTime = "";
                _this.event.color = "";
                _this.userId = "";
                _this.showAlert("Successfully", "Create Success!");
                _this.router.navigateByUrl('student-tabs/view-calendar');
                console.log("Create Successfully!");
                console.log("show create successfully alert");
            })
                .catch(function (error) {
                console.log(error);
            });
            this.eventSource.push(eventCopy);
            this.myCal.loadEvents();
            console.log(this.eventSource[0].endTime);
            // if (eventCopy.allDay) {
            //   let start = eventCopy.startTime;
            //   let end = eventCopy.endTime;
            //   eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
            //   eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
            // }
        }
    };
    ViewCalendarPage.prototype.EditPersonalEvent = function (recordRow) {
        if (recordRow.EditName == "") {
            this.showAlert("Name empty!", "Please continue enter with the missing information!");
            console.log("Name empty!");
            console.log("show name empty alert");
        }
        else if (recordRow.EditDescription == "") {
            this.showAlert("Description empty!", "Please continue enter with the missing information!");
            console.log("Description empty!");
            console.log("show description empty alert");
        }
        else {
            var record = {};
            record['Name'] = recordRow.EditName;
            record['Description'] = recordRow.EditDescription;
            record['Location'] = recordRow.EditLocation;
            record['StartTime'] = new Date(recordRow.EditStart);
            record['EndTime'] = new Date(recordRow.EditEnd);
            record['Color'] = recordRow.EditColor;
            this.user.update_PersonalEvent(recordRow.id, record);
            recordRow.isEdit = false;
            this.showAlert("Successfully!", "Update Successfully!");
            console.log("Update Successfully!");
            console.log("show create successfully alert");
        }
    };
    ViewCalendarPage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditDescription = record.Desc;
        record.EditLocation = record.Localtion;
        record.EditStart = record.StartTime;
        record.EditEnd = record.EndTime;
        record.EditColor = record.Color;
    };
    ViewCalendarPage.prototype.DeletePersonalEvent = function (recordRow) {
        var _this = this;
        console.log('show confirmation alert');
        console.log(recordRow.id);
        this.presentAlertConfirm('Are you sure you want to delete this event?').then(function (confirm) {
            if (confirm) {
                _this.user.delete_PersonalEvent(recordRow.id);
                _this.showAlert("Successfully!", "Delete Success!");
                console.log('show delete success alert');
                console.log('Deleted');
            }
            else {
                _this.router.navigateByUrl('student-tabs/view-calendar');
                console.log('Canceled!');
                console.log('show canceled alert');
            }
        });
    };
    ViewCalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    ViewCalendarPage.prototype.back = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slidePrev();
    };
    ViewCalendarPage.prototype.next = function () {
        var swiper = document.querySelector('.swiper-container')['swiper'];
        swiper.slideNext();
    };
    // today() {
    //   this.calendar.currentDate = new Date();
    // }
    ViewCalendarPage.prototype.onEventSelected = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var start, end, resolveFunction, promise, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.startTime, 'medium', this.locale);
                        end = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(event.endTime, 'medium', this.locale);
                        promise = new Promise(function (resolve) {
                            resolveFunction = resolve;
                        });
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: event.title,
                                subHeader: this.event.description,
                                message: 'From: ' + start + '<br><br>To: ' + end,
                                buttons: [
                                    {
                                        text: 'Update',
                                        handler: function () { return _this.EditRecord(event); }
                                    }, {
                                        text: 'Remove',
                                        handler: function () { return _this.DeletePersonalEvent(event); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        this.event = event;
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    ViewCalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ViewCalendarPage.prototype.showAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewCalendarPage.prototype.presentAlertConfirm = function (content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resolveFunction, promise, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = new Promise(function (resolve) {
                            resolveFunction = resolve;
                        });
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Confirmation!',
                                message: content,
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        handler: function () { return resolveFunction(false); }
                                    }, {
                                        text: 'Confirm',
                                        handler: function () { return resolveFunction(true); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ionic2_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"])
    ], ViewCalendarPage.prototype, "myCal", void 0);
    ViewCalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-calendar',
            template: __webpack_require__(/*! ./view-calendar.page.html */ "./src/app/student/view-calendar/view-calendar.page.html"),
            styles: [__webpack_require__(/*! ./view-calendar.page.scss */ "./src/app/student/view-calendar/view-calendar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], String, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], ViewCalendarPage);
    return ViewCalendarPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-student-view-calendar-view-calendar-module.js.map