import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, emailAddress, password, res, err_1;
            return tslib_1.__generator(this, function (_b) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
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
    StaffLoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-staff-login',
            templateUrl: './staff-login.page.html',
            styleUrls: ['./staff-login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            AlertController,
            Router])
    ], StaffLoginPage);
    return StaffLoginPage;
}());
export { StaffLoginPage };
//# sourceMappingURL=staff-login.page.js.map