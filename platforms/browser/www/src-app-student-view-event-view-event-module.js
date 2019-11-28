(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-student-view-event-view-event-module"],{

/***/ "./src/app/student/view-event/view-event.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/student/view-event/view-event.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventPageModule", function() { return ViewEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-event.page */ "./src/app/student/view-event/view-event.page.ts");







var routes = [
    {
        path: '',
        component: _view_event_page__WEBPACK_IMPORTED_MODULE_6__["ViewEventPage"]
    }
];
var ViewEventPageModule = /** @class */ (function () {
    function ViewEventPageModule() {
    }
    ViewEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_event_page__WEBPACK_IMPORTED_MODULE_6__["ViewEventPage"]]
        })
    ], ViewEventPageModule);
    return ViewEventPageModule;
}());



/***/ }),

/***/ "./src/app/student/view-event/view-event.page.html":
/*!*********************************************************!*\
  !*** ./src/app/student/view-event/view-event.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Event List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"background\">\n  <ion-card *ngFor=\"let item of event\" class=\"background\">\n    <div *ngIf=\"!item.isDetail; else elseBlock\">\n      <ion-card-header>\n        <ion-card-title color=\"primary\">{{item.Name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <!-- <ion-button fill=\"outline\" color=\"primary\" size=\"small\" (click)=\"EditRecord(item)\">\n            {{item.type}}\n            <ion-icon size=\"small\" slot=\"icon-only\" name=\"ios-remove-circle-outline\"></ion-icon>\n          </ion-button> -->\n\n        <!-- <ion-button *ngIf=\"!ShowStatus\" fill=\"outline\" color=\"primary\" type=\"{{type}}\" item-right (click)=\"ShowStatus()\">\n            <ion-icon size=\"small\" slot=\"icon-only\" name=\"ios-remove-circle-outline\"></ion-icon>\n          </ion-button>\n\n          <ion-button *ngIf=\"ShowStatus\" fill=\"outline\" color=\"primary\" type=\"button\" item-right (click)=\"ShowStatus()\">\n            <ion-icon size=\"small\" slot=\"icon-only\" name=\"ios-add-circle-outline\"></ion-icon>\n          </ion-button> -->\n\n        <ion-button *ngIf=\"checkStatus(item)\" fill=\"outline\" color=\"primary\" size=\"small\" item-right\n          (click)=\"FollowEvent(item)\">\n          Follow\n          <ion-icon slot=\"end\" name=\"ios-add-circle-outline\"></ion-icon>\n        </ion-button>\n\n        <ion-button *ngIf=\"!checkStatus(item)\" fill=\"outline\" color=\"primary\" size=\"small\" item-right\n          (click)=\"UnfollowEvent(item)\">\n          Unfollow\n          <ion-icon slot=\"end\" name=\"ios-remove-circle-outline\"></ion-icon>\n        </ion-button>\n\n        <ion-button fill=\"outline\" color=\"warning\" size=\"small\" item-right (click)=\"Detail(item)\">\n          Detail\n          <ion-icon size=\"small\" slot=\"end\" name=\"ios-more\"></ion-icon>\n        </ion-button>\n      </ion-card-content>\n    </div>\n\n\n    <ng-template #elseBlock>\n      <ion-card-header>\n        <ion-card-title>\n          <ion-grid>\n            <ion-row>\n              <ion-col >\n                {{item.Name}}\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-list>\n        <ion-item>\n          <ion-card-subtitle>Location:{{item.Localtion}}</ion-card-subtitle>\n        </ion-item>\n        <ion-item>\n          <ion-card-subtitle>Time: {{item.Time | date:'medium'}}</ion-card-subtitle>\n        </ion-item>\n        <ion-item>\n          <ion-card-subtitle>Scope: {{item.Scope}}</ion-card-subtitle>\n        </ion-item>\n        <ion-item>\n          <ion-card-subtitle>Type: {{item.Type}}</ion-card-subtitle>\n        </ion-item>\n        <ion-item>\n          <ion-card-subtitle>Description:</ion-card-subtitle>\n          <ion-card-content>{{item.Desc}}</ion-card-content>\n        </ion-item>\n      </ion-list>\n\n\n\n      <ion-card-content>\n        <ion-col>\n          <ion-button fill=\"outline\" color=\"dark\" size=\"small\" (click)=\"item.isDetail = false\">\n            Back\n          </ion-button>\n        </ion-col>\n      </ion-card-content>\n    </ng-template>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/student/view-event/view-event.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/student/view-event/view-event.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-follow {\n  background-color: white;\n  color: #835301;\n  border: 2px solid #835301;\n  border-radius: 8px; }\n\n.button-detail {\n  background-color: white;\n  color: #ffce00;\n  border: 2px solid #ffce00;\n  border-radius: 8px; }\n\nion-content.background {\n  --background: #d78c42 no-repeat center center fixed;\n  background-size: cover; }\n\nion-card.background {\n  --background: #ffffff no-repeat center center fixed;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Nlbmlvci1Qcm9qZWN0L3NyYy9hcHAvc3R1ZGVudC92aWV3LWV2ZW50L3ZpZXctZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbURBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxtREFBYTtFQUNiLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC92aWV3LWV2ZW50L3ZpZXctZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1mb2xsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM4MzUzMDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MzUzMDE7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5idXR0b24tZGV0YWlsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjZmZjZTAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZjZTAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICNkNzhjNDIgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi1jYXJkLmJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmYgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/student/view-event/view-event.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/student/view-event/view-event.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventPage", function() { return ViewEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);









var ViewEventPage = /** @class */ (function () {
    function ViewEventPage(http, afstore, user, alertController, router, afStorage) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.afStorage = afStorage;
        this.status = false;
    }
    ViewEventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.user.read_Event().subscribe(function (data) {
            _this.event = data.map(function (e) {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Name: e.payload.doc.data()['Name'],
                    Desc: e.payload.doc.data()['Description'],
                    Localtion: e.payload.doc.data()['Location'],
                    Time: e.payload.doc.data()['Time'],
                    Scope: e.payload.doc.data()['Scope'],
                    Type: e.payload.doc.data()['Type'],
                    Member: e.payload.doc.data()['Member'],
                };
            });
            console.log(_this.event);
            console.log("read event successfully!");
        });
        this.user.getStudentId().subscribe(function (data) {
            _this.students = data.map(function (e) {
                if (e.payload.doc.id == firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid) {
                    return _this.studentId = e.payload.doc.data()['studentId'];
                }
            });
        });
        this.userId = firebase__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.uid;
    };
    ViewEventPage.prototype.checkStatus = function (item) {
        return !Object.values(item.Member).includes(this.studentId);
    };
    ViewEventPage.prototype.FollowEvent = function (recordRow) {
        recordRow.status = !recordRow.status;
        if (recordRow.status == true) {
            var counter = Object.keys(recordRow.Member).length - 1;
            var record = recordRow.Member;
            console.log(this.userId);
            console.log(this.studentId);
            record[counter + 1] = this.studentId;
            console.log(record);
            this.user.follow_Event(recordRow.id, record);
            console.log("Follow Successfully!");
        }
    };
    ViewEventPage.prototype.UnfollowEvent = function (recordRow) {
        var _this = this;
        console.log('show confirmation alert');
        this.presentAlertConfirm('Are you sure you want to unfollow this event?').then(function (confirm) {
            if (confirm) {
                recordRow.status = _this.status;
                var record = recordRow.Member;
                for (var i = 0; i < record.length; i++) {
                    console.log(record[i]);
                    if (record[i] == _this.studentId) {
                        record.splice(i, 1);
                    }
                    _this.user.follow_Event(recordRow.id, record);
                }
                console.log(record);
                _this.showAlert("Successfully!", "Unfollow Success!");
                console.log('show unfollow success alert');
                console.log('Unfollow Successfully!');
            }
            else {
                // this.router.navigateByUrl('view-event');
                console.log('Unfollow Canceled!');
            }
        });
    };
    ViewEventPage.prototype.Detail = function (click) {
        click.isDetail = true;
    };
    ViewEventPage.prototype.presentAlertConfirm = function (content) {
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
    ViewEventPage.prototype.showAlert = function (title, content) {
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
    ViewEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-event',
            template: __webpack_require__(/*! ./view-event.page.html */ "./src/app/student/view-event/view-event.page.html"),
            styles: [__webpack_require__(/*! ./view-event.page.scss */ "./src/app/student/view-event/view-event.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]])
    ], ViewEventPage);
    return ViewEventPage;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-student-view-event-view-event-module.js.map