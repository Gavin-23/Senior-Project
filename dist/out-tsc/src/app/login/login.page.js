import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../itsc/api.service';
var LoginPage = /** @class */ (function () {
    // selectedLanguage:string;
    // constructor(private translateConfigService: TranslateConfigService){
    //   this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    // }
    // languageChanged(){
    //   this.translateConfigService.setLanguage(this.selectedLanguage);
    // }
    function LoginPage(itsc) {
        this.itsc = itsc;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.studentLogin = function () {
        this.itsc.signIn();
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map