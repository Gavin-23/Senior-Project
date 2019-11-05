(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title center text-center>\n      REGISTER\n    </ion-title>\n    <ion-button slot=\"start\" href=\"/login\" class=\"button.button-back\" color=\"white\">\n      <ion-icon name=\"arrow-back\" color=\"primary\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form center text-center class=\"title\">\n    <h2>CMU IT Account</h2>\n  </form>\n  <form>\n    <ion-list>\n      <ion-label position=\"floating\">Email Address</ion-label>\n      <div class=\"input-group input-group-lg\">\n        <ion-item>\n          <ion-input placeholder=\"Email Address\" [(ngModel)]=\"emailAddress\" name=\"email\"></ion-input>\n          <ion-note color=\"dark\" slot=\"end\">@cmu.ac.th</ion-note>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-list>\n      <ion-label position=\"floating\">Student ID</ion-label>\n      <div class=\"input-group input-group-lg\">\n        <ion-item>\n          <ion-input placeholder=\"Student ID\" [(ngModel)]=\"studentId\" name=\"studentId\"></ion-input>\n        </ion-item>\n      </div>\n    </ion-list>\n\n    <ion-list>\n      <ion-label position=\"floating\">Password</ion-label>\n      <div class=\"input-group input-group-lg\">\n        <ion-item>\n          <ion-input placeholder=\"Password\" type=\"{{type}}\" [(ngModel)]=\"password\" name=\"pw\"></ion-input>\n          <button *ngIf=\"!showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n            <ion-icon slot=\"end\" name=\"eye\" style=\"font-size:20px;\"></ion-icon>\n          </button>\n          <button *ngIf=\"showPass\" ion-button clear color=\"dark\" type=\"button\" item-right (click)=\"showPassword()\">\n            <ion-icon slot=\"end\" name=\"eye-off\" style=\"font-size:20px;\"></ion-icon>\n          </button>\n        </ion-item>\n      </div>\n    </ion-list>\n    <ion-button size=\"default\" expand=\"block\" class=\"button-register\" color=\"white\" (click)=\"register()\">Regiter\n    </ion-button>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-register {\n  background-color: white;\n  color: #835301;\n  border: 2px solid #835301;\n  border-radius: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL1Nlbmlvci1Qcm9qZWN0L3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXJlZ2lzdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjODM1MzAxO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MzUzMDE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, alertController, afstore, router, user) {
        this.afAuth = afAuth;
        this.alertController = alertController;
        this.afstore = afstore;
        this.router = router;
        this.user = user;
        this.emailAddress = "";
        this.password = "";
        this.type = 'password';
        this.showPass = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, emailAddress, password, studentId, res, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, emailAddress = _a.emailAddress, password = _a.password, studentId = _a.studentId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(emailAddress + '@cmu.ac.th', password)];
                    case 2:
                        res = _b.sent();
                        this.afstore.doc("Students/" + res.user.uid).set({
                            studentId: studentId
                        });
                        this.user.setUser({
                            emailAddress: emailAddress,
                            uid: res.user.uid,
                        });
                        this.showAlert("Successful!", "Register Successful!");
                        this.router.navigate(['/login']);
                        return [2 /*return*/, console.log("Successful!")];
                    case 3:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.showAlert = function (title, content) {
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
    RegisterPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map