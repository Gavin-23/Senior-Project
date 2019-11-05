(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-login-student-login-module"],{

/***/ "./src/app/student-login/student-login.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/student-login/student-login.module.ts ***!
  \*******************************************************/
/*! exports provided: StudentLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLoginPageModule", function() { return StudentLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _student_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-login.page */ "./src/app/student-login/student-login.page.ts");







var routes = [
    {
        path: '',
        component: _student_login_page__WEBPACK_IMPORTED_MODULE_6__["StudentLoginPage"]
    }
];
var StudentLoginPageModule = /** @class */ (function () {
    function StudentLoginPageModule() {
    }
    StudentLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_student_login_page__WEBPACK_IMPORTED_MODULE_6__["StudentLoginPage"]]
        })
    ], StudentLoginPageModule);
    return StudentLoginPageModule;
}());



/***/ }),

/***/ "./src/app/student-login/student-login.page.html":
/*!*******************************************************!*\
  !*** ./src/app/student-login/student-login.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title center text-center>\n      STUDENT LOGIN\n    </ion-title>\n    <ion-button slot=\"start\" href=\"/login\" class=\"button.button-back\" color=\"white\">\n      <ion-icon name=\"arrow-back\" color=\"primary\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form center text-center class=\"title\">\n    <h2>CMU IT Account</h2>\n  </form>\n  <form>\n    <ion-list>\n      <ion-label position=\"floating\">Email Address</ion-label>\n      <div class=\"input-group input-group-lg\">\n        <ion-item>\n          <ion-input placeholder=\"Email Address\" [(ngModel)]=\"emailAddress\" name=\"email\"></ion-input>\n          <ion-note color=\"dark\" slot=\"end\">@cmu.ac.th</ion-note>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-list>\n      <ion-label position=\"floating\">Password</ion-label>\n      <div class=\"input-group input-group-lg\">\n        <ion-item>\n          <ion-input placeholder=\"Password\" type=\"{{type}}\" [(ngModel)]=\"password\" name=\"pw\"></ion-input>\n          <button *ngIf=\"!showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n            <ion-icon slot=\"end\" name=\"eye\" style=\"font-size:20px;\"></ion-icon>\n          </button>\n          <button *ngIf=\"showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n            <ion-icon slot=\"end\" name=\"eye-off\" style=\"font-size:20px;\"></ion-icon>\n          </button>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-button size=\"default\" expand=\"block\" class=\"button-student\" color=\"white\" (click)=\"login()\">Login\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/student-login/student-login.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/student-login/student-login.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-student {\n  background-color: white;\n  color: #835301;\n  border: 2px solid #835301;\n  border-radius: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Nlbmlvci1Qcm9qZWN0L3NyYy9hcHAvc3R1ZGVudC1sb2dpbi9zdHVkZW50LWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC1sb2dpbi9zdHVkZW50LWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tc3R1ZGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzgzNTMwMTtcbiAgYm9yZGVyOiAycHggc29saWQgIzgzNTMwMTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/student-login/student-login.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/student-login/student-login.page.ts ***!
  \*****************************************************/
/*! exports provided: StudentLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLoginPage", function() { return StudentLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var StudentLoginPage = /** @class */ (function () {
    function StudentLoginPage(afAuth, alertController, router) {
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.router = router;
        this.emailAddress = "";
        this.password = "";
        this.type = 'password';
        this.showPass = false;
    }
    StudentLoginPage.prototype.ngOnInit = function () {
    };
    StudentLoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, emailAddress, password, res, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, emailAddress = _a.emailAddress, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(emailAddress + "@cmu.ac.th", password)];
                    case 2:
                        res = _b.sent();
                        this.router.navigate(['/student-tabs']);
                        return [2 /*return*/, console.log("Successful!")];
                    case 3:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        if (err_1.code === "auth/invalid-email") {
                            this.showAlert("Error!", "Email account cannot be empty.");
                            console.log("Email account cannot be empty!");
                            console.log("show emial empty alert");
                        }
                        if (err_1.code === "auth/wrong-password") {
                            this.showAlert("Error!", "Your account or password is not correct, please enter it again.");
                            console.log("Wrong password!");
                            console.log("show auth/wrong-password alert");
                        }
                        if (err_1.code === "auth/user-not-found") {
                            this.showAlert("Error!", "Your account or password is not correct, please enter it again.");
                            console.log("user not found!");
                            console.log("show auth/user-not-found alert");
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StudentLoginPage.prototype.showAlert = function (title, content) {
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
    StudentLoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    StudentLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-login',
            template: __webpack_require__(/*! ./student-login.page.html */ "./src/app/student-login/student-login.page.html"),
            styles: [__webpack_require__(/*! ./student-login.page.scss */ "./src/app/student-login/student-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StudentLoginPage);
    return StudentLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=student-login-student-login-module.js.map