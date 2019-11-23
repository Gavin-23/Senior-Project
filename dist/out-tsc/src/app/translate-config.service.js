import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var TranslateConfigService = /** @class */ (function () {
    function TranslateConfigService(translate) {
        this.translate = translate;
    }
    TranslateConfigService.prototype.getDefaultLanguage = function () {
        var language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        return language;
    };
    TranslateConfigService.prototype.setLanguage = function (setLang) {
        this.translate.use(setLang);
    };
    TranslateConfigService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [TranslateService])
    ], TranslateConfigService);
    return TranslateConfigService;
}());
export { TranslateConfigService };
//# sourceMappingURL=translate-config.service.js.map