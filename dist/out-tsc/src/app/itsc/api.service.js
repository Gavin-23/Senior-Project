import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var ApiService = /** @class */ (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
    }
    ApiService.prototype.signIn = function () {
        this.router.navigate(['/sign-in']);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map