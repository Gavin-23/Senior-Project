(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-list-event-list-module"],{

/***/ "./src/app/event-list/event-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/event-list/event-list.module.ts ***!
  \*************************************************/
/*! exports provided: EventListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPageModule", function() { return EventListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _event_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-list.page */ "./src/app/event-list/event-list.page.ts");







var routes = [
    {
        path: '',
        component: _event_list_page__WEBPACK_IMPORTED_MODULE_6__["EventListPage"]
    }
];
var EventListPageModule = /** @class */ (function () {
    function EventListPageModule() {
    }
    EventListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_event_list_page__WEBPACK_IMPORTED_MODULE_6__["EventListPage"]]
        })
    ], EventListPageModule);
    return EventListPageModule;
}());



/***/ }),

/***/ "./src/app/event-list/event-list.page.html":
/*!*************************************************!*\
  !*** ./src/app/event-list/event-list.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Event List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor=\"let item of event\">\n    <div *ngIf=\"!item.isCurrentUser; else elseBlock2\">\n      <span *ngIf=\"!item.isEdit; else elseBlock\">\n        <div *ngIf=\"!item.isMember; else elseBlock1 \">\n\n          <ion-card-header>\n            <ion-card-title color=\"secondary\">{{item.Name}}</ion-card-title>\n            <ion-card-subtitle>Location:{{item.Localtion}}</ion-card-subtitle>\n            <ion-card-subtitle>Time: {{item.Time | date:'medium'}}</ion-card-subtitle>\n            <ion-card-subtitle>Scope: {{item.Scope}}</ion-card-subtitle>\n            <ion-card-subtitle>Type: {{item.Type}}</ion-card-subtitle>\n            <ion-card-subtitle>Description:</ion-card-subtitle>\n            <ion-card-content>{{item.Desc}}</ion-card-content>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button shape=\"round\" color=\"secondary\" size=\"small\" (click)=\"EditRecord(item)\">\n              Update\n              <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" color=\"danger\" size=\"small\" (click)=\"RemoveRecord(item.id)\">\n              Delete\n              <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" color=\"warning\" size=\"small\" (click)=\"Member(item)\">\n              Member\n              <ion-icon size=\"small\" slot=\"icon-only\" name=\"contacts\"></ion-icon>\n            </ion-button>\n          </ion-card-content>\n        </div>\n      </span>\n\n\n      <ng-template #elseBlock>\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  Edit\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n        <ion-list>\n          <ion-item>\n            <ion-label><strong>Name</strong></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"item.EditName\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label><strong>Description</strong></ion-label>\n            <ion-textarea type=\"text\" [(ngModel)]=\"item.EditDescription\"></ion-textarea>\n          </ion-item>\n\n          <ion-item>\n            <ion-label><strong>Location</strong></ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"item.EditLocation\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label><strong>Time</strong></ion-label>\n            <ion-datetime placeholder=\"Year/Month/Day/Hour/minute\" displayFormat=\"YYYY/MMM/DD/HH:mm\" min=\"2019-01-01\"\n              max=\"2100-12-31\" [(ngModel)]=\"item.EditTime\"></ion-datetime>\n          </ion-item>\n\n          <ion-item>\n            <ion-label><strong>Scope</strong></ion-label>\n            <ion-select value=\"notifications\" interface=\"popover\" [(ngModel)]=\"item.EditScope\">\n              <ion-select-option value=\"CAMT\">CAMT Event</ion-select-option>\n              <ion-select-option value=\"CMU\">CMU Event</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label><strong>Type</strong></ion-label>\n            <ion-radio-group name=\"radio-group\" [(ngModel)]=\"item.EditType\">\n              <ion-item *ngFor=\"let item of radio_list\">\n                <ion-label>{{item.text}}</ion-label>\n                <ion-radio slot=\"start\" name=\"{{item.name}}\" value=\"{{item.value}}\" checked=\"{{item.checked}}\"\n                  disabled=\"{{item.disabled}}\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </ion-item>\n        </ion-list>\n\n        <ion-card-content>\n          <ion-col>\n            <ion-button fill=\"outline\" color=\"dark\" size=\"small\" (click)=\"item.isEdit = false\">\n              Back\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"outline\" color=\"success\" size=\"small\" (click)=\"UpdateRecord(item)\">\n              Update\n            </ion-button>\n          </ion-col>\n        </ion-card-content>\n      </ng-template>\n\n      <ng-template #elseBlock1>\n        <ion-card-header>\n          <ion-card-title>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  Member\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-title>\n        </ion-card-header>\n          <ion-card-content *ngFor=\"let i of item.Member\">{{i}}\n              <ion-button fill=\"outline\" color=\"danger\" size=\"small\" (click)=\"RemoveMember(item,i)\">\n                  Remove\n                  <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-button>\n          </ion-card-content>\n        <ion-card-content>\n          <ion-col>\n            <ion-button fill=\"outline\" color=\"dark\" size=\"small\" (click)=\"item.isMember = false\">\n              Back\n            </ion-button>\n          </ion-col>\n        </ion-card-content>\n      </ng-template>\n\n      <div #elseBlock2></div>\n    </div>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/event-list/event-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/event-list/event-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/event-list/event-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/event-list/event-list.page.ts ***!
  \***********************************************/
/*! exports provided: EventListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListPage", function() { return EventListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








var EventListPage = /** @class */ (function () {
    function EventListPage(http, afstore, user, alertController, router) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.status = false;
        // defaultSelectedRadio = "Public";
        // //Get value on ionChange on IonRadioGroup
        // selectedRadioGroup:any;
        // //Get value on ionSelect on IonRadio item
        // selectedRadioItem:any;
        this.radio_list = [
            {
                id: '1',
                name: 'radio_list',
                value: 'Public',
                text: 'Public',
                disabled: false,
                checked: false,
            }, {
                id: '2',
                name: 'radio_list',
                value: 'Private',
                text: 'Private',
                disabled: false,
                checked: true,
            },
        ];
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
    }
    EventListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.read_Event().subscribe(function (data) {
            _this.event = data.map(function (e) {
                if (e.payload.doc.data()['UID'] !== firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid) {
                    return { isCurrentUser: true };
                }
                else {
                    return {
                        isCurrentUser: false,
                        id: e.payload.doc.id,
                        Name: e.payload.doc.data()['Name'],
                        Desc: e.payload.doc.data()['Description'],
                        Localtion: e.payload.doc.data()['Location'],
                        Time: e.payload.doc.data()['Time'],
                        Scope: e.payload.doc.data()['Scope'],
                        Type: e.payload.doc.data()['Type'],
                        Member: e.payload.doc.data()['Member']
                    };
                }
            });
            console.log(_this.event);
            console.log("read event successfully!");
        });
    };
    EventListPage.prototype.RemoveRecord = function (rowID) {
        var _this = this;
        console.log('show confirmation alert');
        this.presentAlertConfirm('Are you sure you want to delete this event?').then(function (confirm) {
            if (confirm) {
                _this.user.delete_Event(rowID);
                _this.showAlert("Successfully!", "Delete Success!");
                console.log('show delete success alert');
                console.log('Deleted');
            }
            else {
                _this.router.navigateByUrl('tabs/event-list');
                console.log('Canceled!');
                console.log('show canceled alert');
            }
        });
    };
    EventListPage.prototype.EditRecord = function (record) {
        record.isEdit = true;
        record.EditName = record.Name;
        record.EditDescription = record.Desc;
        record.EditLocation = record.Localtion;
        record.EditTime = record.Time;
        record.EditScope = record.Scope;
        record.EditType = record.Type;
    };
    EventListPage.prototype.UpdateRecord = function (recordRow) {
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
        else if (recordRow.EditLocation == "") {
            this.showAlert("Location empty!", "Please continue enter with the missing information!");
            console.log("Location empty!");
            console.log("show location empty alert");
        }
        else if (recordRow.EditTime == "") {
            this.showAlert("Time empty!", "Please continue enter with the missing information!");
            console.log("Time empty!");
            console.log("show time empty alert");
        }
        else if (recordRow.EditScopee == "") {
            this.showAlert("Scope empty!", "Please continue enter with the missing information!");
            console.log("Scope empty!");
            console.log("show scope empty alert");
        }
        else if (recordRow.EditType == "") {
            this.showAlert("Type empty!", "Please continue enter with the missing information!");
            console.log("Type empty!");
            console.log("show type empty alert");
        }
        else {
            var record = {};
            record['Name'] = recordRow.EditName;
            record['Description'] = recordRow.EditDescription;
            record['Location'] = recordRow.EditLocation;
            record['Time'] = recordRow.EditTime;
            record['Scope'] = recordRow.EditScope;
            record['Type'] = recordRow.EditType;
            this.user.update_Event(recordRow.id, record);
            recordRow.isEdit = false;
            this.showAlert("Successfully!", "Update Successfully!");
            console.log("Update Successfully!");
            console.log("show create successfully alert");
        }
    };
    // radioGroupChange(event) {
    //   console.log("radioGroupChange",event.detail);
    //   this.selectedRadioGroup = event.detail;
    // }
    // radioFocus() {
    //   console.log("radioFocus");
    // }
    // radioSelect(event) {
    //   console.log("radioSelect",event.detail);
    //   this.selectedRadioItem = event.detail;
    // }
    // radioBlur() {
    //   console.log("radioBlur");
    // }
    EventListPage.prototype.presentAlertConfirm = function (content) {
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
    EventListPage.prototype.showAlert = function (title, content) {
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
    EventListPage.prototype.Member = function (click) {
        click.isMember = true;
    };
    EventListPage.prototype.checkStatus = function (item) {
        return !Object.values(item.Member).includes(this.studentId);
    };
    EventListPage.prototype.RemoveMember = function (recordRow, id) {
        var _this = this;
        console.log(recordRow);
        console.log('show confirmation alert');
        this.presentAlertConfirm('Are you sure you want to remove this member?').then(function (confirm) {
            if (confirm) {
                var record = recordRow.Member;
                for (var i = 0; i < record.length; i++) {
                    console.log(record[i]);
                    if (record[i] == id) {
                        record.splice(i, 1);
                    }
                    _this.user.follow_Event(recordRow.id, record);
                }
                console.log(record);
                _this.showAlert("Successfully!", "Remove Success!");
                console.log('show remove success alert');
                console.log('Remove Successfully!');
            }
            else {
                // this.router.navigateByUrl('view-event');
                console.log('Remove Canceled!');
            }
        });
    };
    EventListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-list',
            template: __webpack_require__(/*! ./event-list.page.html */ "./src/app/event-list/event-list.page.html"),
            styles: [__webpack_require__(/*! ./event-list.page.scss */ "./src/app/event-list/event-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EventListPage);
    return EventListPage;
}());



/***/ })

}]);
//# sourceMappingURL=event-list-event-list-module.js.map