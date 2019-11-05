(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-event-create-event-module"],{

/***/ "./src/app/create-event/create-event.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/create-event/create-event.module.ts ***!
  \*****************************************************/
/*! exports provided: CreateEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventPageModule", function() { return CreateEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-event.page */ "./src/app/create-event/create-event.page.ts");







var routes = [
    {
        path: '',
        component: _create_event_page__WEBPACK_IMPORTED_MODULE_6__["CreateEventPage"]
    }
];
var CreateEventPageModule = /** @class */ (function () {
    function CreateEventPageModule() {
    }
    CreateEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_event_page__WEBPACK_IMPORTED_MODULE_6__["CreateEventPage"]]
        })
    ], CreateEventPageModule);
    return CreateEventPageModule;
}());



/***/ }),

/***/ "./src/app/create-event/create-event.page.html":
/*!*****************************************************!*\
  !*** ./src/app/create-event/create-event.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Event</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\"><strong>Event Name</strong></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Name\" [(ngModel)]=\"name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\"><strong>Event Description</strong></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-textarea clear-on-edit=\"true\" placeholder=\"Description\" [(ngModel)]=\"desc\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\"><strong>Location Of Event</strong></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder=\"Location\" [(ngModel)]=\"localtion\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\"><strong>Event Time</strong></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-datetime placeholder=\"Year/Month/Day/Hour/minute\" displayFormat=\"YYYY/MMM/DD/HH:mm\" min=\"2019-01-01\"\n        max=\"2100-12-31\" [(ngModel)]=\"time\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\"><strong>Scope of Event</strong></ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-select placeholder=\"Scope\" slot=\"end\" value=\"notifications\" interface=\"popover\" [(ngModel)]=\"scope\">\n        <ion-select-option value=\"CAMT\">CAMT Event</ion-select-option>\n        <ion-select-option value=\"CMU\">CMU Event</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\" color=\"secondary\"><strong>Type of Event</strong></ion-label>\n    </ion-item>\n      <ion-radio-group name=\"radio-group\" [(ngModel)]=\"type\">\n        <ion-item *ngFor=\"let item of radio_list\">\n          <ion-text>{{item.text}}</ion-text>\n          <ion-radio slot=\"end\" value=\"{{item.value}}\" checked=\"{{item.checked}}\" disabled=\"{{item.disabled}}\">\n          </ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    <ion-button fill=\"outline\" expand=\"block\" color=\"secondary\" (click)=\"CreateRecord()\">Create</ion-button>\n\n    <!--<p><b>Radio Group Event</b><br/>\n            {{selectedRadioGroup | json}}</p>\n          <p><b>Radio Item Event</b><br/>\n            {{selectedRadioItem | json}}</p>-->\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/create-event/create-event.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/create-event/create-event.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rounded {\n  width: 100%;\n  height: 100px;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n\n#container {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Nlbmlvci1Qcm9qZWN0L3NyYy9hcHAvY3JlYXRlLWV2ZW50L2NyZWF0ZS1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUdiLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWV2ZW50L2NyZWF0ZS1ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm91bmRlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxufVxuXG4jY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAwcHg7IFxuICAgIG1hcmdpbi1sZWZ0OmF1dG87IFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/create-event/create-event.page.ts":
/*!***************************************************!*\
  !*** ./src/app/create-event/create-event.page.ts ***!
  \***************************************************/
/*! exports provided: CreateEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventPage", function() { return CreateEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








var CreateEventPage = /** @class */ (function () {
    // status= false;
    function CreateEventPage(http, afstore, user, alertController, router) {
        this.http = http;
        this.afstore = afstore;
        this.user = user;
        this.alertController = alertController;
        this.router = router;
        this.defaultSelectedRadio = "Public";
        //Get value on ionChange on IonRadioGroup
        //selectedRadioGroup:any;
        //Get value on ionSelect on IonRadio item
        //selectedRadioItem:any;
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
    }
    CreateEventPage.prototype.ngOnInit = function () {
    };
    CreateEventPage.prototype.CreateRecord = function () {
        var _this = this;
        if (this.name == "") {
            this.showAlert("Name empty!", "Please continue enter with the missing information!");
            console.log("Name empty!");
            console.log("show name empty alert");
        }
        else if (this.desc == "") {
            this.showAlert("Description empty!", "Please continue enter with the missing information!");
            console.log("Description empty!");
            console.log("show description empty alert");
        }
        else if (this.localtion == "") {
            this.showAlert("Location empty!", "Please continue enter with the missing information!");
            console.log("Location empty!");
            console.log("show location empty alert");
        }
        else if (this.time == "") {
            this.showAlert("Time empty!", "Please continue enter with the missing information!");
            console.log("Time empty!");
            console.log("show time empty alert");
        }
        else if (this.scope == "") {
            this.showAlert("Scope empty!", "Please continue enter with the missing information!");
            console.log("Scope empty!");
            console.log("show scope empty alert");
        }
        else if (this.type == "") {
            this.showAlert("Type empty!", "Please continue enter with the missing information!");
            console.log("Type empty!");
            console.log("show type empty alert");
        }
        else {
            this.userId = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
            var record = {};
            record['Name'] = this.name;
            record['Description'] = this.desc;
            record['Location'] = this.localtion;
            record['Time'] = this.time;
            record['Scope'] = this.scope;
            record['Type'] = this.type;
            record['UID'] = this.userId;
            // record['Status'] = this.status;
            record['Member'] = [];
            this.user.create_NewEvent(record).then(function (resp) {
                _this.name = "";
                _this.desc = "";
                _this.localtion = "";
                _this.time = "";
                _this.scope = "";
                _this.type = "";
                _this.userId = "";
                // this.status = false;
                _this.member = [];
                _this.showAlert("Successfully", "Create Success!");
                _this.router.navigateByUrl('tabs/event-list');
                console.log("Create Successfully!");
                console.log("show create successfully alert");
            })
                .catch(function (error) {
                console.log(error);
            });
        }
    };
    CreateEventPage.prototype.showAlert = function (title, content) {
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
    CreateEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.page.html */ "./src/app/create-event/create-event.page.html"),
            styles: [__webpack_require__(/*! ./create-event.page.scss */ "./src/app/create-event/create-event.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CreateEventPage);
    return CreateEventPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-event-create-event-module.js.map