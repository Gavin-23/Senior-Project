import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, emailAddress, password, studentId, res, error_1;
            return tslib_1.__generator(this, function (_b) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
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
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            AlertController,
            AngularFirestore,
            Router,
            UserService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map