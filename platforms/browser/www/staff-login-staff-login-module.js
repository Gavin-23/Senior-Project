(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-login-staff-login-module"],{

/***/ "./src/app/staff-login/staff-login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/staff-login/staff-login.module.ts ***!
  \***************************************************/
/*! exports provided: StaffLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffLoginPageModule", function() { return StaffLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _staff_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-login.page */ "./src/app/staff-login/staff-login.page.ts");







var routes = [
    {
        path: '',
        component: _staff_login_page__WEBPACK_IMPORTED_MODULE_6__["StaffLoginPage"]
    }
];
var StaffLoginPageModule = /** @class */ (function () {
    function StaffLoginPageModule() {
    }
    StaffLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_staff_login_page__WEBPACK_IMPORTED_MODULE_6__["StaffLoginPage"]]
        })
    ], StaffLoginPageModule);
    return StaffLoginPageModule;
}());



/***/ }),

/***/ "./src/app/staff-login/staff-login.page.html":
/*!***************************************************!*\
  !*** ./src/app/staff-login/staff-login.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title center text-center>\n      ADMINISTRATOR LOGIN\n    </ion-title>\n    <ion-button slot=\"start\" href=\"/login\" class=\"button.button-back\" color=\"white\">\n      <ion-icon name=\"arrow-back\" color=\"secondary\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form center text-center class=\"title\">\n    <h2>CMU IT Account</h2>\n  </form>\n  <form>\n    <ion-list>\n      <ion-label position=\"floating\">Email Address</ion-label>\n      <div>\n        <ion-item>\n          <ion-input placeholder=\"Email Address\" [(ngModel)]=\"emailAddress\" name=\"email\"></ion-input>\n          <ion-note color=\"dark\" slot=\"end\">@cmu.ac.th</ion-note>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-list>\n      <ion-label position=\"floating\">Password</ion-label>\n      <div>\n        <ion-item>\n          <ion-input placeholder=\"Password\" type=\"{{type}}\" [(ngModel)]=\"password\" name=\"pw\"></ion-input>\n          <button *ngIf=\"!showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n            <ion-icon slot=\"end\" name=\"eye\" style=\"font-size:20px;\"></ion-icon>\n          </button>\n          <button *ngIf=\"showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n            <ion-icon slot=\"end\" name=\"eye-off\" style=\"font-size:20px;\"></ion-icon>\n          </button>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-button size=\"default\" expand=\"block\" class=\"button-staff\" color=\"white\" (click)=\"login()\">Login\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/staff-login/staff-login.page.scss":
/*!***************************************************!*\
  !*** ./src/app/staff-login/staff-login.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-staff {\n  background-color: white;\n  color: #835301;\n  border: 2px solid #835301;\n  border-radius: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Nlbmlvci1Qcm9qZWN0L3NyYy9hcHAvc3RhZmYtbG9naW4vc3RhZmYtbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi1sb2dpbi9zdGFmZi1sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXN0YWZmIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjODM1MzAxO1xuICBib3JkZXI6IDJweCBzb2xpZCAjODM1MzAxO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/staff-login/staff-login.page.ts":
/*!*************************************************!*\
  !*** ./src/app/staff-login/staff-login.page.ts ***!
  \*************************************************/
/*! exports provided: StaffLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffLoginPage", function() { return StaffLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var StaffLoginPage = /** @class */ (function () {
    function StaffLoginPage(afAuth, alertController, router) {
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.router = router;
        this.emailAddress = "";
        this.password = "";
        this.type = 'password';
        this.showPass = false;
    }
    StaffLoginPage.prototype.ngOnInit = function () {
    };
    // abcdefg + @cmu.ac.th
    StaffLoginPage.prototype.login = function () {
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
                        localStorage.setItem('currentUser', this.emailAddress);
                        this.router.navigate(['/tabs']);
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
    StaffLoginPage.prototype.showAlert = function (title, content) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: content,
                            buttons: ['OK'],
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
    StaffLoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
            console.log("show text of password!");
        }
        else {
            this.type = 'password';
            console.log("hide text of password!");
        }
    };
    StaffLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staff-login',
            template: __webpack_require__(/*! ./staff-login.page.html */ "./src/app/staff-login/staff-login.page.html"),
            styles: [__webpack_require__(/*! ./staff-login.page.scss */ "./src/app/staff-login/staff-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StaffLoginPage);
    return StaffLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=staff-login-staff-login-module.js.map